sap.ui.jsview("Fundamental.view.home", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf Fundamental.view.home
	 */
	getControllerName: function() {
		return "Fundamental.controller.home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf Fundamental.06.view.home
	 */
	createContent: function(oController) {
		var oButton = new sap.m.Button({
				text : "Lets go to 2nd Page"
			});
		oButton.attachPress(oController.onPress,oController);
		
		var oDestroyButton = new sap.m.Button({
				text : "Destroy 2nd Page"
			});	
		oDestroyButton.attachPress(oController.onDestroy,oController);
			
		var oPage = new sap.m.Page("homePage",{
				title: "Home",
				content : [oButton,oDestroyButton]
			});
		
		return oPage;
	}

});