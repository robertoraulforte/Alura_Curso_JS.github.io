/*var exibeMensaje = function() { 
    var mensajeFueraDelIf = 'Caelum'; 
    if(true) { 
        var mensajeDentroDelIf = 'Alura'; 
        console.log(mensajeDentroDelIf)// Alura ;
    } 
    console.log(mensajeFueraDelIf); // Caelum 

    console.log(mensajeDentroDelIf); // Alura 
}

exibeMensaje(); // Imprime 'Alura', 'Caelum' y 'Alura'

//Usar antes de la declaración

var exibeMensaje = function () {
    mensaje = 'Alura';
    console.log (mensaje);
    var mensaje;
}

exibeMensaje(); // Imprime 'Alura'

// var

void function() {
    console.log(mensaje);
} ();
var mensaje;*/

//let

/*var exibeMensaje = function () {
    if(true) {
         var scopeFunction = 'Caelum';
         let scopeBlock = 'Alura';

        console.log (scopeBlock); // Alura
    }
    console.log (scopeFunction); // Caelum
    console.log (scopeBlock);
}

exibeMensaje(); // Imprime 'Alura', 'Caelum' y da un error*/

//const

void function () {
    const mensaje = 'Alura';
    console.log (mensaje); // Alura
    mensaje = 'Caelum';
} ();