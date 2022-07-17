const randomColors = ["white","rgb(248,113,113,1)","beige","rgb(34,211,238,1)","hsl(52.8,98.3%,76.9%,1)","purple","gray","violet","lime","rgb(236,72,153,1)","hsl(351.3,94.5%,71.4%,1)","rgb(99,102,241,1)","orange","brown"];

const btn = document.getElementById('btn');
const color= document.querySelector('.color');

btn.addEventListener("click", () => {
 const randomNumber = randomColor();
document.body.style.backgroundColor = randomColors[randomNumber];
color.textContent = randomColors[randomNumber];
btn.style.backgroundColor = '#000000';
btn.style.color = randomColors[randomNumber];
});


function randomColor() {
  const rand = Math.floor(Math.random() * randomColors.length);
  return rand;
}