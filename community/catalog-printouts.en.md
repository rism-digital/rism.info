## Catalog Printouts of RISM Data

{% include image file="/images/community/data-services/katalog-friedemann.jpg" pos="right" %}

### Introduction
Generating a catalog of entries from the [RISM database](https://opac.rism.info/index.php?id=4){:blank} is a convenient way of presenting a subset of the RISM data in a more tangible form, which would otherwise be less immediately perceptible in an extensive database consisting of 1.5 million records. This option is most frequently used to facilitate the publication of a printed catalog, to document the completion of a cataloging project for funding partners, or to allow for a review and potential correction of the catalog descriptions. Since 1996, the RISM Editorial Center has offered its partners this option, though the technical implementation has of course changed a good deal in recent years. Over the years the Editorial Center has been involved in approximately 30 different publication projects of varying scope. While the first catalogs were created using macros with Microsoft Word for Windows, the Kallisto cataloging program introduced a shift to camera-ready copy with the document preparation program LaTeX. Since an SRU interface had been an integral part of the cataloging software Muscat since 2017, we developed a solution in which both the basic software and the interface are freely accessible. This ensures that an automated, high-performance, and, above all, high-quality catalog printout is available to everyone in PDF format without additional costs.


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
