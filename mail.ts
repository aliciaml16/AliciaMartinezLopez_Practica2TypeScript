export class Mail {
    private _tipo: string;
    private _direccion: string;

    constructor(a: string, b: string) {
        this._tipo = a;
        this._direccion = b;
    }

    //Creamos getters y setters
    public set tipo (a:string) {
        this._tipo = a;
    }

    public set direccion (a:string) {
        this._direccion = a;
    }

    public get tipo () {
        return this._tipo;
    }

    public get direccion () {
        return this._direccion;
    }
}