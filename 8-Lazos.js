const edadComprador = 15;
const estaAcompanado = true;    //variable booleana true o false
const tienePasaje = true;

const ciudadDestino = 'Quito';

let posicion =0;   // para poder usar el bucle
let destinoDisponible = false;
let puedeComprar = false;

puedeComprar = (edadComprador >=18 || estaAcompanado);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogota');     //agrega elementos al array con la funcion push

ciudadesDisponibles.push('Caracas');

ciudadesDisponibles.push('Lima');

ciudadesDisponibles.push('Santiago');
console.log('Proceso de embarque : \n \n');

/*
if(tienePasaje && (edadComprador >= 18|| estaAcompanado) ){

    console.log('Comprador con pasaje. Feliz viaje');
    
}
else{
    console.log('Comprador sin pasaje. nO es posible realizar el embarque');
}

while(posicion < ciudadesDisponibles.length){

    if(ciudadesDisponibles[posicion] == ciudadDestino){
        
        destinoDisponible = true;
    break;

}
    posicion++;

console.log('Destino esta disponible ', destinoDisponible);
}*/

// Lazo for

for(posicion = 0; posicion < ciudadesDisponibles.length; posicion++) {

 if(ciudadesDisponibles[posicion] == ciudadDestino){
        
        destinoDisponible = true;
    break;

}
}

if(puedeComprar && destinoDisponible){

    console.log('Es posible vender el pasaje. La persona puede comprar y el destino esta disponible');

} else if (puedeComprar) {

    console.log('No es posible vender el pasaje');

} else {
    console.log('No es posible vender el pasaje');
}


console.log('Destino esta disponible', destinoDisponible);

