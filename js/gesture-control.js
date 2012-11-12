/*
 * Gesture control playground
 */

//var fingers = 0;
var startScale, startRotation;
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
				// Four Fingers	
	 			case 4:
					if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapFourFingers", true, true, {touches: this.touches});
						this.dispatchEvent(tap);
					}
					break;
				// Five Fingers	
	 			case 5:
					if (window.CustomEvent) {
						tap = document.createEvent('CustomEvent');
						tap.initCustomEvent("tapFiveFingers", true, true, {touches: this.touches});
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
	 			
	 	})
	 	.on('contextmenu', function(e){
	 		e.preventDefault();
	 	})
	 	.on('gesturechange', function( e ) {
	 		var rotation = e.originalEvent.rotation;
	 		var scale = e.originalEvent.scale;
	 		e.preventDefault();	 		
	 	})
	 	.on('gesturestart', function( e ) {
	 		startScale = e.originalEvent.scale;
	 		startRotation = e.originalEvent.rotation;
			e.preventDefault();
	 	})
	 	.on('gestureend', function( e ) {
	 		var rotation = e.originalEvent.rotation;
	 		var scale = e.originalEvent.scale;
	 		e.preventDefault();

	 		if (window.CustomEvent) {
	 			if ( rotation != startRotation && ( rotation > startRotation && (rotation - 25) > startRotation ) || ( rotation + 25 < startRotation) ) {
					rotate = document.createEvent('CustomEvent');
					rotate.initCustomEvent("rotate", true, true, {rotation: rotation});
					this.dispatchEvent(rotate);

				} else if ( scale > startScale ) {
					spread = document.createEvent('CustomEvent');
					spread.initCustomEvent("spread", true, true, {scale: scale});
					this.dispatchEvent(spread);
				} else if ( scale < startScale ) {
					pinch = document.createEvent('CustomEvent');
					pinch.initCustomEvent("pinch", true, true, {scale: scale});
					this.dispatchEvent(pinch);
				}
	 		}
	 	});


	 	return this;
	}
});


