function toggle()
{
    var button = document.getElementById("button");
    var project = document.getElementById("project");
    var employee = document.getElementById("employee");
     
    if(button.innerHTML === "Employee")
    {
        project.classList.remove("hidden");
        employee.classList.add("hidden");
        
        button.innerHTML = "Project";
        
    }
    else
    {
        project.classList.add("hidden");
        employee.classList.remove("hidden");
        
        button.innerHTML = "Employee";
    }
}