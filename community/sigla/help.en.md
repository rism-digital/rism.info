---
title: Sigla Help
layout: community
lang: en
permalink: /community/sigla/help.html
old_url: http://www.rism.info/en/sigla/help.html
---

# Guide to using the Online Directory of RISM Library Sigla

## All fields (Default)

Enter one or more keywords to search across all fields in an institution record. Search terms are combined by default. For example, **Archiv Austria** will return all institutions that contain the word **Archiv** and **Austria**.

To search for terms that can appear in any record, use OR in capital letters: **Archiv OR Austria** will find all institutions that contain either one term or the other.

Results are sorted by relevance, but with a weight given to the number of holdings in that particular institution, so that larger institutions (and thereby more "prominent" institutions) are sorted first, all other things being equal.

## Dedicated Fields

The fields **Name**, **Library siglum**, **City**, and **Country** can be selected in the drop-down menu for more specific searches. Please note the following:

* Name: The official name or alternative names of the institution. For example, "National Library of Wales" will return the record for ["Llyfrgell Genedlaethol Cymru"](https://rism.online/institutions/30001516), the official Welsh name for the National Library.
* Library siglum: Sigla are automatically expanded so partial matches are possible. For example, a search for "GB-O" will find GB-Ob, GB-Och, etc.
* City: Search using the local name. US states can also be searched here by the postal abbreviation (WI, IL, etc.).
* Country: Search for countries using their names. We make a best effort to match country names in all languages supported by RISM (English, French, German, Italian, Polish, Portugese, and Spanish).

## Tips

* A search for **\*** will retrieve all institutions that have a siglum assigned.
* In the list of results, click on any institution to see full details for that institution in [RISM Online](https://rism.online). The "Sources" tab in RISM Online will let you search the source records held by, or otherwise related to, that institution.

## Technology used

The sigla search uses the public Sigla Search API from [RISM Online](https://rism.online). You can read more about how it works in the [documentation for this API](https://rism.online/docs/api/sigla-api/). Sigla search also works directly in the [Institutions search](http://dev.rism.offline/?mode=institutions) there.
