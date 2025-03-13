---
layout: post
title: "RISM Online Winter-Update 2025"
date: 2025-03-13
lang: de
post: true
category: rism_digital_center
image: "/images/news/2025-02/rism-online-query-builder.jpg"
email: 'andrew.hankinson@rism.digital'
author: 'Andrew Hankinson'
---

Das Winter-Update 2025 von RISM Online bringt eine Reihe neuer Funktionen, Verbesserungen und Fehlerbehebungen. Das Update wurde seit August 2024 entwickelt und wir hoffen, dass Sie die Änderungen nützlich finden.

## Einbindung der Cantus-Datenbank

RISM Online stellt die Ergebnisse der [Cantus-Datenbank](https://cantusdatabase.org){:blank} zur Verfügung. Diese Datenbank ist eine unverzichtbare Ressource für Gesangsforscher, und die Aufnahme ihrer Quellendatensätze in RISM Online wird uns helfen, interessierte Benutzer auf die umfangreiche wissenschaftliche Quellenforschung in der Cantus-Datenbank aufmerksam zu machen.

Ein wichtiger Bestandteil dieser Integrationsarbeit war die Angleichung der Exemplardatensätze von Cantus und RISM. In RISM Online erscheinen nun auch die Cantus-Quelldatensätze bei der besitzenden Institution, was einen besseren Überblick über die Bibliotheksbestände unabhängig vom Katalogisierungsprojekt ermöglicht. (Gleiches gilt übrigens auch für DIAMM-Datensätze).

Die Ergebnisse einer [Suche nach „Antiphoner“](https://rism.online/search?q=Antiphoner&amp;mode=sources&amp;page=1&amp;rows=20){:blank} in RISM Online zeigen, wie die Cantus-Datenbank integriert ist.

Siehe den Datensatz für [CDN-Mlr, The Humanities and Social Sciences Library at McGill University](https://rism.online/institutions/30006518/sources){:blank} zur Einbindung der besitzenden Institution.

## Query Builder und verbesserte Stichwortsuche

Das neue Update führt ein verbessertes Feld für die Stichwortsuche ein, mit dem Sie komplexere Abfragen erstellen können.

Mit der neuen Funktionalität können Sie eine Reihe von Suchoperatoren (`AND`, `OR`, `NOT`), Platzhalter und Term Boosting verwenden, um das Gesuchte zu finden. Außerdem können eine Reihe von Feldern direkt abgefragt werden.

Der Query Builder bietet eine anklickbare Schnittstelle für die Erstellung dieser Abfragen, um den Benutzern zu helfen, sich mit der neuen Abfragesyntax vertraut zu machen. Sobald Sie sich mit der Syntax vertraut gemacht haben, können Sie Abfragen direkt schreiben.

Um nach Quellen zu suchen, die entweder "flower" (Blume) oder "plant" (Pflanze) als Wasserzeichen enthalten und in denen Mozart als Urheber angegeben ist, würde die Abfrage wie folgt lauten:

  `(watermark:flower OR watermark:plant) AND creator:Mozart` [\[Probieren Sie es aus\]](https://rism.online/search?q=(watermark:flower%20OR%20watermark:plant)%20AND%20creator:Mozart){:blank}

Oder um die Quellen zu finden, die einen Anker im Wasserzeichen haben, einen Schöpfer „Mozart“, aber das Wort „Breitkopf“ nirgendwo im Datensatz erscheint, könnten Sie Folgendes versuchen:

  `watermark:anchor creator:Mozart -Breitkopf`  [\[Probieren Sie es aus\]](https://rism.online/search?q=watermark:anchor%20creator:Mozart%20-Breitkopf){:blank}

Während Sie das Feld für die Stichwortsuche ausfüllen, wird Ihre Suchanfrage ständig überprüft und Sie erhalten eine Rückmeldung. Dazu gehören eine Vorschau auf die Anzahl der gefundenen Ergebnisse und ein Statussymbol, das Ihnen anzeigt, ob Ihre Abfrage gültig ist oder nicht.

Weitere Informationen zu dieser neuen Funktion finden Sie in der [Query Builder Dokumentation](https://rism.online/docs/query-builder/introduction/).

Einige weitere Beispiele:

 - `creator:Palestrina NOT siglum:V-CVbav` [\[Probieren Sie es aus\]](https://rism.online/search?q=creator:Palestrina%20NOT%20siglum:V-CVbav){:blank} Quellen finden, deren Autor Palestrina ist, die sich aber nicht in der Vatikanischen Bibliothek befinden
 - `title:Erlkönig -Schubert` [\[Probieren Sie es aus\]](https://rism.online/search?q=title:Erlkönig%20-Schubert){:blank} Suche nach Quellen mit dem Titel „Erlkönig“, aber ohne den Begriff „Schubert“.
 - `creator:Purcell AND (siglum:F-* OR  siglum:I-*)` [\[Probieren Sie es aus\]](https://rism.online/search?q=creator:Purcell%20AND%20(siglum:F-*%20OR%20siglum:I-*)){:blank} Suche nach Quellen von Purcell, die sich entweder in Frankreich oder in Italien befinden
 - `series:P? 2640` [\[Probieren Sie es aus\]](https://rism.online/search?q=series:P?%202640){:blank} Suche nach Quellen, die mit „P 2640“ aun den alten RISM-Serien (z.B. A/I) übereinstimmen, aber auch die Alternative „PP 2640“ mit einem einstelligen Platzhalter zulassen.

## Mobile Benutzeroberflächen

Für den Zugriff auf RISM Online mit einem Mobiltelefon wurde die Benutzeroberfläche für die Darstellung auf kleineren Bildschirmen optimiert, um die Recherche in RISM Online unterwegs zu erleichtern. Facetten und andere erweiterte Suchwerkzeuge wurden in dieser Version nicht in die mobile Oberfläche integriert, die Inhalte wurden jedoch an die kleineren Bildschirme angepasst.

(Nebenbei wurde auch die Benutzeroberfläche für nicht-mobile Geräte verbessert, so dass sie auf einer Vielzahl von Bildschirmen besser angezeigt wird).

## Externe Werknormdaten

RISM hat mit externen Werknormdaten zusammengearbeitet, um Quellen zu verknüpfen, die denselben Identifikator für musikalische Werke enthalten. Diese Identifikatoren werden nun in den Quelleneinträgen angezeigt, und eine Liste aller bekannten Werkidentifikatoren für eine bestimmte Person wird im Personendatensatz angezeigt.

Zum Beispiel zeigt der Datensatz für [Felix Mendelssohn Bartholdy](https://rism.online/people/88790) jetzt eine Tabelle der externen Normdaten für seine Werke in der Gemeinsamen Normdatei (GND). Die Tabelle enthält Links zu allen Quelldatensätzen, die mit derselben Autorität in RISM Online verknüpft sind, sowie einen Link zur Anzeige des Datensatzes in den externen Werknormdaten.

## CSV-Datensatz-Download

Suchergebnisse mit weniger als 5.000 Datensätzen können jetzt als CSV-Datei (Comma Separated Value) heruntergeladen werden. Dies ist für alle Sucharten möglich: Quellen, Personen, Institutionen und Incipits. Die CSV-Ergebnisse enthalten einen Link zum Datensatz in RISM Online und eine Option, einen Link zur ursprünglichen Suchanfrage hinzuzufügen, die zu diesen Ergebnissen geführt hat.

## Krimskrams

Hier eine Liste aller kleineren Verbesserungen, die keinen eigenen Abschnitt verdienen, aber dennoch erwähnenswert sind.

* Direkter Link zu MARCXML-Datensätzen. MARCXML ist bereits seit einiger Zeit in RISM Online verfügbar, aber jetzt wird in der Fußzeile jedes Datensatzes ein direkter Link zu MARCXML angezeigt.
* Optimierte SVG-Bilder. Die SVG-Bilder wurden optimiert, um die Gesamtladezeit der Seite zu verkürzen.
* HTTP/3 aktiviert. Die neueste Version des HTTP-Standards ermöglicht eine bessere Nutzung der Netzwerkressourcen und verbessert die Geschwindigkeit und Reaktionsfähigkeit von RISM Online.
* Umstellung auf haproxy als Load Balancer. Intern verwenden wir jetzt Haproxy als Load Balancer für unsere API-Dienste.
* Zeitstempel auf der "Über uns"-Seite hinzugefügt, um die letzte Aktualisierung der DIAMM-, Cantus- und RISM-Indizes anzuzeigen.
* Fehlerbehebung bei dem mehrere Doppelpunkte zum Absturz von Abfragen führten.
* Änderung der Koordinatennsicht, so dass sie der erwarteten Reihenfolge von Breitengrad und Längengrad entspricht.
* Einführung eines neuen Lucene Query Syntax Parsers zur Validierung der neuen Abfragen und zur Bereitstellung von Feedback.
* Verbesserte Erkennung von Daten im Indexer.
* Kontinuierliche Verbesserungen und Aktualisierungen der Übersetzungen.

## Über RISM Online

[RISM Online](https://rism.online){:blank} ist eine Suchoberfläche für das Répertoire International des Sources Musicales. Wir bedienen jeden Monat über 30.000 Benutzer und helfen Menschen rund um den Globus, die Musik zu finden, die sie aus den Bibliotheken weltweit benötigen. Unsere Datensätze werden täglich mit den neuesten Ergänzungen und Aktualisierungen der RISM-Katalogisierer aktualisiert. Außerdem indexieren und integrieren wir Einträge aus hochwertigen externen Datenbanken wie dem Digital Image Archive of Medieval Music und der Cantus Database.

Kommentare und Feedback sind immer willkommen unter [feedback@rism.online](mailto:feedback@rism.online){:blank}.
