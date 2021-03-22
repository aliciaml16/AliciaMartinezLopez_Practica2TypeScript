export class Telefono {
    private _tipo: string;
    private _numero: number;

    constructor(a: string, b: number) {
        this._tipo = a;
        this._numero = b;
    }

    //Creamos getters y setters
    public set tipo (a:string) {
        this._tipo = a;
    }

    public set numero (a:number) {
        this._numero = a;
    }

    public get tipo () {
        return this._tipo;
    }

    public get numero () {
        return this._numero;
    }
}