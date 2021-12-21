let conjunto = document.querySelector('#pixel-board');
let todosOsPixels = document.getElementsByClassName('pixel');
let generateBoard = document.getElementById('generate-board');
let valorInput = document.querySelectorAll('#board-size')[0];
let valorDentroDoInput;

function addPixels (number = 3) {
for(let index = 0; index <= number * number; index += 1){
if(index === 0){
    let pular = document.createElement('br');
        conjunto.appendChild(pular);
        pular.className = 'pular';
}
else if(index > 0 && index % number === 0){
        let adicionar = document.createElement('button');
        conjunto.appendChild(adicionar);
        adicionar.className = 'pixel';
        let pular = document.createElement('br');
        pular.innerText = '';
        conjunto.appendChild(pular);
        pular.className = 'pular';
}
else {
    let adicionar = document.createElement('button');
    conjunto.appendChild(adicionar);
    adicionar.className = 'pixel';
}
}
}
addPixels();

function addInput (){
 valorDentroDoInput = valorInput.value;
 addPixels(valorDentroDoInput);
}
generateBoard.addEventListener('click', addInput);

let pular = document.getElementsByClassName('pular');


let color1 = document.getElementById('color1');    //Cor Inicial
color1.classList.add('selected');

let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');

function selectedColor1 (){
    for(let index = 0; index < color1.classList.length; index += 1){
        if (color1.classList[index] !== 'selected'){
            color1.classList.add('selected');
            color2.classList.remove('selected');
            color3.classList.remove('selected');
            color4.classList.remove('selected');
        }
    }
}
color1.addEventListener('click', selectedColor1);

function selectedColor2 (){
    for(let index = 0; index < color2.classList.length; index += 1){
        if (color2.classList[index] !== 'selected'){
            color2.classList.add('selected');
            color1.classList.remove('selected');
            color3.classList.remove('selected');
            color4.classList.remove('selected');
        }
    }
}
color2.addEventListener('click',selectedColor2);

function selectedColor3 (){
    for(let index = 0; index < color3.classList.length; index += 1){
        if (color3.classList[index] !== 'selected'){
            color3.classList.add('selected');
            color1.classList.remove('selected');
            color2.classList.remove('selected');
            color4.classList.remove('selected');
        }
    }
}
color3.addEventListener('click',selectedColor3);

function selectedColor4 (){
    for(let index = 0; index < color4.classList.length; index += 1){
        if (color4.classList[index] !== 'selected'){
            color4.classList.add('selected');
            color1.classList.remove('selected');
            color3.classList.remove('selected');
            color2.classList.remove('selected');
        }
    }
}
color4.addEventListener('click',selectedColor4);

let pixel = document.querySelectorAll('.pixel');

function addColor () { 
    for(let index = 0; index < pixel.length; index += 1){
    pixel[index].onclick = function() {
        if(color1.classList.value === 'color selected'){
    pixel[index].style.backgroundColor = 'black';
        }
        else if(color2.classList.value === 'color selected'){
    pixel[index].style.backgroundColor = 'red';
        }
        else if(color3.classList.value === 'color selected'){
    pixel[index].style.backgroundColor = 'orange';
        }
        else if(color4.classList.value === 'color selected'){
    pixel[index].style.backgroundColor = 'palevioletred';
        }
}
}
}

let Paleta = document.getElementById('color-palette');
Paleta.addEventListener('click', addColor);

let clear = document.getElementById('clear-board');

function clearColor () {
    clear.onclick = function() {
        for(let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white';
        }
    }
}