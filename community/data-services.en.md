---
title: Data Services
layout: community
lang: en
permalink: /community/data-services.html
old_url: http://www.rism.info/en/community/development/data-services.html
---

# Data Services

## Overview

{% include image file="/images/community/data-services/grigny-bach.jpg" pos="left" %}

RISM is an international project that documents and describes musical sources. Currently the database contains over 1.5 million records that describe sources in detail and may be consulted at [RISM Online](https://rism.online){:target="_blank"} or [http://opac.rism.info](http://opac.rism.info/){:target="_blank"}.

In addition, RISM offers numerous supplemental opportunities for data analysis or to use the data in other projects.

## Open Data

{% include image file="/images/community/data-services/opendata.png" pos="right" %}

RISM releases all data under a [Creative Commons Attribution 3.0 Unported License (CC-BY)](https://creativecommons.org/licenses/by/3.0/){:target="_blank"}. This means that you are free to share and adapt our data with no restrictions, but you must provide public notice and attribution.

## Identifiers

RISM Identifiers are used to uniquely identify individual records for the purposes of referencing and citation in both print and electronic contexts. The "short form" of a RISM Identifier consists of two components: A record type, and the record number, separated by a forward slash. The record type identifes the specific class of the identifer; for example, a record from our person authority or sources. The record number identifies the specific record. This number is unique to the record type. Since we publish both Bibliographic and Authority data in the same systems, both components of the identifier are necessary to uniquely identify all records.

This identifier format is designed to provide an unambiguous short form, so that RISM records may be easily citeable in print and digital publications. It is also designed to be consistent across all the different systems that publish and re-publish RISM data. A consistent identifier format also means that all RISM URL (Universal Resource Locator), so that a record may be retrieved in a web browser, can also serve as the URI for that record, used to identify a particular record in Linked Data systems.

Some examples may help illustrate these concepts. The RISM Identifier for the composer "Barbara Strozzi (1619–1677)" is `people/30009879`. The `people` component identifies the record type, and `30009879` identifies the specific record within the Person authority records.

This may also be easily resolved to a specific record in RISM Online by adding `https://rism.online/` to the front to form a full URL: `https://rism.online/people/30009879`. This is also a permanent link to the person authority record for Barbara Strozzi. If you are a RISM Cataloger and have access to the Muscat cataloging tool, you can find this record by adding `https://muscat.rism.info/admin/` to the identifier to form the URL `https://muscat.rism.info/admin/people/30009879`.

In addition to serving as a URL, a compact identifier may be used as a type of alias. This is a common practice in Linked Data systems. If we map the compact identifier prefix of `rism:` to `https://rism.online/`, then a full identifier may be constructed as `rism:people/30009879`. Systems that understand compact identifiers can expand this when necessary to form a full URL and URI for this particular record.

All records published by RISM follow these principles. For example, source records such as "Harmonice musices Odhecaton A" may be identified as `sources/993103756`, with all the previously described forms of expansion available for these records.

## MARCXML Downloads

Monthly exports of the RISM data is available for download in MARCXML format on our [Data Exports page](https://rism.digital/exports/index.html){:target="_blank"}.

## Linked Data and Resolution Services

{% include image file="/images/community/data-services/wikipedia.png" pos="right" %}

RISM Data is available in several Linked Data contexts. Wikidata provides a RISM ID property, [P5504](https://www.wikidata.org/wiki/Property:P5504){:target="_blank"}, that may be used in Wikidata-oriented SPARQL queries. There is also a RISM Siglum property, [P11550](https://www.wikidata.org/wiki/Property:P11550), that can be used as identifiers for institutions that have an assigned [RISM Siglum](https://rism.info/community/sigla.html).

We have a standard prefix and compact identifier, `rism:`, registered with the [Identifiers.org Resolution Service](https://identifiers.org){:target="_blank"}. This can also be used to resolve RISM Identifiers to records in the systems that support these types of identifiers.

For example:

 - Identifiers.org: [http://identifiers.org/rism:people/30002781](http://identifiers.org/rism:people/30002781){:target="_blank"} (Saint-Georges, Joseph Bologne de (1745-1799))
 - n2t.net: [https://n2t.net/rism:institutions/30078247](https://n2t.net/rism:institutions/30078247){:target="_blank"} (National Library of Ukraine, Music Department)

The RISM Catalog provides the [RISM data in Turtle format](https://opac.rism.info/main-menu-/kachelmenu/data){:target="_blank"} for download and import into Linked Data systems. Note that this data does not follow the RISM Identifiers scheme described above.

## RISM Online API

RISM Online has several web-based APIs (Application Programming Interface) available for public use. Details on how to use these APIs are available in the [RISM Online Documentation](https://rism.online/docs/){:target="_blank"}. For most users this should be the preferred way of accessing and using the RISM Data.

## SRU Servers

{% include image file="/images/community/data-services/zebra.jpg" pos="left" %}

The RISM data is also available through our [SRU servers](http://www.loc.gov/standards/sru/){:target="_blank"} which may be used to [retrieve the data](http://muscat.rism.info/sru){:target="_blank"} as MARCXML. Details on how to use this service are available in the [Muscat SRU Service Documentation](https://github.com/rism-digital/muscat/wiki/SRU).

![SRU](/images/community/data-services/SRU-example.jpg)

_Photo credits:_

1. Organ piece by Nicolas de Grigny, "1er Kyrie en taille," in the hand of J. S. Bach, [D-F Mus Hs 1538](http://opac.rism.info/search?documentid=455002348){:target="_blank"}
2. Open data logo: own work
3. SRU file: own work
4. MARC logo: Library of Congress, ["MARC Standards"](http://www.loc.gov/marc/){:target="_blank"}
5. Main Reading Room, Library of Congress, Washington, DC, by Carol M. Highsmith, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:LOC_Main_Reading_Room_Highsmith.jpg){:target="_blank"}
6. Wikipedia logo via [wikipedia.org](http://www.wikipedia.org/){:target="_blank"}
7. [Neue Deutsche Biographie](http://www.deutsche-biographie.de/index.html){:target="_blank"}
