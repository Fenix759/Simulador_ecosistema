"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planta = void 0;
const Organismo_1 = require("./Organismo");
class Planta extends Organismo_1.Organismo {
    comer() {
        this.energia += 5;
        console.log(`${this.nombre} hizo fotosíntesis. Energía: ${this.energia}`);
    }
    moverse() {
        console.log(`${this.nombre} no se mueve.`);
    }
}
exports.Planta = Planta;
