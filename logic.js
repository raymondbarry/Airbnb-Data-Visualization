// Create the tile layer that will be the background of our map   
var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.streets",
accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
  House: new L.LayerGroup(),
  Apartment: new L.LayerGroup(),
  Studio: new L.LayerGroup(),
  Bedroom: new L.LayerGroup(),
  // : new L.LayerGroup()
};

// Create the map with our layers
var airbnb_map = L.map("map-id", {
  center: [34.05, -118.24],
  zoom: 13,
   layers: [
    layers.House,
    layers.Apartment,
    layers.Studio,
    layers.Bedroom
    // layers.OUT_OF_ORDER
  ]

});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(airbnb_map);

var overlays = {
  "House": layers.House,
  "Apartment": layers.Apartment,
  "Studio": layers.Studio,
  "Bedroom": layers.Bedroom
  // "Out of Order": layers.OUT_OF_ORDER
}

// // Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(airbnb_map);

// // Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};

info.addTo(airbnb_map);

d3.csv("static/js/C__listings_clean.csv").then(function(data) {
  
  var markers = L.markerClusterGroup();
  
    // Pull the "stations" property off of response.data
  data.forEach(listing => {
      lat = listing.latitude
      lon = listing.longitude
    
      var marker = L.marker([lat, lon]);
      
      // Binding a pop-up to our marker
      marker.bindPopup("<h1>" + listing.name + "</h1> <hr> <h3> House Type: " + listing.property_type + "</h1> <hr> <h3> Listing Price: $"+listing.price + "</h1> <hr> <h3>"+ listing.picture_url) 
  
      // Find a way to change the font for each listing //
  
        markers.addLayer(marker);
  })
  airbnb_map.addLayer(markers);
});

