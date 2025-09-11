---
layout: post
title: "Using RISM Data to Map Opera Premieres"
date: 2025-09-11
lang: en
post: true
category: in_the_news
image: "/images/news/2025-09/using-rism-map-opera-premieres_website.jpg"
email: 'matthew.lorenzon@gmail.com'
author: 'Matthew Lorenzon'
---

_The following is a guest post by Matthew Lorenzon (Digital Marketing Manager, Musica Viva Australia):_

I made an [animated map of opera premieres](https://www.youtube.com/watch?v=Kcf_H5wx1jc){:blank} from the Répertoire International des Sources Musicales (RISM) database. Here’s how.

The growth of Big Data over the past decades has fed a wave of professional and amateur content creators. The [r/dataisbeautiful](https://www.reddit.com/r/dataisbeautiful){:blank} subreddit has over 22 million subscribers geeking out over statistics presented in a dazzling array of charts, maps, and animations. Artificial intelligence (AI) offers opportunities to further enhance this field by interpreting messy data. I decided to have a go at my own animation, exercising my Musicology PhD while developing my professional skills in video production.

But first, I needed data. Musicology had its own Big Data moment including the Big Data History of Music project by Stephen Rose, Sandra Tuppen, and Loukia Drosopoulou. Unfortunately, public access to this project suffered from a hack at the British Library in 2023.

I turned to RISM, which has made its entire database [available to download](https://rism.digital/exports/index.html){:blank}. To visualize a score on a map I needed two key pieces of information: year and location. It quickly became clear that extracting consistent, machine-readable dates and locations would be a challenge. The dataset has developed over several decades and is a palimpsest of data management practices. Even if locations and dates are held in a dedicated field, naming and dating conventions can differ. Especially with data imported on the basis of earlier printed catalogs, all the relevant information may be crammed into the title field.

The year and date would be used to map a specific event, so which one should I choose? The RISM database includes references to a multitude of events: composition, copying, performance, donation, or even accession into the archive. Similarly, locations can refer to where the document was created, performed, where it is currently or was previously held, or even the location of a donor.

Fortunately, there is one field that offers a relatively consistent date and location for a specific purpose: First Performance. I decided to focus on opera and opera-like genres (_Singspiele_, _tragédies lyriques_, etc.), assuming that the strength of scholarship in the field meant I was likely to find quality data there. Opera premieres also gave me a strong signal for musical activity in a location: a new opera requires a sophisticated network of musicians, costumiers, theater staff, audience members, and patrons. It could be used as a proxy for all sorts of economic and social activity.

I restricted the data to 1600-1799 to capture the first operas with extant sources. I chose an end-year of 1799 and restricted the locations to Europe for ease of visibility. 

I began with the MarcXML First Performance string and used a text filter (regex) to see what could be parsed directly. I looked for a 4-digit year alongside text, hopefully a city, immediately following the date. That gave me a suspiciously high starting point of 28,875 entries.

I now needed to distinguish between proper location text and irrelevant text. I refined the data with AI. I batch-processed the First Performance strings text through a large language model designed to return (as JSON data) the year and location of the performance. I provided special instructions for handling names of theaters or irrelevant locations.

I cross-referenced the location geocoordinates with GeoNames, a free and open source geolocation database. To visualize the data, I chose GeoLayers 3, an extension for Adobe’s motion graphics app After Effects that I had long been wanting to learn. I used open-source historical world map coordinates maintained by [aourednick](https://github.com/aourednik/historical-basemaps){:blank}.

As something of an afterthought, I added a favorite data layer of the mapping community: historical battles. This data is readily available via Wikidata. Surely, if opera required a strong, coordinated network for its production, we would see fewer operas in a region plunged in war?

The resulting map bears this out, with opera’s first heartbeats in northern Italy visible while the 30 Years’ War rages in Central Europe. I am also struck by how opera premieres were concentrated in centers of power, regardless of the state’s size. In France and England, operas were almost exclusively restricted to capital cities and their surrounds, while the diversity of Italian and Central European states provided many more centers for operatic activity.

<iframe width="560" height="315" src="https://www.youtube.com/embed/A2WdjyKQ57A" frameborder="0" allowfullscreen></iframe>


There is much room to improve. The dataset includes some improbably large numbers (457 opera premieres in Vienna in 1786? I know it was a hotbed of activity, but really?) which are probably the result of multiple entries relating to popular operas (in this case _Le Nozze di Figaro_). Therefore, I decided to show the data as circles of different sizes on a logarithmic scale to indicate relative operatic activity rather than absolute numbers.

AI models are improving apace, and processing long text fields will get cheaper and more reliable. Already, repeating this process would render a more accurate map at a lower cost. I look forward to making more when RISM updates its location authorities next year.
