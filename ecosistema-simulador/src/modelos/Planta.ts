import { Organismo } from './Organismo';

export class Planta extends Organismo {
  comer(): void {
    this.energia += 5;
    console.log(`${this.nombre} hizo fotosíntesis. Energía: ${this.energia}`);
  }

  moverse(): void {
    console.log(`${this.nombre} no se mueve.`);
  }
}
