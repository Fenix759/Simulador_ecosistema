import { Organismo } from './Organismo';

export class Animal extends Organismo {
  comer(): void {
    this.energia += 10;
    console.log(`${this.nombre} comió. Energía: ${this.energia}`);
  }

  moverse(): void {
    this.energia -= 5;
    console.log(`${this.nombre} se movió. Energía: ${this.energia}`);
  }
}
