import { Injectable } from '@angular/core';


export interface Libro {
  id: string;
  titulo: string;
  autor: string;
  imagen: string;
  resumen: string;
  
  tabla: {
    genero: string;
    idioma: string;
    anio: number;
    pais: string;
  };
  
  resenia: string;
}

@Injectable({
  providedIn: 'root'
})

export class LibrosService {
  private libros: Libro[] = [
  {
    id: 'noches-blancas',
    titulo: 'Noches Blancas',
    autor: 'Fiódor Dostoievski',
    imagen: "/images/libros/noches-blancas.webp",
    resumen: "Un relato breve pero muy intenso que me hizo reflexionar sobre la soledad y los sueños no cumplidos.",
    tabla: {
      genero: 'Novela romantica / relato corto',
      idioma: 'Ruso',
      anio: 1848,
      pais: 'Rusia'
    },
    resenia: `“Noches Blancas” es una obra corta pero cargada de emociones. 
    Lo que más me marcó es cómo refleja la soledad y los sueños de un joven que anhela compañía y amor, 
    pero que se enfrenta a la realidad de manera dura y melancólica. 
    Es un libro que te hace pensar en las ilusiones que construimos y en cómo, a veces, 
    se desvanecen con la misma rapidez con la que aparecieron.`
  },
  {
    id: 'el-extranjero',
    titulo: 'El Extranjero',
    autor: 'Albert Camus',
    imagen: "/images/libros/el-extranjero.webp",
    resumen: "Un libro que me hizo reflexionar sobre la indiferencia de la vida y el sentido de nuestras decisiones.",
    tabla: {
      genero: 'Novela existencialista',
      idioma: 'Francés',
      anio: 1942,
      pais: 'Francia'
    },
    resenia: `«Mamá ha muerto hoy. O tal vez ayer, no lo sé».  
    Así comienza <em>El Extranjero</em>, una de las novelas más impactantes del siglo XX. 
    Camus nos presenta a Meursault, un hombre que parece vivir al margen de todo: 
    la muerte de su madre, el amor, la amistad o incluso un crimen cometido por sus propias manos.</p>
    <p>Lo fascinante de esta obra es cómo la indiferencia de Meursault nos confronta con una 
    pregunta incómoda: ¿qué sentido tiene realmente la vida cuando nada nos conmueve?  
    Cada página te atrapa con esa frialdad existencial, obligándote a reflexionar sobre 
    la apatía, la libertad y el absurdo de la condición humana.</p>
    <p>Leer <em>El Extranjero</em> no es solo seguir la historia de un hombre distante, 
    sino mirarnos en un espejo que a veces no queremos enfrentar. Es de esos libros que, 
    aunque cortos, dejan una huella profunda y una inquietud difícil de olvidar.`
  },
  {
    id: 'un-mundo-feliz',
    titulo: 'Un Mundo Feliz',
    autor: 'Aldous Huxley',
    imagen: "/images/libros/un-mundo-feliz.webp",
    resumen: "Una novela que muestra un futuro controlado por la tecnología y la manipulación social.",
    tabla: {
      genero: 'Ciencia ficción',
      idioma: 'Inglés',
      anio: 1932,
      pais: 'Reino Unido'
    },
    resenia: `<em>Un Mundo Feliz</em> es una de esas novelas que incomodan porque, aunque fue escrita hace casi un siglo, 
    parece hablar directamente de nuestro presente.  
    Huxley imagina una sociedad donde todo está controlado: desde el nacimiento en laboratorios hasta la felicidad forzada 
    mediante drogas y entretenimiento superficial.</p>
    <p>Lo que más me impactó es cómo este mundo “perfecto” revela su verdadero precio: 
    la pérdida de la libertad, la individualidad y los valores humanos más esenciales.  
    Al final, uno se pregunta si la comodidad y el consumo justifican renunciar a lo que nos hace realmente humanos.</p>
    <p>Es un libro que te deja con la inquietud de pensar cuánto de esa distopía ya forma parte de nuestra vida diaria. 
    Sin duda, una lectura que provoca más preguntas que respuestas.`
  },
  {
    id: 'un-mundo-julius',
    titulo: 'Un Mundo para Julius',
    autor: 'Alfredo Bryce Echenique',
    imagen: "/images/libros/un-mundo-julius.webp",
    resumen: "Una mirada tierna y crítica a la sociedad peruana, contada a través de los ojos de un niño.",
    tabla: {
      genero: 'Novela',
      idioma: 'Español',
      anio: 1970,
      pais: 'Perú'
    },
    resenia: `<em>Un mundo para Julius</em> es una de esas novelas que retrata la sociedad con una mezcla de ternura y crítica.  
    Bryce Echenique nos presenta a Julius, un niño que crece en una familia de la alta sociedad limeña, rodeado de lujos, pero también de contradicciones que él apenas alcanza a comprender.</p>
    <p>Lo que más destaca es cómo la mirada inocente del protagonista contrasta con la desigualdad y las diferencias de clase que marcan el Perú de la época.  
    Entre juegos, silencios y observaciones, Julius refleja el choque entre la infancia y una realidad social muy dura.</p>
    <p>Es un libro que invita a reflexionar sobre la infancia, la inocencia y cómo los contextos sociales influyen en la vida de las personas.  
    Una obra sensible y, al mismo tiempo, profundamente crítica.`
  },
  {
    id: 'crimen-castigo',
    titulo: 'Crimen y Castigo',
    autor: 'Fiódor Dostoievski',
    imagen: "/images/libros/crimen-castigo.webp",
    resumen: "Una obra intensa sobre la culpa, la justicia y la redención que me atrapó desde el inicio.",
    tabla: {
      genero: 'Novela psicológica',
      idioma: 'Ruso',
      anio: 1866,
      pais: 'Rusia'
    },
    resenia: `<em>Crimen y castigo</em> es una de esas novelas que te dejan pensando mucho después de cerrar el libro.  
    Dostoievski se sumerge en la mente de Raskólnikov, un joven que intenta justificar lo injustificable: el asesinato de una usurera en nombre de un supuesto bien mayor.</p>
    <p>Lo que más me impresionó es cómo la verdadera trama no está en el crimen mismo, sino en la lucha interna del protagonista.  
    La culpa, el remordimiento y la tensión psicológica se convierten en un castigo mucho más duro que cualquier condena externa.</p>
    <p>Es una obra intensa, profunda y a veces difícil de digerir, pero que muestra como pocas el peso de la conciencia humana.  
    Definitivamente, una lectura imprescindible para entender la complejidad moral y psicológica del ser humano.`
  },
  {
    id: 'rebelion-granja',
    titulo: 'Rebelión en la Granja',
    autor: 'George Orwell',
    imagen: "/images/libros/rebelion-granja.webp",
    resumen: "Una fábula donde los animales de una granja se rebelan contra los humanos, mostrando la corrupción del poder.",
    tabla: {
      genero: 'Sátira política / Fábula',
      idioma: 'Inglés',
      anio: 1945,
      pais: 'Reino Unido'
    },
    resenia: `<em>Rebelión en la granja</em> es un relato breve pero tremendamente poderoso.  
    Orwell usa a un grupo de animales que se levantan contra sus dueños humanos para mostrar cómo los ideales de libertad e igualdad 
    pueden corromperse con el poder.</p>
    <p>Lo que más me marcó es cómo los cerdos, que al inicio representaban la esperanza de un cambio justo, terminan convirtiéndose 
    en aquello que juraron destruir.  
    La famosa frase “Todos los animales son iguales, pero algunos son más iguales que otros” resume perfectamente esa contradicción.</p>
    <p>Es una obra que, aunque escrita hace más de 70 años, sigue siendo increíblemente actual.  
    Te deja pensando en la política, la manipulación y en cómo la historia parece repetirse una y otra vez.`
  }
];
  constructor(){ }

  getLibros():Libro[]{
    return this.libros;
  }

  getLibroById(id: string): Libro | undefined {
    return this.libros.find(libro => libro.id === id);
  }
}

