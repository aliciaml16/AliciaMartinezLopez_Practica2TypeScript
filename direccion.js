"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(a, b, c, d, e, f, g) {
        this._calle = a;
        this._numero = b;
        this._piso = c;
        this._letra = d;
        this._cp = e;
        this._poblacion = f;
        this._provincia = g;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        //Creamos getters y setters
        set: function (a) {
            this._calle = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (a) {
            this._numero = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (a) {
            this._piso = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (a) {
            this._letra = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "cp", {
        get: function () {
            return this._cp;
        },
        set: function (a) {
            this._cp = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (a) {
            this._poblacion = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (a) {
            this._provincia = a;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
