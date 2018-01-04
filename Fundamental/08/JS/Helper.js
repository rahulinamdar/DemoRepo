sap.ui.define(["jquery.sap.global",
               "sap/m/App",
               "sap/ui/core/mvc/JSView"
               ],
	function(jQuery,App,JSView) {
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
        this.renderApp();
	};
	
	Helper.prototype.renderApp = function() {
		//Mutiple way to Create view
		//sap.ui.jsview(sViewName);
		//recommended  Page Control should be wrapped with sap.m.App or sap.m.SplitApp
		var oApp = this.getApp();
		var oHomePage = new JSView("home",{viewName : "Fundamental.view.home"}) ;
		oApp.addPage(oHomePage);
		oApp.setInitialPage(oHomePage);
		oApp.placeAt("content");
	};
	
	// Helper.fnCreateAndNavTo = function(sViewName) {
	// 	var oHelper = new Helper();
	// 	var oPage = new JSView({viewName : sViewName});
	// 	var oApp = oHelper.getApp();
	// 	oApp.addPage(oPage);
	// 	oApp.to(oPage.getId());
	// 	return oPage;
	// };
	
	// Helper.fnNavTo = function(oId) {
	// 	var oHelper = new Helper();
	// 	var oApp    = oHelper.getApp();
	// 	var sId     ;
	// 	if(typeof oId === "string")
	// 	{
	// 		sId = oId;
	// 	}else if(oId instanceof JSView)
	// 	{
	// 		sId = oId.getId();
	// 	}
	// 	oApp.to(sId);
	// 	return oApp;
	// };
	
	return Helper;
},true);