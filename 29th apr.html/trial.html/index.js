let images = ["img1.JPG", "img2.JPG", "img3.JPG", "img4.JPG"];

let img = document.getElementById("imags");
let imageindex = Math.floor(Math.random() * images.length);
function nextimg() {
  let imageindex = Math.floor(Math.random() * images.length);
  img.src = images[imageindex];
  console.log(images.imageindex);
}
setInterval(nextimg, 5000);
console.log(imageindex);
