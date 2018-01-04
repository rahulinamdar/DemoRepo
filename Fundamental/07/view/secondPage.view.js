sap.ui.jsview("Fundamental.view.secondPage", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf Fundamental.07.view.secondPage
	 */
	getControllerName: function() {
		return "Fundamental.controller.secondPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf Fundamental.07.view.secondPage
	 */
	createContent: function(oController) {
		var oText = new sap.m.Text({
			text : "I am in Second Page"
		});
		var oButton = new sap.m.Button({
			text : "Go to Home Page",
			press : oController.onPress
		});
		var oPage = new sap.m.Page({
			title: "Title",
			content: [oText , oButton]
			
		});
		return oPage;
	}

});