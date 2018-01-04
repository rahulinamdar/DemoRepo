sap.ui.define([
	"Fundamental/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("Fundamental.controller.secondPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Fundamental.view.secondPage
		 */
		onInit: function() {
			if(Controller.prototype.onInit)
			{
				Controller.prototype.onInit.apply(this, arguments);
			}
			jQuery.sap.log.error("Fundamental.controller.secondPage onInit");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Fundamental.view.secondPage
		 */
		onBeforeRendering: function() {
			jQuery.sap.log.error("Fundamental.controller.secondPage onBeforeRendering");
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Fundamental.view.secondPage
		 */
		onAfterRendering: function() {
			jQuery.sap.log.error("Fundamental.controller.secondPage onAfterRendering");
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Fundamental.view.secondPage
		 */
		onExit: function() {
			jQuery.sap.log.error("Fundamental.controller.secondPage onExit");
		},
		
		onPress : function() {
			this.fnNavTo("home");
		},
		
		onPressFragment : function() {
			jQuery.sap.log.error("Second Page Fragment");
		}

	});

});