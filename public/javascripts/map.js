var var_map;
var var_infowindow;

(function () {
    function init_map() {
        var var_location = new google.maps.LatLng(44.8102976,20.4584766);
        var var_mapoptions = {
            center: var_location,
            zoom: 9
        };

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map});

        var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);

        var_infowindow = new google.maps.InfoWindow({});

        var_marker.setMap(var_map);
    }

    google.maps.event.addDomListener(window, 'load', init_map);
})();
