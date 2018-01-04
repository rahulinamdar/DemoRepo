sap.ui.define(["jquery.sap.global",
               "sap/ui/model/json/JSONModel",
               "sap/ui/core/Core",
               "sap/ui/table/Table",
               "sap/ui/table/Column",
               "sap/ui/commons/layout/MatrixLayout",
               "sap/ui/model/odata/ODataModel",
               "sap/ui/commons/TextView",
               "sap/ui/commons/Label",
               "sap/ui/model/resource/ResourceModel",
               "sap/m/Button"
               ],
	function(jQuery,JsonModel,Core,Table,Column,MatrixLayout,ODataModel,TextView,Label,ResourceModel,Button) {
	"use strict";

	var Helper = function() {
		// Do not use the constructor
		throw new Error();
	};

    Helper._template = {
                            "selectedControl" : "Input",
                            "controls" : [{ "name" : "Input" , "control":"sap.m.Input"},
                            			  { "name" : "ComboBox" , "control":"sap.m.ComboBox"},   
                            			  { "name" : "DatePicker" , "control":"sap.m.DatePicker"},
                            			  { "name" : "TimePicker" , "control":"sap.m.TimePicker"}
                            			 ],
                            "odata" : null			 
	                   };
	                   
	Helper.init = function() {
        Helper.createJsonModel();
        Helper.createODataModel();
        Helper.createMessage();
        Helper.renderButton();
	};
	
	Helper.createJsonModel = function() {
	   var oJsonModel = new JsonModel();
	   //Create Destination for Northwind OData Service
	   //Load Method 
	   //Json Model dont have Fuctionality for Create , Update and delete  
	   oJsonModel.loadData("/odata/V2/Northwind/Northwind.svc/Orders",null,true);
	   Core.setModel(oJsonModel,"jsonModel");
	   
	   //Custom Json Model
	   $.ajax({
         url: "/odata/V2/Northwind/Northwind.svc/Orders?$format=json", 
         contentType: "application/json",
         success: Helper.fnSuccessJsonModelCustom
	   });
	   
	   //For Create(POST) , Update(PUT) or Delete(DELETE) 
	   //Jquery Ajax can be used
	   //It is not necessary We have to use jQuery Ajax we can use other also like 
	   // - data js Plugin if OData Protocol  
	   // - Direct XHR object 
	   //etc etc
	};
	
	Helper.fnSuccessJsonModelCustom = function(oData) {
		//Replicate Json Model Load Data
		var oJsonModel = new JsonModel();
		oJsonModel.setData(oData);
		Core.setModel(oJsonModel,"jsonModelReplica");
		
		//Custom Data arrangement 
		Helper._template.odata = oData;
		oJsonModel = new JsonModel();
		oJsonModel.setData(Helper._template);
		Core.setModel(oJsonModel,"jsonModelCustom");
	};
	
	Helper.createODataModel = function() {
		  var oLayout  = new MatrixLayout({width:"100%"});
	  	  var oModel   = new ODataModel("/odata/V2/Northwind/Northwind.svc", true);
	      var oTable   = new Table();
	      var oControl = new TextView().bindProperty("text","OrderID");
	      
	      //Caution : Dont use Forward Slash in i18n
	      var oColumn  = new Column({
  										label:new Label({text: "{i18n>text}"}), 
								    	template: oControl
						     	      });  
	      oTable.addColumn(oColumn);
	      Core.setModel(oModel);
	      
	      oTable.bindRows({
	    	    path: "/Orders",
	    	    parameters: {
	    	    				select: "OrderID"
	    				    }
	      });
		 
		 oLayout.createRow(oTable);
		 oLayout.placeAt("content");	
	     return oLayout;		
	};	
	
	Helper.createMessage = function() {
		var i18nModel = new ResourceModel({
            bundleName: "i18n.message"
         });
         Core.setModel(i18nModel,"i18n");
	};
	
	Helper.renderButton = function() {
	    var oButton = new Button({
            text  : "Count",
            style : sap.ui.commons.ButtonStyle.Accept,
            icon  : "sap-icon://action",
            press : Helper.handlePress
        });
        oButton.placeAt("content");
        return oButton;
	};
	
	Helper.handlePress = function() {
	    var oBindings = Core.getModel().bindList("/Orders");  
		var iLength   = oBindings.getLength();
		
		var oBundle = Core.getModel("i18n").getResourceBundle();
        var sCountMessage = oBundle.getText("count", [iLength]);
        jQuery.sap.log.error(sCountMessage);
	};
	
	
	return Helper;
},true);