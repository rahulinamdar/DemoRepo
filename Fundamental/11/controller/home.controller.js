sap.ui.define([
	"Fundamental/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("Fundamental.controller.home", {
		oSecondPage : null,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Fundamental.view.home
		 */
		onInit: function() {
			jQuery.sap.log.error("Fundamental.controller.home onInit");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Fundamental.view.home
		 */
		onBeforeRendering: function() {
			jQuery.sap.log.error("Fundamental.controller.home onBeforeRendering");
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Fundamental.view.home
		 */
		onAfterRendering: function() {
			jQuery.sap.log.error("Fundamental.controller.home onAfterRendering");
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Fundamental.view.home
		 */
		onExit: function() {
			jQuery.sap.log.error("Fundamental.controller.home onExit");
		},
		
		constructor : function() {
			jQuery.sap.log.error("Fundamental.controller.home constructor");	
		},
		onPress : function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("secondPage",{
				id : "1"
			});
		},
		
		onPressFragment : function() {
			jQuery.sap.log.error("Home Fragment");
		}

	});

});