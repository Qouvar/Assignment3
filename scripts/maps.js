function initMap() {
//----places to see
  var tosee = {lat: -43.8769338, lng: 170.3640974};
  var church = {lat: -44.003397, lng: 170.482513};
  var lupin = {lat: -44.016661, lng: 170.502775};
  var centre = {lat: -43.733200, lng: 170.093535};

  var map1 = new google.maps.Map(document.getElementById('map1'), {
    zoom: 9.9,
    center: tosee
  });

  var churchMarker = new google.maps.Marker({
    position: church,
    map: map1,
    title: 'Church of the Good Shepherd',
    label: 'A',
  });
  var lupinMarker = new google.maps.Marker({
    position: lupin,
    map: map1,
    title: 'The Lupin Fields',
    label: 'B',
  });
  var centreMarker = new google.maps.Marker({
    position: centre,
    map: map1,
    title: 'Sir Edmund Hillary Alpine Centre',
    label: 'C',
  });    

  var stay = {lat: -43.7347512, lng: 170.0984613};

  var yha = {lat: -43.737406, lng: 170.100789};
  var alpine = {lat: -43.733837, lng: 170.095865};
  var hermitage = {lat: -43.733090, lng: 170.093615};

  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 15.5,
    center: stay
  });

  //----accommodations
  var yhaMarker = new google.maps.Marker({
    position: yha,
    map: map2,
    title: 'YHA Aoraki Mt. Cook Backpackers',
    label: 'A',
  });
  var alpineMarker = new google.maps.Marker({
    position: alpine,
    map: map2,
    title: 'Aoraki Mt Cook Alpine Lodge',
    label: 'B',
  });
  var hermitageMarker = new google.maps.Marker({
    position: hermitage,
    map: map2,
    title: 'The Hermitage Hotel',
    label: 'C',
  });
  }