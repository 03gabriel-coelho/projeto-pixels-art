
function colorPalette () {
    let color1 = document.getElementById('color1');
    let color2 = document.getElementById('color2');
    let color3 = document.getElementById('color3');
    let color4 = document.getElementById('color4');

    color1.style.backgroundColor = 'black';
    color2.style.backgroundColor = 'rgb(' + Math.ceil(Math.random() * 255) + ', ' + Math.ceil(Math.random() * 255) + ', ' + Math.ceil(Math.random() * 255) + ')';
    color3.style.backgroundColor = 'rgb(' + Math.ceil(Math.random() * 255) + ', ' + Math.ceil(Math.random() * 255) + ', ' + Math.ceil(Math.random() * 255) + ')';
    color4.style.backgroundColor = 'rgb(' + Math.ceil(Math.random() * 255) + ', ' + Math.ceil(Math.random() * 255) + ', ' + Math.ceil(Math.random() * 255) + ')';
}
colorPalette();

let board = document.getElementById('pixel-board');

function AddPixels (number) {
    for(let index = 0; index < number; index += 1){
    for(let i = 0; i < number; i +=1){
        let linha = document.createElement('p');
        linha.className = 'pixel';
        board.appendChild(linha);
    }
    let quebraLinha = document.createElement('br');
    board.appendChild(quebraLinha);
}
}

let palette = document.getElementById('color-palette');

function Selected () {
let selected = document.querySelector('.selected');
selected.classList.remove('selected');
event.target.classList.add('selected');
}

palette.addEventListener('click', Selected);

let input = document.getElementById('board-size');
let button = document.getElementById('generate-board');
let pixels = document.getElementsByClassName('pixel');

function TamanhoBoard () {
    let p = document.querySelectorAll('p');
    let valor = input.value;
    if(p){
    for(let i = 0; i < p.length; i += 1){
        board.removeChild(p[i]);
    }
}
    let br = document.querySelectorAll('br');
    if(br){
    for(let i = 0; i < br.length; i += 1){
        board.removeChild(br[i]);
    }
}
if(valor < 5) {
    valor = 5;
    window.alert('Board inválido!');
}
if(valor > 50) {
    valor = 50;
}

AddPixels(valor);
}
button.addEventListener('click', TamanhoBoard);

function Colorir (){
let selected = document.querySelector('.selected');
event.target.style.backgroundColor = selected.style.backgroundColor;
}
board.addEventListener('click', Colorir);

function Limpar() {
    let p = document.querySelectorAll('p');
    for(let i = 0; i < p.length; i += 1){
        p[i].style.backgroundColor = 'white';
    }
}
let limpa = document.getElementById('clear-board');
limpa.addEventListener('click', Limpar);
window.onload = AddPixels(5);