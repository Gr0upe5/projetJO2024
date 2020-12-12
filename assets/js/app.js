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
        visible: true,
        sport: { a: 8, b: 2 },
        ville: 2,
        descr: "L’avenue des Champs-Élysées (souvent abrégé les Champs-Élysées, parfois les Champs) est une voie de Paris. Longue de près de deux kilomètres et suivant l'axe historique de la ville, elle est une voie de circulation centrale reliant la place de la Concorde à la place Charles-de-Gaulle dans le 8e arrondissement. Site touristique majeur, elle a souvent passé pour la plus belle avenue de la capitale1, et est connue en France comme la « plus belle avenue du monde ».",
    }),
    //Champs-de-Mars
    new google.maps.Marker({
        position: { lat: 48.85611111, lng: 2.29833333 },
        map,
        title: 'Champs-de-Mars',
        visible: true,
        sport: { a: 18, b: 19 },
        ville: 2,
        descr: "Le Champ-de-Mars est un vaste jardin public, entièrement ouvert et situé à Paris dans le 7e arrondissement, entre la tour Eiffel au nord-ouest et l'École militaire au sud-est. Avec ses 24,5 ha, le jardin du Champ-de-Mars est l'un des plus grands espaces verts de Paris. Riche d'une histoire bicentenaire, le Champ-de-Mars accueille les Parisiens et les touristes toute l'année autour d'un vaste ensemble d'activités.",
    }),
    //Tour Eiffel
    new google.maps.Marker({
        position: { lat: 48.858370, lng: 2.294481 },
        title: 'Tour Eiffel',
        map,
        visible: true,
        sport: { a: 30, b: 1 },
        ville: 2,
        descr: "Construite en deux ans par Gustave Eiffel et ses collaborateurs pour l’Exposition universelle de Paris de 1889, et initialement nommée « tour de 300 mètres », elle est devenue le symbole de la capitale française et un site touristique de premier plan : il s’agit du troisième site culturel français payant le plus visité en 2015, avec 5,9 millions de visiteurs en 2016. Depuis son ouverture au public, elle a accueilli plus de 300 millions de visiteurs.",
    }),
    //Stade de France
    new google.maps.Marker({
        position: { lat: 48.924459, lng: 2.360164 },
        map,
        title: 'Stade de France',
        visible: true,
        sport: { a: 2 },
        ville: 0,
        descr: "Le Stade de France est le plus grand stade français avec 80 698 places en configuration football/rugby. Il se situe dans le quartier de la Plaine Saint-Denis à Saint-Denis, dans la proche banlieue nord de Paris. Il est l'œuvre de quatre architectes : Michel Macary, Aymeric Zublena, Michel Regembal et Claude Costantini. L'architecture de ce stade s'inspire du Worldport de la compagnie aérienne américaine Pan Am qui se situait à l'aéroport international John-F.-Kennedy de New York.",
    }),
    //Village olympique de Saint-Denis
    new google.maps.Marker({
        position: { lat: 48.8665, lng: 2.3373 },
        title: 'Village olympique de Saint-Denis',
        map,
        visible: true,
        ville: 0,
        descr: "Le village olympique de Saint-Denis est un projet de village olympique prévu pour accueillir les athlètes lors de l'organisation des Jeux olympiques et des Jeux paralympiques à Paris, en France, durant l'été 2024.",
    }),
    //Esplanade des Invalides
    new google.maps.Marker({
        position: { lat: 48.8565, lng: 2.3131 },
        map,
        title: 'Esplanade des Invalides',
        visible: true,
        sport: { a: 28 },
        ville: 2,
        descr: "L'esplanade des Invalides est un vaste espace vert parisien créé au début du xviiie siècle.",
    }),
    //Stade olympique Yves-du-Manoir
    new google.maps.Marker({
        position: { lat: 48.9290, lng: 2.2479 },
        map,
        title: 'Stade olympique Yves-du-Manoir',
        visible: true,
        ville: 4,
        descr: "Le stade olympique Yves-du-Manoir est un stade omnisports situé à Colombes (Hauts-de-Seine), dans la banlieue nord-ouest de Paris. Ce stade a notamment accueilli les Jeux olympiques d'été de 1924, la finale de la Coupe du monde de football 1938, quarante finales de la Coupe de France de football, un grand nombre de finales du championnat de France de rugby à XV ainsi que des rencontres internationales des équipes de France de football et de rugby à XV.",
    }),
    //Zénith de Paris
    new google.maps.Marker({
        position: { lat: 48.8907, lng: 2.3933 },
        map,
        title: 'Zénith de Paris',
        visible: true,
        sport: { a: 15 },
        ville: 2,
        descr: "Le Zénith Paris - La Villette est une salle de concert parisienne, située dans le parc de la Villette, dans le XIXe arrondissement, sur le bord du canal de l'Ourcq. Sa capacité maximum est de 6 804 places.",
    }),
    //Château de Versailles
    new google.maps.Marker({
        position: { lat: 48.80472222, lng: 2.12027778 },
        map,
        title: 'Château de Versailles',
        visible: true,
        sport: { a: 9, b: 21 },
        ville: 6,
        descr: "Le château de Versailles est un château et un monument historique français qui se situe à Versailles, dans les Yvelines, en France. Il fut la résidence des rois de France Louis XIV, Louis XV et Louis XVI. Le roi et la cour y résidèrent de façon permanente du 6 mai 1682 au 6 octobre 1789, à l'exception des années de la Régence de 1715 à 1723. Situés au sud-ouest de Paris, ce château et son domaine visaient à glorifier la monarchie française.",
    }),
    //Vélodrome national
    new google.maps.Marker({
        position: { lat: 48.78777778, lng: 2.03472222 },
        map,
        title: 'Vélodrome national',
        visible: true,
        sport: { a: 08, b: 21, c: 17 },
        ville: 7,
        descr: "Le vélodrome de Saint-Quentin-en-Yvelines, également nommé Vélodrome national, est un vélodrome situé à Montigny-le-Bretonneux dans les Yvelines. Il a ouvert ses portes au public le 13 janvier 2014. La Fédération française de cyclisme y a son siège et l'équipe de France son centre d'entrainement. Le vélodrome est l'équipement principal de ce nouveau complexe, qui comporte une seconde arène adaptée aux épreuves de BMX. Ces installations aux normes olympiques accueillent des compétitions nationales et internationales.",
    }),
    //Grande halle de la Villette
    new google.maps.Marker({
        position: { lat: 48.8873, lng: 2.3909 },
        map,
        title: 'Grande halle de la Villette',
        visible: true,
        ville: 2,
        descr: "La grande halle de la Villette, pouvant éventuellement être abrégée en « Grande Halle », est un bâtiment des anciens abattoirs composé de structures en charpente métalliques construit dans le quartier de la Villette à Paris. Elle se trouve actuellement place de la Fontaine-aux-Lions à l'entrée Sud du parc de la Villette (métro Porte de Pantin).",
    }),
    //Stade Pierre-de-Coubertin
    new google.maps.Marker({
        position: { lat: 48.835278, lng: 2.256111 },
        map,
        title: 'Stade Pierre-de-Coubertin',
        visible: true,
        sport: { a: 0 },
        ville: 2,
        descr: "Le stade Pierre de Coubertin est l'âme du patrimoine sportif parisien. Tous les sportifs qui l'ont fréquenté sont unanimes : sa salle est chaleureuse, conviviale et le contact avec le public s'y établit spontanément. Construit pour l'Exposition internationale de 1937, le stade Pierre de Coubertin fut reconstruit après avoir été bombardé pendant la Seconde Guerre mondiale. Le stade Pierre de Coubertin connut l'apogée de sa gloire dans les années 50-60, en accueillant notamment de grands combats de boxe. Chaque année s'y déroule une centaine de manifestations de judo, karaté, boxe, escrime, danse, gymnastique, basket-ball, handball,…L’équipe de basket du Paris Basket Racing y a élu domicile. ",
    }),
    //Colline d'Élancourt
    new google.maps.Marker({
        position: { lat: 48.7878, lng: 1.9679 },
        map,
        title: "Colline d'Élancourt",
        visible: true,
        sport: { a: 8 },
        ville: 8,
        descr: "La colline d'Élancourt, ou colline de la Revanche, est située à Élancourt dans le département français des Yvelines. S'élevant à 231 mètres d'altitude, elle est le point culminant de toute la région Île-de-France.",
    }),
    //Golf national
    new google.maps.Marker({
        position: { lat: 48.7468, lng: 2.0715 },
        map,
        title: "Golf national",
        visible: true,
        sport: { a: 13 },
        ville: 7,
        descr: "Le Golf national est un parcours de golf français situé à Saint-Quentin-en-Yvelines, en région Île-de-France dans le département des Yvelines. Il est constitué de deux parcours de 18 trous : l'Albatros qui accueille les compétitions de haut niveau, l\'Aigle pour les golfeurs de tous niveaux, ainsi que d\'un parcours « école » de 9 trous, l\'Oiselet.",
    }),
    //Parc des expositions du Bourget
    new google.maps.Marker({
        position: { lat: 48.9356, lng: 2.4321 },
        map,
        title: "Parc des expositions du Bourget",
        visible: true,
        sport: { a: 32, b: 28 },
        ville: 1,
        descr: "À moins de 10 km de Paris, à proximité de l'aéroport du Bourget et à 15 mn de Paris Charles de Gaulle, Paris Le Bourget Parc des expositions dispose sur une superficie totale de 60 hectares : 5 halls d'expositions de 4 000 à 25 000 m², 35 hectares de surfaces extérieures et 25 hectares d'espaces verts accueillant salons, manifestations, lancements de nouveaux produits.",
    }),
    //Parc des expositions de la porte de Versailles
    new google.maps.Marker({
        position: { lat: 48.83194444, lng: 2.28916667 },
        map,
        title: "Parc des expositions de la porte de Versailles",
        visible: true,
        sport: { a: 16, b: 27 },
        ville: 6,
        descr: "Paris Expo Porte de Versailles est le plus grand parc des expositions français. Il est situé sur les territoires du quartier Saint-Lambert du 15e arrondissement de Paris et des communes d'Issy-les-Moulineaux et de Vanves, dans les Hauts-de-Seine. Il s'étend des deux côtés du boulevard périphérique, de la porte d'Issy, à l'ouest, à la porte de la Plaine, à l'est, l'entrée principale se situant place de la Porte-de-Versailles, à la jonction de deux des boulevards des Maréchaux : Lefebvre et Victor. Le parc des expositions est géré par la société Viparis depuis 1987.",
    }),
    //Parc des Princes
    new google.maps.Marker({
        position: { lat: 48.84138889, lng: 2.25305556 },
        map,
        title: "Parc des Princes",
        visible: true,
        sport: { a: 12 },
        football: true,
        ville: 2,
        descr: "Le Parc des Princes est un stade situé au sud-ouest de la ville de Paris, dans le 16e arrondissement depuis 1897 et sur le périphérique parisien dans sa configuration actuelle, depuis 1971 près de la commune de Boulogne-Billancourt. Constituant le plus important stade français de 1972 à 1998, il est actuellement le cinquième plus grand stade français, mais toujours l'un des plus anciens et des plus connus, sinon le plus connu de la région parisienne avec le non moins fameux Stade de France, situé plus au nord, en proche banlieue, à Saint-Denis.",
    }),
    //Grand Palais
    new google.maps.Marker({
        position: { lat: 48.86611111, lng: 2.31250000 },
        map,
        title: "Grand Palais",
        visible: true,
        sport: { a: 10, b: 11 },
        ville: 2,
        descr: "Le Grand Palais est un monument parisien situé en bordure des Champs-Élysées, face au Petit Palais, dont il est séparé par l'avenue Winston-Churchill dans le 8e arrondissement. Ses 77 000 m2 abritent régulièrement salons et expositions prestigieuses.",
    }),
    //Stade Vélodrome
    new google.maps.Marker({
        position: { lat: 43.26972222, lng: 5.39583333 },
        map,
        title: "Stade Vélodrome",
        visible: true,
        sport: { a: 12 },
        ville: 9,
        descr: "Le stade Vélodrome (appelé Orange Vélodrome par contrat de naming depuis 2016) est une enceinte sportive située à Marseille (Bouches-du-Rhône). Bâti dans le 8e arrondissement, c'est le principal équipement sportif de Marseille et le deuxième stade de France en termes de capacité. Le Vélodrome est, depuis son inauguration en 1937, utilisé par le club de football de l'Olympique de Marseille.",
    }),
    //Place de la Concorde
    new google.maps.Marker({
        position: { lat: 48.86555556, lng: 2.32111111 },
        map,
        title: "Place de la Concorde",
        visible: true,
        sport: { a: 0, b: 6, c: 10, d: 23 },
        ville: 2,
        descr: "La place de la Concorde, avec 8,64 hectares1, est la plus grande place de Paris. Le nom aurait été choisi par le Directoire pour marquer la réconciliation des Français après les excès de la Terreur.",
    }),
    //Stade Jean-Bouin
    new google.maps.Marker({
        position: { lat: 48.84333333, lng: 2.25305556 },
        map,
        title: "Stade Jean-Bouin",
        visible: true,
        sport: { a: 22 },
        ville: 2,
        descr: "Le stade Jean-Bouin est un stade de 20 000 places, situé dans le 16e arrondissement de Paris, juste à côté du Parc des Princes.",
    }),
    //Stade Roland-Garros
    new google.maps.Marker({
        position: { lat: 48.84722222, lng: 2.24916667 },
        map,
        title: "Stade Roland-Garros",
        visible: true,
        sport: { a: 26, b: 5 },
        ville: 2,
        descr: "Le stade Roland-Garros est un stade de tennis construit en 1927 et situé à l’ouest de Paris au niveau de la porte Molitor, en lisière du bois de Boulogne. Il accueille tous les ans les Internationaux de France de tennis.",
    }),
    //Palais omnisports de Paris-Bercy
    new google.maps.Marker({
        position: { lat: 48.83861111, lng: 2.37861111 },
        map,
        title: "Palais omnisports de Paris-Bercy",
        visible: true,
        sport: { a: 0 },
        ville: 2,
        descr: "Le palais omnisports de Paris-Bercy (en abrégé POPB)a souvent désigné (par ellipse) Bercy, et actuellement parrainé sous le nom Accor Arena1, est une salle polyvalente et modulable située boulevard de Bercy, dans le quartier de Bercy, dans le 12e arrondissement de Paris. Il a fait l'objet d'importants travaux de rénovation en 2014 et 2015. Il est depuis son inauguration en 1984 le théâtre de nombreuses manifestations sportives, certaines régulières (comme le Masters de Paris-Bercy en tennis et le Grand Chelem de Paris en judo), de concerts des plus grands artistes nationaux et internationaux, et prévoit d'accueillir les compétitions de basket-ball des Jeux olympiques d'été de 2024.",
    }),
    //Arena Alice Milliat
    new google.maps.Marker({
        position: { lat: 48.89944444, lng: 2.36138889 },
        map,
        title: "Arena Alice Milliat",
        visible: true,
        sport: { a: 4 },
        ville: 2,
        descr: "Paris Arena II est un projet de salle polyvalente et modulable située dans le quartier de la Chapelle (18e arrondissement) de Paris. La salle aura une jauge de 8 000 places assises1 et devrait être livrée à l'été 2023. Elle devrait accueillir les épreuves de lutte et le tournoi préliminaire de basketball masculin des Jeux olympiques d'été de 2024, avant d'héberger le tournoi paralympique de tennis de table1. Dès que la salle sera construite, elle deviendra la résidence du Paris Basketball, ainsi que du PSG Handball pour ses grandes affiches.",
    }),
    //Paris La Défense Arena
    new google.maps.Marker({
        position: { lat: 48.89555556, lng: 2.22944444 },
        map,
        title: "Paris La Défense Arena",
        visible: true,
        sport: { a: 14 },
        ville: 2,
        descr: "La Paris La Défense Arena, nommée U Arena jusqu'au 12 juin 2018, anciennement Arena 92, est une salle modulable et polyvalente (manifestations sportives, salle de spectacle) à Nanterre, juste derrière l'Arche de la Défense, ouverte en octobre 20171 et inaugurée le 16 octobre 2017",
    }),
    //Piscine olympique de Saint-Denis
    new google.maps.Marker({
        position: { lat: 48.92388889, lng: 2.35500000 },
        map,
        title: "Piscine olympique de Saint-Denis",
        visible: true,
        sport: { a: 1, b: 20 },
        ville: 0,
        descr: "La piscine olympique de Saint-Denis est un projet d'équipement de la candidature française pour les Jeux olympiques d'été de 2024 qui sera implanté à Saint-Denis.",
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
for (let k = 0; k < markers.length; k++) {
    initMarkers();
    refreshMap();
    markers[k].addListener('click', function() {
        $("#fiche-site").removeClass("hidden");
        $("#site-title").empty().append(markers[k].title);
        $("#descr-site").empty().append(markers[k].descr);
        $("#epr-site").empty();
        for (j = 0; j < sports.length; j++) {
            if (markers[k].sport.a == j) {
                $("#epr-site").append("<li>" + sports[j] + "</li>");
            }
            if (markers[k].sport.b == j) {
                $("#epr-site").append("<li>" + sports[j] + "</li>");
            }
            if (markers[k].sport.c == j) {
                $("#epr-site").append("<li>" + sports[j] + "</li>");
            }
            if (markers[k].sport.d == j) {
                $("#epr-site").append("<li>" + sports[j] + "</li>");
            }
        }
        map.setZoom(18);
        map.setCenter(markers[k].getPosition());
        currentM = k;
    });
    map.setCenter(mapCenter);
    map.setZoom(10);
}

let currentM = 0;
$(function() {
    $('#prev-button').click(function() {
        if (currentM == 0) {
            currentM = filtredMarkers.length;
        } else
            currentM -= 1;
        remplirFicheSite(currentM);
    });
    $('#next-button').click(function() {
        if (currentM == filtredMarkers.length - 1) {
            currentM = 0;
        } else
            currentM += 1;
        remplirFicheSite(currentM);

    });
    $("#quit-button").click(function() {
        $("#fiche-site").addClass("hidden");
        map.setCenter(mapCenter)
        map.setZoom(10);
    });
});

for (i = 0; i < villes.length; i++) {
    $("#city-select").append('<a class="dropdown-item villes-item" type="button" onclick="sortVilles(' + i + ')">' + villes[i] + '</a>');
}

for (i = 0; i < sports.length; i++) {
    $("#sport-select").append('<a class="dropdown-item sports-item" onclick="sortSports(' + i + ')" href="#">' + sports[i] + '</a>');
}