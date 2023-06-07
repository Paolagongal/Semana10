export class Serie {
    constructor(imagen, nombre, episodio, categoria, actor, director, plataforma) {
        if (categoria) {
            this.categoria = categoria;
        }
        else {
            this.categoria = [];
        }
        if (actor) {
            this.actor = actor;
        }
        else {
            this.actor = [];
        }
        if (director) {
            this.director = director;
        }
        else {
            this.director = [];
        }
        if (plataforma) {
            this.plataforma = plataforma;
        }
        else
            [
                this.plataforma = []
            ];
        this.imagen = imagen;
        this.nombre = nombre;
        this.episodio = episodio;
    }
}
