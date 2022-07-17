const hexCodes = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const color= document.querySelector('.color');
// #FFFFFF
btn.addEventListener("click", () => {
 let hexCode = '#';
 for (let i = 0; i < 6; i++) {
    hexCode += hexCodes[getRandom()];
 }
document.body.style.backgroundColor = hexCode ;
color.textContent = hexCode;
btn.style.backgroundColor = '#000000';
btn.style.color = hexCode ;
});

const getRandom = () => {
  const rand = Math.floor(Math.random() * hexCodes.length);
  return rand;
};