---
title: "RISM-Suchen in Ihrer Website integrieren"
layout: community
lang: de
permalink: /community/integrating-rism-searches-on-website.html
---

# RISM-Suchen in Ihrer Website integrieren  

Wollten Sie schon immer eine benutzerdefinierte Suchseite für RISM erstellen? Vielleicht möchten Sie Ihre Suche automatisch auf ein bestimmtes Land, eine bestimmte Institution oder Person beschränken. Oder Sie möchten vorab eine Reihe von Filtern anwenden, um Ihren Nutzern eine Suchoberfläche für Manuskripte oder Drucke zur Verfügung zu stellen. Was auch immer Ihre Gründe sind, es gibt zahlreiche Möglichkeiten, wie Sie die RISM Online Search API nutzen können, um benutzerdefinierte Suchfunktionen auf Ihrer eigenen Website zu erstellen.

## Erste Schritte

Zunächst sollten Sie über Grundkenntnisse in HTML verfügen. Das ist die Computersprache, in der alle Webseiten geschrieben sind. Außerdem benötigen Sie einen Speicherplatz im Internet, um Ihre Webseite zu veröffentlichen und anderen zugänglich zu machen. Es gibt viele verschiedene Möglichkeiten, „rohes“ HTML in die unterschiedlichen Web-Publishing-Plattformen (wie WordPress) einzubetten. Überprüfen Sie daher die Dokumentation Ihres eigenen Systems.

Wir beginnen mit einem einfachen Beispiel und analysieren anschließend, wie es funktioniert.

```html
<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>
```

Dadurch sollte ein sehr einfaches Texteingabefeld entstehen, das wie folgt aussieht:

<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>


Es gibt einige wichtige Punkte zu beachten. So legt das Attribut `action` im Tag `<form>` die URL fest, an die die Suche gesendet wird. Das Tag `<input>` erstellt ein Texteingabefeld und der Parameter `name="q"` gibt den Namen für alle in dieses Feld eingegebenen Texte an. Schließlich wird über das Element `<button>` eine Schaltfläche erstellt, über die das Formular gesendet wird.

Wenn Sie auf die Schaltfläche klicken, verwendet der Browser all diese Informationen, um eine URL zu erstellen, die Sie zur Website von RISM Online weiterleitet. Geben Sie beispielsweise „Josephine Lang” in das Suchfeld ein, sieht die URL wie folgt aus:

`https://rism.online/search/?q=Josephine%20Lang`

An dieser URL können Sie erkennen, dass der von uns angegebene Parameter `q` automatisch ans Ende der URL angehängt wird.

## Vordefinierte Filter

Die RISM Online-Dokumentation enthält Informationen zu einer Reihe weiterer Parameter, die zusammen mit `q` angegeben werden können und zur Steuerung der Suchergebnisse dienen.

Manchmal möchten Sie diese Werte möglicherweise automatisch in Ihrer Suchabfrage übermitteln, ohne dass Ihre Benutzer wissen, wie sie die richtigen Werte für diesen Parameter eingeben. Wenn Sie Ihre Suche beispielsweise auf die nationalen Sammlungen Polens beschränken, können Sie ein verstecktes Eingabefeld bereitstellen. Erweiterung unseres früheren Beispiels:

```html
<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="hidden" name="nc" value="PL" />
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>
```  

<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="hidden" name="nc" value="PL" />
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>  


Wenn Sie bei diesem Formular auf die Schaltfläche „Senden“ klicken, wird der Wert `nc=PL` automatisch zu jeder gesendeten URL hinzugefügt. Dadurch werden alle Suchergebnisse automatisch auf Quellen in Polen gefiltert. Geben Sie beispielsweise den Namen „Maria Szymanowska“ in das Eingabefeld ein, wird eine URL wie folgt erstellt:

`https://rism.online/search?q=Szymanowska,%20Maria&nc=PL`

So können Sie mehrere Filter festlegen und diese bei Bedarf wiederholen.

Einige Filter verwenden eine komplexere Berechnungsmethode. Wenn Sie Ihre Suche automatisch auf handschriftliche Quellen beschränken möchten, könnte das versteckte Eingabefeld wie folgt aussehen:

`<input type="hidden" name="fq" value="source-type:manuscript" />`

Das liegt daran, dass der Parameter `fq` ein Feld (`source-type`) sowie einen Wert für dieses Feld (`manuscript`) erfordert. Wenn Sie sich nicht sicher sind, wie diese Parameter aufgebaut sein müssen, können Sie Ihre Suche jederzeit über die Benutzeroberfläche von RISM Online durchführen. Sehen Sie sich dann die dabei erstellte URL an.

Sie können dieselbe Methode auch verwenden, um Ihren Benutzern mehrere Suchfelder zur Verfügung zu stellen, damit sie mehrere Werte eingeben können. Auch hier kann es hilfreich sein, die von der RISM Online-Schnittstelle erstellten Such-URLs zu konsultieren, aber darauf werden wir in diesem Beitrag nicht näher eingehen.

## Suche innerhalb der Körperschaften

Jede Körperschaft in RISM Online verfügt über eine eigene Suchoberfläche. Wir können diese nutzen, um eine eigene Suchoberfläche für eine bestimmte Institution zu erstellen. Dazu variieren wir die URL `action`, die wir im Formular angeben, so, dass sie auf die Such-URL der jeweiligen Institution verweist. Ausgehend von unserem einfachen Beispiel können wir ein Formular erstellen, das alle Quellen in der Nationalbibliothek von Tschechien durchsucht:

```html
<form action="https://rism.online/institutions/30000083/sources" method="get">
    <div>
        <label for="mySearch">Search the National Library of the Czech Republic in RISM Online</label>
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>
```

<form action="https://rism.online/institutions/30000083/sources" method="get">
    <div>
        <label for="mySearch">Search the National Library of the Czech Republic in RISM Online</label>
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>


Alle zuvor verwendeten Suchparameter sind verfügbar, sodass Sie auch die Eingabe „hidden“ verwenden können, um eine Reihe von Optionen in diesen Suchanfragen vorab auszufüllen. (Der Parameter `nc` funktioniert jedoch möglicherweise nicht wie erwartet in Kombination mit der von Ihnen ausgewählten Institution, da die Beschränkung Ihrer Suche auf polnische Quellen in Institutionen, die sich nicht in Polen befinden, zu unerwarteten Ergebnissen führen kann.)
Every person record in RISM Online also has a dedicated search interface, so you can use the same technique to provide a dedicated search box for a specific person.

## Incipitsuche

Schließlich bietet die RISM Online Search API eine Methode zur Verwendung bei Incipitsuchen. Diese Suchanfragen sind geschrieben im [Plaine and Easie Code](https://plaine-and-easie.info/v1/index.html).

```html
<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">RISM Online Incipit Search</label>
        <input type="hidden"  name="mode" value="incipit" />
        <input type="search" id="mySearch" name="n" />
        <button>Search</button>
    </div>
</form>
```

<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">RISM Online Incipit Search</label>
        <input type="hidden"  name="mode" value="incipit" />
        <input type="search" id="mySearch" name="n" />
        <button>Search</button>
    </div>
</form>  


Bitte beachten Sie, dass wir den Parameter `q` entfernt und durch `n` ersetzt haben. Jeder eingegebene Text wird als Plain-and-Easie-Code interpretiert und mit über zwei Millionen Incipits im RISM-Online-System abgeglichen. Wenn wir die Suchanfrage „B-A-C-H“ eingeben, die als Plain-and-Easie-Code `bBA''C'nB` lautet, lautet die URL für diese Eingabe::

`https://rism.online/search?mode=incipits&n=bBA%27%27C%27nB`

## Weitere Möglichkeiten zur Einbettung von RISM Online

Es gibt viele weitere Möglichkeiten, RISM Online in Ihre Website zu integrieren. Wenn Sie beispielsweise einen Eintrag zu einer Quelle, einer Person oder einer Institution in einen Blogbeitrag einbetten möchten, können Sie ein `<iframe>` verwenden, um ein „Fenster” zu RISM Online zu öffnen. Die Ansicht des Eintrags wird dabei speziell formatiert, damit sie zu Ihrer Website passt.

```
<iframe src="https://rism.online/people/41008869" width="800" height="600"></iframe>
```  

<iframe src="https://rism.online/people/41008869" width="800" height="600"></iframe>  

Wenn Sie über Programmiererfahrung verfügen, sind die Möglichkeiten nahezu unbegrenzt! Informieren Sie sich über die RISM Online API, um zu erfahren, wie Sie Datensätze und Suchergebnisse im maschinenlesbaren JSON-LD-Format bereitstellen können. So können Sie Suchanfragen und Ergebnisse in Ihre eigenen Anwendungen integrieren.

Unser Ziel bei der Bereitstellung all dieser Integrationsmöglichkeiten ist es, RISM zu einem integralen Bestandteil jedes digitalen Musikforschungsprojekts zu machen. Wir hoffen, dass Sie diese Tools nützlich finden und werden weiterhin daran arbeiten, unserer globalen Community mehr Daten und mehr Zugangsdatensätze zur Verfügung zu stellen.
