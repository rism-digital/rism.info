---
title: Sigla Help
layout: community
lang: de
permalink: /community/sigla/help.html
---

# Hilfe zur Benutzung der RISM-Bibliothekssigel-Suche

## Einfache Suche

Bei der Suche wird sowohl Trunkierung als auch Phrasensuche unterstützt. Bei der Suchlogik ist die AND-Suche voreingestellt, d.h. 'Kloster Austria' findet alle Sigel, bei denen sowohl der Begriff Kloster als auch der Begriff Austria vorkommt.

Dies kann durch die Kombination der Suchbegriffe mit großgeschriebenem "OR" umgestellt werden: 'Kloster OR Austria' findet entsprechend alle Sigel, bei denen beide Begriffe vorkommen.

Sortiert wird nach Relevanz.

## Felder

Die voreingestellte Suche über 'All fields' ist eine Volltextsuche über den gesamten Sigelbestand. Nur mit dieser Option ist die kombinierte Suche möglich (s.u.). 

Es stehen im Optionsmenü die Felder Name, Library Sigla, City und Country zur Verfügung. Begriffe, die mit einer solchen Option gekoppelt werden, gehen nur über das ausgewählte Feld.

Insgesamt sind folgende Felder indiziert:

* city: Stadt bzw. Ort
* name: Ansetzungsform des Sigels
* sigla: Sigel
* adress: Adresse
* country: Land (gemäß ISO-3166-2)
* url: Link
* alias: Alternative Ansetzungsform
* reference: Siehe auch
* series: Abweichende Sigel in den RISM-Publikationen A/I, B usw.
* now_in: Bestandsbesitzendes Sigel
* note: Bemerkungen
* countno: Anzahl der Titel im RISM-Musikhandschriften Katalog
* geo: Geodaten zum Sigel (Beta-Status)
* summary: Zusammenfassung des Bestandes
* status: in Bearbeitung (ongoing)

## Kombinierte Suche

Bei der kombinierten Suche können beliebige Felder durch 'AND' oder 'OR' bzw. deren negativem Wert 'AND NOT' oder 'OR NOT' miteinander kombiniert werden. Vorraussetzung ist immer die Suche unter 'All fields'.

Beispiele:

* Die Suche 'countno:[10 TO 100] AND country:Germany' findet alle Sigel aus Deutschland mit einer Titelanzahl zwischen 10 und 100
* Die Suche 'name:Archiv AND country:Austria' findet alle Sigel mit dem Begriff 'Archiv in der Ansetzung, die in Österreich beheimatet sind
* Die Suche 'city:London AND NOT country:"United Kingdom"' findet alle Sigel aus einer Stadt London außerhalb des Vereinigten Königreiches (hier ist die Phrasensuche wichtig.)

Hinweis: In diesem Beispiel werden auch Sigel gefunden, bei denen kein Land angegeben wurde.

## Tips

Vorrausgesetzt, die Suche geht über sämtliche Felder, gibt es u.a. zusätzlich folgende Möglichkeiten:

* Die Suche nach **\*** findet sämtliche Sigel.
* Die Suche nach **\* AND NOT country:\*** findet alle Sigel ohne Landangabe.
* Entsprechend findet **\* AND countno:\* AND country:France** alle Sigel mit Musikhandschriften im Handschriften-Katalog aus Frankreich.
* Es ist auch eine Fuzzy-Suche möglich: **name:university~** findet alle Sigel mit Wörtern ähnlich zu 'University' in der Ansetzungsform.