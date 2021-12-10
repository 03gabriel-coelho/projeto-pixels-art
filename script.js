let conjunto = document.querySelector('#pixel-board');
let todosOsPixels = document.getElementsByClassName('pixel');

function addPixels () {
for(let index = 0; index < 25; index += 1){
let adicionar = document.createElement('button');
conjunto.appendChild(adicionar);
adicionar.className = 'pixel';
}
}
addPixels();

let color1 = document.getElementById('color1');
color1.classList.add('selected');

console.log(color1);
