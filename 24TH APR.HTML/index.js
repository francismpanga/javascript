let taskinput = document.getElementById("taskwrite");
let tasklist = document.getElementById("tasklist");
let task = document.getElementById("task")

function addtask(){
   tasklist.innerHTML+="<li id='task'>"+ taskinput.value +"</li>"
   taskinput.value="" 
}