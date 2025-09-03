export abstract class Organismo {
  constructor(public nombre: string, protected energia: number) {}

  abstract comer(): void;
  abstract moverse(): void;

  getEnergia(): number {
    return this.energia;
  }
}
