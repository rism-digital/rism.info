---
title: Sigla Help
layout: community
lang: en
permalink: /community/sigla/help.html
---

# Guide to using the siglum directory

Sigla are used to refer to institutions that contain historical music collections.

They are composed of a country abbreviation, a city abbreviation, and an institution abbreviation.

In **I-Rc**, **I** stands for Italy, **R** is for Rome, and **c** is for the Biblioteca Casanatense.

In **US-PHf**, **US**stands for the United States, **PH** is for Philadelphia, and **f** is for the Free Library of Philadelphia.

Once you find the country and city you need, you can search the [RISM online catalog](http://opac.rism.info/){:target="_blank"} for all sources from this location. Select **Advanced search** and choose the field **Library siglum**.

Use the symbol **\***to truncate.

Examples:\
**I-R\*** for all sources currently in Rome, and **US-PH\*** for all sources currently in Philadelphia.\
**I-\*** for all sources in Italy, and **US-\*** for all sources in the United States.

## Searching Basics

1. Search for countries using their English names

2. Search for cities and institutions using their local names

3. Search for US states by the postal abbreviation in the field **City** (WI, IL, etc.)

## Simple Search

The simple search supports both truncation as well as searching by phrase. The search logic uses AND as a default. For example, **Kloster Austria**will return all sigla that contain the word "Kloster" AND "Austria."

This may be changed by combining the search terms with a capital OR: **Kloster OR Austria**will find all sigla that contain either one term or the other. Results are sorted by relevance.

## Fields

The default search is in "All fields," a full text search across the entire inventory of sigla. A combined search (see below) is only possible in this mode.

The fields Name, Library Sigla, City and Country are available in the drop-down menu. Terms that are linked with one of these options are only searched in the selected field.

The following fields are indexed:

* **Name**: The official name of the institution in the local language
* **Library Sigla**: Siglum
* **City**: City or place name in the local language
* Address
* **Country**: In English, according to [ISO-3166-2](https://www.iso.org/obp/ui/#search){:target="_blank"}
* URL: Link to the institution's website
* Alias: Alternative names of the institution
* Reference: See also (usually a different institution)
* Series: Variant sigla in RISM publications A/I, B, etc.
* Now_in: Siglum for the current holding institution
* Note: Comments or notes
* Countno: Number of titles in the catalog for RISM A/II, Music Manuscripts
* Geo: A map showing the institution's location (in beta; some maps default to the downtown or city center)
* Summary: Summary of the collection(s)
* Status: In process (ongoing; refers to the processing status of a collection)

Please note that you must enter cities in the local language ("Wien" instead of "Vienna" and "Warszawa" instead of "Warsaw"). You may omit diacritics in your search.

## Combined Search

In a combined search, any number of fields may be combined by using AND or OR as well as their negative values AND NOT or OR NOT. This only works by searching in "All fields."

Examples:

* The search 'countno:[10 TO 100] AND country:Germany' will find all sigla from Germany with a title count between 10 and 100.
* The search 'name:Archiv AND country:Austria' will find all sigla with the word "Archiv" in the name that are in Austria
* The search 'city:London AND NOT country: "United Kingdom"' will find all sigla from cities named London that are not located in the United Kingdom. Be sure to put the phrase in quotation marks.

Please note: In this example, sigla will also be found in which there is no country name given.

## Tips

The following additional options are available when searching in "All fields."

* A search for **\*** will retrieve all sigla.
* A search for **\* AND NOT country:***will find all sigla in which no country is given.
* Similarly, a search for **\* AND countno:\* AND country:France** will find all sigla with music manuscripts in the catalog from France.
* A fuzzy search is also possible: **name:university~**will find all sigla with words similar to the word "University" in its official name.