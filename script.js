// const h1 = document.querySelector('h1'); // etiquetas sin clase id etc
// const p = document.querySelector('p'); // etiquetas sin clase id etc
// const parrafo_clase = document.querySelector('.parrafo-clase'); // . clase
// const parrafo_id = document.querySelector('#parrafo-id'); // #id
// const input = document.querySelector('input'); // input

// console.log(h1)

// console.log(input.value)

// console.log({
//     h1,
//     p,
//     parrafo_clase,
//     parrafo_id,
//     input
// });

// h1.innerText = 'Blue Archive'
// console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'title-1');
// // console.log(h1.getAttribute('class'));
// h1.classList.add('title');
// h1.classList.remove('title');
// console.log(h1.getAttribute('class'));
// input.value = "5"

// const img = document.createElement('img');
// img.setAttribute('src', 'https://images.dotgg.gg/bluearchive/characters/portrait/10059.webp');

// parrafo_id.textContent = ""
// parrafo_id.append(img)

//listeners

const title = document.querySelector('title');
const formulario = document.querySelector('#formulario');
const valor_numerico_1 = document.querySelector('#valor-numerico-1');
const valor_numerico_2 = document.querySelector('#valor-numerico-2');
const calcular_button = document.querySelector('#calcular-button');
const parrafo = document.querySelector('p')

formulario.addEventListener('submit', calcular_form);

function calcular_form(event) {

    console.log(event)
    event.preventDefault();
    const result = parseInt(valor_numerico_1.value) + parseInt(valor_numerico_2.value);
    console.log(result)
    parrafo.textContent = (`El resultado es: ${result}`);
    console.log(`Boton con #ID: ${calcular_button.getAttribute('id')} fue presionado `)
}



