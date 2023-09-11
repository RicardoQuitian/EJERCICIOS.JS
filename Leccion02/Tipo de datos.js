/*Ejemplo tipo de datos en J.S*/
/*Tipo de dato String*/

var nombre = "carlos";
console.log(nombre);

nombre = "Jose";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

/*Tipo de dato númerico*/

var numero = 1400;
console.log(numero);

/*Tipo de dato objeto*/

var objeto = {
  nombre: "Ricardo",
  apellido: "Quitian",
  edad: "23",
};

console.log(objeto);

/*Tipo de dato Booleam (True o false)*/

var bandera = false;
console.log(typeof bandera);
/*typeof nos indica el tipo de dato*/
var bandera2 = true;
console.log(typeof bandera2);

/*Tipo de dato funcion*/
function miFunction() {}
console.log(miFunction);

/*Tipo de dato Symbol*/
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

/*Tipo clase es una function*/
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

console.log(Persona.constructor);

/*Tipo undefined*/
var x;
console.log(x);

x = undefined;
console.log(x);

/*null = ausencia de valor*/
var y = null;
console.log(y);

var autos = [`BMW`,`AUDI`,`BOLVO`]
console.log (autos)
console.log (typeof autos)

var z = "";
console.log (z)
console.log (typeof z)