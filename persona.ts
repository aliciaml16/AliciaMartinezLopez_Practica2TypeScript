//Importamos las clases
import { Mail } from "./mail";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";

export class Persona {
    _nombre: string;
    _apellidos: string;
    _edad: number;
    _dni: string;
    _cumple: string;
    _color: string;
    _sexo: "Hombre" | "Mujer" | "Otro"; //A elegir entre estas opciones
    _direcciones: Direccion[];
    _mails: Mail[];
    _telefonos: Telefono[];
    _notas: string;

    //Creamos el constructor
    constructor(a: string, b: string, c: number, d: string, e: string, f: string, g: "Hombre" | "Mujer" | "Otro", h: Direccion[], i: Mail[], j: Telefono[], k: string) {
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

    //Creamos getters y setters
    public set nombre (a:string) {
        this._nombre = a;
    }

    public set apellidos (a:string) {
        this._apellidos = a;
    }

    public set edad (a:number) {
        this._edad = a;
    }

    public set dni (a:string) {
        this._dni = a;
    }

    public set cumple (a:string) {
        this._cumple = a;
    }

    public set color (a:string) {
        this._color = a;
    }

    public set sexo (a:"Hombre" | "Mujer" | "Otro") {
        this._sexo = a;
    }

    public get nombre () {
        return this._nombre;
    }

    public get apellidos () {
        return this._apellidos;
    }

    public get edad () {
        return this._edad;
    }

    public get dni () {
        return this._dni;
    }

    public get cumple () {
        return this._cumple;
    }

    public get color () {
        return this._color;
    }

    public get sexo () {
        return this._sexo;
    }

    //Métodos para añadir las direcciones, mails y teléfonos
    addDireccion(a: string, b: number, c: number|string, d: string, e: number, f: string, g: string, h:number) {
        this._direcciones[h] = new Direccion(a, b, c, d, e, f, g);
    }

    addMail(a: string, b: string, c:number) {
        this._mails[c] = new Mail(a, b);
    }

    addTelefono(a: string, b: number, c:number) {
        this._telefonos[c] = new Telefono(a, b);
    }

    //Método de muestra de datos
    mostrarPersona(): void {
        console.log("-------------------------------------------------"); //Creamos una separación entre personas
        console.log(this._nombre, this._apellidos, "-", this._edad, this._sexo);
        console.log("DNI:", this._dni, "/ Fecha de cumpleaños:", this._cumple, "/ Color favorito:", this._color);
        console.log("Direcciones:");
        for (let i in this._direcciones) {
            console.log(i, "-", this._direcciones[i].calle, ",",this._direcciones[i].numero, ", Piso",this._direcciones[i].piso, this._direcciones[i].letra, "/",this._direcciones[i].cp, this._direcciones[i].poblacion,",", this._direcciones[i].provincia);
        }
        console.log("Mails:");
        for (let i in this._mails) {
            console.log(i, "-", this._mails[i].tipo,":", this._mails[i].direccion);
        }
        console.log("Teléfonos:");
        for (let i in this._telefonos) {
            console.log(i, "-", this._telefonos[i].tipo,":", this._telefonos[i].numero);
        }
        console.log("Otros datos:", this._notas);
    }

    //Método de búsqueda de dni
    //a > DNI / b-i > direccion / j-l > mail / m-o > telefono
    nuevosDatos(a: string, b: string, c: number, d: number|string, e: string, f: number, g: string, h: string, i:number, j: string, k: string, l:number, m: string, n: number, o:number): void {
        if (a == this._dni) {
            console.log("El DNI coincide con", this._nombre, this._apellidos);
            this.addDireccion(b,c,d,e,f,g,h,i);
            this.addMail(j, k, l);
            this.addTelefono(m, n, o);
        } else {
            console.log("El DNI NO coincide con", this._nombre, this._apellidos);
        }
    }
}