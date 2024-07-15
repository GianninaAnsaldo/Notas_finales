let html1 = document.getElementById("HTML1");
let html2 = document.getElementById("HTML2");
let html3 = document.getElementById("HTML3");
let htmlPromedio = document.getElementById("HTMLPromedio");

let nota1HTML = +prompt("Ingrese nota 1 HTML: ");
let nota2HTML = +prompt("Ingrese nota 2 HTML: ");
let nota3HTML = +prompt("Ingrese nota 3 HTML: ");

html1.innerHTML = nota1HTML;
html2.innerHTML = nota2HTML;
html3.innerHTML = nota3HTML;
htmlPromedio.innerHTML = ((nota1HTML + nota2HTML + nota3HTML) / 3).toFixed(1)

let css1 = document.getElementById("CSS1");
let css2 = document.getElementById("CSS2");
let css3 = document.getElementById("CSS3");
let cssPromedio = document.getElementById("CSSPromedio");

let nota1CSS = +prompt("Ingrese nota 1 CSS: ");
let nota2CSS = +prompt("Ingrese nota 2 CSS: ");
let nota3CSS = +prompt("Ingrese nota 3 CSS: ");

css1.innerHTML = nota1CSS;
css2.innerHTML = nota2CSS;
css3.innerHTML = nota3CSS;
cssPromedio.innerHTML = ((nota1CSS + nota2CSS + nota3CSS) / 3).toFixed(1)

let js1 = document.getElementById("JS1");
let js2 = document.getElementById("JS2");
let js3 = document.getElementById("JS3");
let jsPromedio = document.getElementById("JSPromedio");

let nota1JS = +prompt("Ingrese nota 1 JS: ");
let nota2JS = +prompt("Ingrese nota 2 JS: ");
let nota3JS = +prompt("Ingrese nota 3 JS: ");

js1.innerHTML = nota1JS;
js2.innerHTML = nota2JS;
js3.innerHTML = nota3JS;
jsPromedio.innerHTML = ((nota1JS + nota2JS + nota3JS) / 3).toFixed(1)