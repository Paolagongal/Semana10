import { Serie } from "./serie.js";
import { Categoria } from "./categoria.js";
import { Actor } from "./actor.js";
import { Director } from "./director.js";
import { Episodio } from "./espisodio.js";
import { Plataforma } from "./plataforma.js";
import { Plan } from "./plan.js";
// CATEGORIA
let categoria = new Categoria("Terror");
console.log(categoria);
// SERIE
let serie = new Serie("terror.jgp", "oatsStudios", [], [], []);
console.log(serie);
categoria.agregarSerie(serie);
let serie2 = new Serie("imagen.jgp", "BlackMirrow", [], [], []);
console.log(serie2);
//ACTOR
let actor = new Actor("Carly,Dakota", "imagen.jgp", "profesionalidad");
console.log(actor);
let actor2 = new Actor("Carly,Dakota", "imagen.jgp", "profesionalidad");
console.log(actor2);
//DIRECTOR
let director = new Director("Neill,Alec", "imagen.jgp", "entrega,responsabilidad");
console.log(director);
let director2 = new Director("Neill,Alec", "imagen.jgp", "entrega,responsabilidad");
console.log(director2);
//EPISODIO
let episodio = new Episodio("episodio1", "entonces muere los infiltrados", 60, serie);
console.log(episodio);
episodio.agregarSerie(serie2);
//PLATAFORMA
let plataforma = new Plataforma("Netflix", "www.netflix.com", []);
console.log(plataforma);
//PLAN
let planBasico = new Plan(10.99, plataforma);
let planPremium = new Plan(30.99, plataforma);
console.log(planBasico);
console.log(planPremium);
plataforma.agregarSerie(serie);
