sap.ui.define(["jquery.sap.global",
               "sap/m/App",
               "sap/ui/core/mvc/XMLView"
               ],
	function(jQuery,App,XMLView) {
	"use strict";

	var Helper ;
	
	function createApp()
	{
		//Create App
		var _oApp   =  new App();
		Helper.prototype.getApp = function()
		{
			return _oApp;
		};
	}
	
	//Singleton 
	Helper = function() {
		var oHelper =  Helper.getInstance();
		
		if(oHelper === null)
		{
			oHelper = this;
			createApp();
			Helper.getInstance = function() {
				return oHelper;
			};
		}
		return oHelper;
	};

	Helper.prototype.constructor = Helper;
	
	Helper.getInstance = function(){
		return null;
	};
	
	Helper.prototype.init = function() {
		new sap.ui.core.ComponentContainer({
               name : "Fundamental"
            }).placeAt("content");
            
	};
	
	return Helper;
},true);