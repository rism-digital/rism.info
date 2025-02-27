---
layout: post
title: "RISM Online Winter 2025 Update"
date: 2025-02-27
lang: en
post: true
category: rism_digital_center
image: "/images/news/2025-02/rism-online-query-builder.jpg"
email: 'andrew.hankinson@rism.digital'
author: 'Andrew Hankinson'
---
The Winter 2025 Update for RISM Online brings with it a whole array of new features, improvements, and bug fixes. This update has been in development since August of 2024, and we hope you will find the changes to be useful.

## Cantus Database Integration

RISM Online will now provide results coming from the records of the [Cantus Database](https://cantusdatabase.org). This database is a vital resource for chant scholars, and the inclusion of their source records in RISM Online will help us direct interested users to the extensive amount of scholarly research in the Cantus Database.

A significant component of this integration work was aligning the Holding Institution records for Cantus and RISM. In RISM Online, Cantus source records in holding institutions will also appear, providing a better overview of library collections regardless of the cataloguing project. (Incidentally, the same is true for DIAMM records!)

Check out the results of [a search for "Antiphoner"](https://rism.online/search?q=Antiphoner&mode=sources&page=1&rows=20) in RISM Online to see what Cantus Database integration looks like.

To see the integration with Holding Institutions, check out the record for [CDN-Mlr, The Humanities and Social Sciences Library at McGill University](https://rism.online/institutions/30006518/sources).

## Query Builder and Better Keyword Search

The new update introduces an enhanced Keyword Search box, with a Query Builder tool that will help you start creating more complex queries.

The new functionality lets you use a number of search operators (`AND`, `OR`, `NOT`), wildcards, and term boosting to help express what you are looking for. In addition, a number of fields can be queried directly.

The Query Builder gives you a clickable interface for constructing these queries to help users familiarize themselves with the new query syntax. Once you are familiar with the syntax, you can simply write the queries directly.

For example, to find sources where the Watermark field lists either "flower" or "plant" and whose creator field contains Mozart, the query would look like this:

  `(watermark:flower OR watermark:plant) AND creator:Mozart` [\[Try it out\]](https://rism.online/search?q=(watermark:flower%20OR%20watermark:plant)%20AND%20creator:Mozart)

Or, to find the sources that have an anchor in the watermark, a creator of "Mozart", but the word "Breitkopf" does not appear anywhere in the record, you might try:

  `watermark:anchor creator:Mozart -Breitkopf`  [\[Try it out\]](https://rism.online/search?q=watermark:anchor%20creator:Mozart%20-Breitkopf)

As you type in the keyword query box, your query is constantly validated and feedback is provided. This includes a preview of the number of results that would be found, and a status icon letting you know whether your query is valid or not.

Specifics about this new feature can be found in the [Query Builder Documentation](https://rism.online/docs/query-builder/introduction/).

A few other examples:

 - `creator:Palestrina NOT siglum:V-CVbav` [\[Try it out\]](https://rism.online/search?q=creator:Palestrina NOT siglum:V-CVbav) Find sources whose creator is Palestrina, but not found in the Vatican library
 - `title:Erlkönig -Schubert` [\[Try it out\]](https://rism.online/search?q=title:Erlkönig -Schubert) Retrieve sources with the title "Erlkönig" but the term "Schubert" is not in the record
 - `creator:Purcell AND (siglum:F-* OR  siglum:I-*)` [\[Try it out\]](https://rism.online/search?q=creator:Purcell AND (siglum:F-* OR  siglum:I-*)) Retrieve sources by Purcell that are located either in France or Italy
 - `series:P? 2640` [\[Try it out\]](https://rism.online/search?q=series:P? 2640) Retrieve sources that match "P 2640" in the older RISM series identifiers (e.g., A/I), but allow for the alternative "PP 2640" with a single-character wildcard.

## Mobile User Interface

When accessing RISM Online on a mobile phone, the user interface is now optimized for viewing on the smaller screen, making it easier to search RISM Online on the go. Facets and other advanced search tools were not included in the mobile user interface in this release, but the content was made to fit the smaller screens.

(Along the way, the user interface for non-mobile devices was also improved so that it displays better on a wider variety of screens.)

## Work Nodes and External Work Authorities

RISM has been working with external work authorities to link together sources containing the same musical work identifier. These identifiers are now shown on Source records, and a list of all known work identifiers for a given person are shown on their Person record.

## Odds and Ends

This is a list of all the smaller improvements that do not merit their own paragraph, but are notable nonetheless.

* Optimized SVG images. The SVG images were optimized, leading to a smaller overall page load.
* Enabled HTTP/3. The latest version of the HTTP standard provides better utilization of network resources.
* Switched to haproxy for the load balancer. Internally we are now using haproxy as the load balancer for our api services.
* Added timestamps to the "About" page to show the last time DIAMM, Cantus, and RISM were reindexed.
* Fixed a bug where multiple colons were causing queries to crash.
* Changed the view of coordinates to match the expected order of Latitude, Longitude.
* Introduced a new Lucene Query Syntax parser to validate and provide feedback on the new queries.
* Improved detection of dates in the indexer
* Continued improvements and updates to the translations

## About RISM Online

RISM Online (https://rism.online) is the pre-eminent search interface for the Répertoire International des Sources Musicales project. We serve over 30,000 users each month, helping people around the globe find the music they need in the libraries around the world. Our records are updated every day from the latest additions and updates from RISM cataloguers. We also index and integrate records from high-quality external databases such as the Digital Image Archive of Medieval Music and the Cantus Database.

Comments and feedback are always welcome at [feedback@rism.online](mailto:feedback@rism.online).
