let username = document.getElementById("username");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");
let formsubmit = document.getElementById("div");
let form = document.getElementById("form");

form.onsubmit = (event) => {
  event.preventDefault();

  formsubmit.innerHTML = `<p>Name: ${username.value}</p> <p> ${email.value}</p> <p>${textarea.value}</p>`;
  form.style = "color:red,";
};
