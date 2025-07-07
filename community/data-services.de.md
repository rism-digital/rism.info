---
title: Dataservice
layout: community
lang: de
permalink: /community/data-services.html
old_url: http://www.rism.info/de/community/entwicklung/dataservice.html
---

# Dataservice

## Übersicht

RISM ist ein weltweites Projekt zur Dokumentation und Beschreibung musikalischer Quellen. Gegenwärtig sind über 1,5 Millionen Titel in ausführlicher Form beschrieben und über [RISM Online](https://rism.online){:target="_blank"} oder den [RISM Catalog](http://opac.rism.info){:target="_blank"} suchbar.

RISM bietet interessierten Bibliotheken und Institutionen darüber hinaus zahlreiche zusätzliche Möglichkeiten zur Datenauswertung und weiteren Verarbeitung an. 

## OpenData

RISM veröffentlicht alle Daten unter einer [Creative Commons Attribution 3.0 Unported License (CC-BY)](https://creativecommons.org/licenses/by/3.0/){:target=„_blank“}. Das bedeutet, dass Sie unsere Daten ohne Einschränkungen weitergeben und anpassen dürfen, jedoch müssen Sie dies öffentlich bekannt geben und die Quelle angeben.

## Identifier

RISM-Identifikatoren werden verwendet, um einzelne Datensätze für Referenz- und Zitierzwecke sowohl in gedruckter als auch in elektronischer Form eindeutig zu identifizieren. Die Kurzform eines RISM-Identifikators besteht aus zwei Komponenten: einem Datensatztyp und der Datensatznummer, die durch einen Schrägstrich voneinander getrennt sind. Der Datensatztyp identifiziert die spezifische Klasse der Kennung, beispielsweise einen Datensatz aus unseren Personennormdaten oder unseren Quellen. Die Datensatznummer identifiziert den spezifischen Datensatz. Diese Nummer ist für den Datensatztyp eindeutig. Da wir sowohl bibliografische Daten als auch Normdaten im selben System veröffentlichen, sind beide Komponenten der Kennung erforderlich, um alle Datensätze eindeutig zu identifizieren.

Dieses Identifikatorformat wurde entwickelt, um eine eindeutige Kurzform bereitzustellen und somit die Zitierbarkeit von RISM-Datensätzen in gedruckten und digitalen Publikationen zu erleichtern. Es ist außerdem so konzipiert, dass es in allen Systemen, die RISM-Daten veröffentlichen und erneut veröffentlichen, konsistent ist. Da es sich um ein einheitliches Identifikationsformat handelt, können alle RISM-URLs (Universal Resource Locator), mit denen ein Datensatz in einem Webbrowser abgerufen werden kann, auch als URI für diesen Datensatz verwendet werden, um einen bestimmten Datensatz in Linked-Data-Systemen zu identifizieren.

Einige Beispiele sollen dieses Konzept verdeutlichen. Die RISM-Kennung für die Komponistin „Barbara Strozzi (1619–1677)“ lautet `people/30009879`. Der Bestandteil `people` identifiziert den Datensatztyp, und `30009879` identifiziert den spezifischen Datensatz innerhalb der Personennormdatei.

Dies lässt sich auch leicht zu einem bestimmten Datensatz in RISM Online auflösen, indem man `https://rism.online/` voranstellt, um eine vollständige URL zu bilden: `https://rism.online/people/30009879`. Dies ist ein permanenter Link zum Personendatensatz für Barbara Strozzi. Wenn Sie RISM-Katalogisierer sind und Zugriff auf das Muscat-Katalogisierungstool haben, können Sie diesen Datensatz finden, indem Sie die Kennung an die URL `https://muscat.rism.info/admin/` anhängen. Die vollständige URL lautet dann: `https://muscat.rism.info/admin/people/30009879`.

Ein kompakter Identifikator kann sowohl als URL als auch als Alias verwendet werden. Dies ist in Linked-Data-Systemen gängige Praxis. Wenn wir das Präfix `rism:` auf `https://rism.online/` abbilden, können wir einen vollständigen Identifikator wie `rism:people/30009879` bilden. Systeme, die kompakte Identifikatoren verstehen, können diesen bei Bedarf zu einer vollständigen URL bzw. URI für den entsprechenden Datensatz erweitern.

Alle von RISM veröffentlichten Datensätze folgen diesen Grundsätzen. So können Quelldatensätze wie „Harmonice musices Odhecaton A” beispielsweise als `sources/993103756` identifiziert werden. Für diese Datensätze sind alle zuvor beschriebenen Erweiterungsformen verfügbar.

## MARCXML Downloads

Die monatlichen Exporte der RISM-Daten können im MARCXML-Format auf unserer [Seite „Datenexporte“](https://rism.digital/exports/index.html){:target=„_blank“} heruntergeladen werden.

## Linked Data und Resolution Services

Die RISM-Daten sind in mehreren Linked-Data-Kontexten verfügbar. Wikidata bietet eine RISM-ID-Eigenschaft, [P5504](https://www.wikidata.org/wiki/Property:P5504){:target=„_blank“}, die in Wikidata-orientierten SPARQL-Abfragen verwendet werden kann. Es gibt auch eine RISM-Bibliothesksigel-Eigenschaft, [P11550](https://www.wikidata.org/wiki/Property:P11550){:target="_blank"}, die als Identifikatoren für Institutionen verwendet werden kann, denen ein [RISM-Bibliothekssigel](/community/sigla.html){:target="_blank"} zugewiesen wurde.

Wir haben ein Standardpräfix und einen kompakten Identifikator, `rism:`, die beim [Identifiers.org Resolution Service](https://identifiers.org){:target=„_blank“}, registriert sind. Mithilfe dieser können RISM-Kennungen in Systemen, die diese Art von Kennungen unterstützen, in Datensätze aufgelöst werden.

Zum Beispiel:

 - Identifiers.org: [http://identifiers.org/rism:people/30002781](http://identifiers.org/rism:people/30002781){:target="_blank"} (Saint-Georges, Joseph Bologne de (1745-1799))
 - n2t.net: [https://n2t.net/rism:institutions/30078247](https://n2t.net/rism:institutions/30078247){:target="_blank"} (National Library of Ukraine, Music Department)

Der RISM Catalog stellt die [RISM-Daten im Turtle-Format](https://opac.rism.info/main-menu-/kachelmenu/data){:target=„_blank“} zum Herunterladen und Importieren in Linked-Data-Systeme zur Verfügung. Beachten Sie, dass diese Daten nicht dem oben beschriebenen RISM-Identifikationsschema entsprechen.

## RISM Online API

RISM Online verfügt über mehrere öffentlich zugängliche, webbasierte APIs (Application Programming Interface). Einzelheiten zur Verwendung dieser APIs finden Sie in der [RISM Online Documentation](https://rism.online/docs/){:target="_blank"}. Dies sollte für die meisten Benutzer die bevorzugte Methode für den Zugriff auf und die Nutzung der RISM-Daten sein.

## SRU-Schnittstellen

Die RISM-Daten sind auch über unsere [SRU-Server](http://www.loc.gov/standards/sru/){:target=„_blank“} verfügbar, über die die Daten als MARCXML [abgerufen werden können](http://muscat.rism.info/sru){:target=„_blank“}. Einzelheiten zur Nutzung dieses Dienstes finden Sie in der [Muscat SRU Service Documentation](https://github.com/rism-digital/muscat/wiki/SRU){:target="_blank"}.
