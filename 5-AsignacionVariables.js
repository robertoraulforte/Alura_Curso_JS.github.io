console.log("Asignando valores a la variables");

const miNombre = "Roberto";
const miApellido = "Forte";

console.log(miNombre);

//miNombre = miNombre + miApellido;  //no se puede en las constantes

const miNombreCompleto = miNombre + miApellido;

console.log(miNombreCompleto);

//Plantillas de texto


const miNombreCompleto1 = miNombre + " "+ miApellido; 
console.log(miNombreCompleto1);

const textoMiNombre = `Mi nombre es: ${miNombre} ${miApellido}`;  //usando comillas invertidas
console.log(textoMiNombre);

const textoMiNombreDobles = "Mi nombre es: ${miNombre} ${miApellido}"  //usando comillas dobles
console.log(textoMiNombreDobles);

const textoMiNombreSimples = "Mi nombre es: ${miNombre} ${miApellido}"  //usando comillas simples
console.log(textoMiNombreSimples);

//Inmutabilidad de variables

let variableTexto = "un texto";
console.log(variableTexto);

variableTexto = 10;
console.log(variableTexto);  //JS permite este cambio de un string a un int (CUIDADO)

variableTexto = false;
console.log(variableTexto);

