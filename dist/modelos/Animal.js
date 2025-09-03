"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const Organismo_1 = require("./Organismo");
class Animal extends Organismo_1.Organismo {
    comer() {
        this.energia += 10;
        console.log(`${this.nombre} comió. Energía: ${this.energia}`);
    }
    moverse() {
        this.energia -= 5;
        console.log(`${this.nombre} se movió. Energía: ${this.energia}`);
    }
}
exports.Animal = Animal;
