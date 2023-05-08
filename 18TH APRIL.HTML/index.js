let Count_el = document.getElementById("count-el");
let Save_el = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  Count_el.textContent = count;
}

function decrement() {
  count -= 1;
  Count_el.textContent = count;
}

function save() {
  Save_el.textContent += count += "-";
  count = 0;
  Count_el.textContent = count;
}
