# Simulador_ecosistema
1. ¿Qué es TypeScript y en qué se diferencia de JavaScript?

TypeScript es un superconjuto tipado de javascript que añade tipado estetico lo que permite detectar errores durante la fase de desarrollo en lugar de en tiempo de ejecución, haciendo el código más robusto y mantenible, especialmente para proyectos grande.
TypeScript no es un lenguaje nuevo, si no un lenguaje basado en JavaScript que incorpora toda su funcionalidad y permite el uso librerias de JavaScript.

Que lo diferencia de JavaScript?
- Tipado: JavaScript tiene tipado dinámico (los tipos se determinan en tiempo de ejecución), mientras que TypeScript tiene tipado estático (los tipos se especifican explícitamente y se verifican en tiempo de compilación).
- Proceso de Compilación: JavaScript es interpretado y se ejecuta directamente, sin un paso de compilación. TypeScript requiere un compilador para convertir el código .ts en .js antes de que pueda ejecutarse.
- Decteccion de errores: El tipado estático de TypeScript permite detectar errores de tipo durante el desarrollo (en tiempo de compilación), lo que reduce la probabilidad de errores en la ejecución.
- Flexibilidad vs. Estructura: JavaScript es más flexible y es ideal para prototipos rápidos, mientras que TypeScript ofrece una estructura más robusta, ideal para proyectos empresariales y escalables.

2. ¿Qué ventajas ofrece TypeScript para trabajar con Programación Orientada a Objetos?

-TypeScript facilita mucho la programación orientada a objetos gracias a su tipado estático, soporte para clases, herencia, encapsulación (private, protected), interfaces y polimorfismo. 
Estas características permiten escribir código más organizado, reutilizable y seguro. Además, ofrece herramientas modernas como decoradores (en forma experimental) que amplían sus capacidades.

3. ¿Qué son los modificadores de acceso (public, private, protected)? Ejemplos.

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

5. ¿Cómo se definen clases y objetos en TS?

en typescript una clase es una plantilla o plano para crear objetos, defiendo sus propiedades (variables) y metodos (funciones). un objeto es una instancia concreta e esa clase, un elemento individual que tiene un estado y funcionalidad definidos. Se definen usando la palabra clave class y los objetos se crean utilizando el operador new, inicializando sus propiedades a través del método constructor. 

Definición de Clases

Palabra clave class:
Se utiliza para crear una clase, por ejemplo: class MiClase { ... }. 

Atributos (Propiedades):
Variables dentro de la clase que representan el estado del objeto. Por defecto, en TypeScript se deben inicializar o declarar como opcionales, obligando a su definición.

Métodos:
Funciones dentro de la clase que definen las acciones o el comportamiento que un objeto puede realizar.

constructor:
Un método especial que se ejecuta automáticamente al crear un nuevo objeto a partir de la clase. Se usa para inicializar los atributos con los valores proporcionados. 

this:
Se usa dentro de los métodos para referirse al objeto específico que se está utilizando. 


6. ¿Qué son los constructores y para qué sirven?

Un constructor es como la bienvenida que recibe un objeto cuando “nace” dentro de un programa. Cada vez que creas un objeto, este necesita arrancar con algunos datos básicos, como un nombre o una edad, para poder funcionar. Justo ahí entra el constructor: se encarga de darle esos valores iniciales automáticamente.
En algunos lenguajes el constructor tiene el mismo nombre que la clase, y en otros, como Python, se llama __init__. Su misión es simple: asegurarse de que cada objeto empiece preparado para trabajar, evitando pasos extra, errores y manteniendo todo más organizado desde el inicio.


7. ¿Qué es la herencia en TS y cómo se implementa (extends / super)?

En TypeScript, la herencia es un principio de la Programación Orientada a Objetos que permite que una clase (llamada clase hija o subclase) adquiera las propiedades y métodos de otra clase (llamada clase padre o superclase). Esto evita repetir código y facilita la reutilización y organización.

extends → se usa para indicar que una clase hereda de otra.

super → se usa dentro de la clase hija para llamar al constructor o métodos de la clase padre.

Ejemplo en TypeScript:

// Clase padre
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Clase hija que hereda de Persona
class Estudiante extends Persona {
  carrera: string;

  constructor(nombre: string, edad: number, carrera: string) {
    super(nombre, edad); // Llama al constructor de Persona
    this.carrera = carrera;
  }

  estudiar(): void {
    console.log(`${this.nombre} está estudiando ${this.carrera}.`);
  }
}

// Uso
const estudiante1 = new Estudiante("Ana", 21, "Ingeniería");
estudiante1.presentarse();  // Heredado de Persona
estudiante1.estudiar();     // Propio de Estudiante


8. ¿Qué significa polimorfismo en el contexto de TS?

En TypeScript (TS), el polimorfismo se refiere a la capacidad de objetos de diferentes clases de ser tratados como objetos de una superclase común, permitiendo invocar el mismo método en diferentes objetos y que cada uno responda de manera única. Esto promueve la flexibilidad, reutilización y extensibilidad del código al permitir que el mismo mensaje se envíe a múltiples objetos, resultando en un comportamiento específico para cada uno. 

9. ¿Qué son las clases abstractas y qué diferencia tienen con una clase normal?

Una clase abstracta en TypeScript es una clase que no se puede instanciar directamente, sino que sirve como modelo o plantilla para que otras clases hereden de ella. Su objetivo es definir una estructura común (propiedades y métodos) que las clases hijas deben implementar o completar.

aracterísticas de una clase abstracta:

- Se declara con la palabra clave abstract.

- Puede contener:

- Métodos abstractos (sin cuerpo, solo la firma, que las subclases deben implementar).

- Métodos normales (con implementación, que las hijas heredan directamente).

- No se puede crear un objeto a partir de ella.


10. ¿Qué es una interface en TS y en qué se diferencia de una clase abstracta?
    
En TypeScript, una interface es un contrato que define la forma que debe tener un objeto, es decir, cuáles propiedades y métodos debe incluir, pero sin implementar la lógica interna. Se usa principalmente para garantizar que diferentes clases u objetos sigan la misma estructura.

¿En que se diferencian?

La diferencia entre una interface y una clase abstracta en TypeScript está en el nivel de detalle que ofrecen. Una interface es como un contrato o una lista de requisitos: solo define qué propiedades y métodos debe tener un objeto, pero nunca dice cómo funcionan, dejando toda la implementación a la clase que la use. En cambio, una clase abstracta es un molde más completo: además de obligar a implementar ciertos métodos (abstractos), también puede traer otros ya programados y hasta atributos con valores iniciales. Otra diferencia clave es que una clase puede implementar múltiples interfaces, pero solo puede heredar de una clase abstracta. En resumen, las interfaces sirven para estandarizar estructuras, mientras que las clases abstractas sirven para compartir tanto estructura como lógica común entre varias clases.

11. Ejemplo mínimo de cada pilar de POO en TS (una línea de código por concepto)

// 1. Encapsulación (propiedad privada)
class Persona { private nombre: string = "Ana"; }

// 2. Abstracción (clase abstracta)
abstract class Animal { abstract hacerSonido(): void; }

// 3. Herencia (clase hija que extiende de otra)
class Perro extends Animal { hacerSonido(){ console.log("Guau"); } }

// 4. Polimorfismo (el mismo método se comporta distinto según la clase)
let animal: Animal = new Perro(); animal.hacerSonido(); // "Guau"

En el código se muestran los cuatro pilares de la POO con ejemplos muy cortos. Primero, en Persona, la propiedad nombre está marcada como privada, eso significa que nadie fuera de la clase puede tocarla directamente; esto es encapsulación, como tener un cajón con llave al que solo la propia clase sabe cómo entrar. Después, con Animal se usa la palabra abstract, que es como decir: “toda clase que herede de mí debe tener este método, pero yo no te digo cómo lo haces”; eso es abstracción, definir la idea sin dar los detalles. Luego aparece Perro extends Animal, que es la herencia: la clase Perro toma la base de Animal y completa lo que faltaba, en este caso el sonido. Finalmente, cuando hacemos let animal: Animal = new Perro(); animal.hacerSonido();, estamos viendo polimorfismo, porque aunque la variable es del tipo general Animal, en realidad se comporta como un Perro y ladra.


12. Investigar y realizar la configuración de TypeScript con Node JS y VS Code.

Pasos para configurar TypeScript en Node.js y VS Code

1. Instalar Node.js y npm
Descarga Node.js desde su página oficial e instala. Verifica en la terminal con:

    node -v
    npm -v

2. Crear el proyecto
Abre una carpeta para tu proyecto y desde la terminal escribe:

    mkdir mi-proyecto-ts && cd mi-proyecto-ts
    npm init -y

3. Instalar TypeScript y herramientas

    npm install -g typescript
    npm install typescript ts-node --save-dev


4. Configurar TypeScript
Genera el archivo de configuración:

      tsc --init


Aquí defines cosas como la carpeta de salida (outDir) y el directorio de tus archivos (rootDir).

5. Configurar VS Code

- Abre el proyecto en VS Code.

- En la carpeta .vscode crea launch.json para depurar.


6. Escribir y ejecutar código

- Crea un archivo app.ts.

- Para compilar:

      tsc


- Para ejecutar sin compilar:

      npx ts-node src/app.ts


Para depurar en VS Code, presiona F5.
