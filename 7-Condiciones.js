console.log(`Trabajando con Condiciones`);  //uso de comillas invertidas

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogota');     //agrega elementos al array con la funcion push

ciudadesDisponibles.push('Caracas');

ciudadesDisponibles.push('Lima');


// venta de pasajes solo a mayores (condiciones)

/*const edadComprador = 29;

if (edadComprador >= 18){
    console.log(`El comprador es mayor de edad`);
    console.log(`Ciudades disponibles para el viaje`);
    console.log(ciudadesDisponibles);
}else {
    console.log(`El comprador no es mayor de edad`);
    console.log(`No es posible ofrecer viajes`);
}

//Operadores booleanos

/*
console.log(edadComprador >=18);
console.log(edadComprador > 18);
console.log(edadComprador <= 18);
console.log(edadComprador ==18);   // con == para comparar
console.log(edadComprador !=18);
*/

//if encadenados

/*const edadComprador = 15;
const estaAcompanado = false;    //variable booleana true o false

if (edadComprador >= 18) {
    console.log(`El comprador es mayor de edad`);
    console.log(`Ciudades disponibles para el viaje`);
    console.log(ciudadesDisponibles);
} else {

    if (estaAcompanado) {

        console.log(`El comprador menor de edad esta acompañado`);
        console.log(`Ciudades disponibles para viaje`);
        console.log(ciudadesDisponibles);

    }
    else {
        console.log(`El comprador no es mayor de edad y no esta acompañado`);
        console.log(`No es posible ofrecer viajes`);
    }

}*/

// Operador logico o  ||

const edadComprador = 15;
const estaAcompanado = true;    //variable booleana true o false
const tienePasaje = true;

/*if (edadComprador >= 18 || estaAcompanado) {
    console.log(`El comprador es mayor de edad`);
    console.log(`Ciudades disponibles para el viaje`);
    console.log(ciudadesDisponibles);
} /*else {

    /*if (estaAcompanado) {

        console.log(`El comprador menor de edad esta acompañado`);
        console.log(`Ciudades disponibles para viaje`);
        console.log(ciudadesDisponibles);

    }
    else {
        console.log(`El comprador no es mayor de edad y no esta acompañado`);
        console.log(`No es posible ofrecer viajes`);
    }*/



//Operador logico y &&(se cumplan las dos condiciones)

//Proceso de embarque

console.log('Proceso de embarque : \n \n');


if(tienePasaje && (edadComprador >= 18|| estaAcompanado) ){

    console.log('Comprador con pasaje. Feliz viaje');
    
}
else{
    console.log('Comprador sin pasaje. nO es posible realizar el embarque');
}



