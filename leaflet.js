let firstMap;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });


thousandth = [[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng + 0.001],
              [washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng + 0.001]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                      ).addTo(firstMap);
let bobstLibrary;
bobstLibrary = L.marker([40.729444, -73.997222]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library.");
let bobstCoords;
bobstCoords = L.latLng(40.729444, -73.997222);
firstMap.panTo(bobstCoords);
> let eiffelTower;
> eiffelTower = L.latLng(48.858222, 2.2945);
> firstMap.panTo(eiffelTower);

let circle;
circle = L.circle(washingtonSquarePark, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
let circle;
circle = L.circle(bobstLibrary, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
