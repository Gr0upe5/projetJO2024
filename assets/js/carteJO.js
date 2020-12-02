/*const map = new GMaps({

    el: '#map',
    lat: 48.8534,
    lng: 2.3488,  
}); 

//Tour Eiffel
const mark_tourEiffel = map.addMarker({
    position: {lat: 48.858370, lng: 2.294481},
    title: 'Tour Eiffel',
    map,
});  
//Stade de France
const mark_stadeDeFrance = map.addMarker({
    position: {lat: 48.9209, lng: 2.36},
    map,
    title: 'Stade de France',
}); 
//Village olympique de Saint-Denis
const mark_villageSaintDenis = map.addMarker({
    lat: 48.8665, 
    lng: 2.3373,
    title: 'Village olympique de Saint-Denis',
}); 
//Champs-Élysées
const mark_champsElysees = map.addMarker({
    lat: 48.8662, 
    lng: 2.3075,
    title: 'Champs-Élysées',
});
//Esplanade des Invalides
const mark_esplanadeInvalides = map.addMarker({
    lat: 48.8565, 
    lng: 2.3131,
    title: 'Esplanade des Invalides',
});
//Stade Jean-Bouin
const mark_stadeJeanBouin = map.addMarker({
    lat: 48.8398, 
    lng: 2.2529,
    title: 'Stade Jean-Bouin',
});
//Stade olympique Yves-du-Manoir
const mark_stadeYves = map.addMarker({
    lat: 48.9258, 
    lng: 2.2479,
    title: 'Stade olympique Yves-du-Manoir',
});
//Zénith de Paris
const mark_zenithParis = map.addMarker({
    lat: 48.8907, 
    lng: 2.3933,
    title: 'Zénith de Paris',
});
//Grande halle de la Villette
const mark_halleVillette = map.addMarker({
    lat: 48.8873, 
    lng: 2.3909,
    title: 'Grande halle de la Villette',
});
//Stade Pierre-de-Coubertin
const mark_stadePierre = map.addMarker({
    lat: 48.8317, 
    lng: 2.2561,
    title: 'Stade Pierre-de-Coubertin',
});
//Vélodrome de Saint-Quentin-en-Yvelines
const mark_velodromeSaintQuentin = map.addMarker({
    lat: 48.7842, 
    lng: 2.0347,
    title: 'Vélodrome de Saint-Quentin-en-Yvelines',
});
//Colline d'Élancourt
const mark_collineElancourt = map.addMarker({
    lat: 48.7598, 
    lng: 1.9679,
    title: "Colline d'Élancourt",
});
//Golf national
const mark_golfNational = map.addMarker({
    lat: 48.7475, 
    lng: 2.0783,
    title: "Golf national",
});
//Parc des expositions du Bourget
const mark_parcExposBourget = map.addMarker({
    lat: 48.9356, 
    lng: 2.4321,
    title: "Parc des expositions du Bourget",
});
map.fitZoom();

mark_tourEiffel.addListener('click', function() {
    map.setZoom(15);
    map.setCenter(mark_tourEiffel.getPosition());
    
})
*/
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
        }
      );
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}*/

function initMap() {
    
}