/*
 * Gesture control playground
 */

 // *PING!* The DOM is ready
 $(function(){


 	$('body')
	 	.on('touchstart', function(e) {
	 		console.log('touchstart');
	 		console.log(e.originalEvent.targetTouches[0].pageX + " " + e.originalEvent.targetTouches[0].pageY);
	 		console.log('-----------');
	 		$('#status').html('touchstart');

	 		e.preventDefault();
	 	})
	 	.on('touchend', function(e) {
	 		console.log('touchend');
	 		console.log(e.originalEvent.targetTouches[0].pageX + " " + e.originalEvent.targetTouches[0].pageY);
	 		console.log('-----------');
	 		$('#status').html('touchend');

	 		e.preventDefault();
	 	})
	 	.on('touchmove', function(e) {
	 		console.log('touchmove');
	 		console.log(e.originalEvent.targetTouches[0].pageX + " " + e.originalEvent.targetTouches[0].pageY);
	 		console.log('-----------');
	 		$('#status').html('touchstart');

	 		e.preventDefault();
	 	});
	 	

 });