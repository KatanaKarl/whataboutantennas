
        function degrees_to_radians(degrees) { //used to convert degrees to radians later on the map. obviously
            var pi = Math.PI;
            return degrees * (pi / 180);
        }

        var lat, lng;
        var id;
        var cnt;
        var angle;
        var antennaData;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                antennaData = JSON.parse(this.responseText);
                mapy.on("moveend", mapMove);
                function mapMove(e) {						//After moving the map it gets refreshed 
                    for (var i = 0; i < antennaData.length; i++) {
                        lat = antennaData[i].position.Lat;
                        lng = antennaData[i].position.Lng;
                        cnt = antennaData[i].antennas.length;
                        id = antennaData[i].standortbescheinigung_nr;
                        var antennas = antennaData[i].antennas;
                        heights = [];
                        for (var hi = 0; hi < antennas.length; hi++) { //get alle the different height of the antennas and order them in order to infomr about the span of height they are installed
                            heights.push(antennas[hi].height);
                        }
                        heights.sort();
                        var minH = heights[0];
                        var maxH = heights[heights.length - 1];
                        var msg = "";
                        var fds = '<a href="https://fragdenstaat.de/anfragen/?q=' + id + '+&status=&jurisdiction=&campaign=&category=&publicbody=bundesnetzagentur&tag=&user=">Check public requests about this site.</a> '; // link to serch FdS for past reuest made with the antennas id

                        msg = msg.concat("Site Nr:", JSON.stringify(id), "<br>Location:", lat, " ", lng, "<br> Antennas:", JSON.stringify(cnt), "<br>height: ", minH, " to ", maxH, "m<br>", fds);

                        if (mapy.getBounds().contains([lat, lng])) { //Check if coordinates are inside the viewing port of the map and only then draw the antenna positions on the map


                            var circle = L.circle([lat, lng], { radius: 1.5, color: 'DarkSlateBlue' }).addTo(mapy).bindPopup(msg).on("click", circleClick);//.bindPopup(msg);

                            function circleClick(e) {

                                for (var i = 0; i < antennaData.length; i++) {  // When clicking on one of the circles the data gets searched for the matching entry about the clicked antenna
                                    lng = antennaData[i].position.Lng;			//Probably there is a faster way to do this...
                                    lat = antennaData[i].position.Lat;
                                    antennas = antennaData[i].antennas;			// get the array containing the individual antennas of one Base station

                                    if (e.latlng.lng == lng && e.latlng.lat == lat) { 
                                        this.openPopup();
                                        for (var j = 0; j < antennas.length; j++) {
                                            var direction = antennas[j].direction;		//get the angles of each antenna
                                            if (direction != null) {

                                                direction = JSON.stringify(direction).replace("°", ""); //Some of the datasets angles are Strings containing  "" and or ° so we strip the values form these characters
                                                direction = direction.replace(/"/g, '');
                                                if (isNaN(direction) == false) {  //There are double values like 35/180 or NaN values so we need to skip those. Ugh


                                                    var angledX = (lng + Math.cos(degrees_to_radians(-direction + 90)) * 0.001);  //After  converting the degrees to radians we need to add 90° to the minus value of the degrees since the degrees on a map start in the north
                                                    var angledY = (lat + Math.sin(degrees_to_radians(-direction + 90)) * 0.001);  // to draw a line in that certain angle we calculate a point that lies on the desired angle from the antenna coordinates
                                                    var latlngs = [
                                                        [lat, lng],
                                                        [angledY, angledX]
                                                    ];

                                                    var polyline = L.polyline(latlngs, { color: 'DarkSlateBlue', weight: 2 }).addTo(mapy);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        xmlhttp.open("GET", "https://pcis.life/test/antenna/orderedJson.json", true);
        xmlhttp.send();
        var mapy = L.map('mapId').setView([52.479045, 13.423185], 18);


        var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        }).addTo(mapy);


