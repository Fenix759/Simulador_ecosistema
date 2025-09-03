"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ecosistema = void 0;
class Ecosistema {
    constructor() {
        this.organismos = [];
    }
    agregar(org) {
        this.organismos.push(org);
    }
    simular() {
        this.organismos.forEach(o => {
            o.comer();
            o.moverse();
        });
    }
    mostrarEstado() {
        this.organismos.forEach(o => console.log(`${o.nombre}: ${o.getEnergia()} energía`));
    }
}
exports.Ecosistema = Ecosistema;
