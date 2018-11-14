# Barebones KeyCodes
Barebones KeyCodes is a JavaScript utility for mapping keycodes to easy-to-use variables. For a full list of available key options view `./index.js`

## Installation
`npm install @barebones/keycodes --save`

## Usage
```
import { ESCAPE } from @barebones/keycodes;

document.addEventListener( 'keyup', ( e ) => {
	console.log(e);
	switch ( e.keyCode ) {
		case ESCAPE:
			alert( 'ESCAPE key was pressed' );
			break;
	}
	
} );
```