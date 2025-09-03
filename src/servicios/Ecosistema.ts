import { Organismo } from '../modelos/Organismo';

export class Ecosistema {
  private organismos: Organismo[] = [];

  agregar(org: Organismo): void {
    this.organismos.push(org);
  }

  simular(): void {
    this.organismos.forEach(o => {
      o.comer();
      o.moverse();
    });
  }

  mostrarEstado(): void {
    this.organismos.forEach(o =>
      console.log(`${o.nombre}: ${o.getEnergia()} energía`)
    );
  }
}

