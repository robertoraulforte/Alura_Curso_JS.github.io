/*Clase Animal {
    // Características o Propiedades
       Especie
       Tamaño
       Hábitat
    // Podemos agregar tanta propiedades como sea necesario.
    /* Comportamientos o métodos 
       Alimentación() {
       }
       Movimiento() {
       }*/
    

    class Animal {
        constructor(especie, tamano, habitat) {
            this.especie = especie;
            this.tamano = tamano;
            this.habitat = habitat;
        }
        alimentacion() {
            console.log("Aqui definimos como se alimenta el animal");
        }
        movimiento() {
            console.log("En este método definimos como se mueve el animal");
        }
    }

    