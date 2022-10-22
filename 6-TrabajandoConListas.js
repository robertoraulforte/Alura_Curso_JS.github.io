console.log(`Trabajando con Listas`);  //uso de comillas invertidas

const Bogota ="Bogota";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires ="Buenos Aires";

console.log(Bogota,Lima,Santiago,BuenosAires);

//Arrays o Listas

//const ciudadesDisponibles = new Array();  //declaracion del array

//const ciudadesDisponibles = ['Bogota','Lima','Santiago','Buenos Aires'];  //llenado de datos con comillas simples

//console.log(ciudadesDisponibles);

//agregando elementos a las listas

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogota');     //agrega elementos al array con la funcion push

ciudadesDisponibles.push('Caracas');

ciudadesDisponibles.push('Santiago')


console.log(ciudadesDisponibles);

//creando listas en forma abreviada

const ciudadesMasVendidas = [];

console.log(ciudadesMasVendidas);

ciudadesMasVendidas.push('San Pablo');
ciudadesMasVendidas.push('Buenos Aires');

console.log(ciudadesMasVendidas);

//Mostrando funciones de Listas

console.log(ciudadesDisponibles[2]);  //salida de un elemento de la lista empezando en 0

console.log(ciudadesMasVendidas[0]);

//uso de length

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`Tenemos ${cantidadCiudades} ciudades disponibles`);  //usamos comillas invertidas

//elmento un elemento de la lista

ciudadesDisponibles.splice(1,1);  //eliminamos usando la posicion y la cantidad 

console.log(ciudadesDisponibles);


