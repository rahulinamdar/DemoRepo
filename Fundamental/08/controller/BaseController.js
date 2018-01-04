sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"external/Helper",
	"sap/ui/core/mvc/JSView"
], function(Controller,Helper,JSView) {
	"use strict";

	return Controller.extend("Fundamental.controller.BaseController", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Fundamental.view.home
		 */
		onInit: function() {
			jQuery.sap.log.error("Fundamental.controller.base onInit");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Fundamental.view.home
		 */
		onBeforeRendering: function() {
			jQuery.sap.log.error("Fundamental.controller.base onBeforeRendering");
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Fundamental.view.home
		 */
		onAfterRendering: function() {
			jQuery.sap.log.error("Fundamental.controller.base onAfterRendering");
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Fundamental.view.home
		 */
		onExit: function() {
			jQuery.sap.log.error("Fundamental.controller.base onExit");
		},
		
		constructor : function() {
			jQuery.sap.log.error("Fundamental.controller.base constructor");	
		},
		
		fnCreateAndNavTo : function(sViewName) {
			var oHelper = new Helper();
			var oPage = new JSView({viewName : sViewName});
			var oApp = oHelper.getApp();
			oApp.addPage(oPage);
			oApp.to(oPage.getId());
			return oPage;
		},
	
		fnNavTo : function(oId) {
			var oHelper = new Helper();
			var oApp    = oHelper.getApp();
			var sId     ;
			if(typeof oId === "string")
			{
				sId = oId;
			}else if(oId instanceof JSView)
			{
				sId = oId.getId();
			}
			oApp.to(sId);
			return oApp;
		}

	});

});