var filtredMarkers = [];

function handleNoResults() {
    $('#nb-markers').empty().append("0");
    map.setZoom(11);
}

function refreshMap() {
    var a = 0;
    for (i = 0; i < markers.length; i++) {
        if (markers[i].visible == true) {
            filtredMarkers[a] = markers[i];
            a++;
        } else filtredMarkers.splice(a, 1);
    }
    if (filtredMarkers.length == 0) {
        $('#nb-markers').empty().append("0");
        map.setZoom(map.getZoom() - 0.1);
    } else {
        map.setCenter(filtredMarkers[0].position);
        map.setZoom(11);
        $('#nb-markers').empty().append(filtredMarkers.length);
    }
}

function initMarkers() {
    $("#city-filter").addClass("hidden").empty();
    $("#sport-filter").addClass("hidden").empty();
    for (let i = 0; i < markers.length; i++) {
        markers[i].visible = true;
    }
    refreshMap();
    map.setCenter(mapCenter);
    map.setZoom(10);
    showFiltredM();
}

function remplirFicheSite(arg) {
    $("#fiche-site").removeClass("hidden");
    $("#site-title").empty().append(filtredMarkers[arg].title);
    $("#descr-site").empty().append(filtredMarkers[arg].descr);
    $("#epr-site").empty();
    for (i = 0; i < sports.length; i++) {
        if (filtredMarkers[arg].sport.a == i) {
            $("#epr-site").append("<li class='epr-list'>" + sports[i] + "</li>");
        }
        if (filtredMarkers[arg].sport.b == i) {
            $("#epr-site").append("<li class='epr-list'>" + sports[i] + "</li>");
        }
        if (filtredMarkers[arg].sport.c == i) {
            $("#epr-site").append("<li class='epr-list'>" + sports[i] + "</li>");
        }
        if (filtredMarkers[arg].sport.d == i) {
            $("#epr-site").append("<li class='epr-list'>" + sports[i] + "</li>");
        }
    }
    map.setZoom(18);
    map.setCenter(filtredMarkers[arg].getPosition());
    currentM = arg;
}

function sortVilles(arg) {
    for (j = 0; j < markers.length; j++) {
        if (markers[j].ville == arg) {
            markers[j].visible = true;
        } else {
            markers[j].visible = false;
        }
    }
    refreshMap();
    showFiltredM();
    $("#sport-filter").addClass("hidden").empty();
    $("#city-filter").removeClass("hidden").empty().append(villes[arg]);
}

function sortSports(arg) {
    for (u = 0; u < markers.length; u++) {
        if (markers[u].sport.a == arg || markers[u].sport.b == arg || markers[u].sport.c == arg || markers[u].sport.d == arg) {
            markers[u].visible = true;
        } else {
            markers[u].visible = false;
        }
    }
    refreshMap();
    showFiltredM();
    $("#city-filter").addClass("hidden").empty();
    $("#sport-filter").removeClass("hidden").empty().append(sports[arg]);
}

function showFiltredM() {
    $('.results-item').remove();
    if (filtredMarkers.length != 0) {
        for (let i = 0; i < filtredMarkers.length; i++) {
            $('#results').append('<li class="results-item"><a type="button" onclick="remplirFicheSite(' + i + ')">' + filtredMarkers[i].title + '</a></li>');
        }
    }
}