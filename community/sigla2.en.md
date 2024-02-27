---
title: Sigla2
layout: community
lang: en
permalink: /community/sigla2.html
redirect_from: /en/sigla2
old_url: http://www.rism.info/sigla2.html
---

# Online Directory of RISM Library Sigla

RISM assigns an abbreviation, called a library siglum, to institutions worldwide that hold musical sources or material related to the research of music. As of January 2024, there are about 8,800 sigla in RISM. Search the RISM sigla below. A gold star appears next to the institutions that have sources in the [RISM Catalog of Musical Sources](https://opac.rism.info/index.php?id=4){:blank}.

If you are looking for a siglum that is not yet in the directory, [please contact us](mailto:contact@rism.info) and we will create a new one.

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