var var_map;
var var_infowindow;

(function () {
    function init_map() {
        var var_location = new google.maps.LatLng(44.8056,20.473957);
        var var_mapoptions = {
            center: var_location,
            zoom: 8
        };

        var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);

        var_infowindow = new google.maps.InfoWindow({});
    }

    google.maps.event.addDomListener(window, 'load', init_map);
})();
