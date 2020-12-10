/*
//STYLE MAP
const outerCoords = [
    { lat: 48.7842, lng: 2.0347 },
    { lat: 48.7598, lng: 1.9679 },
    { lat: 48.7475, lng: 2.0783 },
    { lat: 48.9356, lng: 2.4321 },
];

map.data.add({
    geometry: new google.maps.Data.Polygon([
        outerCoords,
    ]),
});
*/

//GEOLOCALISATION
/* if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
    },
    () => {
    handleLocationError(true, infoWindow, map.getCenter());
});
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}*/