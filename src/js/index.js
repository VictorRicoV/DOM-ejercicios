// El styles lo importamos aquí para que se encargue Vite de compilar todo
import { list } from 'postcss';
import '../scss/styles.scss';

//- Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const starPointElement = document.getElementById('start-point');

console.dir(starPointElement);
console.log(
  `Mi familia: Soy un ${starPointElement.tagName} con el id ${starPointElement.id} y la clase ${starPointElement.className}, mi padre es un ${starPointElement.parentElement.tagName} con el id ${starPointElement.parentElement.id} y la clase ${starPointElement.parentElement.className}, mi hermano es un ${starPointElement.previousElementSibling.tagName} con el id ${starPointElement.previousElementSibling.id} y la clase ${starPointElement.previousElementSibling.className} y mi otro hermano es ${starPointElement.previousElementSibling.previousElementSibling.tagName} con el id ${starPointElement.previousElementSibling.previousElementSibling.id} y la clase ${starPointElement.previousElementSibling.previousElementSibling.className}`
);

//- Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.

const exchangeText1 = document.getElementById('first-list');
const exchangeText2 = document.getElementById('second-list');

const firstListElementContent = exchangeText1.textContent;
const secondListElementContent = exchangeText2.textContent;

exchangeText1.textContent = secondListElementContent;
exchangeText2.textContent = firstListElementContent;

//- Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
// - Hay 1 Header
// - Hay 1 h1
// - Hay 2 nav
//   ......

const allHeader = document.querySelectorAll('header');
const allNav = document.querySelectorAll('nav');
const allUl = document.querySelectorAll('ul');
const allLi = document.querySelectorAll('li');
const allSection = document.querySelectorAll('section');
const allArticle = document.querySelectorAll('article');
const allTitles = document.querySelectorAll('h1, h2');
const allP = document.querySelectorAll('p');
const allA = document.querySelectorAll('a');
const allImg = document.querySelectorAll('img');
const allFooter = document.querySelectorAll('footer');

console.log(
  allHeader.length,
  allNav.length,
  allUl.length,
  allLi.length,
  allSection.length,
  allArticle.length,
  allTitles.length,
  allP.length,
  allA.length,
  allImg.length,
  allFooter.length
);
