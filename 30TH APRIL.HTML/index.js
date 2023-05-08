let images = ["img1.JPG", "img2.JPG", "img3.JPG", "img4.JPG"];
let img = document.getElementById("img");

// if (index >= images.length) {
//   index = 0;
// }

function nextimg() {
  for (let index = 0; index < images.length; index++) {
    img.src = images[index];
    console.log(img.src);
    setInterval(nextimg, 3000);
    window.onload = nextimg;
  }
}
