let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);

let washingtonSquarePark, washingtonSquareParkMarker, bobstLibrary, bobstLibraryMarker, argosyBookstore, leftBooks, logosBooks;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).bindPopup("This is Washington Square Park").addTo(firstMap);
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibraryMarker = L.marker(bobstLibrary).bindPopup("This is Bobst Library").addTo(firstMap);
argosyBookstore = L.latLng(40.741895, -73.989308);
argosyBookstoreMarker = L.marker(argosyBookstore).bindPopup("This is Argosy Bookstore").addTo(firstMap);
leftBooks = L.latLng(40.73569, -74.002872);
leftBooksMarker = L.marker(leftBooks).bindPopup("This is Left Bookstore").addTo(firstMap);
logosBooks = L.latLng(40.774319, -73.948303);
logosBooks = L.marker(logosBooks).bindPopup("This is Logos Bookstore").addTo(firstMap);


let circle;
circle = L.circle(washingtonSquarePark, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
circle = L.circle(bobstLibrary, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
circle = L.circle(argosyBookstore, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
circle = L.circle(leftBooks, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
circle = L.circle(logosBooks, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
