let count = 0;
let save = document.getElementById("save");
let item = document.getElementById("item");

function add() {
  count += 1;
  item.textContent = count;
}

let x = 78;
if (x >= 80) {
  document.write("d1");
} else if (x >= 70) {
  document.write("d2");
} else if (x >= 60) {
  document.write("d3");
} else if (x >= 50) {
  document.write("d4");
}
