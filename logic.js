
d3.csv("static/js/C__listings_clean.csv").then(function(data) {

    var airbnb_map = L.map("map-id", {
        center: [34.05, -118.24],
        zoom: 13
      });

      // Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: API_KEY
        }).addTo(airbnb_map);

        console.log()

       createMarkers(data, airbnb_map)
  });


// Create an array containing the latitudes and longitutdes for all the listings found in the CSV file

function createMarkers(data, map) {

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

    map.addLayer(markers);
  }