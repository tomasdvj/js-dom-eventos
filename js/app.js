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