# Comprovacions de la versió revisada

Data: 8 d'octubre de 2026.

## Verificació efectuada

- Sintaxi dels tres fitxers JavaScript validada amb Node.
- Renderització amb Chromium dels mateixos fitxers HTML, CSS i JavaScript del paquet, incorporats en línia en una pàgina de prova. L'entorn bloqueja la navegació directa a URL locals, així que no s'afirma haver validat un desplegament real.
- Català i anglès: textos, navegació i contingut sense valors `undefined`.
- Bibliografia: 4 treballs seleccionats, 12 en total, filtres, cerca i estat sense resultats.
- Botons de copiar: retorn d'estat visible. No s'ha comprovat el contingut real del porta-retalls fora de l'entorn de prova.
- CV en tots dos idiomes i ocultació dels controls en mode d'impressió.
- Amplades de 320, 375, 390, 540, 670, 740, 820, 1024 i 1440 píxels: sense desbordament horitzontal.
- Menú de mòbil i tancament amb Escape.
- Cap excepció JavaScript no capturada.
- URL de la fotografia i avís alternatiu quan no hi ha connexió.
- Script de fotografia: descàrrega simulada d'un JPEG de prova, actualització de rutes, còpia de seguretat, protecció contra repeticions i rebuig d'una resposta HTML. El JPEG de prova no forma part de la web.

## Límits

No s'ha publicat la web ni modificat cap repositori. No s'ha pogut descarregar la fotografia real al contenidor: la web la carrega des de la URL institucional. La imatge s'ha pogut visualitzar amb l'eina web a la font original. No s'ha comprovat la càrrega externa en un navegador d'usuari ni una descàrrega real amb l'script opcional.

No s'ha revalidat tota la bibliografia d'origen en aquesta revisió de disseny. No s'ha confirmat una llicència específica de reutilització de la foto. No s'ha generat ni reconstruït cap retrat.

No s'ha creat un PDF nou. El CV conserva l'opció d'impressió del navegador.

## Registre automatitzat

- CA rendering: 4 selected papers, correct portrait source and offline fallback; decorative network and slogan removed.
- All 12 papers, all topic filters, search and empty-state: passed. Copy button produces status feedback.
- English rendering, email-copy feedback and expandable conference list: passed.
- CV renders in both languages; all 12 papers present and print controls hidden: passed.
- Widths 320-1440 px: no horizontal overflow. Mobile menu and Escape: passed.
- No uncaught JavaScript exceptions. Tests use inline embedding of the exact package assets because direct local navigation is blocked in this environment.
