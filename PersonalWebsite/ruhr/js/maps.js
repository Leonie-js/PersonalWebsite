google.maps.event.addDomListener(window, 'load', initialize);

var map;
var markers = [
	['Tokyo',35.67580417,139.75647076],
];

function initialize() {
	var mapOptions = {
		zoom: 12,
		disableDoubleClickZoom: true,
		draggable: true,
		panControl: false,
		scrollwheel: true,
		zoomControl: true,
		streetViewControl: false,
		overviewMapControl: false,
		mapTypeControl: false,
		center: new google.maps.LatLng(35.67580417,139.75647076)
	};

  	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  	setMarkers();
}

function setMarkers(){
	for (i = 0; i < markers.length; i++) {
		var post = new google.maps.LatLng(markers[i][1], markers[i][2]);
		var marker = new google.maps.Marker({
			position: post,
			map: map
		});

		var infowindow = new google.maps.InfoWindow({
			content: markers[i][0]
		});

		infowindow.open(map,marker);
	}
}