export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number | string; //Puede escribirlo en número o en letra
    private _letra: string;
    private _cp: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(a: string, b: number, c: number|string, d: string, e: number, f: string, g: string) {
        this._calle = a;
        this._numero = b;
        this._piso = c;
        this._letra = d;
        this._cp = e;
        this._poblacion = f;
        this._provincia = g;
    }

    //Creamos getters y setters
    public set calle (a:string) {
        this._calle = a;
    }

    public set numero (a:number) {
        this._numero = a;
    }

    public set piso (a:number|string) {
        this._piso = a;
    }

    public set letra (a:string) {
        this._letra = a;
    }

    public set cp (a:number) {
        this._cp = a;
    }

    public set poblacion (a:string) {
        this._poblacion = a;
    }

    public set provincia (a:string) {
        this._provincia = a;
    }

    public get calle () {
        return this._calle;
    }

    public get numero () {
        return this._numero;
    }

    public get piso () {
        return this._piso;
    }

    public get letra () {
        return this._letra;
    }

    public get cp () {
        return this._cp;
    }

    public get poblacion () {
        return this._poblacion;
    }

    public get provincia () {
        return this._provincia;
    }
}