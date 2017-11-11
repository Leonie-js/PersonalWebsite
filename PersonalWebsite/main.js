$(document).ready(start);

function start(){
$('.leonie').click(
	function() {
		TweenLite.to(window, 2, {scrollTo:{y:".leonie2", offsetY:30}});
		});
$('.website').click(
	function() {
		TweenLite.to(window, 2, {scrollTo:{y:".website2", offsetY:30}});
		});
$('.foto').click(
	function() {
		TweenLite.to(window, 2, {scrollTo:{y:".foto2", offsetY:30}});
		});
$('.video').click(
	function() {
		TweenLite.to(window, 2, {scrollTo:{y:".video2", offsetY:30}});
		});
$('.design').click(
	function() {
		TweenLite.to(window, 2, {scrollTo:{y:".design2", offsetY:30}});
		});
$('.contact').click(
	function() {
		TweenLite.to(window, 2, {scrollTo:{y:".contact2", offsetY:30}});
		});

$('#escape').click(
	function(){
		$('.dropdown-content').hide();
		$('#escape').hide();
	});
$('#mobiletext').click(
	function(){
		$('#escape').show();
		$('.dropdown-content').show();
	});

if($(window).width() < 1100){
	$('.leonie').click(
		function() {
			TweenLite.to(window, 2, {scrollTo:{y:".leonie2", offsetY:30}});
			$('.dropdown-content').hide();
			$('#escape').hide();
		});

	$('.website').click(
		function() {
			TweenLite.to(window, 2, {scrollTo:{y:".website2", offsetY:30}});
			$('.dropdown-content').hide();
			$('#escape').hide();
			});
	$('.foto').click(
		function() {
			TweenLite.to(window, 2, {scrollTo:{y:".foto2", offsetY:30}});
			$('.dropdown-content').hide();
			$('#escape').hide();
		});
	$('.video').click(
		function() {
			TweenLite.to(window, 2, {scrollTo:{y:".video2", offsetY:30}});
			$('.dropdown-content').hide();
			$('#escape').hide();
		});
	$('.design').click(
		function() {
			TweenLite.to(window, 2, {scrollTo:{y:".design2", offsetY:30}});
			$('.dropdown-content').hide();
			$('#escape').hide();
		});
	$('.contact').click(
		function() {
			TweenLite.to(window, 2, {scrollTo:{y:".contact2", offsetY:30}});
			$('.dropdown-content').hide();
			$('#escape').hide();
		});

	$('.videoA').click(videoPlay);
	$('.videoB').click(videoPlay);
	$('.videoC').click(videoPlay);

	changes();
	};
};

function changes(){
		var vtfirst = $(".video2 .title p:nth-child(1)").html();
		var vtsecond = $(".video2 .title p:nth-child(2)").html();
		var vtthird = $(".video2 .title p:nth-child(3)").html();

		var vvfirst = $(".video2 .picture video:nth-child(1)").html();
		var vvsecond = $(".video2 .picture video:nth-child(2)").html();
		var vvthird = $(".video2 .picture video:nth-child(3)").html();

		var vxfirst = $(".video2 .text p:nth-child(1)").html();
		var vxsecond = $(".video2 .text p:nth-child(2)").html();
		var vxthird = $(".video2 .text p:nth-child(3)").html();
	
		$(".video2 .title").html('<p>'+ vtfirst +'</p> <video controls>'+ vvfirst +'</video> <p>'+ vxfirst +'</p>');
		$(".video2 .picture").html('<p>'+ vtsecond +'</p> <video controls>'+ vvsecond +'</video> <p>'+ vxsecond +'</p>');
		$(".video2 .text").html('<p>'+ vtthird +'</p> <video controls>'+ vvthird +'</video> <p>'+ vxthird +'</p>');

		var wtfirst = $(".website2 .title p:nth-child(1)").html();
		var wtsecond = $(".website2 .title p:nth-child(2)").html();

		var wvfirst = $(".website2 .picture a:nth-child(1)").html();
		var wvsecond = $(".website2 .picture a:nth-child(2)").html();

		var wxfirst = $(".website2 .text p:nth-child(1)").html();
		var wxsecond = $(".website2 .text p:nth-child(2)").html();

		$(".website2 .title").html('<p>'+ wtfirst +'</p> <a href="./sailfrizz/index.html">'+ wvfirst +'</a> <p>'+ wxfirst +'</p>');
		$(".website2 .picture").html('<p>'+ wtsecond +'</p> <a href="./ruhr/index.html">'+ wvsecond +'</a> <p>'+ wxsecond +'</p>');
		$(".website2 .text").remove();
};

function videoPlay( e ){
	$(e.currentTarget).get(0).play();
}


