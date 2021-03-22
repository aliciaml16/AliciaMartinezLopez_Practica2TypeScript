"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//Importamos las clases
var mail_1 = require("./mail");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var Persona = /** @class */ (function () {
    //Creamos el constructor
    function Persona(a, b, c, d, e, f, g, h, i, j, k) {
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._dni = d;
        this._cumple = e;
        this._color = f;
        this._sexo = g;
        this._direcciones = [];
        this._mails = [];
        this._telefonos = [];
        this._notas = k;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        //Creamos getters y setters
        set: function (a) {
            this._nombre = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (a) {
            this._apellidos = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (a) {
            this._edad = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (a) {
            this._dni = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumple", {
        get: function () {
            return this._cumple;
        },
        set: function (a) {
            this._cumple = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (a) {
            this._color = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (a) {
            this._sexo = a;
        },
        enumerable: false,
        configurable: true
    });
    //Métodos para añadir las direcciones, mails y teléfonos
    Persona.prototype.addDireccion = function (a, b, c, d, e, f, g, h) {
        this._direcciones[h] = new direccion_1.Direccion(a, b, c, d, e, f, g);
    };
    Persona.prototype.addMail = function (a, b, c) {
        this._mails[c] = new mail_1.Mail(a, b);
    };
    Persona.prototype.addTelefono = function (a, b, c) {
        this._telefonos[c] = new telefono_1.Telefono(a, b);
    };
    //Método de muestra de datos
    Persona.prototype.mostrarPersona = function () {
        console.log("-------------------------------------------------"); //Creamos una separación entre personas
        console.log(this._nombre, this._apellidos, "-", this._edad, this._sexo);
        console.log("DNI:", this._dni, "/ Fecha de cumpleaños:", this._cumple, "/ Color favorito:", this._color);
        console.log("Direcciones:");
        for (var i in this._direcciones) {
            console.log(i, "-", this._direcciones[i].calle, ",", this._direcciones[i].numero, ", Piso", this._direcciones[i].piso, this._direcciones[i].letra, "/", this._direcciones[i].cp, this._direcciones[i].poblacion, ",", this._direcciones[i].provincia);
        }
        console.log("Mails:");
        for (var i in this._mails) {
            console.log(i, "-", this._mails[i].tipo, ":", this._mails[i].direccion);
        }
        console.log("Teléfonos:");
        for (var i in this._telefonos) {
            console.log(i, "-", this._telefonos[i].tipo, ":", this._telefonos[i].numero);
        }
        console.log("Otros datos:", this._notas);
    };
    //Método de búsqueda de dni
    //a > DNI / b-i > direccion / j-l > mail / m-o > telefono
    Persona.prototype.nuevosDatos = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        if (a == this._dni) {
            console.log("El DNI coincide con", this._nombre, this._apellidos);
            this.addDireccion(b, c, d, e, f, g, h, i);
            this.addMail(j, k, l);
            this.addTelefono(m, n, o);
        }
        else {
            console.log("El DNI NO coincide con", this._nombre, this._apellidos);
        }
    };
    return Persona;
}());
exports.Persona = Persona;
