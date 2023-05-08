let name = localStorage.getItem("name");
console.log(name);

let intro = document.getElementById("intro");
intro.innerHTML += "Welcome to the Chat App," + name + "!";

// intro = document.createElement("h1");
// h1.innerHTML += "'Welcome to the Chat App,' + name + '!'";
let paragraph = document.getElementById("paragraph");
paragraph.innerHTML += name + "  has joined the chat";

let input = document.getElementById("input");
let list = document.getElementById("list");

function addtext() {
  list.innerHTML += "<li>" + name + ":" + input.value + "</li>" + "<br>";
  input.value = "";
}
