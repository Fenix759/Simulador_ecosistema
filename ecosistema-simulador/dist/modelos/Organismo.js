"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organismo = void 0;
class Organismo {
    constructor(nombre, energia) {
        this.nombre = nombre;
        this.energia = energia;
    }
    getEnergia() {
        return this.energia;
    }
}
exports.Organismo = Organismo;
