![img](assets/uff.JPG)

# Antennas and their maps

Collected research and sources about cell phone antennas and nfrastrucutre in Germany

## How to find Antennas
  
  The Bundesnetzagentur offers a map that displays all antennas in Germany that are emmiting 10 Watt ERP or more
 * [EMF-map](https://www.bundesnetzagentur.de/emf-karte)
 
The map informs about the number of antennas each base stations has installed and in which directions each antenna transmits it's (main lobe)[https://en.wikipedia.org/wiki/Main_lobe]. It also informs about the isntallation height and safety distance of each Antenna. What it lacks however is information about who or which company operates or owns the base station.
On Request the Bundesnetzagentur can send the base stations certificate as well as data sheets. The latter disclose the company operating each antenna. These requests can be made rather easily trough [Frag den Staat(german)](https://fragdenstaat.de/behoerde/bundesnetzagentur/). Most answered requests and their attached documents are publicly available there as well. 
The Bundesnetzagentur  doesn't offer an public API or an Data export as stated in the answer to [this offical request](https://fragdenstaat.de/anfrage/emf-datenbank/) before.
However open source Data scrapers for the EMF database can be found here:
 * [ stefanw/bnetza-emf-scraper ](https://github.com/stefanw/bnetza-emf-scraper/blob/master/emf_scraper.py)
 * which is based on [this scraper by marians](https://github.com/KoelnAPI/data/tree/master/data/communication/bundesnetzagentur-emf)
  

 
 From the three major telecommunication companies themselves only o2 offers a map with the locations of the Towers operated by the company while Telekom and Vodafone only offering maps illustrating the signal strength of their services around Germany:
* [o2 Map](https://www.o2online.de/service/netzabdeckung/)   
* [Telekom map](https://www.telekom.de/netz/mobilfunk-netzausbau?wt_mc=alias_301_start/netzausbau)
* [Vodafone map](https://www.vodafone.de/hilfe/netzabdeckung.html)
 


 
 A notable project that makes use of the EMF database is [clouds over Berlin](http://clouds.psolbach.com) by [psolbach](https://github.com/psolbach)
 
 The app Cellmapper takes it further by letting its users scan and measure cell phone signals wherever they go. The data crowdsourced by the users then get depicted on a map that provides many technical details as well:
 * [Cellmapper map](https://www.cellmapper.net/map)
 

 
 ## Who owns the Antennas ?
    
The big phone companies in Germany each bing their own infrastruutre provider connected to them
Deutsche Funkturm is a subcompany of Deutsche Telekom owning 30.000 telecommunication sites in germany[1]. Of which 50% are also hosting antennas of other Cell phone providers according to their own statements[2].
Deutsche Funkturm offers a map as well in which planned new towers and antenna sites are listed. The current status of each project including problems  are documented

Vodafone  recently found it's own branch for building and maintaining infrastructre. Vantage towers holds  68,000 towers across 9 countries including Germany, Spain, Greece, Portugal, Czech Republic, Romania, Hungary, Ireland and Italy[3]. Making them effectively one if not the biggest telecommunications twoer prover in europe

Telefonica (o2) owns trough the company Telxius which operates around 30.000 Towers in 6 different countries across the globe Germany, Spain, Chile, Peru Brazil and Argentina. Furtermore Telxius owns and operate severeal Deep sea cables connecting south american countries with each other as well as Europe and the USA [4][5][6].

## Antenna Tech

## to do
* more diverse and critical sources on companies
* small cell
  * images of their hiding spots. Ask BVG and BNetzA about it ?
* some nice

## references and links
* [1] https://de.wikipedia.org/wiki/Deutsche_Funkturm
* [2] https://www.telekom.com/de/blog/netz/artikel/mobilfunk-maste-unterschiede-585362
* [3] https://www.vodafone.com/news-and-media/vodafone-group-releases/news/vantage-towers
* [4] https://en.wikipedia.org/wiki/Telxius
* [5] https://telxius.com/en/towers/
* [6] https://telxius.com/network/interactive-map/
