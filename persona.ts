//Importamos las clases
import { Mail } from "./mail";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";

export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumple: string;
    color: string;
    sexo: "Hombre" | "Mujer" | "Otro"; //A elegir entre estas opciones
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: string;

    //Creamos el constructor
    constructor(a: string, b: string, c: number, d: string, e: string, f: string, g: "Hombre" | "Mujer" | "Otro", h: Direccion[], i: Mail[], j: Telefono[], k: string) {
        this.nombre = a;
        this.apellidos = b; 
        this.edad = c;
        this.dni = d; 
        this.cumple = e;
        this.color = f; 
        this.sexo = g; 
        this.direcciones = []; 
        this.mails = []; 
        this.telefonos = [];
        this.notas = k;
    }

    //Métodos para añadir las direcciones, mails y teléfonos
    addDireccion(a: string, b: number, c: number|string, d: string, e: number, f: string, g: string, h:number) {
        this.direcciones[h] = new Direccion(a, b, c, d, e, f, g);
    }

    addMail(a: string, b: string, c:number) {
        this.mails[c] = new Mail(a, b);
    }

    addTelefono(a: string, b: number, c:number) {
        this.telefonos[c] = new Telefono(a, b);
    }

    //Método de muestra de datos
    mostrarPersona(): void {
        console.log("-------------------------------------------------"); //Creamos una separación entre personas
        console.log(this.nombre, this.apellidos, "-", this.edad, this.sexo);
        console.log("DNI:", this.dni, "/ Fecha de cumpleaños:", this.cumple, "/ Color favorito:", this.color);
        console.log("Direcciones:");
        for (let i in this.direcciones) {
            console.log(i, "-", this.direcciones[i].calle, ",",this.direcciones[i].numero, ", Piso",this.direcciones[i].piso, this.direcciones[i].letra, "/",this.direcciones[i].cp, this.direcciones[i].poblacion,",", this.direcciones[i].provincia);
        }
        console.log("Mails:");
        for (let i in this.mails) {
            console.log(i, "-", this.mails[i].tipo,":", this.mails[i].direccion);
        }
        console.log("Teléfonos:");
        for (let i in this.telefonos) {
            console.log(i, "-", this.telefonos[i].tipo,":", this.telefonos[i].numero);
        }
        console.log("Otros datos:", this.notas);
    }

    //Método de búsqueda de dni
    //a > DNI / b-i > direccion / j-l > mail / m-o > telefono
    nuevosDatos(a: string, b: string, c: number, d: number|string, e: string, f: number, g: string, h: string, i:number, j: string, k: string, l:number, m: string, n: number, o:number): void {
        if (a == this.dni) {
            console.log("El DNI coincide con", this.nombre, this.apellidos);
            this.addDireccion(b,c,d,e,f,g,h,i);
            this.addMail(j, k, l);
            this.addTelefono(m, n, o);
        } else {
            console.log("El DNI NO coincide con", this.nombre, this.apellidos);
        }
    }
}