$(document).ready(function() {
    $("#quit-button").click(function() {
        $("#fiche-site").addClass("hidden");
        map.setCenter(mapCenter)
        map.setZoom(10);
    });

});