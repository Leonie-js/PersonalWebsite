
function pageButton( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e )
	{
		gotoPage( 'next' );
		// openPopup('pageInput');
	}
 
 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}


}

function pageNerdEX( ell )
{
	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e )
	{
		gotoPage( 'next' );
		// openPopup('pageInput');
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}

function pageNerd1( ell )
{
	var answer = 'b';

	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'next' );
		} else {
			openPopup( 'pagePopup' );
		}
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}
function pageNerd2( ell )
{
	var answer = 'c';

	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'next' );
		} else {
			openPopup( 'pagePopup' );
		}
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}
function pageNerd3( ell )
{
	var answer = 'a';

	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'next' );
		} else {
			openPopup( 'pagePopup' );
		}
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}
function pageNerd4( ell )
{
	var answer = 'd';

	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'next' );
		} else {
			openPopup( 'pagePopup' );
		}
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}
function pageNerd5( ell )
{
	var answer = 'c';

	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e ){
		var value = $( '#' + ell + ' input[type=radio]:checked' ).val();

		if( value == answer ){
			gotoPage( 'pageFinal' );
		} else {
			openPopup( 'pagePopup' );
		}
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}
function pageImageSelector( ell )
{
	var nerd = 'Bertha';
	var athletic = 'Eugene';
	var finder = 'Marvin';

	$( '#' + ell + ' img').click( buttonClicked );

	function buttonClicked( e ){
		var value = $( e.target ).attr( 'alt' );

		if( value == nerd ){
			gotoPage( 'pageNerdEX' );
		} 

		if( value == athletic ){
			gotoPage( 'pageOleate' );
		} 

		if( value == finder ){
			gotoPage( 'pageFinder' );
		} 
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}	

function pageFinder( ell )
{
	$( '#' + ell + ' #submit' ).change( selectImage );

	function selectImage( e )
	{
		removeItems();

		var files = e.target.files;
		if ( files && files.length > 0 )
		{
			var file = files[ 0 ];
		}

		var URL = window.URL || window.webkitURL;
		var imgURL = URL.createObjectURL(file);
		var img = $( '<img id="uploadedImage" src="'+imgURL+'" alt="Uploaded image">' );
		$( '#'+ ell ).append( img );


		var btn = $( '<button id="uploadedButton">Click me to upload the image</button>' );
		btn.click( buttonClicked );
		$( '#'+ ell ).append( btn );
	}

	function buttonClicked( e )
	{
		gotoPage( 'pageFinal' );
		$( '#'+ ell ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , removeItems );
	}

	function removeItems()
	{
		$( '#uploadedImage' ).remove();
		$( '#uploadedButton' ).remove();
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}

function pageOleate( ell )
{
	var oleat = $( '#oleate' );
	var map = $( '#map' );

	// calculating header height
	var headerHeight = $( 'header' ).height() / 2;

	$( 'figure' ).mousemove( onHover );

	function onHover( e )
	{
		oleat.css( 'position', 'fixed' );
		oleat.css( 'left', e.screenX );
		oleat.css( 'top', e.screenY - headerHeight);
	}
	var answer0 = 'fluit';
	var answer1 = 'blokfluit';
	var answer3 = 'Fluit';
	var answer4 = 'Blokfluit';


	$( '#' + ell + ' #submit' ).click( buttonClicked );

	function buttonClicked( e )
	{
		var value = $( '#' + ell + ' #fieldToCheck' ).val();
		if( value == answer0 || 
			value == answer1 ||
			value == answer3 ||
			value == answer4 ){
			gotoPage( 'pageFinal' );
		} else {
			alert( 'fout!' );
		}
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}


document.onmousemove = pageOleate;

function pageFinal( ell )
{
	

	var map;
	mapTypeId: google.maps.MapTypeId.HYBRID
	
	var lastMarker;

	$( '#'+ ell ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , resizeMap );

	function resizeMap( e ){
		$( '#'+ ell ).off( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , resizeMap );
		google.maps.event.trigger( map , 'resize');
	}

	initialize();
	google.maps.event.addListener( map , 'click' , mapClicked );

	function initialize() {
		var mapOptions = {
			zoom: 16,
			disableDoubleClickZoom: true,
			draggable: true,
			panControl: false,
			scrollwheel: true,
			zoomControl: true,
			streetViewControl: false,
			overviewMapControl: false,
			mapTypeControl: false,
			center: new google.maps.LatLng( 51.48824378 , 7.0317614 )
		};


		map = new google.maps.Map( document.getElementById( 'mapCanvasOne' ) , mapOptions );
		var post = {lat:51.486814585826416 ,lng:7.035069465473498 }
		var myMarker = new google.maps.Marker({
			position: post,
			map: map
		});
	}

	function mapClicked( e ){
		lat = e.latLng.k;
		lng = e.latLng.D;

		if(lat > markers[ 0 ][ 1 ] && lat < markers[ 1 ][ 1 ] && lng > markers[ 0 ][ 2 ] && lng < markers[ 1 ][ 2 ]){
			gotoPage( 'next' );
			removeMarkers();
		}
		else{
			removeMarkers();
			var marker = [ [ 'Wrong&nbsp;location!' , lat , lng ] ]
			setMarkers( marker );
		}
	}

	function setMarkers( markers ){
		for ( i = 0 ; i < markers.length ; i++ ) {
			var pos = new google.maps.LatLng( markers[ i ][ 1 ], markers[ i ][ 2 ] );
			var marker = new google.maps.Marker({
				position: pos,
				map: map
			});

			var infowindow = new google.maps.InfoWindow({
				content: markers[ i ][ 0 ]
			});

			infowindow.open( map , marker );
			lastMarker = marker;
		}


	}

	function removeMarkers(){
		if( lastMarker !== undefined ){
			lastMarker.setMap( null );
		}
	}

	$( '#' + ell + ' #submit' ).change( selectImage );

	function selectImage( e )
	{
		removeItems();

		var files = e.target.files;
		if ( files && files.length > 0 )
		{
			var file = files[ 0 ];
		}

		var URL = window.URL || window.webkitURL;
		var imgURL = URL.createObjectURL(file);
		var img = $( '<img id="uploadedImage" src="'+imgURL+'" alt="Uploaded image">' );
		$( '#'+ ell ).append( img );


		var btn = $( '<button id="uploadedButton">Click me to upload the image</button>' );
		btn.click( buttonClicked );
		$( '#'+ ell ).append( btn );
	}

	function buttonClicked( e )
	{
		gotoPage( 'pageFinal' );
		$( '#'+ ell ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , removeItems );
	}

	function removeItems()
	{
		$( '#uploadedImage' ).remove();
		$( '#uploadedButton' ).remove();
	}

	 $( '#' + ell + ' #help' ).click( buttonhelpClicked );

	function buttonhelpClicked( e )
	{
		//gotoPage( 'next' );
		openPopup('pageHelp');
	}
}