var map = L.map('map').setView([41.378147897832136, -72.10645196530703], 16); //new leaflet map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([41.378147897832136, -72.10645196530703]).addTo(map)

var circle = L.circle([41.378147897832136, -72.10645196530703], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);