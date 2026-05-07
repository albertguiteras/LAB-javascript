// Ejercicio 1

let num1 = parseInt(prompt('introduce el primer numero: '));
let num2 = parseInt(prompt('introduce el segundo numero: '));
let resultado = num1 - num2;

document.write('El resultado de la resta es: ' + resultado + '<br><br>');
console.log(resultado);

let res1 = prompt('introduce tu nombre: ');
let res2 = prompt('introduce tu localidad: ');
let res3 = prompt('introduce tu hobby: ');
let frase =
   'Te llamas ' +
   res1 +
   ', vives en ' +
   res2 +
   ', y te gusta ' +
   res3 +
   '<br><br>';

document.write(frase);
console.log(frase);

// Ejercicio 2

let radio = parseInt(prompt('Introduce el radio del circulo: '));
let pi = Math.PI;
let area = pi * (radio * radio);

document.write('El area de un circulo con radio ' + radio + ' es: ' + area);
console.log(area);

// Ejercicio 3

let zapatos = 80;
let pantalones = 40;
let camisetas = 20;

let nzap = parseInt(prompt('Cuantos zapatos quieres?'));
let npant = parseInt(prompt('Cuantos pantalons quieres?'));
let ncam = parseInt(prompt('Cuantas camisetas quieres?'));

let total = nzap * zapatos + npant * pantalones + ncam * camisetas;
let totald = total * 1.18;

document.write('<p>El precio total en euros es: ' + total + '</p>');
document.write('<p>El precio total en euros es: ' + totald + '</p>');
