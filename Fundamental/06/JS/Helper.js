sap.ui.define(["jquery.sap.global",
               "sap/m/App"
               ],
	function(jQuery,App) {
	"use strict";

	
	var Helper = function() {
		// Do not use the constructor
		throw new Error();
	};

	Helper.init = function() {
        Helper.renderApp();
	};
	
	Helper.renderApp = function() {
		
		//recommended  Page Control should be wrapped with sap.m.App or sap.m.SplitApp
		var app = new App();
		var oHomePage = sap.ui.jsview("Fundamental.view.home");

		app.addPage(oHomePage);
		app.setInitialPage(oHomePage);
		app.placeAt("content");
	};
	
	return Helper;
},true);