---
title: Sigla Help
layout: community
lang: de
permalink: /community/sigla/help.html
old_url: http://www.rism.info/de/rism-bibliothekssigel/hilfe.html
---

# Hilfe zur Benutzung der RISM-Bibliothekssigel-Suche

## Alle Felder (Standard)

Geben Sie einen oder mehrere Suchbegriffe ein, um alle Felder eines Körperschaftendatensatzes zu durchsuchen. Standardmäßig werden die Suchbegriffe kombiniert. Zum Beispiel findet **Archiv Österreich** alle Institutionen, die sowohl **Archiv** als auch **Österreich** enthalten.

Um nach Begriffen zu suchen, die in jedem Datensatz vorkommen können, verwenden Sie OR in Großbuchstaben: **Archiv OR Österreich** findet alle Institutionen, die entweder den einen oder den anderen Begriff enthalten.

Die Ergebnisse werden nach Relevanz sortiert, wobei die Anzahl der Bestände in der jeweiligen Institution gewichtet wird, so dass größere (und damit "prominentere") Institutionen unter sonst gleichen Bedingungen zuerst gereiht werden.

## Dedizierte Felder

Die Felder **Name**, **Bibliothekssigel**, **Stadt** und **Land** können im Dropdown-Menü für eine spezifischere Suche ausgewählt werden. Bitte beachten Sie folgende Hinweise:

* Name: Der offizielle oder alternative Name der Institution. Zum Beispiel liefert "National Library of Wales" einen Eintrag für ["Llyfrgell Genedlaethol Cymru"](https://rism.online/institutions/30001516){:blank}, den offiziellen walisischen Namen der Nationalbibliothek.
* Bibliothekssigel: Sigel werden automatisch erweitert, so dass auch Teiltreffer möglich sind. Zum Beispiel findet eine Suche nach "GB-O" GB-Ob, GB-Och, usw.
* Stadt: Suche über den Ortsnamen. US-Bundesstaaten können auch über das Postkürzel gesucht werden (WI, IL, etc.).
* Land: Suche nach dem Ländernamen. Wir bemühen uns, die Ländernamen in allen von RISM unterstützten Sprachen zu finden (Deutsch, Englisch, Französisch, Italienisch, Polnisch, Portugiesisch und Spanisch).
.
## Tipps

* Die Suche nach **\*** findet sämtliche Sigel.
* Klicken Sie in der Ergebnisliste auf eine beliebige Institution, um die vollständigen Angaben zu dieser Institution in [RISM Online](https://rism.online){:blank} anzuzeigen. Über den Reiter "Quellen" in RISM Online können Sie nach Quelldatensätzen suchen, die sich im Besitz dieser Institution befinden oder anderweitig mit ihr in Verbindung stehen.

## Verwendete Technologie

Die Sigel-Suche verwendet die öffentliche Sigla Search API von [RISM Online](https://rism.online){:blank}. Weitere Informationen zur Funktionsweise finden Sie in der [Dokumentation zu dieser API](https://rism.online/docs/api/sigla-api/){:blank}. Die Sigel-Suche funktioniert auch direkt in der [Institutionensuche](http://dev.rism.offline/?mode=institutions){:blank}.
