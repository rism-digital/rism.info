---
title: Dataservice
layout: community
lang: de
permalink: /community/data-services.html
---

# Dataservice

## Übersicht

{% include image file="/images/community/data-services/grigny-bach.jpg" pos="left" %}

RISM ist ein weltweites Projekt zur Dokumentation und Beschreibung musikalischer Quellen. Gegenwärtig sind über eine Million Titel in ausführlicher Form beschrieben und über [http://opac.rism.info](http://opac.rism.info){:target="_blank"} suchbar.

RISM bietet interessierten Bibliotheken und Institutionen darüber hinaus zahlreiche zusätzliche Möglichkeiten zur Datenauswertung und weiteren Verarbeitung an. 

## OpenData und Linked OpenData

{% include image file="/images/community/data-services/opendata.png" pos="right" %}

Nahezu alle Titelnachweise stehen als [OpenData](http://opac.rism.info/index.php?id=8&id=8&L=1){:target="_blank"} in einer freien Lizenz unter opac.rism.info im Datenformat MarcXML zum Download bereit. Neben Musikquellen finden sich dort ebenfalls Normdaten zu Personen, Körperschaften sowie zu Werkverzeichnissen und verwendeten Literatur. Außerdem werden die Titelnachweise ebenfalls in Form von [LinkedOpenData](http://en.wikipedia.org/wiki/Linked_data){:target="_blank"} als RDF/XML zur freien Verwendung angeboten.

## SRU-Schnittstellen

{% include image file="/images/community/data-services/zebra.jpg" pos="left" %}

Sämtliche Einträge liegen im MarcXML-Format vor und sind gemäß den Vorgaben des Marc-Standards beschrieben. So können die Daten über die OpenData-Schnittstelle hinaus auch über verschiedene [SRU-Server](http://www.loc.gov/standards/sru/){:target="_blank"} sowohl [direkt über URL aufgerufen](http://muscat.rism.info/sru){:target="_blank"} als auch für Data Harvesting-Zwecke geladen werden. Dabei werden die Informationen in tagesaktueller Form präsentiert. Indiziert werden die Titel über die freie Suchmaschine [Zebra](http://www.indexdata.com/zebra){:target="_blank"} von Indexdata.com.

So ist neben der Suche nach Komponisten auch eine Volltextsuche sowie definierte Suchen nach Bibliotheken und weiteren Kriterien möglich. Darüber hinaus stehen auch SRU-Schnittstellen für Personen und Bibliotheken zur Verfügung.

![SRU](/images/community/data-services/SRU-example.jpg)

## Marc21 Support

[Machine-Readable Cataloging (MARC)](http://www.loc.gov/marc/){:target="_blank"} ist ein im Bibliothekswesen verwendetes standardisiertes Datenformat. Neben dem Binärformat existiert ebenfalls eine XML-Variante für die maschinelle Verarbeitung.

Das Katalogisierungsformat wurde unter Federführung der Library of Congress in den 1960er-Jahren entwickelt und liefert das Protokoll, durch das Computer bibliografische Informationen miteinander austauschen können. Seine Datenelemente bilden die Grundlage für die meisten heute benutzten Bibliothekskataloge. Das RISM nutzt MarcXML sowohl im Bereich von OpenData als auch über die SRU-Schnittstellen für sämtliche Aspekte der Datenverarbeitung - eine Garantie für maximale Portabilität und Flexibilität. 

![LOC](/images/community/data-services/loc.jpg)

## GND-Beacon

{% include image file="/images/community/data-services/wikipedia.png" pos="right" %}

[BEACON](http://meta.wikimedia.org/wiki/BEACON){:target="_blank"} ist ein sehr einfaches Dateiformat, mit dem Links auf Webseiten angegeben werden können, die Inhalte zu bestimmten Normdaten bieten. Derzeit wird das Format vor allem für Personen genutzt, die mittels ihrer GND-Nummer (früher PND) identifiziert werden, ist aber grundsätzlich auch für weitere Normdaten geeignet.

RISM publiziert im Internet ein frei verfügbares GND-Beacon für die Nutzung von Personendaten. Eine Beispielintegration findet sich auf den Seiten der [Neuen Deutschen Biographie](http://www.deutsche-biographie.de/index.html){:target="_blank"}.

Ein jeweils aktuelle RISM GND-Beacon befindet sich unter [http://dl.rism.info/pnd.txt](http://www.loc.gov/marc/){:target="_blank"}

![NDB](/images/community/data-services/NDB.jpg)

## Datensichten

Über Abruf des SRU-Datenservice des RISM ist es ebenfalls möglich, eigene Webkataloge und OPACs über den Datenbestand des RISM zu realisieren. In diesen Fällen dient die SRU-Schnittstelle lediglich als Datenbackend. In Kooperation mit dem RISM sind so auch individuelle Lösungen realisierbar. 

Dokumentation und Beispiele zur SRU-Schnittstelle finden Sie [hier](https://github.com/rism-ch/muscat/wiki/SRU){:target="_blank"}.

## Datenaustausch

Sofern Ihre Daten in strukturierter Form vorliegen, können diese als Service des RISM in MarcXML umgewandelt und in den Gesamtpool eingespielt werden. Bisher wurden Konvertierungen von MS Access-Datenbanken, MS Word-Dokumenten und Reintext-Dateien umgesetzt. Ein Konverter für Unimarc ist in Vorbereitung. Die Konvertierungsprozesse werden über die eigene RISMToolkit-Anwendung transparent webbasiert präsentiert.

## Printmedien

{% include image file="/images/community/data-services/katalog-friedemann.jpg" pos="right" %}

Aus den RISM-Daten lassen sich darüber hinaus hochwertige PDF-Druckvorlagen erstellen, die für die Druckvorstufe geeignet sind. Hierfür werden zwei Lösungsmöglichkeiten angeboten: zum einen eine schnelle, interaktive, auf SRU-Schnittstellen ansetzende Kataloggenerierung über XSLT mit bzw. alternativ ohne Musikincipits. Auf der anderen Seite eine hochwertige Katalogerstellung, die zusätzlich zahlreiche Sortierungsmöglichkeiten und umfangreiche Register bereitstellen und in Kooperation mit dem RISM erarbeitet wird. 

Photo Credits:

1. Orgelstück von Nicolas de Grigny, "1er Kyrie en taille," in der Hand von J. S. Bach, [D-F Mus Hs 1538](http://opac.rism.info/search?documentid=455002348){:target="_blank"}
2. Open Data Logo: eigene Anfertigung
3. Zebra via [indexdata.com](http://www.indexdata.com/zebra){:target="_blank"}
4. SRU file: eigene Anfertigung
5. MARC logo: Library of Congress, ["MARC Standards"](http://www.loc.gov/marc/){:target="_blank"}
6. Hauptlesesaal, Library of Congress, Washington, DC, von Carol M. Highsmith, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:LOC_Main_Reading_Room_Highsmith.jpg){:target="_blank"}
7. Wikipedia logo via [wikipedia.org](http://www.wikipedia.org/){:target="_blank"}
8. [Neue Deutsche Biographie](http://www.deutsche-biographie.de/index.html){:target="_blank"}
9. Catalog PDF: eigene Anfertigung