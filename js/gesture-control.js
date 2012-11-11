/*
 * Gesture control playground
 */

//var fingers = 0;

$.fn.extend({
	gestures: function() { 
		this.fingers = 0;

		$(this).on('touchstart', function(e) {
			
	 		this.touches = e.originalEvent.targetTouches;

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
	 			if ( this.touches.length == 1 ) {

	 			}
	 			// Double Finger Tap
	 			else if ( this.touches.length == 2 ) {
	 				
	 				//create_event("")
					if (window.CustomEvent) {
						var double_tap = document.createEvent('CustomEvent');
						double_tap.initCustomEvent("tapTwoFingers", true, true, {touches: this.touches});
						this.dispatchEvent(double_tap);
					}
	 			}
	 			// Three Finger Tap
	 			else if ( this.touches.length == 3 ) {

	 			}

	 			// Reset to 0 as the touch has ended
	 			this.fingers = 0;
	 		}
	 	})
	 	.on('mousedown', function(e) {
	 		console.log(e.which);
	 		// Double Tap
	 		if ( e.which == 3 ) {

				if (window.CustomEvent) {
					var double_tap = document.createEvent('CustomEvent');
					double_tap.initCustomEvent("tapTwoFingers", true, true, {touches: this.touches});
					this.dispatchEvent(double_tap);
				}
 		
	 		}

	 		if (e.preventDefault)
			{
				e.preventDefault();
			}
			else
			{
				e.returnValue = false;
			}
	 			
	 	}).on('contextmenu', function(e){
	 		e.preventDefault();

	 	});


	 	return this;
	}
});

 // *PING!* The DOM is ready
 $(function(){

	$('body').gestures().on('tapTwoFingers', function(e) {
		var touches = e.originalEvent.detail.touches;
		console.log('Double Tap');
	});

 });
