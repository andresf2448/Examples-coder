
// => Objetos literales
/* const Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
}

const Persona1 = {
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 30,
}

alert(` Datos Personales:
 Nombre :${Persona['nombre']},
 Apellido: ${Persona.apellido},
 Edad: ${Persona.edad}`);
 */

// => Objetos con funciones y props dinámicas
/* let myObject = {};
let msg = '';
const addProducto = () => {

    let salir = '';
    while (salir !== 'salir') {
        let key = prompt('Ingrese la característica del producto');
        let value = prompt('Ingrese el detalle de la característica');
        myObject[key] = value;
        msg += `${key}: ${value} \n`;
        salir = prompt('Ingrese salir para terminar el programa');
    }
}
addProducto()
console.log(myObject);
alert(msg); */

//=> Función constructora

/* function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.presentar = () => alert(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    this.miEdad = () => this.edad;
}

let persona1 = new Persona('Juan', 'Perez', 30);
let persona2 = new Persona('Pedro', 'Jesus', 32);
let persona3 = new Persona('Camila', 'Gallego', 30);

alert(`Datos Persona 1:
Nombre: ${persona1.nombre},
Apellido: ${persona1.apellido},
Edad: ${persona1.edad}`);

persona1.presentar();
//let edad = persona1.miEdad();
//alert(`La edad de la persona es: ${edad}`);

let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = prompt('Ingrese su edad');

let persona4 = new Persona(nombre, apellido, edad);

alert(`Mi nombre es ${persona4.nom bre} ${persona4.apellido} y tengo ${persona4.edad} años`);
*/

//=> Clases

class Perro {

    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    presentar() {
        alert(`Hola, mi nombre es ${this.nombre} y soy de raza ${this.raza}`);
    }

    crearPerro() {
        this.nombre = prompt('Ingrese su nombre');
        this.raza = prompt('Ingrese su raza');
        this.edad = prompt('Ingrese su edad');
    }

}

let perro1 = new Perro('Firulais', 'Pastor Aleman', 2);

alert(`Nombre: ${perro1.nombre},
    Raza: ${perro1.raza},
    Edad: ${perro1.edad}`);



let perro2 = new Perro('', '', 0);
perro2.crearPerro();

alert(`Nombre: ${perro2.nombre},
    Raza: ${perro2.raza},
    Edad: ${perro2.edad}`);





















