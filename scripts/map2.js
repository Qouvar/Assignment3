function initMap(){
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