/* 
let persona1 = {clave1: valor1, clave2: valor2, ...}
persona["clave1"]
*/
/* 
let persona1 = {nombre: "Homero", edad: 35, altura: 1.80}

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.altura);

console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["altura"])

persona1.nombre = "Marge"
persona1["edad"] = 30

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.altura);
 */

/* 
Paso por valor

var nombre = "andres";
var b = "andres";

b = "casa";

console.log(nombre);
console.log(b);
 */
/* 
var a = {nombre: "Andrés", edad: 1};
var b = a;

b.edad = 25;

console.log(a);
console.log(b);

|{nombre: "Andrés", edad: 25}|     ||     ||      ||
            a  b
 */

            
//Primitivos
/* var a = 5;
var b = a;

b = 7;

console.log(a);

|5|   |7|   
a     b */

//No primitivos
/* var a = {nombre: "Andrés", edad: 1};
var b = a;

console.log(a);

|{nombre: "Andrés", edad: 1}|     ||
          a     b
*/

/* console.log({nombre: "camila"} === {nombre: "camila"}); */

/* function Perro(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
}

const perrito1 = new Perro("pepito", 12);
const perrito2 = new Perro("pepito", 12);

console.log(perrito1 === perrito2);
console.log(perrito1.nombre); */

/* var a = {nombre: "Andrés", edad: 1};

for (const propiedad in a){
  console.log(a[propiedad]);
} */

/* class Producto {
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  sumaIva(){
    this.precio = this.precio * 1.21;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("arroz", "125");
console.log(producto1.nombre);
console.log(producto1.precio);
console.log(producto1.vendido);

console.log(producto1.vender());
console.log(producto1.vendido); */