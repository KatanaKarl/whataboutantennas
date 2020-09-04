![img](assets/uff.JPG)

# Antennas and their maps

Collected research and sources about cell phone antennas and infrastructure in Germany. With the goal to create an Antenna field Guide both analogue and webbased. The latter in the form of yet another interactive online map.

## How to find Antennas
  
  The Bundesnetzagentur offers a map that displays all antennas in Germany that are emmiting 10 Watt [ERP](https://en.wikipedia.org/wiki/Effective_radiated_power) or more
 * [EMF-map](https://www.bundesnetzagentur.de/emf-karte)
 
The map informs about the number of antennas each base stations has installed and in which directions each antenna transmits it's (main lobe)[https://en.wikipedia.org/wiki/Main_lobe]. It also informs about the installation height and safety distance of each Antenna. What it lacks however is information about who or which company operates or owns the base station.
On Request the Bundesnetzagentur can send the base stations certificate as well as technical data sheets. The latter disclose the company operating each antenna. These requests can be made rather easily trough [Frag den Staat(german)](https://fragdenstaat.de/behoerde/bundesnetzagentur/). Most answered requests and their attached documents are publicly available there as well. 
Unfortunately  though the Bundesnetzagentur  doesn't offer a public API or an Data export as stated in the answer to [this offical request](https://fragdenstaat.de/anfrage/emf-datenbank/) before.
However open source Data scrapers for the EMF database can be found here:
 * [ stefanw/bnetza-emf-scraper ](https://github.com/stefanw/bnetza-emf-scraper/blob/master/emf_scraper.py)
 * which is based on [this scraper by marians](https://github.com/KoelnAPI/data/tree/master/data/communication/bundesnetzagentur-emf)
  

 
 While all the three major telecommunication companies themselves offer maps about their service only o2 offers a map with the locations of the Towers operated by the company.
* [o2 Map](https://www.o2online.de/service/netzabdeckung/)   
* [Telekom map](https://www.telekom.de/netz/mobilfunk-netzausbau?wt_mc=alias_301_start/netzausbau)
* [Vodafone map](https://www.vodafone.de/hilfe/netzabdeckung.html)
 

### other independent maps
 
 A notable project that makes use of the EMF database is [clouds over Berlin](http://clouds.psolbach.com) by [psolbach](https://github.com/psolbach) illustrating the antenna density and coordinates of cell towers in Berlin
 
 The app Cellmapper takes it further by letting its users scan and measure cell phone signals wherever they go. The data crowdsourced by the users then get depicted on a map that provides many technical details as well:
 * [Cellmapper map](https://www.cellmapper.net/map)
 
 * [WiGLE](https://wigle.net) is another map feed by userdata conectrating on wifi networks
 

 
 ## Who owns the Antennas ?
    
The big phone companies in Germany each bring their own infrastructre provider connected to them.
[Deutsche Funkturm](https://dfmg.de/en/home.html) is a subcompany of Deutsche Telekom owning and running 30.000 telecommunication sites in germany[1]. Of which 50% are also hosting antennas of other Cell phone providers according to their own statements[2]. INteresting to not is that they also own big Towers like the *Berliner Fernsehturm* or the *Fernmeldeturm Bremen*
Deutsche Funkturm offers a map as well in which planned new towers and antenna sites are listed. The current status of each project including problems anc obstacle in the process are documented [map](https://dfmg.de/de/unser-unternehmen/herausforderung-im-mobilfunkausbau.html)

Vodafone  recently found it's own branch for building and maintaining infrastructre. [Vantage towers](https://www.vodafone.com/news-and-media/vodafone-group-releases/news/vantage-towers) holds  68,000 towers across 9 countries including Germany, Spain, Greece, Portugal, Czech Republic, Romania, Hungary, Ireland and Italy[3]. Making them effectively one if not the biggest telecommunications tower provider in europe

Telefonica (o2)  trough the company [Telxius](https://telxius.com/en/inicio-en/) which operates around 30.000 Towers in 6 different countries across the globe Germany, Spain, Chile, Peru Brazil and Argentina. Furtermore Telxius owns and operate severeal Deep sea cables connecting south american countries with each other as well as Europe and the USA [4][5][6].

## Antenna Tech

## to do
* more diverse and critical sources on companies
* small cell
  * images of their hiding spots. Ask BVG and BNetzA about it ?
* Image database connected with the map
  * user upload
  * possible profile of maps
* Reduce steps to request technical data from the BNetzA
  * Frag den Staat (API)[https://fragdenstaat.de/api/]
  * (Plus Account)[https://fragdenstaat.de/plus/] for mass requests to the Bundesnetzagentur ?
  * how does cellmapper get its technical details ?
  * Getting those information into the maps database
* expand the list of resources and links objectively
  * Showing/ giving example how one can start doing his/her own reasearch, information gathering 
  * easy way to deploy a local version of a map
  * Covering health aspect of electro magnetic fields
* explain the tech 
  


## references and links
* [1] https://de.wikipedia.org/wiki/Deutsche_Funkturm
* [2] https://www.telekom.com/de/blog/netz/artikel/mobilfunk-maste-unterschiede-585362
* [3] https://www.vodafone.com/news-and-media/vodafone-group-releases/news/vantage-towers
* [4] https://en.wikipedia.org/wiki/Telxius
* [5] https://telxius.com/en/towers/
* [6] https://telxius.com/network/interactive-map/

### further reading

* Telekom reacting to the many request about their towers https://telekomhilft.telekom.de/t5/Geraete-Zubehoer/wichtiger-Hinweis-zu-quot-Wo-steht-mein-Funkmast-quot/m-p/999861#M8364
* 10% Shareholder of Telxius https://en.wikipedia.org/wiki/Amancio_Ortega
* What is 4x4 MIMO ? https://www.howtogeek.com/394266/what-is-4x4-mimo-and-does-my-smartphone-need-it/
* Telekom blog about how 5G antennas work https://www.telekom.com/de/blog/netz/artikel/heptaband-antenne-5g-530618
* Telekom blog abou 4x4 MIMO https://www.telekom.com/de/blog/netz/artikel/4x4-mimo-hintergrund-532302
* Telekom blog about beamforming https://www.telekom.com/de/blog/netz/artikel/beamforming-5g-mobilfunk-570522
* Commscope company building antenna tech https://de.commscope.com/
* Portfolio of Deutsche Funkturms products https://dfmg.de/de/unser-unternehmen/standortportfolio.html
