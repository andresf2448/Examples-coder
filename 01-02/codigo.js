//tipos de variables
var nombre = "Camila"; //string
var numero = 4; //number
var condicion = true; //boolean

//concatenación de cadenas de texto o string
var cadena1 = "Hola";
var cadena2 = "Agostina";
console.log(cadena1 + " " + cadena2);

//condicional simple
var numero1 = 2;
var numero2 = 3;

if(numero1 === 2){
  console.log('son iguales');
}

if(numero2 === 3){
  console.log('hola')
}

//condicionales anidados
var dinero = 7;

if(dinero < 5){
  console.log("tienes menos de 5 pesos");
}else if(dinero == 5){
  console.log("tienes 5 pesos");
}else{
  console.log("tienes más de 5 pesos");
}

//condicionales anidados
var edad = parseInt(prompt("Ingresa tu edad"));

if(edad <= 12){
  alert("no puedes entrar");
}else if(edad > 12 && edad < 18){
  alert("Puedes entrar con un adulto");
}else{
  alert("Puedes entrar");
}

//variables booleanas
var salir = false;
var comer = false;

console.log(salir && comer);
console.log(salir || !comer);

console.log((true && false && true) || false)
console.log(true || (false || false))