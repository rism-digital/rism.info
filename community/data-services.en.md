---
title: Data Services
layout: community
lang: en
permalink: /community/data-services.html
---

# Data Services

## Overview

{% include image file="/images/community/data-services/grigny-bach.jpg" pos="left" %}

RISM is an international project that documents and describes musical sources. Currently the database contains over one million records that describe sources in detail and may be consulted at [http://opac.rism.info](http://opac.rism.info/){:target="_blank"}.

In addition, RISM offers interested libraries and institutions numerous supplemental opportunities for data analysis or to use the data in other projects.

## Open Data and Linked Open Data

{% include image file="/images/community/data-services/opendata.png" pos="right" %}

Nearly all of the records may be downloaded as [open data and linked open data](http://opac.rism.info/index.php?id=8&id=8&L=1){:target="_blank"} in MARC XML and RDF format under a Creative Commons CC-BY license at [opac.rism.info](http://opac.rism.info/){:target="_blank"}. In addition to data on musical sources, you will find authority files for people and corporate bodies, and bibliographic data for catalogs of works and secondary literature.  

## SRU Servers

{% include image file="/images/community/data-services/zebra.jpg" pos="left" %}

All catalog entries are available in MARC XML format and are described in accordance with MARC standards. In addition to using the open data interface, different [SRU servers](http://www.loc.gov/standards/sru/){:target="_blank"} can be used to directly [retrieve the data through URLs](http://muscat.rism.info/sru){:target="_blank"} and load them for data harvesting. This allows the information to be presented in the most up-to-date form available. The records are indexed by the free search engine [Zebra](http://www.indexdata.com/zebra){:target="_blank"} through [indexdata.com](http://www.indexdata.com/){:target="_blank"}.

This opens up the possibility of various kinds of searches: full-text, by composer, or specified searches such as by library or other criteria. In addition, SRU search interfaces are available for personal names and libraries.

![SRU](/images/community/data-services/SRU-example.jpg)

## MARC 21 and MARC XML Support

[Machine-Readable Cataloging (MARC)](http://www.loc.gov/marc/){:target="_blank"} is a standardized data format that is used in libraries. It is available in binary as well as computer-readable XML format.

This cataloging format was developed at the Library of Congress in the 1960s and enables computers to exchange bibliographic information with each other. Its data elements form the foundation for most of the library catalogs that are in use today. RISM uses MARC XML for open data as well as SRU for all aspects of data processing, ensuring the best possible portability and flexibility.

![LOC](/images/community/data-services/loc.jpg)

## GND BEACON

{% include image file="/images/community/data-services/wikipedia.png" pos="right" %}

[BEACON](http://meta.wikimedia.org/wiki/BEACON){:target="_blank"} is a very simple file format that is used to display links to websites that offer content on certain authority files. Currently, the format is primarily used for personal names, which are identified by means of a GND (formerly PND) number, although it is suitable for other types of authority files as well.

RISM provides GND BEACON files for personal names. Several projects have already integrated RISM's BEACON data:

* The [Neue Deutsche Biographie](http://www.deutsche-biographie.de/index.html){:target="_blank"} (New German Biography)
* Wikipedia's [Personensuche](http://toolserver.org/~apper/pd/){:target="_blank"} (People Search)
* The [Bayerisches Musiker-Lexikon Online](http://www.bmlo.lmu.de/){:target="_blank"} (Bavarian Online Dictionary of Musicians)

RISM's GND BEACON files can be found at [http://dl.rism.info/pnd.txt](http://dl.rism.info/pnd.txt){:target="_blank"}.

![NDB](/images/community/data-services/NDB.jpg)

## Custom Displays of Data

Through the use of RISM's SRU search interface, you have the opportunity to create a customized web-based catalog based on any subset of the RISM data, such as for a particular library or country. In such cases, the SRU interface serves solely as the back-end infrastructure. Individual solutions are thus possible in cooperation with RISM.

Dokumentation and examples on the SRU interface can be found [here](https://github.com/rism-ch/muscat/wiki/SRU){:target="_blank"}.

## Data Transfers

As long as your data are available in a structured form, RISM can convert them into MARC XML and integrate them into the data pool. So far, we have converted files from Microsoft Access databases, Word documents, and plaintext files. A converter for UNIMARC is in preparation. The conversion process is presented in a straightforward, web-based manner through our own RISM Toolkit application.

## Printed Media

{% include image file="/images/community/data-services/katalog-friedemann.jpg" pos="right" %}

High-quality PDFs can also be generated from the RISM data that are suitable for publication and use as camera-ready copy. Two options are available: a simple, quick catalog generator based on keywords or specific index searches using SRU and XSLT, with or without music incipits; and a high-quality catalog that can be created after consultation with the RISM Zentralredaktion and can include numerous sorting options and comprehensive indexes.

Photo credits:

1. Organ piece by Nicolas de Grigny, "1er Kyrie en taille," in the hand of J. S. Bach, [D-F Mus Hs 1538](http://opac.rism.info/search?documentid=455002348){:target="_blank"}
2. Open data logo: own work
3. Zebra via [indexdata.com](http://www.indexdata.com/zebra){:target="_blank"}
4. SRU file: own work
5. MARC logo: Library of Congress, ["MARC Standards"](http://www.loc.gov/marc/){:target="_blank"}
6. Main Reading Room, Library of Congress, Washington, DC, by Carol M. Highsmith, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:LOC_Main_Reading_Room_Highsmith.jpg){:target="_blank"}
7. Wikipedia logo via [wikipedia.org](http://www.wikipedia.org/){:target="_blank"}
8. [Neue Deutsche Biographie](http://www.deutsche-biographie.de/index.html){:target="_blank"}
9. Catalog PDF: own work
