export class Direccion {
    calle: string;
    numero: number;
    piso: number | string; //Puede escribirlo en número o en letra
    letra: string;
    cp: number;
    poblacion: string;
    provincia: string;

    constructor(a: string, b: number, c: number|string, d: string, e: number, f: string, g: string) {
        this.calle = a;
        this.numero = b;
        this.piso = c;
        this.letra = d;
        this.cp = e;
        this.poblacion = f;
        this.provincia = g;
    }
}