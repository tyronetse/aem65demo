/*
 Example JavaScript Revealing Module pattern
 for a simple AEM Component.
 This can be used as template for more complex components
*/

//Declare JavaScript namespace of demo 
var demo = demo || {};
demo.demoComponent = function (titleValue) {
    //init variables
    var _button,_titleSpan,_titleDiv,

    // init function
    _init = function _init() {
		//Set variables for divs, buttons, fields selectors
        _button = $("#buttonID");
        _titleSpan = $("#titleSpan");
        _titleDiv = $("#titleDiv");

        //Bind the events
    	_bindEvents();
    },

    //Bind events    
    _bindEvents = function _bindEvents() {
    	_button.on('click',_displayMessage);
    },

    //The parameter e contains events like the key pressed if need to detect which key is pressed    
    _displayMessage = function(e) {
		_titleSpan.html("<b>"+titleValue+"</b>");
    }

    //Calls the _init function
    _init();
};