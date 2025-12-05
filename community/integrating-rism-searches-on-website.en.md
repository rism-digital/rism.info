---
title: "Integrating RISM Searches on your Website"
layout: community
lang: en
permalink: /community/integrating-rism-searches-on-website.html
---

# Integrating RISM Searches on your Website  

Have you ever wanted a custom search page for the RISM database? Perhaps you want to automatically limit your searches to a specific country, or to a given institution or person. Maybe you want to pre-apply a set of filters to provide your users with a search interface for manuscripts or prints. Whatever your reasons, there are a number of ways you can use the [RISM Online Search API](https://rism.online/docs/api/api/){:blank} to build custom searches on your own website.  

## Getting Started

To begin, you should have some basic knowledge of HTML, the computer language that all webpages are written in. You will also need a place to publish your webpage on the internet so that others can use it. There are many different ways of embedding "raw" HTML in the various web publishing platforms (such as Wordpress) so you should check the documentation for your own system.

We will begin with a basic example, and then will analyse how it functions.

```html
<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="hidden" name="mode" value="sources" />
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>
```

This will create a very simple text input box that looks like this:  

<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="hidden" name="mode" value="sources" />
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>  
&nbsp;  

There are a few important pieces to note. The `action` attribute on the `<form>` tag sets the URL to which the search will be submitted. The `<input>` tag creates a text input block, and the `name="q"` specifies the parameter name for any text entered into this block. Finally, the `<button>` element will create a button that will submit the form.

When the button is clicked, the browser will use all of this information to create a URL that will direct the user to the [RISM Online website](https://rism.online){:blank}. If, for example, the user enters "Josephine Lang" into RISM Online's source search input box, the URL will look like this:

`https://rism.online/search/?q=Josephine%20Lang&mode=sources`

You can see from this URL that the `q` parameter we specified is automatically appended to the end of the URL.

## Pre-defined Filters

The [RISM Online documentation](https://rism.online/docs/){:blank} provides information about a number of other parameters that can be specified, along with `q`, that are used to control the search results.

Sometimes you may wish to automatically send these values in your search query without requiring your users to know how to input the correct values for that parameter. For example, if you wanted to restrict your searches to the national collections of Poland, you can supply a hidden input field. Expanding on our earlier example:

```html
<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="hidden" name="mode" value="sources" />
        <input type="hidden" name="nc" value="PL" />
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>
```  

The text input box will look like this:  

<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">Search RISM Online</label>
        <input type="hidden" name="mode" value="sources" />
        <input type="hidden" name="nc" value="PL" />
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>  
&nbsp;  

When the submit button is pressed with this form, the `nc=PL` value will automatically be applied to every URL that gets sent, thus automatically filtering all searches to only sources in Poland. Entering a name such as "Maria Szymanowska" in the input box would then create a URL that looks like this:

`https://rism.online/search?q=Szymanowska,%20Maria&nc=PL&mode=sources`

You can specify multiple filters this way, and even repeat them if you need multiple values set.

Some filters have a more involved way of constructing the value. If you want to automatically restrict your searches to only manuscript sources, the hidden input might look like this:

`<input type="hidden" name="fq" value="source-type:manuscript" />`

This is because the `fq` parameter takes a field (`source-type`) and a value for that field (`manuscript`). If you are ever confused or unsure about how these parameters can be constructed, you can always run your search using the RISM Online user interface, and then look at the resulting URL that it constructs.

You may also use this same method to provide your users with multiple search input boxes so that they can supply multiple values. Again, consulting the search URLs constructed by the RISM Online interface can be instructive here, but we will not cover it on this page.

## Search within Institutions

Every institution in RISM Online comes with its own dedicated search interface. We can use this to create a dedicated search interface for that institution by varying the `action` URL we provide in the form to point to the search URL for that institution. Starting with our basic example, we can build a form that will search all sources in the National Library of the Czech Republic:

```html
<form action="https://rism.online/institutions/30000083/sources" method="get">
    <div>
        <label for="mySearch">Search the National Library of the Czech Republic in RISM Online</label>
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>
```

The text input box will look like this:  

<form action="https://rism.online/institutions/30000083/sources" method="get">
    <div>
        <label for="mySearch">Search the National Library of the Czech Republic in RISM Online</label>
        <input type="search" id="mySearch" name="q" />
        <button>Search</button>
    </div>
</form>  
&nbsp;  

All search parameters that we used previously are available, so you can also use the `hidden` input to pre-fill a number of options in these searches as well. (However, the `nc` parameter may not work as you expect in combination with your chosen institution, since limiting your searches to Polish sources in institutions that are not in Poland will give unexpected results.)

Every person record in RISM Online also has a dedicated search interface, so you can use the same technique to provide a dedicated search box for a specific person.

## Incipit Search

Finally, the RISM Online Search API provides a method of using the incipit searches. These search queries are written in [Plaine and Easie Code](https://plaine-and-easie.info/v1/index.html).

```html
<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">RISM Online Incipit Search</label>
        <input type="hidden" name="mode" value="incipit" />
        <input type="search" id="mySearch" name="n" />
        <button>Search</button>
    </div>
</form>
```

The input box will look like this:   

<form action="https://rism.online/search" method="get">
    <div>
        <label for="mySearch">RISM Online Incipit Search</label>
        <input type="hidden" name="mode" value="incipit" />
        <input type="search" id="mySearch" name="n" />
        <button>Search</button>
    </div>
</form>  
&nbsp;   

Notice here that we have removed the `q` parameter and replaced it with `n`. Any input text here will be interpreted as Plaine and Easie Code, and evaluated against over two million incipits in the RISM Online system. If we supply a search query such as the famous "B-A-C-H" which, when written as Plaine and Easie Code becomes `bBA''C'nB`, the URL this input produces will result in:

`https://rism.online/search?mode=incipits&n=bBA%27%27C%27nB`

## Other Ways of Embedding RISM Online

There are many other ways you can integrate RISM Online with your website. If you want to embed a Source, Person, or Institution record into a blog post, you can use an `<iframe>` to give a "window" into RISM Online. The embedded view of the record will be specially formatted to fit with your website.

```
<iframe src="https://rism.online/people/41008869" width="800" height="600"></iframe>
```  

The embedded record for Alma Mahler will look like this:  

<iframe src="https://rism.online/people/41008869" width="800" height="600"></iframe>  
&nbsp;  

Finally, if you have programming experience then the possibilities are almost endless! You should have a look at the RISM Online API for how to deliver records and search results in a machine-readable JSON-LD format, so that you can further integrate both searches and results into your own applications.

Our goal in providing all these possible integrations is to make RISM an integral part of any digital music research project. We hope you find these tools valuable, and we will continue to work to make more data, and more access records, available to our global community.
