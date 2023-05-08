let img = document.querySelector(".img");
let images = ["img1.JPG", "img2.JPG", "img3.JPG", "img4.JPG"];
let index = 1;
function formerimg() {
  img.src = images[index];
  index--;
  console.log(img.src);
  if (index >= images.length) {
    index = 0;
  }
  if (index < 0) {
    index = 3;
  }
}
function nextimg() {
  img.src = images[index];
  index++;
  console.log(img.src);
  if (index >= images.length) {
    index = 0;
  }
}
