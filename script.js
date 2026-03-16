
function openImage(src) {
  const popup = document.getElementById("img-popup");
  const popupImg = document.getElementById("popup-img");

  popupImg.src = src;
  popup.style.display = "flex";
}

function closeImage() {
  document.getElementById("img-popup").style.display = "none";
}
// ===== Typing Effect =====
const text = "Data Analyst";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
function openImage(imgSrc) {
  const popup = document.getElementById("img-popup");
  const popupImg = document.getElementById("popup-img");

  popup.style.display = "flex";
  popupImg.src = imgSrc;
}

function closeImage() {
  document.getElementById("img-popup").style.display = "none";
}
