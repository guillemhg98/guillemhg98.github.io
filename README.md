# Web personal de Guillem Hernández Guillamet

Versió revisada: disseny sobri, presentació en primera persona i retrat del perfil públic del CRES / UPF. Català i anglès. HTML, CSS i JavaScript, sense instal·lar paquets ni compilar.

**Estat:** aquest ZIP no publica ni modifica res al teu GitHub. Conté la web preparada per editar i pujar.

## Obrir-la

Descomprimeix el ZIP. A VS Code, obre la carpeta `guillem-personal-web`. Obre `index.html` amb el navegador. La web funciona en local; la fotografia externa necessita connexió a internet.

Pots fer servir l'extensió Live Preview de Microsoft, opcional. Alternativament, amb Python instal·lat, executa a la carpeta de la web:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

A Windows també pots utilitzar `py` en lloc de `python`. Obre `http://localhost:8000`. Atura el servidor amb Ctrl+C. Aquest servidor és només per provar-la al teu ordinador.

## Què editar

| Fitxer | Què hi trobaràs |
| --- | --- |
| `js/content.js` | Nom, biografia, fotografia, correu, publicacions, projectes i trajectòria. |
| `css/styles.css` | Disseny, colors, tipografies del sistema, mides i espais. |
| `js/translations.js` | Títols, botons i textos d'interfície en català i anglès. |
| `js/app.js` | Estructura i funcionalitat. No cal editar-lo per canviar la biografia. |
| `index.html` | Metadades i entrada de la web. |
| `cv.html` | CV amb impressió des del navegador. Utilitza el mateix contingut. |

Els textos tenen una versió `ca` i una `en`. Mantén les cometes i les comes; desa i actualitza el navegador. Els noms i els textos normals es poden escriure amb accents.

Les publicacions es mantenen manualment. `featured: true` les inclou al filtre inicial; `Totes` mostra les 12 de la selecció. Cercar un terme activa la cerca sobre totes les entrades. La bibliografia de Google Scholar no es descarrega automàticament.

## La fotografia

A la portada hi ha el retrat que apareix al perfil públic CRES / UPF. No és un retrat generat ni retocat amb IA. Es mostra la imatge original sense filtres, amb un enllaç al perfil d'origen.

**En aquest paquet es carrega des de l'adreça de la UPF; no s'ha pogut incloure una còpia binària local.** Si no tens internet o la font deixa d'estar disponible, es mostra un avís i un enllaç al perfil. No s'hi substitueix cap altra persona.

Per deixar-la guardada dins de la web i no dependre de la UPF, executa al teu ordinador, amb internet:

```bash
python tools/desar_foto.py
```

O a Windows:

```powershell
py tools/desar_foto.py
```

L'script descarrega la foto, comprova que sigui una imatge, la desa a `assets/` i actualitza `profile.photo` a `js/content.js`. També actualitza la metadada de la imatge. Fa una còpia de seguretat del fitxer de contingut a `content.js.bak`. No publica ni puja cap fitxer. Per seguretat, no sobreescriu cap imatge que ja tingui el mateix nom. El nom de la persona i la resta de contingut es conserven.

També pots desar manualment una foto pròpia a `assets/retrat.jpg` i canviar `photo` a `"assets/retrat.jpg"`. Si utilitzes una altra fotografia, canvia o elimina també `photoSource` i `photoCredit` per no atribuir-la erròniament al CRES.

La disponibilitat pública no confirma per si sola els permisos de reutilització. No s'ha pogut verificar una llicència específica de la fotografia: comprova que la puguis utilitzar abans de publicar. La procedència consta a `docs/FOTOGRAFIA.md`.

## Publicar-la per primera vegada

1. A GitHub, crea un repositori **públic** amb el nom exacte `guillemhg98.github.io`. Si ja existeix, no en creïs un altre: revisa abans què conté.
2. Puja **el contingut** de la carpeta descomprimida: `index.html` ha de quedar a l'arrel del repositori, no dins d'una altra carpeta. No pugis el ZIP.
3. A **Settings > Pages**, selecciona **Deploy from a branch**, branca **main** i carpeta **/(root)**. Desa-ho.
4. Comprova el desplegament a **Actions** i l'enllaç a **Settings > Pages**.

L'adreça prevista és `https://guillemhg98.github.io/`. No s'ha comprovat ni modificat l'estat actual del repositori en aquesta revisió.

## Substituir la versió anterior

Si ja tens una còpia clonada, fes Pull abans de treballar i una còpia de seguretat dels teus canvis. Copia-hi el contingut d'aquesta carpeta, **sense esborrar la carpeta `.git`**. Revisa les diferències a VS Code abans del commit. Si havies modificat `js/content.js`, incorpora les teves correccions a aquesta versió abans de substituir-lo.

Des de **Source Control**, prepara els fitxers, fes **Commit** i després **Push / Sync Changes**. Si Pages ja està activat, no cal tornar-lo a configurar. No utilitzis `push --force`.

Canvien especialment `css/styles.css`, `js/app.js`, `js/content.js`, `js/translations.js`, `index.html`, `cv.html` i la documentació.

## Abans de publicar

Revisa el correu de contacte, afiliacions, doctorat i bibliografia. Les fonts i els punts que necessiten revisió estan a `docs/FONTS_I_REVISIO.md`. Aquesta revisió conserva la selecció curricular anterior, amb textos més directes; no és una nova auditoria completa del currículum.

Els apartats opcionals de castells i RUMIA continuen desactivats. `enabled: false` amaga un bloc, però **no esborra el text del codi públic**. Elimina qualsevol dada que no vulguis publicar.

La web no afegeix analítica, formularis ni galetes de seguiment. Guarda la preferència d'idioma a `localStorage`. Mentre la fotografia sigui externa, el navegador contacta amb la UPF per carregar-la. Els serveis d'allotjament i la UPF poden mantenir els seus propis registres tècnics.

## Documentació oficial

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Publicació des d'una branca: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- VS Code i Git: https://code.visualstudio.com/docs/sourcecontrol/overview

Revisió: 8 d'octubre de 2026.
