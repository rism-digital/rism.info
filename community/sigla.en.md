---
title: Sigla
layout: community
lang: en
permalink: /community/sigla.html
redirect_from: /en/sigla
old_url: http://www.rism.info/sigla.html
---

# Directory of RISM Library Sigla

RISM assigns an abbreviation, called a library siglum, to institutions worldwide that hold musical sources or material related to the research of music. As of January 2024, there are about 8,800 sigla in RISM. Search the RISM sigla below.

If an institution is missing from the directory, it has no RISM siglum yet, so [please contact us](mailto:contact@rism.info) and we will create it.  


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
