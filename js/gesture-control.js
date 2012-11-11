/*
 * Gesture control playground
 */

var fingers = 0;

 // *PING!* The DOM is ready
 $(function(){


 	$('body')
	 	.on('touchstart', function(e) {
			
	 		fingers = e.originalEvent.targetTouches.length;

			//console.log('Start: ' + e.originalEvent.targetTouches.length);
	 		
	 		// Ok so lets start creating some callbacks
	 		if ( e.originalEvent.targetTouches ) {

	 		}
	 		/*this.middleclick(e);

	 		moveTarget(e);
	 		$('#status').html('touchstart');*/
	 		e.preventDefault();
	 		
	 	})
	 	.on('touchend', function(e) {
	 		//console.log('End: ' + e.originalEvent.targetTouches.length);

	 		if ( e.originalEvent.targetTouches.length == 0 ) {
	 			
	 			// Single Finger Tap
	 			if ( fingers == 1 ) {

	 			}
	 			// Double Finger Tap
	 			else if ( fingers == 2 ) {

	 			}
	 			// Three Finger Tap
	 			else if ( fingers == 3 ) {

	 			}
	 			$('#status').html(fingers);
	 			// Reset to 0 as the touch has ended
	 			touching = 0;

	 		}

	 		/*$('#status').html('touchend');
	 		e.preventDefault();
	 		var i = 0;
	 		$('.target').each(function(t,e) {
	 			i++;
	 			setTimeout(function(){$(e).fadeOut(function(){$(e).remove();});}, 400 + i * 10);
	 		});
	 		*/
	 	})
	 	.on('touchmove', function(e) {

	 		console.log('Move: ' + e.originalEvent.targetTouches.length);
	 		//moveTarget(e);
	 		//$('#status').html('touchmove');
	 		e.preventDefault();
	 	})
	 	.on('tap', function(fingers, e){
	 		console.log(fingers);
	 	});	

 });

 function moveTarget(e) {

 	for ( i = 0; i < e.originalEvent.targetTouches.length; i++ ) {

 		var x = e.originalEvent.targetTouches[i].pageX;
	 	var y = e.originalEvent.targetTouches[i].pageY;
	 		// offset for the middle of the object
	 		x = x - $('#target').width()/2;
	 		y = y - $('#target').height()/2;

	 	var newtarget = document.createElement('div');
	 		newtarget.className = 'target';
	 		newtarget.style.left = x + 'px';
	 		newtarget.style.top = y + 'px';

	 	$('body').append(newtarget);

 	}

 	

 	//$('#target').css({position: 'absolute', left: x, top: y});
 }