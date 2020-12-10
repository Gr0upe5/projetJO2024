//INITIALISATION DE LA MAP
const mapCenter = { lat: 48.8534, lng: 2.20 };
const map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 10,
    disableDefaultUI: true,
    mapTypeId: 'satellite',
});

//TABLEAU DES MARKERS
var markers = new Array(
    //Champs-Élysées
    new google.maps.Marker({
        position: { lat: 48.869745, lng: 2.307946 },
        map,
        title: 'Champs-Élysées',
        visible: false,
        cyclisme: true,
        paris: true,
    }),
    //Champs-de-Mars
    new google.maps.Marker({
        position: { lat: 20, lng: 20 },
        map,
        title: 'Champs-de-Mars',
        visible: false,
        beachv: true,
        judo: true,
        lutte: true,
        paris: true,
    }),
    //Tour Eiffel
    new google.maps.Marker({
        position: { lat: 48.858370, lng: 2.294481 },
        title: 'Tour Eiffel',
        map,
        visible: false,
        triathlon: true,
        natation: true,
        paris: true,
    }),
    //Stade de France
    new google.maps.Marker({
        position: { lat: 48.924459, lng: 2.360164 },
        map,
        title: 'Stade de France',
        visible: false,
        athletisme: true,
        stdenis: true,
    }),
    //Village olympique de Saint-Denis
    new google.maps.Marker({
        position: { lat: 48.8665, lng: 2.3373 },
        title: 'Village olympique de Saint-Denis',
        map,
        visible: false,
        stdenis: true,
    }),
    //Esplanade des Invalides
    new google.maps.Marker({
        position: { lat: 48.8565, lng: 2.3131 },
        map,
        title: 'Esplanade des Invalides',
        visible: false,
        tir: true,
        paris: true,
    }),
    //Stade Jean-Bouin
    new google.maps.Marker({
        position: { lat: 48.8398, lng: 2.2529 },
        map,
        title: 'Stade Jean-Bouin',
        visible: false,
        paris: true,
    }),
    //Stade olympique Yves-du-Manoir
    new google.maps.Marker({
        position: { lat: 48.9290, lng: 2.2479 },
        map,
        title: 'Stade olympique Yves-du-Manoir',
        visible: false,
        yvesmanoir: true,
    }),
    //Zénith de Paris
    new google.maps.Marker({
        position: { lat: 48.8907, lng: 2.3933 },
        map,
        title: 'Zénith de Paris',
        visible: false,
        halthero: true,
        paris: true,
    }),
    //Base nautique de Vaires-sur-Marne
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: 'Base nautique de Vaires-sur-Marne',
        visible: false,
        canoekayak: true,
        aviron: true,
    }),
    //Château de Versailles
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: 'Château de Versailles',
        visible: false,
        equitation: true,
        pentathlon: true,
        versailles: true,
        stquentin: true,
    }),
    //Vélodrome national
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: 'Vélodrome national',
        visible: false,
        cyclisme: true,
        pentathlon: true,
    }),
    //Grande halle de la Villette
    new google.maps.Marker({
        position: { lat: 48.8873, lng: 2.3909 },
        map,
        title: 'Grande halle de la Villette',
        visible: false,
    }),
    //Stade Pierre-de-Coubertin
    new google.maps.Marker({
        position: { lat: 48.8310, lng: 2.2525 },
        map,
        title: 'Stade Pierre-de-Coubertin',
        visible: false,
        basketball: true,
        paris: true,
    }),
    //Vélodrome de Saint-Quentin-en-Yveliness
    new google.maps.Marker({
        position: { lat: 48.7882, lng: 2.0347 },
        map,
        title: 'Vélodrome de Saint-Quentin-en-Yvelines',
        visible: false,
        hockey: true,
        stquentin: true,
    }),
    //Colline d'Élancourt
    new google.maps.Marker({
        position: { lat: 48.7878, lng: 1.9679 },
        map,
        title: "Colline d'Élancourt",
        visible: false,
        cyclisme: true,
        elancourt: true,
    }),
    //Golf national
    new google.maps.Marker({
        position: { lat: 48.7468, lng: 2.0715 },
        map,
        title: "Golf national",
        visible: false,
        golf: true,
        stquentin: true,
    }),
    //Parc des expositions du Bourget
    new google.maps.Marker({
        position: { lat: 48.9356, lng: 2.4321 },
        map,
        title: "Parc des expositions du Bourget",
        visible: false,
        volleyb: true,
        lebourget: true,
    }),
    //Stand de tir du Bourget
    new google.maps.Marker({
        position: { lat: 48.9356, lng: 2.4321 },
        map,
        title: "Stand de tir du Bourget",
        visible: false,
        tir: true,
        lebourget: true,
    }),
    //Parc des expositions de la porte de Versailles
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Parc des expositions de la porte de Versailles",
        visible: false,
        handball: true,
        tennisdt: true,
        versailles: true,
    }),
    //Parc des Princes
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Parc des Princes",
        visible: false,
        football: true,
        paris: true,
    }),
    //Marina olympique du Roucas-Blanc
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Marina olympique du Roucas-Blanc",
        visible: false,
        voile: true,
        marseille: true,
    }),
    //Grand Palais
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Grand Palais",
        visible: false,
        escrime: true,
        taekwondo: true,
        paris: true,
    }),
    //Stade Vélodrome
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Stade Vélodrome",
        visible: false,
        football: true,
        marseille: true,
    }),
    //Place de la Concorde
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Place de la Concorde",
        visible: false,
        basketball: true,
        breakd: true,
        escalade: true,
        skate: true,
        paris: true,
    }),
    //Stade Jean-Bouin
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Stade Jean-Bouin",
        visible: false,
        rugby: true,
        paris: true,
    }),
    //Stade Roland-Garros
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Stade Roland-Garros",
        visible: false,
        tennis: true,
        boxe: true,
        paris: true,
    }),
    //Palais omnisports de Paris-Bercy
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Palais omnisports de Paris-Bercy",
        visible: false,
        basketball: true,
        paris: true,
    }),
    //Arena Alice Milliat
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Palais omnisports de Paris-Bercy",
        visible: false,
        badminton: true,
        paris: true,
    }),
    //Paris La Défense Arena
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Paris La Défense Arena",
        visible: false,
        gymnastique: true,
        paris: true,
    }),
    //Teahupo'o
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Teahupo'o",
        visible: false,
        surf: true,
        taiarapu: true,
    }),
    //Piscine olympique de Saint-Denis
    new google.maps.Marker({
        position: { lat: 4, lng: 2 },
        map,
        title: "Piscine olympique de Saint-Denis",
        visible: false,
        natation: true,
        waterpolo: true,
        stdenis: true,
    }),
)

//TABLEAU SPORTS
const sports = [
    'Basket-Ball',
    'Natation',
    'Athlétisme',
    'Aviron',
    'Badminton',
    'Boxe',
    'Breakdance',
    'Canoe-Kayak',
    'Cyclisme',
    'Equitation',
    'Escalade',
    'Escrime',
    'Football',
    'Golf',
    'Gymnastique',
    'Halterophilie',
    'Handball',
    'Hockey-Gazon',
    'Judo',
    'Lutte',
    'Waterpolo',
    'Pentathlon moderne',
    'Rugby',
    'Skateboard',
    'Surf',
    'Taekwondo',
    'Tennis',
    'Tennis de table',
    'Tir',
    "Tir à l'arc",
    'Triathlon',
    'Voile',
    'Volley-ball',
]

//TABLEAU VILLES
const villes = [
    'Saint-Denis',
    'Le Bourget',
    'Paris',
    'Nanterre',
    'Colombes',
    'Vaires-sur-Marne',
    'Versailles',
    'Saint-Quentin-en-Yvelines',
    'Élancourt',
    'Marseille',
    'Taiarapu-Ouest(Polynésie française)',
]

//CUSTOM CONTROL VOIR TOUS LES MARQUERS
function CenterControl(controlDiv, map) {
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "white";
    controlUI.style.borderRadius = "50px";
    controlUI.style.boxShadow = "0 5px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "10px";
    controlUI.style.textAlign = "center";
    controlDiv.appendChild(controlUI);
    const controlText = document.createElement("div");
    controlText.style.color = "#003B55";
    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
    controlText.style.fontSize = "14px";
    controlText.style.lineHeight = "30px";
    controlText.style.paddingLeft = "10px";
    controlText.style.paddingRight = "10px";
    controlText.innerHTML = "Recentrer la carte";
    controlUI.appendChild(controlText);
    controlUI.addEventListener("click", () => {
        map.setCenter(mapCenter);
        map.setZoom(10);
    });
}

const centerControlDiv = document.createElement("div");
CenterControl(centerControlDiv, map);
map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

//CLICK MARKER
let currentM = 0;
for (let i = 0; i < markers.length; i++) {
    markers[i].addListener('click', function() {
        $("#fiche-site").removeClass("hidden");
        $("#site-title").empty().append(this.title);
        map.setZoom(18);
        map.setCenter(this.getPosition());
        currentM = i;
    });
    markers[i].visible = true;
}

$(function() {
    $('#prev-button').click(function() {
        if (currentM < 0) {
            currentM = markers.length;
        } else
            currentM -= 1;
        $("#site-title").empty().append(markers[currentM].title);
        map.setZoom(18);
        map.setCenter(markers[currentM].getPosition());
    });
    $('#next-button').click(function() {
        if (currentM > markers.length) {
            currentM = 0;
        } else
            currentM += 1;
        $("#site-title").empty().append(markers[currentM].title);
        map.setZoom(18);
        map.setCenter(markers[currentM].getPosition());
    });
    $("#quit-button").click(function() {
        $("#fiche-site").addClass("hidden");
        map.setCenter(mapCenter)
        map.setZoom(10);
    });
});



for (i = 0; i < sports.length; i++) {
    $("#sport-select").append("<a class='dropdown-item sports-item' href='#'>" + sports[i] + "</a>");
    $(".sports-item").click(function() {
        for (i = 0; i < markers.length; i++) {
            if (markers[i].basketball == true)
                markers[i].visible = true;
            else markers[i].visible = false;
        }
    })
}

for (i = 0; i < villes.length; i++) {
    $("#city-select").append("<a class='dropdown-item' href='#'>" + villes[i] + "</a>");
}