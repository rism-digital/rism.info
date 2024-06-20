---
title: Sigla
layout: community
lang: de
permalink: /community/sigla.html
old_url: http://www.rism.info/de/rism-bibliothekssigel.html
---

# Verzeichnis der RISM-Bibliothekssigel

RISM vergibt weltweit allen Institutionen, die musikalische Quellen oder Materialien zur Musikforschung besitzen, eine Abkürzung - das sogenannte Bibliothekssigel. Mit Stand vom Januar 2024 gibt es etwa 8.800 Bibliothekssigel in RISM.

Wenn Sie ein Sigel suchen, das noch nicht im Verzeichnis enthalten ist, [kontaktieren Sie uns](mailto:contact@rism.info) bitte und wir werden ein neues erstellen.

Hilfe zur Benutzung der RISM-Bibliothekssigel-Suche finden Sie auf der [Hilfe-Seite](/community/sigla/help.html).


<script src="/javascript/sigla2.js"></script>
<style>
    body {
        padding: 0;
        margin: 0;
    }
</style>
<script>
    const detectLanguage = () =>
    {
        return navigator.language.split("-")[0] || "en";
    }

    document.addEventListener("DOMContentLoaded", () =>
    {
        let app = Elm.Main.init({
            node: document.getElementById('sigla'),
            flags: {
                language: detectLanguage()
            }
        });
    });
</script>
<div id="sigla"></div>
