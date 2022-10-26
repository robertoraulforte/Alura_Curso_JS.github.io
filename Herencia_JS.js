/*function Cuenta() { 
    this.balance = 0; 
     this.deposita = function(valor) { 
         this.balance += valor 
         };
 }
var cuentaCorriente = new Cuenta();
cuentaCorriente.deposita(1000); 
cuentaCorriente.balance; //1000

function CuentaAhorros() { 
    //copia de la cuenta 
    this.balance = 0; this.deposita = function(valor) { this.balance += valor; };
    //método adicional... 
    this.actualiza = function(índice) { this.balance += this.balance * índice; }; }

var cuentaAhorros = new cuentaAhorros();
 cuentaAhorros.deposita(1000); 
 cuentaAhorros.balance; //1000 
 cuentaAhorros.actualiza(0.05); 
 cuentaAhorros.balance; //1050

function CuentaAhorros() { 
    //no necesito copiar de Cuenta...
     this.actualiza = function(índice) { 
         this.balance += this.balance * índice
        };
    }*/

CuentaAhorros.prototype = new Cuenta();
CuentaAhorros.prototype.constructor = CuentaAhorros;

var cuentaAhorros = new CuentaAhorro();
cuentaAhorros.deposita(1000); 
cuentaAhorros.actualiza(0.05); 
cuentaAhorros.balance; //1050

class Cuenta { 
    constructor() { 
    this.balance = 0; } 
    deposita(valor) { this.balance += valor; } }

class CuentaAhorros extends Cuenta { 
    actualiza(índice) { this.balance += this.balance * índice; }}
