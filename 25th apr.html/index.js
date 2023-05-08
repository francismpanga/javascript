let studentname = document.getElementById("studentname");
let namelist = document.getElementById("namelist");
function addname() {
  if (studentname.value == "") {
    console.log("Required");
  } else {
    namelist.innerHTML += "<li id='nameitem'>" + studentname.value + "</li>";
    studentname.value = "";
  }
}
