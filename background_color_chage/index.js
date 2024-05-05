let bg = document.querySelector("body");
let rgb = document.querySelector(".rgb");

let bt1 = document.querySelector(".changeBg");
bg.style.backgroundColor = "rgba(34 , 54, 233, 100%) ";
rgb.style.color = "white";
rgb.style.fontFamily = "sans-serif";

function colors() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  bg.style.backgroundColor =
    "rgba(" + red + ", " + green + ", " + blue + ", 100%) ";

  rgb.textContent = "RGB(" + red + ", " + green + ", " + blue + ") ";
}
