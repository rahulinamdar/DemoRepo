sap.ui.define(["jquery.sap.global",
               "sap/ui/commons/TextField",
               "sap/ui/commons/Button",
               "sap/m/List",
               "sap/m/StandardListItem",
               "sap/ui/model/json/JSONModel",
               "sap/ui/core/Core"],
	function(jQuery,TextField,Button,List,StandardListItem,JsonModel,Core) {
	"use strict";

	var Helper = function() {
		// Do not use the constructor
		throw new Error();
	};
    
    Helper._template = {
                            "count" : 1,
                            "results" : null
	                   };
	Helper.init = function() {
	   // console.log("Std Logger: something has happened");
        jQuery.sap.log.error("SAP Logger: something has happened");
        //Core Model
        //Core Named Model
        //Parent Control Model
        //Parent Control Named Model
        //Control Model
        //Control Named Model
        Helper.createModel();
        Helper.renderTextField();
        Helper.renderButton();
        Helper.renderList();
	};
	
	Helper.createModel = function() {
	   var oJsonModel = new JsonModel();
	   oJsonModel.setData(Helper._template);
	   //Core Model
	   //Core.setModel(oJsonModel);
	   //Core Named Model
	   Core.setModel(oJsonModel,"model");
	};
	
	Helper.renderTextField = function() {
        var oInput = new TextField("textField1",{
            value : "{model>/count}"
        });
        oInput.placeAt("content");
	};
	
	Helper.renderButton = function() {
	    var oButton = new Button("button1",{
            text  : "Search",
            style : sap.ui.commons.ButtonStyle.Accept,
            icon  : "sap-icon://action",
            press : Helper.handlePress
        });
        oButton.placeAt("content");
        return oButton;
	};
	
	Helper.handlePress = function() {
	   // var oData = Core.getModel("model").getData();
	   // var iCount = oData.count;
	    var iCount = Core.getModel("model").getProperty("/count"); 
	    $.ajax({
                  method  : "GET",
                  url     : "/odata/V2/Northwind/Northwind.svc/Customers?$top="+iCount+"&$format=json",
                  success : Helper.onSuccess,
                  error   : Helper.onError
              });
	};
	
	Helper.onSuccess = function(oData){
	   Core.getModel("model").setProperty("/results",oData);      
	};
	
	Helper.onError = function(oXHR,sTextStatus,sErrorThrown){
	   jQuery.sap.log.error(oXHR);
	   jQuery.sap.log.error(sTextStatus);
	   jQuery.sap.log.error(sErrorThrown);
	};
	
	Helper.changeButtonText = function() {
	    var oTextField = sap.ui.getCore().byId("textField1");
	    var oButtonField = sap.ui.getCore().byId("button1");
	    var sTextField = oTextField.getValue();
	    oButtonField.setText(sTextField);
	};
	
	Helper.renderList = function() {
	    //Reference : https://sapui5.netweaver.ondemand.com/#docs/api/symbols/sap.m.List.html
	    var oList = new List();
	    var oItem = new StandardListItem({
	                        title : "{model>CompanyName}",
	                        description : "{model>/count}"
	                 });
	    oList.bindAggregation("items","model>/results/d",oItem);
	    oList.placeAt("content");
	};
	
	return Helper;
},true);