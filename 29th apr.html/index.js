let studentname = document.getElementById("studentname");
let tabledata = document.getElementById("enterstudent");
let table = document.getElementById("table");

function addstudent() {
  //   let element = document.createElement("p");
  //   element.textContent = studentname;
  //   table.innerHTML += "<tr><td>" + element + "</tr></td>";
  if (studentname.value != "") {
    table.innerHTML += "<tr><td>" + studentname.value + "</tr></td>";
    studentname.value = "";
  } else {
    alert("Enter your name");
  }
}

//This is for an if statementy case//
//----------------------------------------//
//   if (studentname.value != "") {
//     table.innerHTML += "<tr><td>" + studentname.value + "</tr></td>";
//   } else {
//     alert("name is");
//     window.alert("name is invalid");
//     window.confirm("NAME IS NOT THERE");
//   }
//----------------------------------------------------//
