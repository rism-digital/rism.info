---
layout: post
title: "RISM Online Winter 2025 Update"
date: 2025-03-13
lang: en
post: true
category: rism_digital_center
image: "/images/news/2025-02/rism-online-query-builder.jpg"
email: 'andrew.hankinson@rism.digital'
author: 'Andrew Hankinson'
---

The Winter 2025 Update for RISM Online brings with it a whole array of new features, improvements, and bug fixes. This update has been in development since August of 2024, and we hope you will find the changes useful.

## Cantus Database Integration

RISM Online will now provide results from the [Cantus Database](https://cantusdatabase.org){:blank}. This database is a vital resource for chant scholars, and the inclusion of their source records in RISM Online will help us direct interested users to the extensive amount of scholarly source research in the Cantus Database.

A significant component of this integration work was aligning the Holding Institution records for Cantus and RISM. In RISM Online, Cantus source records in holding institutions will also appear, providing a better overview of library collections regardless of the cataloguing project. (Incidentally, the same is true for DIAMM records!)

Check out the results of [a search for "Antiphoner"](https://rism.online/search?q=Antiphoner&mode=sources&page=1&rows=20){:blank} in RISM Online to see what Cantus Database integration looks like.

To see the integration with Holding Institutions, check out the record for [CDN-Mlr, The Humanities and Social Sciences Library at McGill University](https://rism.online/institutions/30006518/sources){:blank}.

## Query Builder and Better Keyword Search

The new update introduces an enhanced Keyword Search box, with a Query Builder tool that will help you start creating more complex queries.

The new functionality lets you use a number of search operators (`AND`, `OR`, `NOT`), wildcards, and term boosting to help express what you are looking for. In addition, a number of fields can be queried directly.

The Query Builder gives you a clickable interface for constructing these queries to help users familiarize themselves with the new query syntax. Once you are familiar with the syntax, you can simply write the queries directly.

For example, to find sources where the Watermark field lists either "flower" or "plant" and whose creator field contains Mozart, the query would look like this:

  `(watermark:flower OR watermark:plant) AND creator:Mozart` [\[Try it out\]](https://rism.online/search?q=(watermark:flower%20OR%20watermark:plant)%20AND%20creator:Mozart){:blank}

Or, to find the sources that have an anchor in the watermark, a creator of "Mozart", but the word "Breitkopf" does not appear anywhere in the record, you might try:

  `watermark:anchor creator:Mozart -Breitkopf`  [\[Try it out\]](https://rism.online/search?q=watermark:anchor%20creator:Mozart%20-Breitkopf){:blank}

As you type in the keyword query box, your query is constantly validated and feedback is provided. This includes a preview of the number of results that would be found, and a status icon letting you know whether your query is valid or not.

Specifics about this new feature can be found in the [Query Builder Documentation](https://rism.online/docs/query-builder/introduction/).

A few other examples:

 - `creator:Palestrina NOT siglum:V-CVbav` [\[Try it out\]](https://rism.online/search?q=creator:Palestrina%20NOT%20siglum:V-CVbav){:blank} Find sources whose creator is Palestrina, but not found in the Vatican library
 - `title:Erlkönig -Schubert` [\[Try it out\]](https://rism.online/search?q=title:Erlkönig%20-Schubert){:blank} Retrieve sources with the title "Erlkönig" but the term "Schubert" is not in the record
 - `creator:Purcell AND (siglum:F-* OR  siglum:I-*)` [\[Try it out\]](https://rism.online/search?q=creator:Purcell%20AND%20(siglum:F-*%20OR%20siglum:I-*)){:blank} Retrieve sources by Purcell that are located either in France or Italy
 - `series:P? 2640` [\[Try it out\]](https://rism.online/search?q=series:P?%202640){:blank} Retrieve sources that match "P 2640" in the older RISM series identifiers (e.g., A/I), but allow for the alternative "PP 2640" with a single-character wildcard.

## Mobile User Interface

When accessing RISM Online on a mobile phone, the user interface is now optimized for viewing on the smaller screen, making it easier to search RISM Online on the go. Facets and other advanced search tools were not included in the mobile user interface in this release, but the content was made to fit the smaller screens.

(Along the way, the user interface for non-mobile devices was also improved so that it displays better on a wider variety of screens.)

## External Work Authorities

RISM has been working with external work authorities to link together sources containing the same musical work identifier. These identifiers are now shown on Source records, and a list of all known work identifiers for a given person are shown on their Person record.

For example, the record for [Felix Mendelssohn Bartholdy](https://rism.online/people/88790) now shows a table of the External Authorities for his works in the Gemeinsame Normdatei (GND) authority. The table includes links for finding all source records linked to that same authority in RISM Online, as well as a link to view the record in the External Work Authority.

## CSV Record Download

Results of searches that return fewer than 5,000 records can now be downloaded as a Comma Separated Value (CSV) file. This is available for all search types: Sources, People, Institutions, and Incipits. The CSV results include a link to the record in RISM Online, and an option to include a link to the original search query that produced those results.

## Odds and Ends

This is a list of all the smaller improvements that do not merit their own paragraph, but are notable nonetheless.

* Direct link to MARCXML records. While MARCXML has been available in RISM Online for a while, we now display a direct link to the MARCXML in the footer of every record.
* Optimized SVG images. The SVG images were optimized, leading to a smaller overall page load.
* Enabled HTTP/3. The latest version of the HTTP standard provides better utilization of network resources, improving the speed and responsiveness of RISM Online.
* Switched to haproxy for the load balancer. Internally we are now using haproxy as the load balancer for our API services.
* Added timestamps to the "About" page to show the last time DIAMM, Cantus, and RISM indexes were updated.
* Fixed a bug where multiple colons were causing queries to crash.
* Changed the view of coordinates to match the expected order of Latitude, Longitude.
* Introduced a new Lucene Query Syntax parser to validate and provide feedback on the new queries.
* Improved detection of dates in the indexer.
* Continued improvements and updates to the translations.

## About RISM Online

[RISM Online](https://rism.online){:blank} is a search interface for the Répertoire International des Sources Musicales. We serve over 30,000 users each month, helping people around the globe find the music they need in the libraries around the world. Our records are updated every day from the latest additions and updates from RISM cataloguers. We also index and integrate records from high-quality external databases such as the Digital Image Archive of Medieval Music and the Cantus Database.

Comments and feedback are always welcome at [feedback@rism.online](mailto:feedback@rism.online){:blank}.
