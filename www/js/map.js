
var map = {
  document.addEventListener("deviceready", function() {
    var div = document.getElementById("map_canvas");


    const LISLE= new plugin.google.maps.LatLng(41.792278, -88.0652257);
    const CHICAGO= new plugin.google.maps.LatLng(41.8857, -87.645);
    // Initialize the map view
    map = plugin.google.maps.Map.getMap({
      'backgroundColor': 'white',
      'mapType': plugin.google.maps.MapTypeId.ROADMAP,
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': CHICAGO,
        'zoom': 10
      }

    });
    // Wait until the map is ready status.
    map.addEventListener(plugin.google.maps.event.MAP_READY, function(map) {
        map.getMyLocation(function(location) {
            var msg1 = ["BILL ALLEN"].join("\n");
            var msg2 = ["ME"].join("\n");

            map.addMarker({
                'position': CHICAGO,
                'title': msg1
                }, function(marker) {
                    marker.showInfoWindow();
            });

            map.addMarker({
                'position': LISLE,
                'title': msg2
                }, function(marker) {
                    marker.showInfoWindow();
            });
        });
    });
    //map.addEventListener(plugin.google.maps.event.MAP_READY, addMarker);
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

  },  false);


  function onMapReady() {
    var button = document.getElementById("button");
    button.addEventListener("click", onBtnClicked, false);
  }

  function addMarker(){
    map.addCircle({
      'position': CHICAGO,
      'radius': 100,
      'strokeColor' : '#AA00FF',
      'strokeWidth': 5,
      'fillColor' : '#880000'
    });
  }

  function onBtnClicked() {
    map.showDialog();

  }
};
