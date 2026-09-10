// Подробный испанский текст: раздел «date-time».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esDateTimeContent: Partial<Record<string, EsDetailedContent>> = {
  "working-days-calculator": {
    longDescription: "Usa esta calculadora de días laborables para contar los días de diario, los fines de semana y las fechas excluidas a mano entre dos fechas.",
    howToUse: [
      "Introduce la fecha de inicio y la de fin.",
      "Elige si los fines de semana cuentan como laborables.",
      "Añade fechas excluidas si hace falta.",
    ],
    howItWorks: "La calculadora recorre los días del calendario y cuenta los que cumplen las reglas de jornada laboral elegidas.",
    example: "Cuenta los días laborables entre dos fechas y excluye los festivos a mano.",
    faq: [
      { q: "¿Qué exactitud tiene esta calculadora de días laborables?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar la calculadora de días laborables?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado de la calculadora de días laborables?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
  "date-shift-calculator": {
    longDescription: "Usa esta calculadora de fechas para sumar un intervalo a una fecha o restárselo. Responde a preguntas como «qué fecha cae 90 días después de hoy» e indica además el día de la semana, el desplazamiento total en días naturales, el día del año y el número de semana ISO 8601.",
    howToUse: [
      "Elige la fecha de partida: hoy viene puesta por defecto.",
      "Elige si quieres sumar el intervalo a la fecha o restárselo.",
      "Rellena las partes del intervalo que necesites: años, meses, semanas y días se pueden combinar.",
      "Consulta la fecha resultante, su día de la semana y el desplazamiento total en días naturales.",
    ],
    howItWorks: "Primero se aplican los años y los meses, y después las semanas y los días. Cuando el mes de destino es más corto, la fecha se ajusta al último día de ese mes: el 31 de enero más un mes da el 28 de febrero, o el 29 en un año bisiesto. Los años bisiestos se gestionan solos porque el cálculo sigue el calendario y no una duración fija de año.",
    example: "El 1 de enero de 2026 más 90 días es el 1 de abril de 2026, un miércoles: un desplazamiento de 90 días naturales, el día 91 del año, semana ISO 14.",
    faq: [
      { q: "¿Cómo se cuentan los meses si tienen distinta duración?", a: "Los meses se suman por el calendario, no como 30 días. Si el mes de destino no tiene ese día, se usa el último día de ese mes: el 31 de enero más un mes da el 28 de febrero." },
      { q: "¿Por qué sumar un mes y después restarlo no siempre devuelve la fecha original?", a: "Por el ajuste al final de mes. El 31 de enero más un mes es el 28 de febrero, y el 28 de febrero menos un mes es el 28 de enero. Eso es aritmética de calendario normal, no un error de redondeo." },
      { q: "¿Qué ocurre cuando la fecha de partida es el 29 de febrero?", a: "Al desplazar por años o meses, el 29 de febrero pasa al 28 si el año de destino no tiene día bisiesto. Los desplazamientos por días y semanas siguen el calendario real, así que un día bisiesto cuenta simplemente como uno más." },
      { q: "¿Se saltan los fines de semana y los festivos?", a: "No, cuenta días naturales consecutivos. Usa la calculadora de días laborables cuando necesites solo días hábiles." },
      { q: "¿Qué es el número de semana ISO 8601?", a: "Es la norma internacional para numerar semanas: una semana empieza en lunes, y la primera semana del año es la que contiene el primer jueves. Por eso el 1 de enero pertenece a veces a la última semana del año anterior." },
      { q: "¿Puedo combinar años, meses y días?", a: "Sí. Primero se aplican los años y los meses, y después las semanas y los días. El orden importa siempre que haya un ajuste al final de mes." },
    ],
  },
  "day-of-week": {
    longDescription: "Indica el día de la semana de cualquier fecha, junto con su posición en el año, el número de semana ISO y si cae en fin de semana. Las fechas se leen sin desplazamiento de zona horaria, así que la respuesta no cambia según dónde estés.",
    howToUse: [
      "Introduce los valores.",
      "Comprueba el dominio si se rechaza un campo.",
      "Consulta el resultado.",
    ],
    howItWorks: "El día de la semana sale de la propia fecha del calendario; la semana ISO es la que contiene el primer jueves del año.",
    example: "El 29 de febrero de 2024 fue jueves y el día 60 del año.",
    faq: [
      { q: "¿Importa la zona horaria?", a: "No. La fecha se lee como una fecha de calendario simple, así que la respuesta es la misma en todas partes." },
      { q: "¿Por qué el 1 de enero pertenece a veces al año anterior?", a: "Según la ISO 8601 la semana uno es la que contiene el primer jueves. Un año que empieza en viernes, sábado o domingo arranca en la última semana del año anterior." },
      { q: "¿Vale para siglos pasados?", a: "Sigue el calendario gregoriano. Para fechas anteriores a su implantación en 1582 regía el calendario juliano y el día de la semana es distinto." },
      { q: "¿Se gestionan los días bisiestos?", a: "Sí. El 29 de febrero solo existe en años bisiestos, y el recuento del día del año se desplaza en consecuencia." },
    ],
  },
  "leap-year": {
    longDescription: "Aplica la regla gregoriana: un año divisible entre cuatro es bisiesto, salvo los años de fin de siglo, que además deben ser divisibles entre cuatrocientos. Por eso 1900 fue común y 2000 no lo fue.",
    howToUse: [
      "Introduce el año.",
      "Consulta la respuesta.",
      "Comprueba los años bisiestos más cercanos si los necesitas.",
    ],
    howItWorks: "Divisible entre 4 y, o bien no divisible entre 100, o bien divisible entre 400.",
    example: "2024 es bisiesto, 1900 no lo fue y 2000 sí, porque se divide entre 400.",
    faq: [
      { q: "¿Por qué hace falta la excepción de los siglos?", a: "Un año trópico dura unos 365,2422 días, algo menos de 365,25. Suprimir tres días bisiestos cada cuatro siglos mantiene el calendario alineado con las estaciones." },
      { q: "¿1900 fue bisiesto?", a: "No. Se divide entre 100 pero no entre 400, así que febrero tuvo 28 días." },
      { q: "¿Cada cuánto hay un año bisiesto?", a: "Cada cuatro años, salvo esas excepciones de fin de siglo: 97 años bisiestos por cada 400." },
      { q: "¿La regla vale para fechas antiguas?", a: "El calendario gregoriano se implantó en 1582; para fechas anteriores regía la regla juliana, en la que cada cuarto año era bisiesto sin excepción." },
    ],
  },
  "sleep-time": {
    longDescription: "Noventa minutos es la duración media aceptada de un ciclo de sueño, no una medida de ninguna persona en concreto: los ciclos reales van de unos 80 a unos 110 minutos y cambian a lo largo de la noche. El sentido del cálculo no es la precisión, sino que el despertador caiga entre ciclos y no en mitad del sueño profundo, y por eso el objetivo es un número entero de ciclos y no unas redondas ocho horas. Despertarse a mitad de ciclo deja hecho polvo incluso tras una noche larga, y despertarse al final de uno deja descansado incluso tras una corta. El tiempo para dormirse se suma aparte porque es tiempo en la cama, no sueño.",
    howToUse: [
      "Elige si conoces la hora de acostarte o la del despertador.",
      "Introduce esa hora en horas y minutos.",
      "Elige cuántos ciclos quieres: cinco o seis van bien para la mayoría de los adultos.",
      "Introduce cuánto sueles tardar en dormirte.",
    ],
    howItWorks: "Tiempo en la cama = ciclos × 90 minutos + tiempo para dormirse. Eso se suma a una hora de acostarse o se resta de una hora de despertar, dando la vuelta a la medianoche.",
    example: "Acostarse a las 23:00 para cinco ciclos con 15 minutos para dormirse da un despertador a las 06:45.",
    faq: [
      { q: "¿Un ciclo de sueño dura de verdad 90 minutos?", a: "De media y de forma aproximada. Los ciclos individuales van de unos 80 a unos 110 minutos y se alargan a lo largo de la noche, así que toma el resultado como un objetivo y no como un horario." },
      { q: "¿Cuántos ciclos debo buscar?", a: "Cinco o seis para la mayoría de los adultos, que son de siete horas y media a nueve de sueño. Cuatro es una noche corta que funciona de vez en cuando, no de forma habitual." },
      { q: "¿Por qué se suma aparte el tiempo para dormirse?", a: "Porque es tiempo en la cama, no sueño. Poner el despertador sin él roba esa diferencia al último ciclo, que es justo lo que el cálculo existe para evitar." },
      { q: "¿Por qué el resultado cae a veces al día siguiente?", a: "Porque el reloj da la vuelta a la medianoche. Acostarse a las 23:00 y dormir nueve horas significa las 08:00 de la mañana siguiente, no las 32:00." },
    ],
  },
  "time-duration": {
    longDescription: "Calcula cuánto hay entre dos horas, o qué hora resulta tras sumar o restar una duración. Las horas que cruzan la medianoche se tratan como un caso normal y no como un error.",
    howToUse: [
      "Elige qué calcular.",
      "Introduce las horas en horas y minutos.",
      "Consulta la duración o la hora resultante.",
    ],
    howItWorks: "Todo se convierte a minutos desde la medianoche y después se ajusta a un día de 24 horas.",
    example: "De las 22:15 a las 06:45 hay 8 horas y 30 minutos.",
    faq: [
      { q: "¿Y si la hora de fin es anterior a la de inicio?", a: "Se trata como un cruce de medianoche, que es lo que necesita un turno de noche. El resultado se señala en su propia línea." },
      { q: "¿La duración puede pasar de un día?", a: "Las duraciones que sumas o restas pueden superar las 24 horas; la hora resultante da la vuelta al reloj." },
      { q: "¿Se admiten segundos?", a: "No. La calculadora trabaja en minutos enteros, que es lo que necesita la aritmética de turnos y horarios." },
      { q: "¿Qué ocurre con los valores fuera de rango?", a: "Las horas se ajustan a 0-23 y los minutos a 0-59, así que una errata produce una hora razonable en lugar de un resultado roto." },
    ],
  },
  "timezone-difference": {
    longDescription: "Convierte una hora entre dos husos dados como desfases UTC. Los desfases se introducen como números, y esa es una limitación deliberada: esta calculadora no incorpora ninguna base de datos de husos, no deduce el horario de verano y no guarda historial de reglas pasadas; compara exactamente los desfases que le des. Los desfases fraccionarios funcionan: la India en UTC+5:30 y Nepal en UTC+5:45 son husos actuales y no curiosidades, así que la diferencia se calcula en minutos. Un cambio de día se muestra en su propia fila, porque de lo contrario la hora parecería del mismo día del calendario.",
    howToUse: [
      "Introduce el desfase UTC del huso en el que conoces la hora.",
      "Introduce el desfase UTC del huso al que conviertes.",
      "Introduce las horas y los minutos de la hora de origen.",
      "Comprueba la fila del día del calendario: la hora puede haber pasado a un día contiguo.",
    ],
    howItWorks: "La diferencia entre los desfases se convierte a minutos y se suma a la hora de origen. Si la suma se sale del día, la hora pasa al día contiguo y el desplazamiento se indica aparte.",
    example: "Las 14:30 en UTC+3 corresponden a las 06:30 del mismo día en UTC−5.",
    faq: [
      { q: "¿Por qué los husos se introducen como números en vez de elegirse de una lista?", a: "Porque una lista exige una base de datos de husos y actualizarla cada año. Mostrar una regla caducada es peor que pedir un desfase que puedes comprobar ahora mismo." },
      { q: "¿Se tiene en cuenta el horario de verano?", a: "No. Si uno de los husos está en horario de verano, introduce el desfase que ya lo incluya: UTC+2 en lugar de UTC+1, por ejemplo." },
      { q: "¿Se admiten husos de media hora?", a: "Sí. La India usa UTC+5:30 y Nepal UTC+5:45; introdúcelos como 5,5 y 5,75." },
      { q: "¿Qué significa el cambio de día?", a: "Que la hora convertida cayó en un día del calendario contiguo: más uno es el día siguiente y menos uno, el anterior." },
      { q: "¿Cómo encuentro el desfase de una ciudad?", a: "Aparece en los ajustes de huso horario de tu teléfono u ordenador junto al nombre de la ciudad, normalmente como UTC+3 o GMT+3." },
    ],
  },
  "week-number": {
    longDescription: "Muestra el número de semana ISO 8601, el día del año y cuántos días quedan. La semana 1 es la que contiene el primer jueves, y por eso los primeros días de enero pueden pertenecer todavía al año anterior.",
    howToUse: [
      "Elige una fecha.",
      "Consulta la semana ISO y el día del año.",
      "Comprueba a qué año pertenece la semana cerca del cambio de año.",
    ],
    howItWorks: "Semana = parte entera de ((día del año − día ISO de la semana + 10) / 7), con el año ajustado en los límites.",
    example: "El 18 de agosto de 2026 es el día 230 y cae en la semana ISO 34.",
    faq: [
      { q: "¿Por qué el 1 de enero muestra a veces la semana 52?", a: "La semana ISO 1 es la que contiene el primer jueves. Si el año empieza en viernes, sábado o domingo, esos días pertenecen todavía a la última semana del año anterior." },
      { q: "¿Un año puede tener 53 semanas?", a: "Sí, cuando empieza en jueves o cuando es bisiesto y empieza en miércoles." },
      { q: "¿La semana empieza en domingo?", a: "En la ISO 8601 no: la semana va de lunes a domingo. Los sistemas que empiezan en domingo usan otra numeración." },
      { q: "¿Los años bisiestos afectan al día del año?", a: "Sí. A partir del 1 de marzo todas las fechas se desplazan un día, y el año tiene 366 días en lugar de 365." },
    ],
  },
  "work-hours": {
    longDescription: "Cuenta las horas realmente trabajadas y no los días laborables de un calendario: el descanso se resta de la duración del turno, y lo que queda se multiplica por el número de turnos. Los turnos de noche se tratan aparte: cuando el fin es anterior al inicio el turno cruza la medianoche, y una resta simple devuelve un número negativo. Sumar un día ahí no es un apaño de comodidad, sino la única manera de sacar ocho horas de un «22:00 — 06:00» en lugar de menos dieciséis. Un descanso más largo que el turno se rechaza: el tiempo de trabajo negativo no existe, y mostrarlo sería un disparate verosímil.",
    howToUse: [
      "Introduce la hora de inicio del turno en horas y minutos.",
      "Introduce la hora de fin: para un turno de noche basta con dar la hora de la mañana.",
      "Introduce la duración del descanso en minutos.",
      "Fija el número de turnos del periodo y la tarifa por hora.",
    ],
    howItWorks: "Duración del turno = fin menos inicio, sumando un día cuando cruza la medianoche. Tiempo de trabajo = duración del turno menos el descanso, y las horas del periodo = tiempo de trabajo × número de turnos.",
    example: "Un turno de 9:00 a 18:00 con una hora de descanso da 8 horas: 168 horas en 21 turnos, o 84 000 con una tarifa de 500.",
    faq: [
      { q: "¿Cómo se trata un turno que cruza la medianoche?", a: "Si la hora de fin es anterior a la de inicio, se suma un día a la diferencia. Un turno de 22:00 a 06:00 da por tanto ocho horas y no menos dieciséis." },
      { q: "¿Por qué se rechaza un descanso más largo que el turno?", a: "Porque el tiempo de trabajo saldría negativo. Un resultado así parecería verosímil cuando en realidad señala una errata, así que se rechaza." },
      { q: "¿En qué se diferencia de contar días laborables?", a: "Esto cuenta horas dentro de un turno, no días en un calendario. Un calendario laboral con festivos es otra calculadora." },
      { q: "¿Se incluyen las horas extra a tarifa mayor?", a: "No, la tarifa se aplica por igual a todas las horas. Para las horas con recargo, cuéntalas como un turno aparte con otra tarifa." },
      { q: "¿Qué indica la duración del turno antes del descanso?", a: "El tiempo total de presencia desde el inicio hasta el fin, descanso incluido. El tiempo retribuido es la fila de encima, ya sin él." },
    ],
  },
};
