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

As long as your data are available in a structured form, RISM can convert them into MARC XML and integrate them into the data pool. So far, we have converted files from Microsoft Access databases, Word documents, and plaintext files. A converter for UNIMARC is in preparation. The conversion process is presented in a straightforward, web-based manner:  through our own RISM Toolkit application, the imported file is displayed in a test environment before it is incorporated into the larger data pool.

## Catalog Printouts of RISM Data

{% include image file="/images/community/data-services/katalog-friedemann.jpg" pos="right" %}

### Introduction
Generating a catalog of entries from the [RISM database](https://opac.rism.info/index.php?id=4){:blank} is a convenient way of presenting a subset of the RISM data in a more tangible form, which would otherwise be less immediately perceptible in an extensive database consisting of 1.5 million records. This option is most frequently used to facilitate the publication of a printed catalog, to document the completion of a cataloging project for funding partners, or to allow for a review and potential correction of the catalog descriptions. Since 1996, the RISM Editorial Center has offered its partners this option, though the technical implementation has of course changed a good deal in recent years. Over the years the Editorial Center has been involved in approximately 30 different publication projects of varying scope. While the first catalogs were created using macros with Microsoft Word for Windows, the Kallisto cataloging program introduced a shift to camera-ready copy  with the document preparation program LaTeX. Since an SRU interface had been an integral part of the cataloging software Muscat since 2017, we developed a solution in which both the basic software and the interface are freely accessible. This ensures that an automated, high-performance, and, above all, high-quality catalog printout is available to everyone in PDF format without additional costs.


### Description
Records that are already published in the RISM catalog can be downloaded at any time using the [Muscat SRU interface](https://github.com/rism-international/sru-downloader){:blank}. Here it should be kept in mind that the SRU interface uses a pager method, so each retrieval is limited to a maximum of 100 hits—a customary value for SRU interfaces. Through standardized SRU interfaces, data can be queried and exchanged by machine. A good introduction to this is available on the [website of the Library of Congress](http://www.loc.gov/standards/sru/){:blank}. The RISM Editorial Center provides a cross-platform Java tool that downloads the SRU query as a MARCXML file. For the catalog generator, an additional processing step retrieves the data from the SRU interface and converts it to LaTeX files using an XSLT processor, and following this, indexes are also created. The framework for this conversion is a Ruby application, which allows for a system-independent installation. In developing this tool, we gave priority to cross-platform modules. All components of the PDF catalog generator run equally well with Windows and Linux.  

At the heart of the PDF generator lies a LaTeX processor that processes the tex files, in this case LuaLaTeX. Please ensure that all necessary modules are correctly and entirely installed in advance; this aspect may occasionally prove the biggest hurdle when using the catalog program. Full installation instructions and the open source code are [available on GitHub](https://github.com/rism-international/pdf-export){:blank}. Instructions are available there for Linux and Microsoft Windows (version 10).  

### Music Incipits
While converting data to tex files might seem relatively straightforward, embedding music incipits into the catalog is considerably more complicated. The catalog program embeds the Plaine & Easie code in the tex file. Then the LaTeX processor calls up Verovio as an external program to create the graphics, in SVG for the highest resolution. Verovio is a standard tool for rendering high-quality incipits in Plaine & Easie, which is also used in Muscat. At the same time, the incipit graphics must be cropped so that overly long incipits do not run over the span of the column. Verovio can be called in two ways: either as a JavaScript module in the node.js runtime environment or as a binary file; the latter has significant gains in performance. In order to run Verovio as a binary file, however, it must first be compiled. Instructions can be found [on the Verovio website](https://www.verovio.org/index.xhtml){:blank} or the GitHub repository associated with it. Integrating these SVG graphics into the LaTeX document is in turn done through Inkscape, a program for editing vector graphics (see the [Wikipedia article](https://en.wikipedia.org/wiki/Inkscape){:blank} or [GitHub](https://github.com/mrpiggi/svg){:blank}. In the following example, these lines of instruction would look like this in the complete LaTeX file:  

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

Lines 1-6 contain the Plaine & Easie code of the music incipit, in line 7 Verovio creates the graphic file with defined parameters, and in the final line this SVG graphic is integrated into the document via Inkscape.  

### Catalog Settings
As a default, catalogs are created with English headings and the page layout is in two columns in DIN-A4 format. The records are sorted by composer, then title, with collections appearing at the end.  

Thanks to the high flexibility of the program, basically all of the settings can be changed so that, for example, a different printing area or a different font can be employed.  

The time needed to generate the catalog depends to a large extent on the performance of the computer being used. Using typical hardware, about two hours are needed to create a catalog of all Bach sources in RISM: about 20,000 records on 5,700 pages, a file of 150 MB. By far the greatest part of computing time is taken up by rendering the graphics.  

### Looking Ahead
Although all the components used and described above have already been made publicly available, the Editorial Center still has to handle a considerable number of requests for assistance. In such cases, we can only assist with catalogs that use the standard settings. Looking at further development of the program, we are planning to integrate it into Muscat, so that users can spare themselves the trouble of the rather demanding installation and produce catalogs independently. Complex additional requests, however, such as changes in sorting, must be handled by the users on their own, and this will likely remain so even after it is part of Muscat as well.

_Photo credits:_

1. Organ piece by Nicolas de Grigny, "1er Kyrie en taille," in the hand of J. S. Bach, [D-F Mus Hs 1538](http://opac.rism.info/search?documentid=455002348){:target="_blank"}
2. Open data logo: own work
3. Zebra via [indexdata.com](http://www.indexdata.com/zebra){:target="_blank"}
4. SRU file: own work
5. MARC logo: Library of Congress, ["MARC Standards"](http://www.loc.gov/marc/){:target="_blank"}
6. Main Reading Room, Library of Congress, Washington, DC, by Carol M. Highsmith, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:LOC_Main_Reading_Room_Highsmith.jpg){:target="_blank"}
7. Wikipedia logo via [wikipedia.org](http://www.wikipedia.org/){:target="_blank"}
8. [Neue Deutsche Biographie](http://www.deutsche-biographie.de/index.html){:target="_blank"}
9. Catalog PDF: own work
