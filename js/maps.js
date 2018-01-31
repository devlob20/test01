// Regular map
  function regular_map() {
      var var_location = new google.maps.LatLng(25.8515296,-80.1357358);

      var var_mapoptions = {
          center: var_location,
          zoom: 8
      };

      var var_map = new google.maps.Map(document.getElementById("map-container"),
          var_mapoptions);

      var var_marker = new google.maps.Marker({
          position: var_location,
          map: var_map,
          title: "New York"
      });
  }

  // Initialize maps
  google.maps.event.addDomListener(window, 'load', regular_map);

  