// Подробный испанский текст: раздел «education».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esEducationContent: Partial<Record<string, EsDetailedContent>> = {
  "final-grade": {
    longDescription: "Trabaja hacia atrás desde la nota que quieres: la nota actual aporta su parte, el examen aporta el resto, y la diferencia es lo que tiene que dar el examen. Un resultado por encima de cien es una respuesta y no un error: dice que el objetivo queda fuera de alcance con un solo examen, y la cifra indica por cuánto.",
    howToUse: [
      "Introduce tu nota actual en porcentaje.",
      "Introduce la nota final a la que aspiras.",
      "Introduce cuánto pesa el examen.",
    ],
    howItWorks: "Nota necesaria = (objetivo − actual × (1 − peso)) ÷ peso, con el peso como fracción.",
    example: "Con un 78 por ciento y un examen que pesa el 30 por ciento, llegar al 85 exigiría un 101,33: más de lo que el examen puede dar.",
    faq: [
      { q: "¿Qué significa el peso del examen?", a: "La parte que ocupa el examen en la nota final. El resto viene del trabajo ya hecho, y los dos suman cien por cien." },
      { q: "¿Por qué la respuesta puede pasar de cien?", a: "Porque el objetivo ya no es alcanzable con ese único examen. La cifra se conserva para que veas cuán grande es el desfase." },
      { q: "¿La nota actual va en porcentaje?", a: "Sí. Si tu asignatura califica en otra escala, conviértela antes: el cálculo trabaja en porcentaje de principio a fin." },
      { q: "¿Convierte a una calificación por letras?", a: "No. Las escalas de letras varían según el centro y el país, y sin una tabla de referencia cualquier conversión sería inventada." },
    ],
  },
  "reading-speed": {
    longDescription: "Divide las palabras que has leído entre los minutos que tardaste y da la velocidad en palabras por minuto, junto con la cifra por hora. Añade la extensión de un libro y la calculadora estima cuánto llevaría a ese ritmo. La velocidad es todo lo que mide: la comprensión es otra cuestión y aquí no se puntúa.",
    howToUse: [
      "Lee un pasaje y anota cuántas palabras tenía.",
      "Introduce el tiempo que tardaste en minutos.",
      "Si quieres, añade la extensión de un libro para una estimación.",
    ],
    howItWorks: "Velocidad = palabras ÷ minutos; el tiempo de un libro es su extensión dividida entre esa velocidad.",
    example: "3000 palabras en 12 minutos son 250 palabras por minuto.",
    faq: [
      { q: "¿Mide la comprensión?", a: "No. Mide solo el ritmo. Leer más deprisa entendiendo menos seguirá dando aquí una cifra mayor." },
      { q: "¿Cuál es una velocidad de lectura típica en un adulto?", a: "La mayoría de los adultos lee prosa entre 200 y 300 palabras por minuto, pero la cifra varía según el material y la familiaridad." },
      { q: "¿Por qué el recuento de caracteres es aproximado?", a: "Supone una longitud media de palabra, que difiere según el idioma y el texto, así que tómalo como una conversión orientativa y no como una medida." },
      { q: "¿Tengo que introducir la extensión de un libro?", a: "No, ese campo es opcional. Sin él obtienes simplemente la velocidad." },
    ],
  },
  "test-score-percent": {
    longDescription: "Divide las respuestas correctas entre el número total de preguntas y muestra el porcentaje, el número de fallos y la proporción que representan. Indica una nota de corte y el resultado gana un veredicto. El denominador son todas las preguntas del test, así que dejar una en blanco cuesta lo mismo que fallarla.",
    howToUse: [
      "Introduce cuántas respuestas fueron correctas.",
      "Introduce cuántas preguntas tenía el test.",
      "Añade una nota de corte si quieres un veredicto.",
    ],
    howItWorks: "Porcentaje = correctas ÷ total × 100, y el número de fallos es simplemente la diferencia.",
    example: "18 aciertos de 20 preguntas son 18 ÷ 20 × 100 = 90 por ciento.",
    faq: [
      { q: "¿Por qué no obtengo una calificación por letras?", a: "Las escalas de calificación difieren entre centros y países. Sin una tabla de referencia la conversión sería inventada, así que el resultado se queda en porcentaje." },
      { q: "¿Las preguntas en blanco cuentan en mi contra?", a: "Sí. El denominador es todo el test, así que una pregunta sin responder cuenta igual que una fallada." },
      { q: "¿Qué pasa si introduzco más respuestas correctas que preguntas?", a: "Se rechaza. La aritmética devolvería tan tranquila un 105 por ciento, que parece una respuesta pero es un error de entrada." },
      { q: "¿La nota de corte es obligatoria?", a: "No, es opcional. Déjala vacía y obtendrás simplemente el porcentaje, sin veredicto." },
    ],
  },
  "text-reading-time": {
    longDescription: "Estima la duración a partir del tamaño de un texto: pega el propio texto o introduce un número de palabras si no lo tienes a mano. Hablar es bastante más lento que leer en silencio —alrededor de 130 palabras por minuto frente a 200—, y por eso una charla construida sobre un texto que se lee en cinco minutos se va a casi ocho. Ambas velocidades son suposiciones editables y no normas: difieren según la persona y el texto, y presentar una media como un hecho sería un error.",
    howToUse: [
      "Elige qué tienes: un número de palabras o el propio texto.",
      "Pega el texto o introduce el número de palabras.",
      "Ajusta la velocidad de lectura a la tuya si hace falta.",
      "Cambia la velocidad al hablar si estás preparando una charla y conoces tu ritmo.",
    ],
    howItWorks: "El número de palabras se divide entre la velocidad de lectura y se multiplica por sesenta para dar segundos, redondeados a un entero. El tiempo en voz alta sigue el mismo camino con la velocidad al hablar, que suele ser alrededor de un tercio menor.",
    example: "Un texto de 1200 palabras se lee en silencio en exactamente 6 minutos y dura 9 minutos y 14 segundos en voz alta.",
    faq: [
      { q: "¿En qué se diferencia de una calculadora de velocidad de lectura?", a: "Aquella mide tu velocidad a partir de lo que lees en un tiempo conocido. Esta trabaja al revés: la velocidad se conoce y se estima la duración." },
      { q: "¿Qué velocidad de lectura uso?", a: "Un adulto que lee en su propia lengua suele manejar de 180 a 250 palabras por minuto; un texto técnico denso es bastante más lento. El valor es editable porque es una estimación, no una norma." },
      { q: "¿Por qué hablar es más lento que leer?", a: "Hablar exige respirar y hacer pausas. Un ritmo medio al hablar ronda las 130 palabras por minuto, y una charla con pausas es aún más lenta." },
      { q: "¿Cómo se cuentan las palabras de un texto pegado?", a: "Una palabra es un tramo de letras o cifras; un guion o un apóstrofo dentro de una palabra no la parte, y la puntuación no se cuenta." },
      { q: "¿Se incluyen las imágenes y las fórmulas?", a: "No, solo se cuenta el texto. Las fórmulas y las tablas suelen ralentizar la lectura más que la prosa corriente." },
    ],
  },
};
