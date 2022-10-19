//! querySelector
// const heading = document.querySelector('.header__texto h2'); //! Retorna 0 o 1 elementos
const heading = document.querySelector('#heading'); //! Se puede seleccionar elementos por id con #
heading.textContent = 'Nuevo heading'; //! Se puede modificar mediante JS
console.log(heading);


//! querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a'); //! Retorna todos los elementos que concurden con el selector
// enlaces[0].textContent = 'Nuevo texto para enlace'; //! Se modifica elemento apuntando a la posicion del arreglo

//! Nomenclatura valida pero genera problemas
// const enlaces = document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo texto para enlace';

//! Lo que se recomienda usar
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].href = 'https://www.google.com';
enlaces[0].classList.add('nueva-clase');

console.log(enlaces);


//! getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

//! Generar un nuevo enlace
const nuevoEnlace = document.createElement('A') //! JS recomienda crear las etiquetas en mayusculas y sin aperturas

//! Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//! Agregar texto
nuevoEnlace.textContent = 'Un nuevo enlace';

//! Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//! Agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//! Eventos
console.log(1);

window.addEventListener('load', function() { //! load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
})

window.onload = function() { //! Es lo mismo que load
    console.log(1);
}

document.addEventListener('DOMContentLoaded', function() { //! Solo espera que se descargue el HTML, pero no espera al CSS o imagenes
    console.log(10);
})

console.log(3);

//! Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); //! previene todos los eventos por default como el submit recargando la pag

//     //! Validar formularios


//     console.log('enviando formulario...');
// })

//! Eventos de los inputs y textareas
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario'); 

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)
//! El evento de submit
formulario.addEventListener('submit', function(e) { //! submit es buena practica para formularios, y click para lo demas en general
    e.preventDefault();

    //! Validar el formulario
    const { nombre, email, mensaje } = datos;
    if( nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Rellene todos los campos...', true);
        return; //! Corta la ejecucion del codigo
    }

    //! Enviar el formulario
    mostrarAlerta('Formulario enviado correctamente');

})

function leerTexto(e){
    // console.log(e.target.value); 
    //! Sirve para llenar formularios
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

//! Refactoring del codigo
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    //! Agrega la clase correspondiente
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta); //! Agrega al HTML

    //! Desaparece despues de 5 seg
    setTimeout(() => {
        alerta.remove();
    },5000)
}

// //! Muestra un error por pantalla
// function mostrarError(){
//     formulario.appendChild(error); 

//     //! Desaparece despues de 5 seg
//     setTimeout(() => {
//         error.remove();
//     },5000)
//  }

//  //! Muestra mensaje de enviado correctamente
//  function mostrarCorrecto(){
//     formulario.appendChild(correcto);

//     setTimeout(() => {
//         correcto.remove();
//     },5000)
//  }
