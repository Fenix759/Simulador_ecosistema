# Simulador_ecosistema
1.¿Qué es TypeScript y en qué se diferencia de JavaScript?

TypeScript es un superconjuto tipado de javascript que añade tipado estetico lo que permite detectar errores durante la fase de desarrollo en lugar de en tiempo de ejecución, haciendo el código más robusto y mantenible, especialmente para proyectos grande.
TypeScript no es un lenguaje nuevo, si no un lenguaje basado en JavaScript que incorpora toda su funcionalidad y permite el uso librerias de JavaScript.

Que lo diferencia de JavaScript?
- Tipado: JavaScript tiene tipado dinámico (los tipos se determinan en tiempo de ejecución), mientras que TypeScript tiene tipado estático (los tipos se especifican explícitamente y se verifican en tiempo de compilación).
- Proceso de Compilación: JavaScript es interpretado y se ejecuta directamente, sin un paso de compilación. TypeScript requiere un compilador para convertir el código .ts en .js antes de que pueda ejecutarse.
- Decteccion de errores: El tipado estático de TypeScript permite detectar errores de tipo durante el desarrollo (en tiempo de compilación), lo que reduce la probabilidad de errores en la ejecución.
- Flexibilidad vs. Estructura: JavaScript es más flexible y es ideal para prototipos rápidos, mientras que TypeScript ofrece una estructura más robusta, ideal para proyectos empresariales y escalables.

2.¿Qué ventajas ofrece TypeScript para trabajar con Programación Orientada a Objetos?

-TypeScript facilita mucho la programación orientada a objetos gracias a su tipado estático, soporte para clases, herencia, encapsulación (private, protected), interfaces y polimorfismo. 
Estas características permiten escribir código más organizado, reutilizable y seguro. Además, ofrece herramientas modernas como decoradores (en forma experimental) que amplían sus capacidades.

3.¿Qué son los modificadores de acceso (public, private, protected)? Ejemplos.

los modififcadores de acceso (como public, private y protected), son palabras clave en la programacion orientada a objetos que controlan la visibilidad y el acceso a miembros de una clase (como variables y metodos).

-PUBLIC permite el acceso desde cualquier lugar

EJEMPLO:

class Persona {
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const p = new Persona("Ana");
console.log(p.nombre); // ✅ Acceso permitido

-PROTECTED restringe el acceso al paquete y subclases(clases heredadas)

EJEMPO:

class Empleado {
  protected sueldo: number = 2000;

  mostrarSueldo() {
    return this.sueldo;
  }
}

class Gerente extends Empleado {
  aumentarSueldo() {
    this.sueldo += 500; // ✅ Acceso permitido desde clase hija
  }
}

const g = new Gerente();
console.log(g.sueldo); // ❌ Error: 'sueldo' es protegido

-PRIVATE limita el acceso unicamente dentro de la misma clase donde se definen

EJEMPLO:

class Cuenta {
  private saldo: number = 1000;

  mostrarSaldo() {
    return this.saldo;
  }
}

const c = new Cuenta();
console.log(c.mostrarSaldo()); // ✅ Válido
console.log(c.saldo);          // ❌ Error: 'saldo' es privado

4. ¿Qué es un readonly y para qué se usa?

Un redonly es un modificador o atributo que se usa en programacion y diseño web para indicar que un valor, campo o propiedad no puede ser modificado una vez que se le ha asignado un valor inicial. sus usos principales son para asegurar la integridad de los datos (evitando que el usuario o el codigo cambien valores importantes) 
  - ejemplos y uso

     -Para campos de formulario: El atributo readonly en un elemento <input> o <textarea> hace que el usuario pueda ver el valor pero no lo puede        editar. Se usa para mostrar información que el usuario no debe cambiar, como un número de identificación o un resultado de un cálculo.

     -Control del flujo: Se puede usar con JavaScript para deshabilitar un campo de entrada y luego, tras una acción del usuario (como seleccionar       un    checkbox), eliminar el atributo readonly para hacerlo editable. 

5.¿Cómo se definen clases y objetos en TS?

en typescript una clase es una plantilla o plano para crear objetos, defiendo sus propiedades (variables) y metodos (funciones). un objeto es una instancia concreta 





