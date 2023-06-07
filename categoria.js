export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.serie = [];
    }
    agregarSerie(serie) {
        this.serie.push(serie); //lleva this.serie.push cuando es un arreglo 
    }
}
