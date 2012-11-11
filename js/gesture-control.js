/*
 * Gesture control playground
 */

//var fingers = 0;

$.fn.extend({
	gestures: function() { 
		this.fingers = 0;

		$(this).on('touchstart', function(e) {
			
	 		this.touches = e.originalEvent.targetTouches;

	 		e.preventDefault();
	 		
	 	})
	 	.on('touchend', function(e) {

	 		if ( e.originalEvent.targetTouches.length == 0 ) {
	 			

	 			
	 			switch ( this.touches.length ) {
	 			// One finger
	 			case 1:
	 				if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapOneFinger", true, true, {touches: this.touches});
						this.dispatchEvent(tap);
					}
					break;
				// Two fingers
				case 2: 
					if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapTwoFingers", true, true, {touches: this.touches});
						this.dispatchEvent(tap);
					}
					break;
				// Three Fingers	
	 			case 3:
					if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapThreeFingers", true, true, {touches: this.touches});
						this.dispatchEvent(tap);
					}
					break;
	 			}

				e.preventDefault();
	 		}
	 	})
	 	.on('mousedown', function(e) {
	 		var length = 0;
	 		this.touches = {};
	 		
	 		this.touches['0'] = {
 									clientX: e.clientX,
									clientY: e.clientY,
									pageX: e.pageX,
									pageY: e.pageY,
									screenX: e.screenX,
									screenY: e.screenY,
									target: e.target,
									__proto__: e.__proto__
								};

	 		switch ( e.which ) {
	 			// One finger
	 			case 1:
	 				length = 1;
	 				break;
	 			case 2: 
	 				length = 3;
	 				this.touches['1'] = this.touches['3'] = this.touches['0'];
 					break;
 				case 3:
 					length = 2;
 					this.touches['1'] = this.touches['0'];

 					break;
	 		}

	 		this.touches['length'] = length;

			e.preventDefault();
	 	})
	 	.on('mouseup', function(e) {
	 		
	 		switch ( e.which ) {
	 			// One finger
	 			case 1:
	 				if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapOneFinger", true, true, {touches: this.touches});
						this.dispatchEvent(tap);
					}
					break;
				// Three fingers
				case 2: 
					if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapThreeFingers", true, true, {touches: this.touches});
						this.dispatchEvent(tap);
					}
					break;
				// Two Fingers	
	 			case 3:
					if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapTwoFingers", true, true, {touches: this.touches});
						this.dispatchEvent(tap);
					}
					break;
	 		}

			e.preventDefault();
	 			
	 	}).on('contextmenu', function(e){
	 		e.preventDefault();
	 	});


	 	return this;
	}
});

 // *PING!* The DOM is ready
 $(function(){

	$('body')
		.gestures()
		.on('tapOneFinger', function(e) {
			alert('One Finger!');
		})
		.on('tapTwoFingers', function(e) {
			var touches = e.originalEvent.detail.touches;
			alert('Two Fingers!');
		})
		.on('tapThreeFingers', function(e) {
			alert('Three Fingers!');
		});

 });
