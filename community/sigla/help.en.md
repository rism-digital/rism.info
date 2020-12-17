---
title: Sigla Help
layout: community
lang: en
permalink: /community/sigla/help.html
old_url: http://www.rism.info/en/sigla/help.html
---

# Guide to using the Online Directory of RISM Library Sigla

## Introduction

RISM sigla are used to refer to institutions that hold historical music collections.

They are composed of a country abbreviation, a city abbreviation, and an institution abbreviation.

In **I-Rc**, **I** stands for Italy, **R** is for Rome, and **c** is for the Biblioteca Casanatense.

In **US-PHf**, **US** stands for the United States, **PH** is for Philadelphia, and **f** is for the Free Library of Philadelphia.

Once you find the country and city you need, you can search the [RISM online catalog](https://opac.rism.info/index.php?id=4){:target="_blank"} for all sources from this location. Select the field **Library siglum**.

Use the symbol * to truncate.

Examples:\
I-R* for all sources currently in Rome, and US-PH* for all sources currently in Philadelphia.\
I-* for all sources in Italy, and US-* for all sources in the United States.

 
## Search basics

1. Search for countries using their names in English, French, German, or Italian.

2. Search for cities and institutions using their local names (Roma instead of Rome).

3. Search for US states by the postal abbreviation in the field City (WI, IL, etc.).

## Simple search

Enter one or more words to search. Search terms are combined by default. For example, **Archiv Austria** will return all sigla that contain the word **Archiv** and **Austria**.

To search for one or more terms, use OR in capital letters: **Archiv OR Austria** will find all sigla that contain either one term or the other. 

Results are sorted by relevance.

## Fields

The field **All** is the default field and all fields are searched across all sigla. A combined search (see below) is only possible when this option is selected.

The fields **Name**, **Library siglum**, **City**, and **Country** can be selected and searched in the drop-down menu. Please note the following:

* Name: The official name or alternative names of the institution in the local language (bath.corporateName)
* Library siglum: Capitalization is strictly observed (for example, US-WS vs. US-Wc) (rism.librarySiglum)
* City: Search using the local name (including diacritics). US states can also be searched here by the postal abbreviation (WI, IL, etc.). (rism.place)
* Country: Search for countries using their names in English, French, German, or Italian (rism.libraryCountry)

## Combined search

You can search multiple indexed fields at once by selecting **All** and entering a combination of terms using the following prefixes and combining them with AND or OR:
* name=
* sigla=
* city=
* country=

Example:

* The search **name=Bach AND country=USA** will find all sigla with the word “Bach” in the name that are in the United States.

 
## Tips

* A search for **\*** will retrieve all sigla.
* In the list of results, click on any institution to see full details, including address, URL, and link to sources in the RISM Catalog of Musical Sources.
* A gold star appears next to the institutions that have sources in the RISM Catalog.


## Technology used

Searches run against the official RISM SRU server at muscat.rism.info. The complete index configuration is available at [https://muscat.rism.info/sru/institutions](https://muscat.rism.info/sru/institutions){:blank}.

