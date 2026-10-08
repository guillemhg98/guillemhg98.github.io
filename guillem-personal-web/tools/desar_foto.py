#!/usr/bin/env python3
"""Save the linked portrait locally. Python 3, standard library only.

Run from any directory: python tools/desar_foto.py
This helper updates only local files. It does not publish to GitHub.
"""
from __future__ import annotations
import json
import re
import shutil
import sys
import urllib.error
import urllib.request
from pathlib import Path

MAX_SIZE = 8 * 1024 * 1024
ROOT = Path(__file__).resolve().parents[1]


def extension(data: bytes) -> str:
    """Accept only common raster image signatures, not HTML responses."""
    if data.startswith(b'\xff\xd8\xff'):
        return '.jpg'
    if data.startswith(b'\x89PNG\r\n\x1a\n'):
        return '.png'
    if data.startswith(b'RIFF') and data[8:12] == b'WEBP':
        return '.webp'
    raise ValueError('The response is not a supported JPEG, PNG or WebP image.')


def save_photo(root: Path = ROOT) -> Path:
    content_file = root / 'js' / 'content.js'
    raw = content_file.read_text(encoding='utf-8')
    marker = 'window.SITE_CONTENT = '
    prefix, separator, body = raw.partition(marker)
    if not separator:
        raise ValueError('Could not find SITE_CONTENT in js/content.js.')
    content = json.loads(body.strip().removesuffix(';'))
    photo_url = str(content['profile'].get('photo', ''))
    if not photo_url.startswith('https://'):
        raise ValueError('The photo is already local, or its address is not HTTPS. No changes made.')
    request = urllib.request.Request(photo_url, headers={'User-Agent': 'Mozilla/5.0 (personal-website-photo-download)'})
    with urllib.request.urlopen(request, timeout=30) as response:
        data = response.read(MAX_SIZE + 1)
    if len(data) > MAX_SIZE:
        raise ValueError('The image exceeds the 8 MB download limit.')
    relative = 'assets/retrat-cres' + extension(data)
    destination = root / relative
    backup = content_file.with_suffix('.js.bak')
    if destination.exists():
        raise FileExistsError(f'{relative} already exists. No changes made.')
    if backup.exists():
        raise FileExistsError('content.js.bak already exists. Keep or rename it before trying again.')
    new_content = dict(content)
    new_content['profile'] = dict(content['profile'], photo=relative)
    serialised = prefix + marker + json.dumps(new_content, ensure_ascii=False, indent=2) + ';\n'
    site_url = str(content['profile'].get('siteUrl', '')).rstrip('/') + '/'
    html_updates = {}
    for name in ('index.html', 'cv.html'):
        path = root / name
        if path.exists():
            original = path.read_text(encoding='utf-8')
            html_updates[path] = (original, re.sub(
                r'(<meta property="og:image" content=")[^"]*',
                lambda m: m.group(1) + site_url + relative, original))
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(content_file, backup)
    try:
        destination.write_bytes(data)
        content_file.write_text(serialised, encoding='utf-8')
        for path, (_, revised) in html_updates.items():
            path.write_text(revised, encoding='utf-8')
    except Exception:
        # Leave the local project as it was if any write fails.
        shutil.copy2(backup, content_file)
        for path, (original, _) in html_updates.items():
            path.write_text(original, encoding='utf-8')
        destination.unlink(missing_ok=True)
        raise
    return destination


def main() -> int:
    try:
        path = save_photo()
    except (OSError, ValueError, KeyError, urllib.error.URLError) as error:
        print(f'ERROR: {error}', file=sys.stderr)
        print('Check your connection. The website can still use its existing remote image URL.', file=sys.stderr)
        return 1
    print(f'Photo saved to: {path}')
    print('js/content.js and the image metadata now point to the local copy.')
    print('Nothing has been published. Review the photo permissions before uploading.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
