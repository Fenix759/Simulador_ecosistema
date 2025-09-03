import inquirer from 'inquirer';
import { Ecosistema } from './Ecosistema';
import { Animal } from '../modelos/Animal';
import { Planta } from '../modelos/Planta';

export class Simulador {
  private ecosistema = new Ecosistema();

  async iniciar() {
    let salir = false;

    while (!salir) {
      const { accion } = await inquirer.prompt([
        {
          type: 'list',
          name: 'accion',
          message: '¿Qué deseas hacer?',
          choices: ['Agregar Animal', 'Agregar Planta', 'Simular', 'Ver Estado', 'Salir'],
        },
      ]);

      switch (accion) {
        case 'Agregar Animal':
          const { nombreAnimal } = await inquirer.prompt([
            { type: 'input', name: 'nombreAnimal', message: 'Nombre del animal:' },
          ]);
          this.ecosistema.agregar(new Animal(nombreAnimal, 50));
          break;

        case 'Agregar Planta':
          const { nombrePlanta } = await inquirer.prompt([
            { type: 'input', name: 'nombrePlanta', message: 'Nombre de la planta:' },
          ]);
          this.ecosistema.agregar(new Planta(nombrePlanta, 30));
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
