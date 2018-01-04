sap.ui.define(["jquery.sap.global",
               "sap/m/Input",
               "sap/ui/commons/Button",
               "sap/m/List",
               "sap/m/StandardListItem",
               "sap/ui/model/json/JSONModel",
               "sap/ui/core/Core",
               "sap/m/ComboBox",
               "sap/ui/core/Item",
               "sap/m/DatePicker",
               "sap/m/TimePicker"],
	function(jQuery,Input,Button,List,StandardListItem,JsonModel,Core,ComboBox,Item,DatePicker,TimePicker) {
	"use strict";

	var Helper = function() {
		// Do not use the constructor
		throw new Error();
	};

    Helper._template = {
                            "selectedControl" : [ {"name" : "Input"}],
                            "controls" : [{ "name" : "Input" , "control":"sap.m.Input"},
                            			  { "name" : "ComboBox" , "control":"sap.m.ComboBox"},   
                            			  { "name" : "DatePicker" , "control":"sap.m.DatePicker"},
                            			  { "name" : "TimePicker" , "control":"sap.m.TimePicker"}
                            			 ] 
	                   };
	                   
	Helper.init = function() {
        Helper.createModel();
        Helper.renderComboxBox();
        Helper.renderInput();
        Helper.renderControl();
        // Helper.renderList();
	};
	
	Helper.createModel = function() {
	   var oJsonModel = new JsonModel();
	   oJsonModel.setData(Helper._template);
	   Core.setModel(oJsonModel,"model");
	};
	
	Helper.renderComboxBox = function() {
		var oComboBox = new ComboBox({
            value : "{model>/selectedControl/0/name}"
        });
        
        var oItem = new Item({
	                        key : "{model>name}",
	                        text : "{model>name}"
	                 });
	    
	    oComboBox.bindAggregation("items","model>/controls",oItem);
	    
        oComboBox.placeAt("content");
	};
	
	Helper.renderInput = function() {
	    //Playing Control without Binding
	    //Properties
	    //Reference : https://sapui5.netweaver.ondemand.com/#docs/api/symbols/sap.ui.commons.TextField.html
	    //Initially During parameter Constructor
	    //If Formatter is used then it will be one way binding 
	    //Ensure Binding Syntax "{}"is not Required for Parts 
        var oInput = new Input({
            value : {
            	parts: [
	                     {path: "model>/selectedControl/0/name"},
	                     {path: "model>/controls"}
                       ],
                formatter: Helper.fnForamtter     
            }
        });
        oInput.placeAt("content");
	};
	
	Helper.fnForamtter = function(sSelectedControl,aControl){ 
       for(var sCounter in aControl)
       {
       	  if(aControl[sCounter].name === sSelectedControl)
       	  {
       	  	return aControl[sCounter].control;	
       	  }
       }
       return "Invalid";
   };
	
	Helper.renderControl = function() {
	    var oLayout = new sap.ui.layout.HorizontalLayout();
		oLayout.bindAggregation("content", "model>/controls", Helper.fnFactory);
        oLayout.placeAt("content");
        return oLayout;
	};
	
	Helper.fnFactory = function(sId, oContext) {
		var sValue = oContext.getProperty(oContext.getPath());
		switch(sValue.name) {
			case "Input":
				return new Input({
					placeholder : "Input"
				});
			case "ComboBox":
				return new ComboBox({
					placeholder : "ComboBox"
				});
			case "DatePicker":
				return new DatePicker({
						placeholder : "DatePicker"
					});
			
			case "TimePicker":
				return new TimePicker({
						placeholder : "TimePicker"
					});		
		}
	};	
	

	return Helper;
},true);