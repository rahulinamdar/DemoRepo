function renderData(aData) {
    var oEmployee = document.getElementById("employee");
    var oTableBody = document.createElement("TBODY");
    oEmployee.appendChild(oTableBody);
     
    for (var i=0; i < aData.length; i++){
       var oTr = document.createElement('TR');
       oTableBody.appendChild(oTr);
      
       var oTdId = document.createElement('TD');
       oTdId.appendChild(document.createTextNode(aData[i].id));
       oTr.appendChild(oTdId);
        
       var oTdName = document.createElement('TD');
       oTdName.appendChild(document.createTextNode(aData[i].name));
       oTr.appendChild(oTdName);
        
    }
}

function getEmployee() {
  var oXhttp = new XMLHttpRequest();
  oXhttp.onreadystatechange = function() {
    if (oXhttp.readyState === 4 && oXhttp.status === 200) {
     var aData = JSON.parse(oXhttp.responseText);
     renderData(aData);
    }
  };
  oXhttp.open("GET", "Data/Employee.json", true);
  oXhttp.send();
}

