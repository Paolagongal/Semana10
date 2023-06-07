export class Plan {
    constructor(precio, plataforma) {
        this.precio = precio;
        this.plataforma = plataforma;
    }
    agregar(plataforma) {
        this.plataforma = plataforma;
    }
}
