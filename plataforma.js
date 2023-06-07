export class Plataforma {
    constructor(nombre, sitioWeb, planes) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.series = [];
        this.planes = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
