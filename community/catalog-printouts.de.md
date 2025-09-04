---
title: "Katalogausdrucke von RISM-Daten"
layout: community
lang: de
permalink: /community/catalog-printouts.html
---

## Katalogausdrucke von RISM-Daten

{% include image file="/images/community/data-services/katalog-friedemann.jpg" pos="right" %}

### Einführung
Die Erstellung eines Katalogs mit Einträgen aus der [RISM-Datenbank](https://opac.rism.info/index.php?id=4){:blank} ist eine praktische Möglichkeit, einen Teil der RISM-Daten in übersichtlicher Form darzustellen. In der umfangreichen Datenbank mit 1,5 Millionen Datensätzen wären diese sonst weniger unmittelbar wahrnehmbar. Am häufigsten wird diese Option genutzt, um die Veröffentlichung eines gedruckten Katalogs zu erleichtern, den Abschluss eines Katalogisierungsprojekts für Finanzierungspartner zu dokumentieren oder eine Überprüfung und eventuelle Korrektur der Katalogbeschreibungen zu ermöglichen. Seit 1996 bietet die RISM-Zentralredaktion seinen Partnern diese Option an. Dabei hat sich die technische Umsetzung in den letzten Jahren natürlich stark verändert. Im Laufe der Jahre war die Zentralredaktion an etwa 30 verschiedenen Publikationsprojekten unterschiedlichen Umfangs beteiligt. Während die ersten Kataloge mit Makros in Microsoft Word für Windows erstellt wurden, führte das Katalogisierungsprogramm Kallisto eine Umstellung auf druckfertige Vorlagen mit dem Dokumentvorbereitungsprogramm LaTeX ein. Da die Katalogisierungssoftware Muscat seit 2017 über eine SRU-Schnittstelle verfügt, haben wir eine Lösung entwickelt, bei der sowohl die Basissoftware als auch die Schnittstelle frei zugänglich sind. Dadurch wird sichergestellt, dass ein automatisierter, leistungsstarker und vor allem qualitativ hochwertiger Katalogausdruck im PDF-Format für alle ohne zusätzliche Kosten verfügbar ist.


### Beschreibung
Bereits im RISM-Katalog veröffentlichte Datensätze können jederzeit über die [Muscat SRU-Schnittstelle](https://github.com/rism-international/sru-downloader){:blank} heruntergeladen werden. Dabei ist zu beachten, dass die SRU-Schnittstelle die Pager-Methode verwendet, sodass jede Abfrage auf maximal 100 Treffer begrenzt ist – ein für SRU-Schnittstellen üblicher Wert. Über standardisierte SRU-Schnittstellen können Daten maschinell abgefragt und ausgetauscht werden. Eine gute Einführung hierzu findet sich auf der [Website der Library of Congress](http://www.loc.gov/standards/sru/){:blank}. Die RISM-Zentralredaktion stellt ein plattformübergreifendes Java-Tool zur Verfügung, das die SRU-Abfrage als MARCXML-Datei herunterlädt. Für den Kataloggenerator werden die Daten in einem zusätzlichen Verarbeitungsschritt aus der SRU-Schnittstelle abgerufen und mithilfe eines XSLT-Prozessor in LaTeX-Dateien konvertiert. Anschließend werden auch Indizes erstellt. Das Framework für diese Konvertierung ist eine Ruby-Anwendung, die eine systemunabhängige Installation ermöglicht. Bei der Entwicklung dieses Tools haben wir plattformübergreifenden Modulen Vorrang eingeräumt. Alle Komponenten des PDF-Kataloggenerators laufen unter Windows und Linux gleichermaßen gut.

Das Herzstück des PDF-Generators ist ein LaTeX-Prozessor, in diesem Fall LuaLaTeX, der die tex-Dateien verarbeitet. Bitte stellen Sie sicher, dass alle erforderlichen Module korrekt und vollständig installiert sind. Dieser Aspekt kann gelegentlich die größte Hürde bei der Verwendung des Katalogprogramms darstellen. Die vollständige Installationsanleitung und der Open-Source-Code sind [auf GitHub verfügbar](https://github.com/rism-international/pdf-export){:blank}. Dort finden Sie Anleitungen für Linux und Microsoft Windows (Version 10).


### Musikincipits
Die Konvertierung von Daten in Tex-Dateien erscheint relativ einfach, die Einbettung von Musikincipits in den Katalog ist jedoch wesentlich komplizierter. Das Katalogprogramm bettet den Plaine & Easie-Code in die Tex-Datei ein. Anschließend ruft der LaTeX-Prozessor das externe Programm Verovio auf, um die Grafiken in SVG-Format für die höchste Auflösung zu erstellen. Verovio ist ein Standardwerkzeug zum Rendern hochwertiger Incipits in Plaine & Easie, das auch in Muscat verwendet wird. Gleichzeitig müssen die Incipit-Grafiken so zugeschnitten werden, dass überlange Incipits nicht über die Spaltenbreite hinausragen. Verovio kann auf zwei Arten aufgerufen werden: entweder als JavaScript-Modul in der Laufzeitumgebung node.js oder als Binärdatei. Letztere bietet erhebliche Leistungsvorteile. Um Verovio als Binärdatei auszuführen, muss es jedoch zunächst kompiliert werden. Eine entsprechende Anleitung dazu finden Sie [auf der Verovio-Website](https://www.verovio.org/index.xhtml){:blank} oder im zugehörigen GitHub-Repository. Die Integration dieser SVG-Grafiken in das LaTeX-Dokument erfolgt wiederum über Inkscape, ein Programm zur Bearbeitung von Vektorgrafiken (siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Inkscape){:blank} oder [GitHub](https://github.com/mrpiggi/svg){:blank}. Im folgenden Beispiel würden diese Anweisungszeilen in der vollständigen LaTeX-Datei wie folgt aussehen:


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

Zeile 1 bis 6 enthalten den Plaine & Easie-Code des Musikincipits. In Zeile 7 erstellt Verovio die Grafikdatei mit definierten Parametern. In der letzten Zeile wird diese SVG-Grafik schließlich über Inkscape in das Dokument integriert.  

### Katalog-Einstellungen
Standardmäßig werden Kataloge mit englischen Überschriften im zweispaltigen Seitenlayout im DIN-A4-Format erstellt. Die Datensätze sind zunächst nach Komponisten und anschließend nach Titeln sortiert, Sammlungen werden am Ende aufgeführt.    

Dank der hohen Flexibilität des Programms können grundsätzlich alle Einstellungen verändert werden, so dass z.B. ein anderer Druckbereich oder eine andere Schriftart verwendet werden kann.  

Die für die Erstellung des Katalogs benötigte Zeit hängt stark von der Leistungsfähigkeit des verwendeten Computers ab. Bei einer typischen Hardwareausstattung dauert die Erstellung eines Katalogs aller Bach-Quellen in RISM etwa zwei Stunden. Dieser umfasst 20.000 Datensätze auf 5.700 Seiten und eine 150 MB große Datei. Der mit Abstand größte Teil der Rechenzeit wird für die Darstellung der Grafiken benötigt.  

### Ausblick
Obwohl alle oben genannten und beschriebenen Komponenten bereits öffentlich verfügbar sind, muss die Zentralredaktion immer noch eine beträchtliche Anzahl von Supportanfragen bearbeiten. In solchen Fällen können wir nur bei Katalogen helfen, die die Standardeinstellungen verwenden. Mit Blick auf die weitere Entwicklung des Programms planen wir, es in Muscat zu integrieren, damit sich die Benutzer die mühsame Installation ersparen und Kataloge selbst erstellen können. Komplexe Zusatzanforderungen wie Änderungen in der Sortierung müssen jedoch auch nach der Integration in Muscat von den Benutzern selbst vorgenommen werden.
