/**
* RISM sigla catalog plugin.
* This JS is building html nodes from a RISM-SRU request.to sigla.
* @author: Stephan Hirsch
* @version: 0.1 (september 2020)
*
*/

const nsMarc = "http://www.loc.gov/MARC21/slim";
const nsZing = "http://www.loc.gov/zing/srw/";
var results = document.querySelector('.siglaResultTables');
var records = [];
var startRecord = 1;
var query = {term: '*-*', offset: 1, field: "any"};
var sruhost = "";
var limit = 20;

//Basic html template
var markup = `
      <div class="siglaQuery">
        <div class="siglaQuerySelect">
          <select id="siglaQuerySelect" name="advanced">
            <option value="any">All</option>
            <option value="bath.corporateName">Name</option>
            <option value="librarySiglum">Library Siglum</option>
            <option value="rism.place">City</option>
            <option value="rism.libraryCountry">Country</option>             
          </select>
        </div>
        <div class="siglaQueryInput">
          <input id="siglaQueryInput">
        </div>
        <div class="siglaQuerySubmit">
          <input id="siglaQuerySubmit" type="submit" value="Search">
        </div>
      </div>
      <div class="siglaResultSize"></div>
      <div class="siglaResultTables"></div>
      <div id="siglaPager" class="siglaPager"></div>
`
//Adding listeners
var addListeners = function(){
  document.querySelector("#siglaQuerySubmit").addEventListener("click", (e) => {
    search();
  });
  document.querySelector("#siglaQueryInput").addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      search();
    }} );
};

var buildQueryString = function(obj){
  term = obj.term;
  startRecord = obj.offset;
  field = obj.field;
  queryString = `${sruhost}/sru/institutions?operation=searchRetrieve&version=1.1&query=${field}=${term}%20AND%20librarySiglum=*-*&maximumRecords=${limit}&startRecord=${startRecord}`;
  console.log(queryString);
  return queryString;
}

//Make an ajax request to SRU, build html and push records to results
var search = function(offset=1){
  query.term = document.querySelector("#siglaQueryInput").value;
  query.field = document.querySelector("#siglaQuerySelect").value;
  /*
  if (query.field == "rism.libraryCountry"){
    country_iso = Object.entries(countryCodes).find(i => i[1] === query.term)[0];
    query.term = country_iso;
    //query.term = countryCode[query.term]
  }
  */
  console.log(query.field);
  var xhr = new XMLHttpRequest();

    // Ajax reuest to SRU  
    xhr.onload = function () {
      records = [];
      if (xhr.status >= 200 && xhr.status < 300) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xhr.response, "text/xml");
        var resultSize = xmlDoc.getElementsByTagNameNS(nsZing, "numberOfRecords")[0].innerHTML;
        if (parseInt(resultSize) == 0) {
          document.querySelector("#queryTerm").innerHTML = query.term;
          document.querySelector(".siglaResultSize").innerHTML = `<div>No result for <span id="queryTerm" class="queryTerm">.</span>.`;
          document.querySelector("#queryTerm").innerHTML = query.term;
          document.querySelector('.siglaResultTables').innerHTML = "";
          document.querySelector('.siglaPager').innerHTML = "";
          return 0
        }
        document.querySelector(".siglaResultSize").innerHTML = `RISM: Hits <span id="firstPosition"></span>-<span id="lastPosition"></span> of <span id="resultSize"></span> for <span id="queryTerm" class="queryTerm"></span>.`
        document.querySelector("#queryTerm").innerHTML = query.term;
        document.querySelector("#resultSize").innerHTML = resultSize;
        document.querySelector(".siglaResultSize").style.display = 'block';
        var zingRecords = xmlDoc.getElementsByTagNameNS(nsZing, "record");
        for (let i = 0; i < zingRecords.length; i++) {
          var record = buildRecord(zingRecords[i]);
          records.push(record);
        }
        document.querySelector("#firstPosition").innerHTML = records[0].position;
        document.querySelector("#lastPosition").innerHTML = records.slice(-1)[0].position;
        createElements(records);
        buildPager(resultSize);
      }
      else {
        //FIXME show err at client
        console.log('The request failed!');
      }
      //outer
    };
    query.offset = offset;
    q = buildQueryString(query);
    xhr.open('GET', q);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8"); 
    xhr.send();
}

//Function to add various div-tags to document.parent .siglaResultTables
var createElements = function(collection){
  var parent = document.querySelector('.siglaResultTables');
  while (parent.firstChild) {
    parent.firstChild.remove()
  }
  for (let i = 0; i < collection.length; i++) {
    record = collection[i];
    var div = 
      `<div id="${record.id}" onclick="showDetails(${record.id})" class="resultItem">${record.position}. ${record._110a}${record._110c ? ", " + record._110c : ""}
          ${record.sourceSize ? `<span class="sourceSize">★</span>` : ""}
        <div class="itemSigla">(${record._110g})</div>
      </div>`
    var details = `
        <div id="details_${record.id}" class="itemDetails">
          <b>Information:</b>
          ${record._410a ? `<div><span class="fieldName">Other names: </span><span class="fieldValue">${record._410a}</span></div>` : ""}
          ${record._043c ? `<div><span class="fieldName">Country: </span><span class="fieldValue">${countryCodes[record._043c]}</span></div>` : ""}
          ${record._371a ? `<div><span class="fieldName">Address: </span><span class="fieldValue">${record._371a}</span></div>` : ""}
          ${record._580x ? `<div><span class="fieldName">Now in: </span><span class="fieldValue">${record._580x}</span></div>` : ""}
          ${record._371u ? `<div><span class="fieldName">URL: </span><span class="fieldValue"><a href="${record._371u}" target="_blank">${record._371u}</a></span></div>` : ""}
          ${record.sourceSize ? `<a class="sourceButton" target="_blank" title="See musical sources in RISM Online Catalogue" href="https://opac.rism.info/metaopac/search?View=rism&amp;siglum=${record._110g}">Sources</a>` : ""}
      </div>`
    var element = new DOMParser().parseFromString(div, 'text/html');
    var details_element = new DOMParser().parseFromString(details, 'text/html');
    parent.append(element.body.firstElementChild);
    parent.append(details_element.body.firstElementChild);
   }
}

//Function to build a record object from marcxml-record
var buildRecord = function(xml) {
  var record = {};
  record.position = xml.getElementsByTagNameNS(nsZing, "recordPosition")[0].innerHTML;
  var marc = xml.getElementsByTagNameNS(nsMarc, "record")[0];
  var fields = marc.children;
  let _410ary = [];
  for (let i = 0; i < fields.length; i++) {
    field = fields[i];
    if (field.getAttribute("tag") == "001") {
      record.id = field.innerHTML;
    }

    if (field.getAttribute("tag") == "043") {
      subfields = field.children;
      for (let i = 0; i < subfields.length; i++) {
        subfield = subfields[i];
        if (subfield.getAttribute("code") == "c") {
          record._043c = subfield.innerHTML;
        }
      }
    }
 
    if (field.getAttribute("tag") == "110") {
      subfields = field.children;
      for (let i = 0; i < subfields.length; i++) {
        subfield = subfields[i];
        if (subfield.getAttribute("code") == "a") {
          record._110a = subfield.innerHTML;
        }
        if (subfield.getAttribute("code") == "c") {
          record._110c = subfield.innerHTML;
        }
        if (subfield.getAttribute("code") == "g") {
          record._110g = subfield.innerHTML;
        }
      }
    }

    if (field.getAttribute("tag") == "371") {
      subfields = field.children;
      for (let i = 0; i < subfields.length; i++) {
        subfield = subfields[i];
        if (subfield.getAttribute("code") == "a") {
          record._371a = subfield.innerHTML;
        }
        if (subfield.getAttribute("code") == "u") {
          record._371u = subfield.innerHTML;
        }
      }
    }

    if (field.getAttribute("tag") == "410") {
      subfields = field.children;
      for (let i = 0; i < subfields.length; i++) {
        subfield = subfields[i];
        if (subfield.getAttribute("code") == "a") {
          _410ary.push(subfield.innerHTML);
        }
      }
    }
    if (_410ary.length > 0) {
    record._410a = _410ary.join("; ");
    }
 
    if (field.getAttribute("tag") == "580") {
      subfields = field.children;
      for (let i = 0; i < subfields.length; i++) {
        subfield = subfields[i];
        if (subfield.getAttribute("code") == "x") {
          record._580x = subfield.innerHTML;
        }
      }
    }


    if (field.getAttribute("tag") == "667") {
      subfields = field.children;
      for (let i = 0; i < subfields.length; i++) {
        subfield = subfields[i];
        if (subfield.getAttribute("code") == "a") {
          record.sourceSize = parseInt(subfield.innerHTML.replace("Published sources: ", ""));
        }
      }
    }


  }
  console.log(record);
  return record;
}

// Toggle display of details
var showDetails = function(id){
  var details = document.getElementById(`details_${id}`);
  if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "table-row";
  } else {
        details.style.display = "none";
  }
}

window.onload = function() {
  document.querySelector("#siglaCatalog").innerHTML = markup;
  limit = parseInt(document.querySelector("#siglaCatalog").getAttribute("limit"));
  sruhost = document.querySelector("#siglaCatalog").getAttribute("sruhost");
  addListeners();
}

var buildPager = function(resultSize){
  size = parseInt(resultSize) + limit;
  res = [];
  for (let i = 1; i < size; i++) {
    if (i % limit == 0) {
      res.push(`<span class="pagerItem" onClick="search(${i - (limit - 1)})">${i / limit }</span>   `)
    }  
  }
  document.getElementById(`siglaPager`).innerHTML = res.join("");

}

var countryCodes = {
  "XC-DZ":"Algeria",
  "XD-AR":"Argentina",
  "XB-AM":"Armenia",
  "XE-AU":"Australia",
  "XA-AT":"Austria",
  "XA-BE":"Belgium",
  "XC-BJ":"Benin",
  "XD-BR":"Brazil",
  "XA-BG":"Bulgaria",
  "XB-KH":"Cambodia",
  "XD-CA":"Canada",
  "XD-CL":"Chile",
  "XB-CN":"China",
  "XD-CO":"Colombia",
  "XA-HR":"Croatia",
  "XD-CU":"Cuba",
  "XA-CZ":"Czech",
  "XA-DK":"Denmark",
  "XC-EG":"Egypt",
  "XA-EE":"Estonia",
  "XA-FI":"Finland",
  "XA-FR":"France",
  "XA-DE":"Germany",
  "XA-GR":"Greece",
  "XD-GT":"Guatemala",
  "XA-VA":"Holy See",
  "XD-HN":"Honduras",
  "XA-HU":"Hungary",
  "XA-IS":"Iceland",
  "XB-IN":"India",
  "XB-IR":"Iran",
  "XA-IE":"Ireland",
  "XB-IL":"Israel",
  "XA-IT":"Italy",
  "XB-JP":"Japan",
  "XB-KR":"Korea",
  "XA-LV":"Latvia",
  "XA-LT":"Lithuania",
  "XA-LU":"Luxembourg",
  "XA-MT":"Malta",
  "XD-MX":"Mexico",
  "XA-ME":"Montenegro",
  "XA-NL":"Netherlands",
  "XE-NZ":"New Zealand",
  "XA-NO":"Norway",
  "XD-PY":"Paraguay",
  "XA-PL":"Poland",
  "XA-PT":"Portugal",
  "XD-PR":"Puerto Rico",
  "XA-RO":"Romania",
  "XA-RU":"Russia",
  "XA-RS":"Serbia",
  "XA-SK":"Slovakia",
  "XA-SI":"Slovenia",
  "XC-ZA":"South Africa",
  "XA-ES":"Spain",
  "XA-SE":"Sweden",
  "XA-CH":"Switzerland",
  "XB-SY":"Syria",
  "XD-TT":"Trinidad and Tobago",
  "XB-TR":"Turkey",
  "XA-UA":"Ukraine",
  "XA-GB":"United Kingdom",
  "XD-US":"USA",
  "XD-UY":"Uruguay",
  "XD-VE":"Venezuela",
  "XB-VN":"Viet Nam",
  "XD-EC":"Ecuador",

}









