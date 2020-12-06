//INITIALISATION DE LA MAP
const mapCenter = { lat: 48.8534, lng: 2.20 };
const map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 10,
    disableDefaultUI: true,
    mapTypeId: 'satellite',
});

//CUSTOM CONTROL VOIR TOUS LES MARQUERS
function CenterControl(controlDiv, map) {
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "gray";
    controlUI.style.borderRadius = "50px";
    controlUI.style.boxShadow = "0 5px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "10px";
    controlUI.style.textAlign = "center";
    controlDiv.appendChild(controlUI);
    const controlText = document.createElement("div");
    controlText.style.color = "white";
    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
    controlText.style.fontSize = "14px";
    controlText.style.lineHeight = "30px";
    controlText.style.paddingLeft = "10px";
    controlText.style.paddingRight = "10px";
    controlText.innerHTML = "Voir tous les marqueurs";
    controlUI.appendChild(controlText);
    controlUI.addEventListener("click", () => {
        map.setCenter(mapCenter);
        map.setZoom(10);
    });
}
const centerControlDiv = document.createElement("div");
CenterControl(centerControlDiv, map);
map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);


//TABLEAU DES MARKERS
var markers = new Array(
    //Champs-Élysées
    new google.maps.Marker({
        position: { lat: 48.8662, lng: 2.3075 },
        map,
        title: 'Champs-Élysées',
    }),
    //Tour Eiffel
    new google.maps.Marker({
        position: { lat: 48.858370, lng: 2.294481 },
        title: 'Tour Eiffel',
        map,
    }),
    //Stade de France
    new google.maps.Marker({
        position: { lat: 48.9209, lng: 2.36 },
        map,
        title: 'Stade de France',
    }),
    //Village olympique de Saint-Denis
    new google.maps.Marker({
        position: { lat: 48.8665, lng: 2.3373 },
        title: 'Village olympique de Saint-Denis',
        map,
    }),
    //Esplanade des Invalides
    new google.maps.Marker({
        position: { lat: 48.8565, lng: 2.3131 },
        map,
        title: 'Esplanade des Invalides',
    }),
    //Stade Jean-Bouin
    new google.maps.Marker({
        position: { lat: 48.8398, lng: 2.2529 },
        map,
        title: 'Stade Jean-Bouin',
    }),
    //Stade olympique Yves-du-Manoir
    new google.maps.Marker({
        position: { lat: 48.9258, lng: 2.2479 },
        map,
        title: 'Stade olympique Yves-du-Manoir',
    }),
    //Zénith de Paris
    new google.maps.Marker({
        position: { lat: 48.8907, lng: 2.3933 },
        map,
        title: 'Zénith de Paris',
    }),
    //Grande halle de la Villette
    new google.maps.Marker({
        position: { lat: 48.8873, lng: 2.3909 },
        map,
        title: 'Grande halle de la Villette',
    }),
    //Stade Pierre-de-Coubertin
    new google.maps.Marker({
        position: { lat: 48.8317, lng: 2.2561 },
        map,
        title: 'Stade Pierre-de-Coubertin',
    }),
    //Vélodrome de Saint-Quentin-en-Yveliness
    new google.maps.Marker({
        position: { lat: 48.7842, lng: 2.0347 },
        map,
        title: 'Vélodrome de Saint-Quentin-en-Yvelines',
    }),
    //Colline d'Élancourt
    new google.maps.Marker({
        position: { lat: 48.7598, lng: 1.9679 },
        map,
        title: "Colline d'Élancourt",
    }),
    //Golf national
    new google.maps.Marker({
        position: { lat: 48.7475, lng: 2.0783 },
        map,
        title: "Golf national",
    }),
    //Parc des expositions du Bourget
    new google.maps.Marker({
        position: { lat: 48.9356, lng: 2.4321 },
        map,
        title: "Parc des expositions du Bourget",
    }),
);

//CLICK MARKER
for (let i = 0; i < markers.length; i++) {
    markers[i].addListener('click', function() {
        $("#fiche-site").removeClass("hidden");
        $("#site-title").empty().append(this.title);
        map.setZoom(18);
        map.setCenter(this.getPosition());
    });
}








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