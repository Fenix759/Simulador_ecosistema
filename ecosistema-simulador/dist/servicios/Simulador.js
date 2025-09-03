"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulador = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const Ecosistema_1 = require("./Ecosistema");
const Animal_1 = require("../modelos/Animal");
const Planta_1 = require("../modelos/Planta");
class Simulador {
    constructor() {
        this.ecosistema = new Ecosistema_1.Ecosistema();
    }
    async iniciar() {
        let salir = false;
        while (!salir) {
            const { accion } = await inquirer_1.default.prompt([
                {
                    type: 'list',
                    name: 'accion',
                    message: '¿Qué deseas hacer?',
                    choices: ['Agregar Animal', 'Agregar Planta', 'Simular', 'Ver Estado', 'Salir'],
                },
            ]);
            switch (accion) {
                case 'Agregar Animal':
                    const { nombreAnimal } = await inquirer_1.default.prompt([
                        { type: 'input', name: 'nombreAnimal', message: 'Nombre del animal:' },
                    ]);
                    this.ecosistema.agregar(new Animal_1.Animal(nombreAnimal, 50));
                    break;
                case 'Agregar Planta':
                    const { nombrePlanta } = await inquirer_1.default.prompt([
                        { type: 'input', name: 'nombrePlanta', message: 'Nombre de la planta:' },
                    ]);
                    this.ecosistema.agregar(new Planta_1.Planta(nombrePlanta, 30));
                    break;
                case 'Simular':
                    this.ecosistema.simular();
                    break;
                case 'Ver Estado':
                    this.ecosistema.mostrarEstado();
                    break;
                case 'Salir':
                    salir = true;
                    break;
            }
        }
    }
}
exports.Simulador = Simulador;
