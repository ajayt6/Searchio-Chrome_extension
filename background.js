// Copyright (c) 2012 ajayt6. All rights reserved.
// Use of this source code is governed by a BSD-style license 




var searchUrls=[
"http://www.google.co.in/#hl=en&q=",	//Google - 0
"http://www.youtube.com/results?search_query=",	//Youtube - 1
"http://www.google.com/search?num=10&hl=en&site=imghp&tbm=isch&source=hp&q=",	//Google Images - 2
"http://www.imdb.com/find?q=",	//IMDB - 3
"http://en.wikipedia.org/w/index.php?search=",	//Wikipedia - 4
"http://grooveshark.com/#!/search/song?q=",	//Grooveshark - 5
"http://www.rottentomatoes.com/search/?search=",	//Rotten Tomatoes - 6
"https://duckduckgo.com/?q=",	//DuckDuckGo - 7
"http://www.google.co.in/#hl=en&btnI=1&q=",	//I am feeling lucky(IAFL) - 8
"http://www.google.co.in/#hl=en&btnI=1&q=inurl:imdb.com%20",	//IAFL IMDB - 9	
"http://www.google.co.in/#hl=en&btnI=1&q=inurl:en.wikipedia.org%20",	//IAFL Wikipedia - 10
"https://twitter.com/search?q=",	//Twitter - 11
"http://www.facebook.com/srch.php?nm=",	//Facebook - 12
"http://answers.yahoo.com/search/search_result;_ylt=AsUneLQBL.OofYJQHkYXVB7j1KIX;_ylv=3?submit-go=Search+Y%21+Answers&p=",	//Yahoo Answers - 13
"http://www.flipkart.com/search/a/all?query=",	//Flipkart - 14
"http://www.ebay.in/sch/i.html?_trksid=p3907.m570.l1313&_nkw=",	//Ebay - 15
"http://www.infibeam.com/search.jsp?storeName=All&query=",	//Infibeam - 16
"http://torrentz.eu/search?f="	//Torrent search - 17
]; 

var mquery=new Array();  
var multiple;
var incognito;
var role;

//The Main Function
function kernel(choice,input,incognito,mquery,role)
{
multiple=0;

switch(choice)
	{
				case '`':   modquery=searchUrls[8]+encodeURI(input);			break;										//I am feeling lucky			
	case cI1:	incognito=1;		
	case c1:	case '`y':	modquery=searchUrls[1]+encodeURI(input);			break;										//youtube			
	case cI2:   incognito=1;
	case c2:	case '`i':	modquery=searchUrls[2]+encodeURI(input);			break;										//google images			
				case '`d':	modquery=searchUrls[7]+encodeURI(input);			break;										//duckduckgo			
	case cI3:   incognito=1;
	case c3:	case '`im':	modquery=searchUrls[3]+encodeURI(input);			break;										//imdb			
	case cI4:   incognito=1;
	case c4:	case '`w':	modquery=searchUrls[4]+encodeURI(input);			break;										//wikipedia			
				case '`t':	modquery=searchUrls[11]+encodeURI(input);			break;										//twitter			
				case '`f':	modquery=searchUrls[12]+encodeURI(input);			break;										//facebook			
	case cI5:   incognito=1;
	case c5:	case '`g':	modquery=searchUrls[5]+encodeURI(input);			break;										//grooveshark			
				case '`ya':	modquery=searchUrls[13]+encodeURI(input);			break;										//yahoo answers
			
	case ccI0:  incognito=1;
	case cc0:	case '`m':														//Multiple site search {wikipedia,imdb,rotten tomatoes} 
					modquery=searchUrls[4]+encodeURI(input);		
					mquery[0]=searchUrls[3]+encodeURI(input);			
					mquery[1]=searchUrls[6]+encodeURI(input);			
					multiple=1;
					break;
		case '`cp':														//Multiple site search {facebook,twitter}
					modquery=searchUrls[12]+encodeURI(input);
					mquery[0]=searchUrls[11]+encodeURI(input);
					multiple=1;
					break;
	case ccI1:	incognito=1;
	case cc1:	case '`song':													//Multiple site search {youtube,grooveshark,lyrics}
					modquery=searchUrls[1]+encodeURI(input);
					mquery[0]=searchUrls[5]+encodeURI(input);
					mquery[1]="http://www.google.co.in/#hl=en&btnI=1&q="+input+"%20lyrics";	
					multiple=1;
					break;
	case ccI2:	incognito=1;
	case cc2:	case '`info':													//Multiple site search {google,wikipedia,google images}
					modquery=searchUrls[0]+encodeURI(input);
					mquery[0]=searchUrls[4]+encodeURI(input);
					mquery[1]=searchUrls[2]+encodeURI(input);
					multiple=1;			
					break;
		case '`qa':														//Multiple site search {google,yahoo answers}
					modquery=searchUrls[0]+encodeURI(input);
					mquery[0]=searchUrls[13]+encodeURI(input);
					multiple=1;
					break;
	case ccI3:	incognito=1;
	case cc3:	case '`shop':													//Multiple site search {flipkart,ebay,infibeam}
					modquery=searchUrls[14]+encodeURI(input);
					mquery[0]=searchUrls[15]+encodeURI(input);
					mquery[1]=searchUrls[16]+encodeURI(input);
					multiple=1;
					break;
	case ccI10:   incognito=1;
	case cc10:	case '`su':	modquery=searchUrls[0]+encodeURI(input+" english subs")+"&btnI=1";			break;  			//Subtitle search (IAFL)
	case ccI11:	  incognito=1;
	case cc11:  case '`to':	modquery=searchUrls[17]+encodeURI(input);			break;										//Torrent search
	case ccI12:	  incognito=1;
	case cc12:  case '`me':	modquery=searchUrls[0]+encodeURI(input+" metacafe");			break;										//Metacafe
		case cI0:	incognito=1;
		case c0:	default:											//changed from duckduckgo in 0.3.2 t0 i am feeling lucky of google in 0.3.4 to google in 0.3.41
					modquery=searchUrls[0]+encodeURI(input);
					break;
	}
	if(!incognito)
	{
		if(role==0)
		chrome.tabs.update({url: modquery});
		else
		chrome.tabs.create({"url" : modquery });
		
		if(multiple)
		{	
		for(x in mquery)
		chrome.tabs.create({windowId: -2,url: mquery[x],active: false});
		}
		
	}
	else
	{
		chrome.windows.getCurrent(function (currentWindow) {
		if(currentWindow.incognito)
		chrome.tabs.create({"url" : modquery });
		else
		chrome.windows.create({
								url: modquery,
								incognito: true,
								focused: true
							  });
		if(multiple)
		{
		for(x in mquery)
		chrome.tabs.create({windowId: -2,url: mquery[x],active: false});
		}
		
		});
							 
		//alert(chrome.windows.WINDOW_ID_CURRENT);
		
	}
	incognito=0;
	
}

// Method to handle the context click
function genericOnClick(info, tab) {
role=1;
  if (info.selectionText) 
  kernel(info.menuItemId,info.selectionText,0,mquery,role);
 
  if (info.mediaType === "image") {
		// The user selected an image
		searchUrl="http://images.google.com/searchbyimage?image_url=";
		searchUrl += encodeURI(info.srcUrl);
		chrome.tabs.create(
          {"url" : searchUrl });
  }
  
}

// Create appropriate context menu item for each context type.
var contexts = ["page","selection","link","editable","image","video","audio"];
var textPar = chrome.contextMenus.create({"title": "Searchio! search", "contexts":["selection"]});
var c0 = chrome.contextMenus.create(
  {"title": "Google", "parentId": textPar,"contexts":["selection"], "onclick": genericOnClick});
var c1 = chrome.contextMenus.create(
  {"title": "Youtube", "parentId": textPar,"contexts":["selection"], "onclick": genericOnClick});
var c2 = chrome.contextMenus.create(
  {"title": "Google Images", "parentId": textPar,"contexts":["selection"], "onclick": genericOnClick});
var c3 = chrome.contextMenus.create(
  {"title": "IMDB", "parentId": textPar,"contexts":["selection"], "onclick": genericOnClick});
var c4 = chrome.contextMenus.create(
  {"title": "Wikipedia", "parentId": textPar,"contexts":["selection"], "onclick": genericOnClick});
var c5 = chrome.contextMenus.create(
  {"title": "Grooveshark (music search)", "parentId": textPar,"contexts":["selection"], "onclick": genericOnClick});
var cp0 = chrome.contextMenus.create(
  {"title": "Multi-site search", "parentId": textPar,"contexts":["selection"]});
	var cc0 = chrome.contextMenus.create(
		{"title": "Movie and Celebrity", "parentId": cp0,"contexts":["selection"], "onclick": genericOnClick}); 
	var cc1 = chrome.contextMenus.create(
		{"title": "Media", "parentId": cp0,"contexts":["selection"], "onclick": genericOnClick});  
	var cc2 = chrome.contextMenus.create(
		{"title": "Info", "parentId": cp0,"contexts":["selection"], "onclick": genericOnClick});    
	var cc3 = chrome.contextMenus.create(
		{"title": "Shop", "parentId": cp0,"contexts":["selection"], "onclick": genericOnClick});  
var cp1 = chrome.contextMenus.create(
  {"title": "More", "parentId": textPar,"contexts":["selection"]});
	var cc10 = chrome.contextMenus.create(
		{"title": "Subtitles", "parentId": cp1,"contexts":["selection"], "onclick": genericOnClick}); 
	var cc11 = chrome.contextMenus.create(
		{"title": "Torrents", "parentId": cp1,"contexts":["selection"], "onclick": genericOnClick});
	var cc12 = chrome.contextMenus.create(
		{"title": "Metacafe", "parentId": cp1,"contexts":["selection"], "onclick": genericOnClick});
  

var textParI = chrome.contextMenus.create({"title": "Searchio! search (Incognito)","parentId": textPar, "contexts":["selection"]});
var cI0 = chrome.contextMenus.create(
  {"title": "Google", "parentId": textParI,"contexts":["selection"], "onclick": genericOnClick});
var cI1 = chrome.contextMenus.create(
  {"title": "Youtube", "parentId": textParI,"contexts":["selection"], "onclick": genericOnClick});
var cI2 = chrome.contextMenus.create(
  {"title": "Google Images", "parentId": textParI,"contexts":["selection"], "onclick": genericOnClick});
var cI3 = chrome.contextMenus.create(
  {"title": "IMDB", "parentId": textParI,"contexts":["selection"], "onclick": genericOnClick});
var cI4 = chrome.contextMenus.create(
  {"title": "Wikipedia", "parentId": textParI,"contexts":["selection"], "onclick": genericOnClick});
var cI5 = chrome.contextMenus.create(
  {"title": "Grooveshark (music search)", "parentId": textParI,"contexts":["selection"], "onclick": genericOnClick});
var cpI0 = chrome.contextMenus.create(
  {"title": "Multi-site search", "parentId": textParI,"contexts":["selection"]});
	var ccI0 = chrome.contextMenus.create(
		{"title": "Movie and Celebrity", "parentId": cpI0,"contexts":["selection"], "onclick": genericOnClick});    
	var ccI1 = chrome.contextMenus.create(
		{"title": "Media", "parentId": cpI0,"contexts":["selection"], "onclick": genericOnClick});   
	var ccI2 = chrome.contextMenus.create(
		{"title": "Info", "parentId": cpI0,"contexts":["selection"], "onclick": genericOnClick});  
	var ccI3 = chrome.contextMenus.create(
		{"title": "Shop", "parentId": cpI0,"contexts":["selection"], "onclick": genericOnClick});  
var cpI1 = chrome.contextMenus.create(
  {"title": "More", "parentId": textParI,"contexts":["selection"]});
	var ccI10 = chrome.contextMenus.create(
		{"title": "Subtitles", "parentId": cpI1,"contexts":["selection"], "onclick": genericOnClick}); 
	var ccI11 = chrome.contextMenus.create(
		{"title": "Torrents", "parentId": cpI1,"contexts":["selection"], "onclick": genericOnClick});
	var ccI12 = chrome.contextMenus.create(
		{"title": "Metacafe", "parentId": cpI1,"contexts":["selection"], "onclick": genericOnClick});
		
  
var textImg = chrome.contextMenus.create({"title": "Searchio! image search", "contexts":["image"],"onclick": genericOnClick});  

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    role=0;
    
		
	var choice;	
	var cont=true;
		
	
	var n=text.indexOf(' ');
	var tempstring;
	var type=text.split(' ');
	var input=text.slice(n+1);
	
	if(!text)
		cont=false;
	
	if(type[0]=='!')				//choosing whether incognito is required or not
	{
		incognito=true;
		choice=type[1];
		tempstring=text.substring(n+1);
		n=tempstring.indexOf(' ');
		if(n==-1)
			cont=false;
		if(tempstring.charAt(0)=='`')
	    input=tempstring.slice(n+1);
		else
		input=tempstring;//.slice(n+1);
		if(text.length==1)
		{
			input="";
			cont=false;
		}
	}
	else
	{
		incognito=false;
		input=text.slice(n+1);
		if(n==-1)
			cont=false;
		choice=type[0];
	}
	
	
	if(cont)
	{
		kernel(choice,input,incognito,mquery,role);
	}
	else
	alert("You have to enter some search term!");
  });
