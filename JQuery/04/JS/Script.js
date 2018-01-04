function renderData(aData) {
    //------------------- DOM ---------------------------------
    // var oEmployee = document.getElementById("employee");
    // var oTableBody = document.createElement("TBODY");
    // oEmployee.appendChild(oTableBody);
     
    // for (var i=0; i < aData.length; i++){
    //   var oTr = document.createElement('TR');
    //   oTableBody.appendChild(oTr);
      
    //   var oTdId = document.createElement('TD');
    //   oTdId.appendChild(document.createTextNode(aData[i].id));
    //   oTr.appendChild(oTdId);
        
    //   var oTdName = document.createElement('TD');
    //   oTdName.appendChild(document.createTextNode(aData[i].name));
    //   oTr.appendChild(oTdName);
        
    // }
    
    //-------------------- jQuery -----------------------------------
    //DOM Object
    // var oEmployeeDom = document.getElementById("employee");
    //Wrap DOM Object to jQuery Object
    // var oEmployee = $(oEmployeeDom);
    
    //jQuery Object
    // var oEmployee = $("#employee");
    // var oTableBody = $("<TBODY></TBODY>");
    // oEmployee.append(oTableBody);
     
    // for (var i=0; i < aData.length; i++){
    //   var oTr =  $("<TR></TR>");
    //   oTableBody.append(oTr);
      
    //     $("<TD></TD>", {
    //         text: aData[i].id
    //     }).appendTo(oTr);
    
    //     $("<TD></TD>", {
    //         text: aData[i].name
    //     }).appendTo(oTr);
    // }
    
    //-------------------- Datatable -----------------------------------
     $("#table").DataTable( {
        data: aData,
        columns: [
            { title: "id" , "data" : "id"},
            { title: "Name" , "data" : "name" }
        ]
    });
}

function getEmployee() {
//   var oXhttp = new XMLHttpRequest();
//   oXhttp.onreadystatechange = function() {
//     if (oXhttp.readyState === 4 && oXhttp.status === 200) {
//      var aData = JSON.parse(oXhttp.responseText);
//      renderData(aData);
//     }
//   };
//   oXhttp.open("GET", "Data/Employee.json", true);
//   oXhttp.send();

     $.ajax({
         url: "Data/Employee.json", 
         success: function(aData){
              renderData(aData);
         }});
}