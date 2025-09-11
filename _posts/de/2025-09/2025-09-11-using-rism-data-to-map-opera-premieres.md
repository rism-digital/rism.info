---
layout: post
title: "Verwendung von RISM-Daten zur Kartierung von Opernpremieren"
date: 2025-09-11
lang: de
post: true
category: in_the_news
image: "/images/news/2025-09/using-rism-map-opera-premieres_website.jpg"
email: 'matthew.lorenzon@gmail.com'
author: 'Matthew Lorenzon'
---

_Der folgende Beitrag ist ein Gastbeitrag von Matthew Lorenzon (Digital Marketing Manager, Musica Viva Australia):_

Ich habe eine [animierte Karte mit Opernpremieren](https://www.youtube.com/watch?v=Kcf_H5wx1jc){:blank} aus der Datenbank Répertoire International des Sources Musicales (RISM) erstellt. Hier ist die Anleitung dazu.

Das Wachstum von Big Data in den letzten Jahrzehnten hat eine Welle von professionellen und amateurhaften Content-Erstellern hervorgebracht. Der Subreddit [r/dataisbeautiful](https://www.reddit.com/r/dataisbeautiful){:blank} hat über 22 Millionen Abonnenten, die sich für Statistiken begeistern, die in einer beeindruckenden Vielfalt von Diagrammen, Karten und Animationen präsentiert werden. Künstliche Intelligenz (KI) bietet die Möglichkeit, diesen Bereich durch die Interpretation unübersichtlicher Daten weiter zu verbessern. Ich beschloss, mich an einer eigenen Animation zu versuchen, um einerseits meine Promotion in Musikwissenschaft zu nutzen und andererseits meine beruflichen Fähigkeiten in der Videoproduktion weiterzuentwickeln.

Zunächst brauchte ich jedoch Daten. In der Musikwissenschaft gab es einen eigenen Big-Data-Moment, zu dem unter anderem das Projekt „Big Data History of Music” von Stephen Rose, Sandra Tuppen und Loukia Drosopoulou zählt. Leider litt der öffentliche Zugang zu diesem Projekt unter einem Hackerangriff auf die British Library im Jahr 2023.

Ich wandte mich an RISM, das seine [gesamte Datenbank zum Download](https://rism.digital/exports/index.html){:blank} bereitstellt. Um eine Partitur auf einer Karte zu visualisieren, benötigte ich zwei wichtige Informationen: Jahr und Ort. Schnell wurde klar, dass es eine Herausforderung sein würde, konsistente, maschinenlesbare Daten und Orte zu extrahieren. Der Datensatz hat sich über mehrere Jahrzehnte hinweg entwickelt und ist ein Palimpsest verschiedener Datenverwaltungspraktiken. Selbst wenn Orte und Daten in einem speziellen Feld gespeichert sind, können die Namens- und Datierungskonventionen voneinander abweichen. Insbesondere bei Daten, die auf der Grundlage früherer gedruckter Kataloge importiert wurden, können alle relevanten Informationen im Titelfeld enthalten sein.

Das Jahr und das Datum werden verwendet, um ein bestimmtes Ereignis zuzuordnen. Welches soll ich also wählen? In der RISM-Datenbank sind Verweise auf eine Vielzahl von Ereignissen zu finden: Komposition, Abschrift, Aufführung, Schenkung oder sogar Aufnahme in das Archiv. Ebenso können sich die Orte darauf beziehen, wo das Dokument erstellt oder aufgeführt wurde, wo es sich derzeit oder früher befand oder wo sich der Standort eines Donators befindet.

Glücklicherweise gibt es einen Bereich, der relativ konsistente Daten und Orte für einen bestimmten Zweck bietet: die Uraufführung. Ich habe mich auf Opern und opernähnliche Genres (_Singspiele_, _tragédies lyriques_ usw.) konzentriert, da ich aufgrund der intensiven Forschung in diesem Bereich davon ausging, dort qualitativ hochwertige Daten zu finden. Opernpremieren geben auch einen starken Hinweis auf die musikalische Aktivität an einem Ort: Für eine neue Oper ist ein ausgeklügeltes Netzwerk aus Musikern, Kostümbildnern, Theaterpersonal, Zuschauern und Förderern erforderlich. Sie könnten somit als Indikator für alle Arten von wirtschaftlichen und sozialen Aktivitäten dienen.

Um die ersten Opern mit erhaltenen Quellen zu erfassen, habe ich die Daten auf den Zeitraum 1600–1799 beschränkt. Als Endjahr habe ich 1799 gewählt und den geografischen Bereich auf Europa beschränkt, um die Übersichtlichkeit zu erhöhen. 

Ich begann mit der Zeichenfolge MarcXML First Performance und verwendete einen Textfilter (regex), um zu sehen, was direkt geparst werden konnte. Ich suchte nach einer vierstelligen Jahreszahl neben Text, hoffentlich einer Stadt, unmittelbar nach dem Datum. Das ergab einen verdächtig hohen Ausgangspunkt von 28.875 Einträgen.

Nun musste ich zwischen relevanten Standortangaben und irrelevanten Texten unterscheiden. Ich habe die Daten mit KI verfeinert. Dazu habe ich die Texte der „First Performance“-Zeichenfolgen stapelweise mit einem großen Sprachmodell verarbeitet. Dieses ist so konzipiert, dass es das Jahr und den Ort der Aufführung als JSON-Daten zurückgibt. Ich habe spezielle Anweisungen für den Umgang mit Namen von Theatern oder irrelevanten Orten gegeben.

Ich habe die Geokoordinaten des Standorts mit GeoNames abgeglichen. Dabei handelt es sich um eine kostenlose und quelloffene Geolokalisierungsdatenbank. Zur Visualisierung der Daten habe ich mich für GeoLayers 3 entschieden, eine Erweiterung für die Motion-Graphics-Anwendung After Effects von Adobe, die ich schon lange lernen wollte. Ich habe quelloffene historische Weltkartenkoordinaten verwendet, die von [aourednick](https://github.com/aourednik/historical-basemaps){:blank} gepflegt werden.

Als Nachtrag habe ich eine bei der Kartografie-Community beliebte Datenebene hinzugefügt: historische Schlachten. Diese Daten sind über Wikidata leicht zugänglich. Wenn Opernproduktionen ein starkes, koordiniertes Netzwerk erfordern, gäbe es dann nicht weniger Opern in Regionen, die sich im Krieg befinden?

Die daraus resultierende Karte bestätigt dies. Während in Mitteleuropa der Dreißigjährige Krieg tobt, sind die ersten Anfänge der Oper in Norditalien zu erkennen. Mich beeindruckt auch, wie sehr sich Opernpremieren auf Machtzentren konzentrierten – unabhängig von der Größe des Staates. In Frankreich und England waren Opern fast ausschließlich auf die Hauptstädte und deren Umgebung beschränkt, während die Vielfalt der italienischen und mitteleuropäischen Staaten viel mehr Zentren für Opernaktivitäten bot.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A2WdjyKQ57A" frameborder="0" allowfullscreen></iframe>


Es gibt viel Raum für Verbesserungen. So enthält der Datensatz einige unwahrscheinlich hohe Zahlen. 457 Opernpremieren in Wien im Jahr 1786? Ich weiß, dass Wien eine Hochburg der Aktivität war, aber 457 Opernpremieren sind doch sehr unwahrscheinlich. Wahrscheinlich sind diese Zahlen das Ergebnis mehrfacher Einträge zu beliebten Opern, in diesem Fall zu _Le Nozze di Figaro_. Daher habe ich mich entschlossen, die Daten als Kreise unterschiedlicher Größe auf einer logarithmischen Skala darzustellen, um die relative Opernaktivität anstelle der absoluten Zahlen anzuzeigen.

KI-Modelle werden immer besser und die Verarbeitung langer Textfelder wird immer günstiger und zuverlässiger. Bereits jetzt würde eine Wiederholung dieses Prozesses eine genauere Karte zu geringeren Kosten liefern. Ich freue mich darauf, weitere Karten zu erstellen, wenn RISM im nächsten Jahr seine Standortdaten aktualisiert.
