var map = new GMaps({
    el: '#map',
    lat: 48.8534,
    lng: 2.3488,  
}); 
//Tour Eiffel
map.addMarker({
lat: 48.858370,
lng: 2.294481,
title: 'Tour Eiffel',

});  
//Stade de France
map.addMarker({
lat: 48.9209,
lng: 2.36,
title: 'Stade de France',
}); 
//Village olympique de Saint-Denis
map.addMarker({
lat: 48.8665, 
lng: 2.3373,
title: 'Village olympique de Saint-Denis',
}); 
//Champs-Élysées
map.addMarker({
lat: 48.8662, 
lng: 2.3075,
title: 'Champs-Élysées',
});
//Esplanade des Invalides
map.addMarker({
lat: 48.8565, 
lng: 2.3131,
title: 'Esplanade des Invalides',
});
//Stade Jean-Bouin
map.addMarker({
lat: 48.8398, 
lng: 2.2529,
title: 'Stade Jean-Bouin',
});
//Stade olympique Yves-du-Manoir
map.addMarker({
lat: 48.9258, 
lng: 2.2479,
title: 'Stade olympique Yves-du-Manoir',
});
//Zénith de Paris
map.addMarker({
lat: 48.8907, 
lng: 2.3933,
title: 'Zénith de Paris',
});
//Grande halle de la Villette
map.addMarker({
lat: 48.8873, 
lng: 2.3909,
title: 'Grande halle de la Villette',
});
//Stade Pierre-de-Coubertin
map.addMarker({
lat: 48.8317, 
lng: 2.2561,
title: 'Stade Pierre-de-Coubertin',
});
//Vélodrome de Saint-Quentin-en-Yvelines
map.addMarker({
lat: 48.7842, 
lng: 2.0347,
title: 'Vélodrome de Saint-Quentin-en-Yvelines',
});
//Colline d'Élancourt
map.addMarker({
lat: 48.7598, 
lng: 1.9679,
title: "Colline d'Élancourt",
});
//Golf national
map.addMarker({
lat: 48.7475, 
lng: 2.0783,
title: "Golf national",
});
//Parc des expositions du Bourget
map.addMarker({
lat: 48.9356, 
lng: 2.4321,
title: "Parc des expositions du Bourget",
});
map.fitZoom()
