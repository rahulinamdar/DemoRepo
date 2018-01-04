sap.ui.define(["jquery.sap.global",
               "sap/ui/commons/TextField",
               "sap/ui/commons/Button",
               "sap/m/List",
               "sap/m/StandardListItem"],
	function(jQuery,TextField,Button,List,StandardListItem) {
	"use strict";

	var Helper = function() {
		// Do not use the constructor
		throw new Error();
	};

	Helper.init = function() {
	   // console.log("Std Logger: something has happened");
        jQuery.sap.log.error("SAP Logger: something has happened");
        Helper.renderTextField();
        Helper.renderButton();
        Helper.renderList();
	};
	
	Helper.renderTextField = function() {
	    //Playing Control without Binding
	    //Properties
	    //Reference : https://sapui5.netweaver.ondemand.com/#docs/api/symbols/sap.ui.commons.TextField.html
	    //Initially During parameter Constructor
        var oInput = new TextField("textField1",{
            value : "Hello World",
            placeholder : "Fill me !!!",
            width : "500px"
            
        });
        //Setter
        oInput.setValue("I have been Overridden");
        //Getter
        jQuery.sap.log.error(oInput.getPlaceholder());
        //Parent Propeties
        oInput.setTooltip("Hello World");
        //Where to Add
        oInput.placeAt("content");
	};
	
	Helper.renderButton = function() {
	    //Playing Control without Binding
	    //Properties
	    //Reference : https://sapui5.netweaver.ondemand.com/#docs/api/symbols/sap.ui.commons.Button.html
	    var oButton = new Button("button1",{
            text  : "Change Me",
            style : sap.ui.commons.ButtonStyle.Accept,
            icon  : "sap-icon://action",
            //icon : "images/myIcon.gif",
            // press : function(){
            //     jQuery.sap.log.error("Ohh... I am Pressed");
            // }
            press : Helper.handlePress
        });
        oButton.attachPress({text:"I am Passed"},
                            Helper.handleAttachPress,
                            Helper);
        oButton.placeAt("content");
        return oButton;
	};
	
	Helper.handlePress = function() {
	    //this will be Button Reference
	    jQuery.sap.log.error("Ohh... I am Handled in Function");
	};
	
	Helper.handleAttachPress = function() {
	    //this will be Button Reference
	    jQuery.sap.log.error("Ohh... I am Handled in Function");
	    this.changeButtonText();
	};
	
	Helper.changeButtonText = function() {
	    var oTextField = sap.ui.getCore().byId("textField1");
	    var oButtonField = sap.ui.getCore().byId("button1");
	    var sTextField = oTextField.getValue();
	    oButtonField.setText(sTextField);
	};
	
	Helper.renderList = function() {
	    //Reference : https://sapui5.netweaver.ondemand.com/#docs/api/symbols/sap.m.List.html
	    var oList = new List({
	        items : [
	                    new StandardListItem({
	                        title : "Item1"
	                    }),
	                    new StandardListItem({
	                        title : "Item2"
	                    })
	                ]
	    });
	    
	    var oItem3  = new StandardListItem({
	                        title : "Item3"
	                  });
	    oList.addItem(oItem3);    
	    
	    //Add Class
	    oList.addStyleClass("myClass");
	    oList.placeAt("content");
	};
	
	return Helper;
},true);