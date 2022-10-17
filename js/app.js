//! querySelector
// const heading = document.querySelector('.header__texto h2'); //! Retorna 0 o 1 elementos
const heading = document.querySelector('#heading'); //! Se puede seleccionar elementos por id con #
heading.textContent = 'Nuevo heading'; //! Se puede modificar mediante JS
console.log(heading);


//! querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a'); //! Retorna todos los elementos que concurden con el selector
// enlaces[0].textContent = 'Nuevo texto para enlace'; //! Se modifica elemento apuntando a la posicion del arreglo

//! Nomenclatura valida pero poco usada
const enlaces = document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo texto para enlace'; //! Se puede usar una sola vez
const enlaces2 = document.querySelectorAll('.navegacion a');
enlaces2[0].href = 'https://www.google.com';
enlaces2[0].classList.add('nueva-clase');

console.log(enlaces);


//! getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);