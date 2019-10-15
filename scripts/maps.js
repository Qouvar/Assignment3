function initMap() {
        var op = {lat: -43.8769338, lng: 170.3640974};
        var church = {lat: -44.003397, lng: 170.482513};
        var lupin = {lat: -44.016661, lng: 170.502775};
        var centre = {lat: -43.733200, lng: 170.093535};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9.9,
          center: op
        });
        var churchMarker = new google.maps.Marker({
          position: church,
          map: map,
          title: 'Church of the Good Shepherd',
          label: 'A',
        });
        var lupinMarker = new google.maps.Marker({
          position: lupin,
          map: map,
          title: 'The Lupin Fields',
          label: 'B',
        });
        var centreMarker = new google.maps.Marker({
          position: centre,
          map: map,
          title: 'Sir Edmund Hillary Alpine Centre',
          label: 'C',
        });
      }