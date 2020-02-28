function initMap() {
  var broadway = {
    info:
      '<strong>Chipotle on Broadway</strong><br>\
    	5224 N Broadway St<br> Chicago, IL 60640<br>\
    	<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
    lat: 41.976816,
    long: -87.659916,
  }

  var belmont = {
    info:
      '<strong>Chipotle on Belmont</strong><br>\
    	1025 W Belmont Ave<br> Chicago, IL 60657<br>\
    	<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
    lat: 41.93967,
    long: -87.655167,
  }

  var sheridan = {
    info:
      '<strong>Chipotle on Sheridan</strong><br>\r\
    	6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
    	<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
    lat: 42.002707,
    long: -87.661236,
  }
  
  var delhi = {
    info:
    '<strong>New Delhi</strong>                                              <a href="https://goo.gl/maps/x2VmtxjNUjKs7B2Y9">Get Directions</a>',
    lat: 28.632429,
    long: 77.218788,
  }

  var lajpat = {
    info:
    '<strong>Jasmine Awatramani, <br>Lajpat Nagar </strong>                                              <a href="https://goo.gl/maps/CTiKQqVmBWxVJjkn9">Get Directions</a>',
    lat: 28.576360,
    long: 77.242013,
  }

  var tagore = {
     info:
    '<strong>Gaayan Verma, <br> Tagore Garden</strong>                                              <a href="https://goo.gl/maps/kLogfX9934vdPW9u8">Get Directions</a>',
    lat: 28.645418,
    long: 77.113082,
  }

  var amity = {
     info:
    '<strong>Amity University</strong>                                              <a href="https://goo.gl/maps/dm9ezWiJsVX4qKcQ9">Get Directions</a>',
    lat: 28.545581,
    long: 77.333639,
  }

  var locations = [
    [broadway.info, broadway.lat, broadway.long, 0],
    [belmont.info, belmont.lat, belmont.long, 1],
    [sheridan.info, sheridan.lat, sheridan.long, 2],
    [delhi.info, delhi.lat, delhi.long, 3],
    [lajpat.info, lajpat.lat, lajpat.long, 4],
    [tagore.info, tagore.lat, tagore.long, 5],
    [amity.info, amity.lat, amity.long, 6]

  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(28.632429, 77.218788),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })
 
  var infowindow = new google.maps.InfoWindow({})

  var marker, i
  var emoji = 'poop.png';

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      animation: google.maps.Animation.DROP,
      icon: emoji
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}