---
title: Dataservice
layout: community
lang: de
permalink: /community/data-services.html
old_url: http://www.rism.info/de/community/entwicklung/dataservice.html
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

Sofern Ihre Daten in strukturierter Form vorliegen, können diese als Service des RISM in MarcXML umgewandelt und in den Gesamtpool eingespielt werden. Bisher wurden Konvertierungen von MS Access-Datenbanken, MS Word-Dokumenten und Reintext-Dateien umgesetzt. Ein Konverter für Unimarc ist in Vorbereitung. Der Konvertierungsprozess ist einfach und webbasiert: Über unsere eigene RISM-Toolkit-Anwendung wird die importierte Datei in einer Testumgebung angezeigt, bevor sie in den größeren Datenpool aufgenommen wird.

## Katalogausdruck von RISM-Daten

{% include image file="/images/community/data-services/katalog-friedemann.jpg" pos="right" %}

### Einleitung
Der Ausdruck von Titeldaten aus dem [Bestand des RISM](https://opac.rism.info/index.php?id=4){:blank} ist ein häufig und gern genutzter Weg, um die in einer umfangreichen Datenbank mit 1.5 Millionen Titelnachweisen weniger unmittelbar wahrnehmbaren Daten auch physisch präsent zu haben. Zu den häufigsten Anwendungsfällen gehören daher die Publikation als gedruckter Katalog, der Beleg eines abgeschlossenen Katalogisierungsprojektes bei Finanzierungspartnern oder auch die Durchsicht der angelegten Titel zu Prüf- und Korrekturzwecken. Seit 1996 bietet die Zentralredaktion entsprechende Lösungen für kooperierende Projekte an, wobei sich die technische Umsetzung im Laufe der letzten Jahre natürlich umfassend geändert hat. Im Laufe der Jahre begleitete die Zentralredaktion so ca. 30 verschiedene Publikationsprojekte ganz unterschiedlichen Umfangs. Wurden dabei die ersten Kataloge noch über Makros mit Microsoft Word for Windows erstellt, gab es bereits mit Kallisto ein Wechsel zum Preprint mit dem Textprozessor-Programm LaTex. Nachdem seit 2017 eine SRU-Schnittstelle integrierter Bestandteil von Muscat ist, wurde anschließend eine Lösung entwickelt, bei welcher sowohl die Erstellungssoftware als auch die Schnittstellen frei zugänglich sind. Damit ist es gewährleistet, dass der Erstellung eines automatisierten, performanten und vor allem hochqualitativen Katalogausdrucks als PDF jedem Interessierten ohne zusätzliche Kosten möglich ist.


### Beschreibung
Die publizierten Titeldaten können über die [Muscat-SRU-Schnittstelle](https://github.com/rism-international/sru-downloader){:blank} tagesaktuell heruntergeladen werden. Hierbei ist zu beachten, dass die SRU-Schnittstelle mit einem Pager arbeitet, da jeder Abruf auf maximal 100 Treffer limitiert ist - ein üblicher Wert bei SRU-Schnittstellen. Über standardisierte SRU-Schnittstellen können Daten maschinell abgefragt und ausgetauscht werden, eine gute Einführung dazu findet sich auf der [Website der Library of Congress](http://www.loc.gov/standards/sru/){:blank}. Die Zentralredaktion stellt daher ein plattformübergreifendes Java-Tool zur Verfügung, welches die SRU-Abfrage als MarcXML-Datei herunterlädt. In einem zusätzlichen Bearbeitungsschritt werden diese Ursprungsdaten der SRU-Schnittstelle mit Hilfe eines XSLT-Prozessors in LaTex-Dateien umgewandelt, wobei anschließend auch die Register erstellt werden. Das Rahmenprogramm für diese Umwandlung ist eine Ruby-Anwendung, wodurch eine betriebssystem-unabhängige Installation möglich ist. Überhaupt wurde bei der Entwicklung insgesamt auf plattformübergreifende Module wert gelegt: auch alle anderen anderen Bausteinen des PDF-Katalogprogramms sind sowohl unter Windows als auch unter Linux gleichermaßen lauffähig.

Das Herzstück des PDF-Generators ist die Verarbeitung dieser Tex-Dateien durch einen LaTex-Prozessor - im vorliegenden Fall durch LuaLaTex. Insofern ist die vorherige korrekte und vollständige Installation aller notwendigen Module unabdingbar und stellt unter Umständen die größte Hürde bei der Verwendung des Katalogprogrammes dar. Der offene Quellcode ist über [Github zugänglich](https://github.com/rism-international/pdf-export){:blank}. Hier findet sich auch eine Installationsanleitung für Linux und Microsoft Windows (Version 10).

### Musikincipits
Während die Konvertierung der Titeldaten in Tex-Dateien noch verhältnismäßig einfach erscheint, ist die Einbettung der Musikincipits in den Katalog erheblich anspruchsvoller. Bei der Katalogprogramm wird der Plaine & Easie-Code dabei in die Tex-Datei eingebunden. Anschließend wird durch den LaTex-Prozessor als externes Programm Verovio - ein Standardwerkzeug zum Rendern hochqualitativer Incipits in Plaine & Easie, welches auch in Muscat verwendet wird - aufgerufen, um die Grafiken zu erstellen, in SVG für die höchste Auflösung. Gleichzeitig müssen die Incipit-Grafiken so beschnitten werden, dass überlange Incipits nicht den Spaltenrahmen sprengen. Der Aufruf von Verovio kann dabei auf zwei Wegen erfolgen: zum einen als Javascript-Modul unter der Laufzeitumgebung node.js, zum anderen als Binär-Datei mit erheblichen Performance-Gewinn. Um Verovio als Binär-Datei ausführen zu können muss es allerdings zunächst kompiliert werden, Anweisungen dazu finden sich auf der [Verovio-Website](https://www.verovio.org/index.xhtml){:blank} bzw. dem zugehörigen Repository auf Github. Die Einbindung dieser SVG-Grafiken in das LaTex-Dokument wiederum wird über Inkscape, einer Software zur Bearbeitung von Vektorgrafiken (siehe den [Wikipedia-Artikel](https://de.wikipedia.org/wiki/Inkscape oder auf [GitHub](https://github.com/mrpiggi/svg){:blank}), vorgenommen. In der fertigen LaTex-Datei sehen diese Anweisungszeilen z. B. dann folgendermaßen aus:

```
1 \begin{filecontents*}{1-1.code}  
2 @clef:G-2  
3 @keysig:bB  
4 @timesig:4/4  
5 @data:{8DEFD}/4BBB{8AG}/{FE}4D8{FGAF}/''4DDD{8C'B}/{AG}4F{8B''CD'A}/  
6 \end{filecontents*}  
7 \ShellEscape{ if [ ! -f 1-1.svg ]; then verovio --spacing-non-linear=0.54 -w 1500 --spacing-system=0.5 --adjust-page-height -b 0 1-1.code; fi }  
8 \newline \includesvg[width=209pt]{1-1}%  
```

In den Zeilen 1-6 befindet sich der Plaine & Easie-code des Notenincipits, in der Zeile 7 erstellt Verovio die Grafikdatei mit definierten Parametern und in der Schlußzeile 8 wird diese SVG-Grafik über Inkscape dann in das Dokument eingebunden.

### Konfiguration
In den Standardeinstellungen werden Kataloge in der Grundsprache Englisch erstellt, es wird ein zweispaltiger Seitenaufbau in DIN-A4 verwendet. Die Titel werden nach Komponist sortiert, wobei Collections an den Schluß gesetzt werden. Zweites Sortierkriterium ist der Titel. 

Aufgrund der hohen Flexibilität des Programm können mehr oder weniger sämtliche Einstellungen geändert werden, so dass zum Beispiel auch ein anderer Satzspiegel mit anderem anderem Schriftfont möglich ist. 

Die Performanz der Katalogerstellung richtet sich in hohem Maße nach dem Potential des eingesetzten Rechners. Bei durchschnittlicher Hardware werden ca. 2 Stunden benötigt, um einen Katalog sämtlicher Quellen zu Bach in RISM (ca. 20.000 Titel) zu erstellen. Der weit überwiegende Teil der Rechenzeit wird dabei durch das Rendern der Grafiken beansprucht. Resultat ist eine 150 MB große PDF-Datei mit 5.700 Seiten.

### Ausblick
In der weiteren Entwicklung des Programm wäre vor allem eine Integration in Muscat wünschenswert, um Anwendern nicht nur die anspruchsvolle Installation zu ersparen, sondern auch eine unabhängige Katalogerstellung zu ermöglichen. Obwohl bereits alle eingesetzten Komponenten öffentlich zugänglich gemacht wurden, sind doch bis heute von der Zentralredaktion in erheblichem Umfang Supportanfragen zu bearbeiten. In aller Regel können dabei lediglich Katalogproduktionen in der Standardeinstellung bereitgestellt werden. Komplexe Zusatzanforderungen, z.B. auch Änderungen in der Sortierung, müssen eigenständig bewältigt werden. Mittelfristig würde das zwar auch bei einer Muscat-Integration so bleiben. Die geplante Einbindung des Katalogprogrammes würde dabei dennoch gewährleisten, dass in Zukunft eine hochqualitative Katalogerstellung mit einfachen Mitteln angeboten werden kann. 


_Bildnachweis_:

1. Orgelstück von Nicolas de Grigny, "1er Kyrie en taille," in der Hand von J. S. Bach, [D-F Mus Hs 1538](http://opac.rism.info/search?documentid=455002348){:target="_blank"}
2. Open Data Logo: eigenes Bild
3. Zebra via [indexdata.com](http://www.indexdata.com/zebra){:target="_blank"}
4. SRU file: eigenes Bild
5. MARC logo: Library of Congress, ["MARC Standards"](http://www.loc.gov/marc/){:target="_blank"}
6. Hauptlesesaal, Library of Congress, Washington, DC, von Carol M. Highsmith, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:LOC_Main_Reading_Room_Highsmith.jpg){:target="_blank"}
7. Wikipedia logo via [wikipedia.org](http://www.wikipedia.org/){:target="_blank"}
8. [Neue Deutsche Biographie](http://www.deutsche-biographie.de/index.html){:target="_blank"}
9. Catalog PDF: eigenes Bild
