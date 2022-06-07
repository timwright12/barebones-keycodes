import { ESCAPE } from '../../index.js';

document.addEventListener( 'keyup', ( e ) => {
	console.log( e );
	switch ( e.keyCode ) {
			case ESCAPE:
				alert( 'ESCAPE key was pressed' );
				break;
	}
	
} );