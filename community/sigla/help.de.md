---
title: Sigla Help
layout: community
lang: de
permalink: /community/sigla/help.html
old_url: http://www.rism.info/de/rism-bibliothekssigel/hilfe.html
---

# Hilfe zur Benutzung der RISM-Bibliothekssigel-Suche

## Einführung

RISM Sigel werden verwendet, um auf Körperschaften zu verweisen, welche Musikquellen besitzen.

RISM Sigel bestehen aus Abkürzungen für das Land, für die Stadt sowie die Körperschaft selbst: 
bei **I-Rc** steht das **I** für Italien, **R** für Rom und das **c** für die Biblioteca Casanatense
bei **US-PHf** steht das **US** für United States, **PH** für Philadelphia und **f** für Free Library of Philadelphia.

Sobald Sie das gewünschte Land und die Stadt gefunden haben, können Sie im RISM Online-Katalog nach allen Quellen aus diesem Ort suchen. Wählen Sie das Feld "Sigel". 

Verwenden Sie das Symbol * um zu trunkieren.

Beispiele: I-R* für alle Quellen aus Rom und US-PH* für alle Quellen in Philadelphia. I-* für alle Quellen in Italien und US-* für alle Quellen aus den Vereinigten Staaten.

## Grundlagen der Suche

1. Nach Ländern kann man unter dem Auswahlfeld in den Sprachen Englisch, Französisch, Deutsch und Italienisch suchen
2. Die Suche nach Städten und Namen verwendet die lokalen Ansetzungsformen
3. Suche nach US-Bundestaaten geht über die postalische Abkürzung im Feld "city" (WI, IL, etc.)

## Einfache Suche

Bei der Suche wird die Phrasensuche unterstützt. Bei der Suchlogik ist die AND-Suche voreingestellt, d.h. 'Archiv Austria' findet alle Sigel, bei denen sowohl der Begriff Archiv als auch der Begriff Austria vorkommt.

Dies kann durch die Kombination der Suchbegriffe mit großgeschriebenem "OR" umgestellt werden: 'Archiv OR Austria' findet entsprechend alle Sigel, bei denen beide Begriffe vorkommen. Sortiert wird nach Relevanz.

## Felder

Die voreingestellte Suche über **All** ist eine Volltextsuche über den gesamten Sigelbestand. Nur mit dieser Option ist die kombinierte Suche möglich (s.u.). 

Es stehen im Optionsmenü die Felder **Name**, **Library Sigla**, **City** und **Country** zur Verfügung. Begriffe, die mit einer solchen Option gekoppelt werden, gehen nur über das ausgewählte Feld. Unter anderem sind folgende Felder indiziert:
* City: Stadt bzw. Ort (einschließlich diakritischer Zeichen), US-Bundesstaaten können hier auch über das postalische Kürzel gesucht werden (WI, IL, etc.)
* Name: Der offizielle oder alternative Name der Institution in der Landessprache
* Sigla: Sigel (Muss mit einem Großbuchstaben beginnen)
* Country: Land, Suche in den Sprachen Englisch, Französisch, Deutsch und Italienisch möglich

## Kombinierte Suche

Bei der kombinierten Suche können beliebige Felder durch 'AND' oder 'OR' kombiniert werden. Voraussetzung ist immer die Suche unter **All**.
* name=
* sigla=
* city=
* country=

Beispiel:
* Die Suche **name=Bach AND country=USA** findet alle Sigel mit dem Begriff 'Bach' in der Ansetzung, die in den Vereinigten Staaten beheimatet sind.

## Tips

* Die Suche nach **\*** findet sämtliche Sigel.
* Klicken Sie in der Ergebnisliste auf eine beliebige Institution, um die vollständigen Details angezeigt zu bekommen: Adresse, URL und Link zu den Quellen im RISM-Katalog der Musikquellen.
* Ein goldener Stern erscheint neben den Institutionen, sofern Quellen im RISM-Katalog nachgewiesen sind.

## Eingesetzte Technologie

Die Suche verwendet den SRU-Server von muscat.rism.info. Die Index-Konfiguration ist unter [https://muscat.rism.info/sru/institutions](https://muscat.rism.info/sru/institutions) verfügbar.
