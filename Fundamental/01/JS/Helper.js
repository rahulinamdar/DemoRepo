sap.ui.define(["jquery.sap.global"],
	function(jQuery) {
	"use strict";

	
	var Helper = function() {
		// Do not use the constructor
		throw new Error();
	};

	Helper.init = function() {
		
	   //console.log("Std Logger: something has happened");
        jQuery.sap.log.error("SAP Logger: something has happened");
	};
	
	return Helper;
},true);