---
title: Sigla Help
layout: community
lang: en
permalink: /community/sigla/help.html
---

# Guide to using the siglum directory

## Introduction

This Online Directory of RISM Library sigla contains information about ca. 8.500 siglas.
RISM Sigla are used to refer to institutions that contain historical music collections.

They are composed of a country abbreviation, a city abbreviation, and an institution abbreviation.

In I-Rc, I stands for Italy, R is for Rome, and c is for the Biblioteca Casanatense.

In US-PHf, US stands for the United States, PH is for Philadelphia, and f is for the Free Library of Philadelphia.

Once you find the country and city you need, you can search the RISM online catalog for all sources from this location. Choose the field Library siglum.

Use the symbol * to truncate.

Examples:
I-R* for all sources currently in Rome, and US-PH* for all sources currently in Philadelphia.
I-* for all sources in Italy, and US-* for all sources in the United States.

 
## Searching Basics

1. Search for countries using their names. Supported languages are English, French, German and Italian.

2. Search for cities and institutions using their local names

3. Search for US states by the postal abbreviation in the field City (WI, IL, etc.)

## Simple Search

The simple search supports searching by phrase. The search logic uses AND as a default. For example, “Archiv Austria” will return all sigla that contain the word “Archiv” AND “Austria.”

This may be changed by combining the search terms with a capital OR: “Archiv OR Austria” will find all sigla that contain either one term or the other. Results are sorted by relevance.

## Fields

The default search is in “All fields,” a full text search across the entire inventory of sigla. A combined search (see below) is only possible in this mode.

The fields Name, Library Sigla, City and Country are available in the drop-down menu. Terms that are linked with one of these options are only searched in the selected field.

The following fields amongst others are indexed:

* Name: The official name or alternative names of the institution in the local language (bath.corporateName)
* Library Sigla: Siglum (rism.librarySiglum)
* Place: City or place name in the local language (rism.place)
* Country: In English, French, German or Italian (rism.libraryCountry)

Please note that you must enter cities in the local language ("Wien" instead of "Vienna" and "Warszawa" instead of "Warsaw"). You may omit diacritics in your search.

## Combined Search

In a combined search, any number of fields may be combined by using AND or OR. This only works by searching in “All fields.”

Example:

* The search 'name=Bach AND country=USA' will find all sigla with the word “Bach” in the name that are in the United States

 
## Tips

A search for '\*' will retrieve all sigla.


## Technology used

Queries are running against the official RISM SRU server at muscat.rism.info. A complete index configuration is available at https://muscat.rism.info/sru/institutions

