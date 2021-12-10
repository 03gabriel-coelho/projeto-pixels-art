let conjunto = document.querySelector('#pixel-board');

function addPixels () {
for(let index = 0; index < 25; index += 1){
let adicionar = document.createElement('button');
conjunto.appendChild(adicionar);
adicionar.className = 'pixel';
}
}
addPixels();

let todosOsPixels = document.getElementsByClassName('pixel');
console.log(todosOsPixels);
