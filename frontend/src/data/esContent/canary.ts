// Подробный испанский текст канареечного набора.
//
// Шестнадцать калькуляторов, по одному на каждую категорию, плюс арифметическая
// прогрессия: она закрывает математику и таблицу результата — механику, которой
// нет ни у одного из остальных. Смысл взят из английского слоя и самого расчёта;
// числа в примерах пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esCanaryContent: Partial<Record<string, EsDetailedContent>> = {
  'annuity': {
    longDescription: 'Calcula la cuota constante del sistema francés y la desglosa mes a mes: al principio casi todo son intereses, al final casi todo es capital, y la tabla muestra exactamente dónde está el cruce. La calculadora de préstamos responde a «cuánto me va a costar» y compara sistemas de amortización; esta página es la fórmula de la cuota francesa junto con su cuadro, así que la tabla es la respuesta principal. La última cuota absorbe el redondeo acumulado, y por eso el saldo cierra exactamente en cero.',
    howToUse: [
      'Introduce el importe de la deuda y el tipo de interés anual.',
      'Indica el plazo en meses.',
      'Lee la cuota y, debajo, la tabla de amortización.',
    ],
    howItWorks: 'A = S · i / (1 − (1 + i)^−n), donde i es el tipo mensual: el anual dividido entre 12 y entre 100. Cada mes los intereses se calculan sobre el saldo pendiente, y lo que queda de la cuota reduce el capital. Con un tipo del cero por ciento el denominador se anula, así que la deuda se reparte sin más entre el plazo.',
    example: 'Un millón al 12 % a un año da una cuota de 88.848,79: el primer mes 10.000 van a intereses y 78.848,79 a capital.',
    faq: [
      { q: '¿En qué se diferencia de la calculadora de préstamos?', a: 'La de préstamos valora el producto entero: compara cuota francesa con cuota decreciente y admite amortizaciones anticipadas y una comisión de apertura. Esta página calcula la fórmula de la cuota francesa y enseña el cuadro, es decir, a dónde va realmente cada pago.' },
      { q: '¿Por qué la última cuota difiere en unos céntimos?', a: 'Los intereses y el capital se redondean cada mes, así que una serie de cuotas idénticas nunca coincide exactamente con la deuda. La última cuota se lleva lo que queda, y así el cuadro cierra justo en cero.' },
      { q: '¿Por qué al principio casi todo son intereses?', a: 'Los intereses se calculan sobre el saldo pendiente, y al principio ese saldo está en su máximo. A medida que baja, la misma cuota amortiza cada vez más capital.' },
      { q: '¿Qué ocurre con un tipo del cero por ciento?', a: 'La fórmula deja de aplicarse: su denominador se hace cero. En ese caso la deuda se divide a partes iguales entre el plazo y no hay intereses.' },
    ],
  },
  'currency-exchange-fee': {
    longDescription: 'El tipo de cambio se introduce a mano en lugar de tomarse de un mercado en directo: las cotizaciones del momento son cosa del conversor de divisas, mientras que esta calculadora responde a otra pregunta, la de cuánto cuesta el cambio en sí. Precisamente por eso una casa que anuncia «sin comisión» sobre un diferencial amplio puede compararse honestamente con otra que cobra un porcentaje. El diferencial y la comisión se aplican en pasos distintos y por tanto no se suman: el diferencial empeora el tipo, y la comisión se toma después sobre el importe calculado con ese tipo empeorado, así que juntarlos en un solo porcentaje exageraría la pérdida.',
    howToUse: [
      'Elige si vas a vender o a comprar la divisa.',
      'Introduce el importe y el tipo que te ofrecen.',
      'Introduce el diferencial: cuánto se aleja ese tipo del de mercado.',
      'Añade la comisión porcentual y el cargo fijo si los hay.',
    ],
    howItWorks: 'El diferencial desplaza el tipo: hacia abajo al vender y hacia arriba al comprar. La comisión se calcula después sobre el importe al tipo desplazado, y el cargo fijo se descuenta al final. El coste total es la distancia respecto al tipo de referencia oficial del que parte el banco o la casa de cambio.',
    example: 'Vender 1000 a 92,5 con un 0,5 % de diferencial y un 1,5 % de comisión devuelve 90.656,94: una pérdida del 1,99 %.',
    faq: [
      { q: '¿Por qué hay que escribir el tipo a mano?', a: 'Porque la pregunta no es «cuánto vale la divisa» sino «cuánto se queda la casa de cambio». Las cotizaciones en directo son cosa del conversor; aquí se comparan las condiciones de un cambio concreto.' },
      { q: '¿Por qué el diferencial y la comisión no se suman?', a: 'Se aplican en pasos distintos: el diferencial empeora el tipo y la comisión sale del importe ya calculado con ese tipo. Meterlos en un único porcentaje daría una pérdida mayor que la real.' },
      { q: '¿Qué es el diferencial, dicho en pocas palabras?', a: 'La distancia entre el tipo de la casa de cambio y el tipo de referencia oficial que publica el banco central. Una casa sin comisión pero con un 2 % de diferencial sale más cara que otra que cobra un 1 % sobre un tipo honesto.' },
      { q: '¿Qué indica el porcentaje de pérdida?', a: 'Qué parte del importe se lleva el cambio en total: diferencial, porcentaje y cargo juntos. Es la única cifra que permite comparar casas de cambio entre sí.' },
      { q: '¿Incluye la comisión del banco emisor?', a: 'No, solo las condiciones del cambio en sí. Si el banco cobra aparte por la transferencia, súmalo al cargo fijo.' },
    ],
  },
  'cac': {
    longDescription: 'El coste de adquisición divide la inversión en marketing y ventas entre los clientes que esa inversión ha traído. Por sí sola la cifra dice poco; junto al ingreso que deja un cliente muestra si captar sale a cuenta o no. La relación entre ambos es la que decide, no el coste en bruto: un CAC alto es sostenible si el cliente vale mucho más, y uno bajo puede arruinar un negocio cuyos clientes se van al segundo mes.',
    howToUse: [
      'Introduce la inversión en marketing y ventas del periodo.',
      'Introduce cuántos clientes ha traído.',
      'Añade el ingreso medio por cliente para obtener la relación.',
    ],
    howItWorks: 'CAC = inversión ÷ clientes conseguidos. La relación divide el ingreso medio por cliente entre ese coste.',
    example: 'Invertir 100.000 para conseguir 50 clientes da un CAC de 2.000.',
    faq: [
      { q: '¿Qué costes entran en la inversión?', a: 'Todo lo gastado en conseguir clientes: publicidad, sueldos de ventas, honorarios de agencia, herramientas. Quedan fuera los costes de atender a los clientes que ya tienes.' },
      { q: '¿Qué relación se considera sana?', a: 'Una referencia habitual es tres a uno o mejor. Por debajo de uno a uno, cada cliente nuevo se capta con pérdidas.' },
      { q: '¿Por qué los clientes deben ser un número entero?', a: 'No se puede captar parte de un cliente; un valor con decimales indica que el periodo o los datos de origen están mal.' },
      { q: '¿Sobre qué periodo hay que medirlo?', a: 'El mismo que cubre la inversión. Mezclar un mes de gasto con un trimestre de clientes embellece la cifra.' },
    ],
  },
  'percent-calculator': {
    longDescription: 'Reúne en una sola página los cinco cálculos con porcentajes que aparecen a diario: el porcentaje de un número, qué porcentaje representa una cantidad de otra, añadir un porcentaje, restarlo y la variación entre dos valores. El modo se elige de forma explícita porque son operaciones distintas y confundirlas es el error más común: un aumento del 20 % y un descuento del 20 % no se cancelan, y volver del precio final al inicial no se hace restando el mismo porcentaje.',
    howToUse: [
      'Elige el modo de cálculo.',
      'Introduce los valores A y B.',
      'Lee el resultado y las cifras auxiliares.',
    ],
    howItWorks: 'Cada modo aplica su fórmula a los dos valores introducidos: A % de B es B · A / 100; la variación entre A y B es (B − A) / A · 100; añadir o restar un porcentaje multiplica por (1 ± A/100).',
    example: 'El 15 % de 200 son 30, y pasar de 80 a 100 es una variación del 25 %.',
    faq: [
      { q: '¿Cómo se calcula el porcentaje de un número?', a: 'Se multiplica el número por el porcentaje y se divide entre 100. El 15 % de 200 es 200 × 15 / 100, es decir, 30. En la calculadora basta con elegir ese modo, escribir la base y el porcentaje, y el resultado aparece al instante.' },
      { q: '¿Cómo se calcula un aumento porcentual?', a: 'Se resta el valor antiguo del nuevo, se divide la diferencia entre el antiguo y se multiplica por 100. Si un precio sube de 80 a 100, el aumento son 20 sobre 80, es decir, un 25 %. Lo que se mide es el crecimiento respecto al valor de partida.' },
      { q: '¿Por qué dos descuentos no se suman sin más?', a: 'Los descuentos encadenados se aplican uno tras otro. Si un artículo de 100 tiene un 20 % de descuento, queda en 80. Un segundo descuento del 10 % se calcula sobre 80, no sobre 100, así que el precio final es 72: el descuento total es del 28 %, no del 30 %.' },
      { q: '¿Cómo se recupera el valor original tras un cambio porcentual?', a: 'Con el porcentaje inverso. Si tras un aumento del 20 % el valor es 120, se divide 120 entre 1,2 y se obtiene 100. Si tras un descuento del 20 % el valor es 80, se divide entre 0,8. La clave está en saber si el porcentaje se sumó o se restó.' },
      { q: '¿Qué diferencia hay entre por ciento y punto porcentual?', a: 'El por ciento describe un cambio relativo; el punto porcentual, la diferencia simple entre dos porcentajes. Pasar del 10 % al 12 % es un aumento de 2 puntos porcentuales, pero respecto al 10 % anterior el aumento es del 20 %. Las dos cifras son correctas y responden a preguntas distintas.' },
    ],
  },
  'convert-temperature': {
    longDescription: 'Convierte temperaturas entre grados Celsius, Fahrenheit, kelvin y Rankine. Las escalas de temperatura están desplazadas unas respecto de otras y no son simples múltiplos, y por eso convertir solo multiplicando da una respuesta equivocada. La conversión pasa siempre por el kelvin: cada escala aporta un factor y un desplazamiento, de modo que los cuatro sentidos se resuelven con la misma regla en lugar de con cuatro fórmulas sueltas.',
    howToUse: [
      'Introduce la temperatura.',
      'Elige la escala de origen.',
      'Elige la escala de destino.',
    ],
    howItWorks: 'Toda escala se convierte a través del kelvin con un factor y un desplazamiento: K = °C + 273,15 y K = (°F + 459,67) · 5/9. Desde el kelvin se vuelve a la escala de destino con la operación inversa.',
    example: '0 °C son 32 °F, y 100 °C son 212 °F.',
    faq: [
      { q: '¿Por qué no basta un solo factor para convertir temperaturas?', a: 'Las escalas Celsius y Fahrenheit empiezan en puntos distintos, así que la conversión necesita un factor y un desplazamiento. Solo el kelvin y el Rankine comparten el cero absoluto.' },
      { q: '¿Dónde coinciden Celsius y Fahrenheit?', a: 'En −40. Es la única temperatura en la que ambas escalas dan el mismo número.' },
      { q: '¿Qué es el grado Rankine?', a: 'Una escala absoluta con grados del tamaño del Fahrenheit: 0 °Ra es el cero absoluto y 491,67 °Ra es el punto de congelación del agua.' },
      { q: '¿Se pueden introducir temperaturas por debajo del cero absoluto?', a: 'El conversor las calcula, pero no tienen sentido físico: el cero absoluto son 0 K, −273,15 °C o −459,67 °F.' },
    ],
  },
  'ohms-law': {
    longDescription: 'Resuelve la ley de Ohm en la dirección que haga falta: con dos de las tres magnitudes —tensión, corriente y resistencia— sale la tercera, y con ella la potencia disipada. El divisor del modo elegido se comprueba antes que nada, porque dividir entre una corriente nula o una resistencia nula devolvería un infinito disfrazado de respuesta. La potencia se calcula al final, cuando ya se conoce la magnitud que faltaba, de modo que coincide en los tres modos.',
    howToUse: [
      'Elige qué par de valores conoces.',
      'Introduce esos dos valores.',
      'Lee la magnitud que faltaba y la potencia.',
    ],
    howItWorks: 'U = I × R, de donde I = U ÷ R y R = U ÷ I; la potencia es P = U × I.',
    example: '12 V sobre una carga que consume 2 A significan 6 Ω de resistencia y 24 W de potencia.',
    faq: [
      { q: '¿Por qué se rechaza una corriente de cero?', a: 'La resistencia es la tensión dividida entre la corriente. Si no circula corriente, la división no tiene valor y no puede concluirse nada sobre la resistencia.' },
      { q: '¿Se admite una tensión de cero?', a: 'Sí. Un circuito sin tensión no conduce corriente ni disipa potencia: es un estado real, no un error de entrada.' },
      { q: '¿Sirve para corriente alterna?', a: 'Solo para cargas puramente resistivas. Ni la reactancia ni el factor de potencia están modelados aquí.' },
      { q: '¿Qué fórmula de potencia se usa?', a: 'P = U × I, aplicada después de hallar la magnitud que faltaba, de modo que concuerda con los tres modos.' },
    ],
  },
  'ipv4-subnet': {
    longDescription: 'Convierte una dirección IPv4 y un prefijo en todo lo que hace falta para configurar una red: dirección de red, máscara, dirección de difusión, primer y último host, número de hosts utilizables, máscara comodín y la notación CIDR. No hace falta introducir la dirección de red: vale cualquier dirección de la red, porque la calculadora descarta los bits bajos según la máscara. Los casos límite se tratan como corresponde y no como excepciones incómodas: una /31 son dos direcciones y ambas se usan, y una /32 designa un único host.',
    howToUse: [
      'Introduce cualquier dirección de la red: no hace falta que sea la de red.',
      'Introduce la longitud del prefijo: el número que va tras la barra en notación CIDR.',
      'Lee el primer y el último host: ese es el rango disponible para asignar.',
      'La máscara comodín resulta útil en las listas de acceso de equipos Cisco.',
    ],
    howItWorks: 'La dirección se convierte en un número de 32 bits y la máscara, en una serie de unos marcada por el prefijo. La dirección de red es el AND bit a bit de ambas; la de difusión es la de red con unos en todos los bits libres.',
    example: 'La dirección 192.168.1.10 con prefijo /24 pertenece a 192.168.1.0 con máscara 255.255.255.0 y 254 hosts.',
    faq: [
      { q: '¿Hay que introducir la dirección de red?', a: 'No, vale cualquier dirección de la red. La calculadora descarta los bits bajos según la máscara y encuentra por sí sola la dirección de red.' },
      { q: '¿Por qué una /20 da 255.255.240.0?', a: 'Porque el límite de una subred no tiene por qué coincidir con el de un octeto. Veinte bits de máscara terminan a mitad del tercer octeto, y eso da 240.' },
      { q: '¿Cuántos hosts caben en una /31?', a: 'Dos, y los dos se usan. Es un enlace punto a punto según el RFC 3021: no se reserva ni dirección de red ni de difusión.' },
      { q: '¿Y en una /32?', a: 'Una sola dirección. Ese prefijo designa un host concreto, por ejemplo una ruta hacia un único servidor.' },
      { q: '¿Admite IPv6?', a: 'No, solo IPv4. El direccionamiento IPv6 funciona de otra manera, y mezclar ambos en un mismo cálculo confundiría dos modelos distintos.' },
    ],
  },
  'gpa': {
    longDescription: 'Calcula la media de una lista de notas en la que cada una puede llevar su propio peso: créditos, horas o cualquier otra medida de cuánto cuenta la asignatura. La media simple aparece al lado, de modo que la distancia entre ambas revela de inmediato si son las asignaturas con más peso las que tiran del resultado hacia abajo. No se impone ninguna escala: se admite cualquier nota no negativa, así que valen los sistemas sobre cinco, sobre diez y sobre cien. La calculadora no convierte entre escalas, porque las tablas de equivalencia cambian según el centro y elegir una en silencio equivaldría a presentar la regla de otro como universal.',
    howToUse: [
      'Escribe una nota por línea.',
      'Añade el peso de la asignatura tras un espacio: créditos u horas.',
      'Si los pesos no importan, deja la nota sola: el peso vale uno por defecto.',
      'Compara la media ponderada con la simple para ver el efecto de las asignaturas más pesadas.',
    ],
    howItWorks: 'Cada nota se multiplica por su peso, se suman los productos y se dividen entre la suma de los pesos. La media simple usa las mismas notas sin pesos.',
    example: 'Notas de 5, 4 y 3 con créditos 3, 4 y 2 dan una media ponderada de 4,1111 frente a una media simple de 4.',
    faq: [
      { q: '¿Qué se usa como peso?', a: 'Créditos, unidades de curso u horas: cualquier medida de cuánto aporta la asignatura. Si no existe tal medida, deja el peso fuera.' },
      { q: '¿Qué escala de notas se admite?', a: 'Cualquiera no negativa: sobre cinco, sobre diez, sobre cien o sobre cuatro. El cálculo no convierte entre escalas, así que introdúcelas todas en la misma.' },
      { q: '¿Por qué se muestra también la media simple?', a: 'Para que se vea el efecto de los pesos. Si la ponderada es bastante más baja, las notas peores han caído en las asignaturas con más créditos.' },
      { q: '¿Qué pasa si un peso es cero?', a: 'Esa línea se rechaza: una asignatura con peso cero no puede influir en el resultado, y casi siempre es una errata y no una intención.' },
      { q: '¿Las notas pueden llevar decimales?', a: 'Sí, 4,5 por ejemplo: la coma decimal se lee como separador decimal y no como separador entre valores.' },
    ],
  },
  'fuel-consumption': {
    longDescription: 'Toma los litros que realmente has repostado y los kilómetros que realmente has recorrido, y los convierte en consumo. La cifra inversa en kilómetros por litro aparece al lado porque mucha gente la pide, y un tercer modo funciona al revés: con una distancia y un consumo conocido devuelve el combustible necesario. No es un conversor entre litros a los 100 km y millas por galón: aquí se parte de mediciones propias, no de una equivalencia de unidades.',
    howToUse: [
      'Elige qué quieres calcular.',
      'Llena el depósito, conduce y anota los litros y los kilómetros.',
      'Introduce ambos y lee el consumo.',
    ],
    howItWorks: 'litros a los 100 km = litros ÷ kilómetros × 100; el combustible de un viaje es distancia ÷ 100 × consumo.',
    example: '42 litros en 560 km son 42 ÷ 560 × 100 = 7,5 litros a los 100 km.',
    faq: [
      { q: '¿Es un conversor de millas por galón?', a: 'No. Calcula el consumo a partir de los litros y los kilómetros que has medido. Convertir entre l/100 km y mpg es otra tarea, que requiere una conversión inversa.' },
      { q: '¿Por qué mi cifra no coincide con la del ordenador de a bordo?', a: 'El ordenador estima a partir de los tiempos de inyección y se pone a cero cuando le corresponde. Una medición de depósito lleno a depósito lleno es la comparación más fiable.' },
      { q: '¿Conviene medir un depósito o varios?', a: 'Varios es mejor. Las cifras de un solo depósito oscilan con el tráfico y el terreno, y promediar unos cuantos repostajes suaviza esa variación.' },
      { q: '¿Cambia mucho entre ciudad y autopista?', a: 'Bastante. La calculadora usa solo lo que introduces, así que mide el tipo de conducción sobre el que de verdad quieres saber.' },
    ],
  },
  'utility-total': {
    longDescription: 'Convierte una lista de lecturas de contador y tarifas en una única factura mensual. Cada línea es un suministro, el consumo y el precio por unidad, y los dos últimos números se leen como consumo y tarifa mientras que todo lo anterior cuenta como nombre. Los cargos fijos —los que no tienen contador detrás— van en un campo aparte y no en la tabla, porque inventarles una unidad y una tarifa solo haría que la tabla pareciese más ordenada de lo que es. El resultado separa la parte medida de la parte fija, que suele ser donde está la sorpresa.',
    howToUse: [
      'Escribe un suministro por línea: nombre, consumo y tarifa.',
      'Los dos últimos números de la línea son el consumo y el precio por unidad.',
      'Los cargos sin contador van en el campo de cargos fijos.',
      'Compara en el resultado la parte medida con la parte fija.',
    ],
    howItWorks: 'Cada línea cuesta consumo × tarifa. Su suma es la parte medida; añadiendo los cargos fijos sale el total del mes, y multiplicando por doce, el del año.',
    example: 'Luz, agua y gas por 2.023 más 1.200 de cargos fijos suman 3.223 al mes.',
    faq: [
      { q: '¿Qué cuenta como cargo fijo?', a: 'Todo lo que se factura igual cada mes independientemente del consumo: mantenimiento del edificio, recogida de basuras, el portero automático, el alquiler del contador. No tienen consumo ni tarifa, así que no van en la tabla.' },
      { q: '¿En qué unidades va el consumo?', a: 'En aquellas a las que se refiera la tarifa. Si la luz se cobra por kWh, escribe kilovatios hora; si el agua se cobra por metro cúbico, escribe metros cúbicos.' },
      { q: '¿Cómo se introduce un contador de luz con dos tarifas?', a: 'Como dos líneas —punta y valle—, cada una con su consumo y su tarifa. La tabla mostrará cuál de las dos sale más cara.' },
      { q: '¿Por qué la cifra anual es doce veces la del mes?', a: 'Porque es una proyección de este mes, no una previsión. La calefacción y el aire acondicionado hacen que los años reales sean desiguales; la calculadora no presume de conocer tu estación.' },
      { q: '¿Es lo mismo que la calculadora de consumo eléctrico?', a: 'No. Aquella parte de la potencia de un aparato y las horas de uso para estimar el consumo. Esta parte de lecturas que ya tienes y las convierte en dinero.' },
    ],
  },
  'geom-circle': {
    longDescription: 'Resuelve un círculo a partir de lo que casualmente conozcas: radio, diámetro, longitud de la circunferencia o área. Eso importa más de lo que parece: una tubería o un bidón se describen normalmente por su diámetro, un parterre por la longitud de su borde y una pieza en bruto por su área, y cada caso se resuelve de una manera distinta a mano. π se toma con precisión completa y no como 3,14, de modo que la longitud no se desvía ya en la tercera cifra.',
    howToUse: [
      'Elige la unidad de longitud.',
      'Indica qué valor conoces.',
      'Introdúcelo y lee los otros tres.',
    ],
    howItWorks: 'S = πr², C = 2πr y d = 2r; el radio sale de la longitud como r = C ÷ 2π y del área como r = √(S ÷ π).',
    example: 'Un círculo de 3 m de radio tiene un área de 28,274 m² y una circunferencia de 18,85 m.',
    faq: [
      { q: '¿Qué valor de π se usa?', a: 'El valor completo de la máquina, no 3,14. Con un radio de unos pocos metros la diferencia ya se nota en centímetros de circunferencia.' },
      { q: '¿En qué se diferencian radio y diámetro al introducirlos?', a: 'El diámetro es el doble del radio, así que confundirlos multiplica el área por cuatro. Por eso el dato conocido se elige de forma explícita.' },
      { q: '¿Se puede obtener el radio a partir del área?', a: 'Sí: elige ese modo; el radio es la raíz cuadrada del área dividida entre π.' },
      { q: '¿Qué significa aquí la longitud de la circunferencia?', a: 'La longitud de la línea cerrada que rodea el borde del círculo: lo que medirías con una cinta alrededor de una tubería o un bidón.' },
    ],
  },
  'free-fall': {
    longDescription: 'Resuelve una caída por cualquiera de sus extremos: desde la altura, cuánto tarda y a qué velocidad llega al suelo; desde el tiempo, qué distancia recorre. La gravedad es un campo editable porque vale 1,62 en la Luna y 3,72 en Marte mientras la fórmula sigue siendo la misma. La resistencia del aire no se incluye, y conviene decirlo claro: para una piedra desde diez metros la diferencia es pequeña, para una hoja de papel el cálculo sencillamente no vale, y un paracaidista alcanza la velocidad límite y deja de acelerar.',
    howToUse: [
      'Elige qué conoces: la altura o el tiempo de caída.',
      'Deja la gravedad terrestre en 9,80665, o pon 1,62 para la Luna y 3,72 para Marte.',
      'La velocidad de impacto es la respuesta principal en ambos modos: el modo cambia lo que se conoce, no lo que se pregunta.',
      'Ten presente el aire: con objetos ligeros o que revolotean, esto sobreestima la velocidad.',
    ],
    howItWorks: 'h = g·t²/2, de donde t = √(2h/g), y la velocidad de impacto es v = g·t.',
    example: 'Una caída desde veinte metros dura 2,02 segundos y llega al suelo a 19,8 m/s, es decir, a 71 km/h.',
    faq: [
      { q: '¿La velocidad de caída depende de la masa?', a: 'Sin aire, no: una pluma y una piedra caen igual, y la masa no aparece en la fórmula. Con aire la diferencia es enorme, pero eso ya no es caída libre.' },
      { q: '¿Por qué la altura crece con el cuadrado del tiempo?', a: 'Porque la velocidad aumenta de forma uniforme y la distancia recorrida es el área bajo la gráfica de la velocidad. En dos segundos un cuerpo cae cuatro veces más que en uno.' },
      { q: '¿Sirve para un salto en paracaídas?', a: 'Solo para los primeros segundos. Después la resistencia del aire equilibra el peso, la velocidad se estabiliza cerca de los 55 m/s y deja de crecer, mientras que el cálculo seguiría aumentándola.' },
      { q: '¿De dónde sale el 9,80665?', a: 'Es el valor normal convencional que se usa para los cálculos. La gravedad real va de 9,78 en el ecuador a 9,83 en los polos y disminuye ligeramente con la altitud.' },
    ],
  },
  'ph-poh': {
    longDescription: 'Convierte una concentración de iones hidrógeno en pH y al revés, indicando el pOH y si el medio es ácido, neutro o básico. El pH y el pOH suman catorce no siempre, sino a 25 °C: ese es el producto iónico del agua, y a otra temperatura la suma cambia, así que la advertencia está en la página y no en letra pequeña. El logaritmo solo está definido para una concentración positiva, de modo que el cero se rechaza en lugar de convertirse en infinito.',
    howToUse: [
      'Elige si conoces la concentración o el pH.',
      'Introduce el valor.',
      'Lee la otra magnitud, el pOH y el tipo de medio.',
    ],
    howItWorks: 'pH = −log₁₀[H⁺], el logaritmo decimal de la concentración con el signo cambiado. A la inversa, [H⁺] = 10^−pH. A 25 °C el producto iónico del agua es 10⁻¹⁴, y por eso pH + pOH = 14.',
    example: 'Una concentración de iones hidrógeno de 10⁻³ mol/l corresponde a pH 3 y pOH 11: un medio ácido.',
    faq: [
      { q: '¿El pH y el pOH suman siempre 14?', a: 'No, solo a 25 °C. La suma es igual al exponente del producto iónico del agua, que depende de la temperatura: a 60 °C ronda ya los 13,0.' },
      { q: '¿Qué significa un pH de 7?', a: 'Que las concentraciones de iones hidrógeno e hidróxido son iguales: un medio neutro. También esto vale a 25 °C.' },
      { q: '¿Por qué no se admite una concentración de cero?', a: 'El cero no tiene logaritmo. Una disolución sin ningún ion hidrógeno es físicamente imposible, así que se avisa del error en lugar de devolver infinito.' },
      { q: '¿El pH puede salirse del intervalo de 0 a 14?', a: 'Formalmente sí, en disoluciones muy concentradas, pero ahí la escala deja de ser significativa y las aproximaciones habituales fallan. El intervalo está limitado aquí a propósito.' },
    ],
  },
  'arithmetic-progression': {
    longDescription: 'Halla cualquier término de una progresión y la suma de toda la serie a partir de tres valores: el primer término, la diferencia y el número de término. La suma usa la forma cerrada Sₙ = n(a₁+aₙ)/2 y no un bucle que vaya sumando términos: con un número de término grande, el bucle acumularía error de redondeo mientras que la fórmula responde de una sola vez. La diferencia puede ser negativa, en cuyo caso la serie decrece y la suma sigue saliendo correcta. La tabla muestra los diez primeros términos para que se vea el patrón, pero el término n-ésimo y la suma se refieren a la serie completa y no al trozo que aparece en pantalla.',
    howToUse: [
      'Introduce el primer término de la progresión.',
      'Introduce la diferencia: cuánto suma cada término al anterior.',
      'Introduce el número del término que necesitas.',
      'Para una serie decreciente usa una diferencia negativa.',
    ],
    howItWorks: 'El término n-ésimo es aₙ = a₁ + (n−1)d. La suma de los n primeros términos es Sₙ = n(a₁ + aₙ)/2: el número de términos por la media del primero y el último.',
    example: 'Con a₁ = 3 y d = 5, el décimo término es 48 y la suma de los diez primeros es 255.',
    faq: [
      { q: '¿En qué se diferencia una progresión aritmética de una geométrica?', a: 'La aritmética SUMA el mismo número a cada término; la geométrica MULTIPLICA cada término por el mismo número. Por eso una serie aritmética crece en línea recta y una geométrica crece cada vez más deprisa.' },
      { q: '¿La diferencia puede ser negativa?', a: 'Sí, y es el caso decreciente de toda la vida. Con a₁ = 100 y d = −7, el término decimoquinto es 2 y la suma de quince términos es 765.' },
      { q: '¿Por qué la suma se calcula con una fórmula y no sumando?', a: 'La forma cerrada Sₙ = n(a₁+aₙ)/2 responde en un solo paso y con la misma precisión que el propio término n-ésimo. Sumar cientos de términos en un bucle acumularía un error de redondeo que no tiene por qué producirse.' },
      { q: '¿Qué ocurre cuando la diferencia es cero?', a: 'La serie se vuelve constante: todos los términos valen lo mismo que el primero, y la suma es el primer término por el número de términos. Las fórmulas siguen funcionando sin casos especiales.' },
      { q: '¿Por qué la tabla muestra solo diez términos?', a: 'El patrón ya se ve con los tres primeros, y cientos de filas no añadirían nada. El término n-ésimo y la suma se calculan igualmente para la serie completa y no para el trozo mostrado.' },
    ],
  },
  'bmi-calculator': {
    longDescription: 'Calcula el índice de masa corporal a partir de la estatura y el peso, y sitúa el resultado en la categoría general que le corresponde. El IMC es una herramienta de cribado rápido, no un diagnóstico: usa solo dos números y no distingue músculo de grasa, ni tiene en cuenta la edad, el sexo ni dónde se acumula el peso. Por eso la calculadora muestra también el intervalo de peso que correspondería a un IMC saludable con tu estatura, que suele ser la cifra más útil de la página.',
    howToUse: [
      'Introduce la estatura en centímetros.',
      'Introduce el peso en kilogramos.',
      'Consulta el IMC y la categoría en la que cae.',
    ],
    howItWorks: 'El IMC es el peso en kilogramos dividido entre el cuadrado de la estatura en metros. Una estatura de 175 cm equivale a 1,75 m, así que el divisor es 1,75², es decir, 3,0625.',
    example: 'Una persona de 175 cm y 70 kg tiene un IMC cercano a 22,9.',
    faq: [
      { q: '¿Cuál es el intervalo saludable de IMC?', a: 'En la mayoría de los adultos se considera saludable un IMC entre 18,5 y 24,9. Por debajo de 18,5 puede indicar bajo peso, y a partir de 25 se entra en sobrepeso u obesidad. Son intervalos generales de cribado y no sustituyen una valoración médica individual.' },
      { q: '¿El IMC vale para deportistas?', a: 'Puede inducir a error, porque no distingue el músculo de la grasa. Un deportista de fuerza puede tener un IMC alto por masa magra y no por exceso de grasa. En ese caso, la composición corporal, el perímetro de cintura y el contexto deportivo informan mejor que el IMC solo.' },
      { q: '¿Por qué el IMC puede confundir?', a: 'Porque usa únicamente la estatura y el peso. Ignora la edad, el sexo, la masa muscular, la constitución ósea y el lugar donde se acumula la grasa. Dos personas con el mismo IMC pueden tener perfiles de salud muy distintos, y por eso conviene usarlo como cribado rápido y no como diagnóstico.' },
      { q: '¿Sirven los intervalos de adultos para los niños?', a: 'No. En niños y adolescentes se usan percentiles de IMC por edad y sexo, no los cortes de adultos. El crecimiento cambia deprisa, así que las categorías de adulto los clasificarían mal. Para valorar el peso de un niño, usa las tablas pediátricas o consulta con un profesional sanitario.' },
      { q: '¿Qué hago si mi IMC sale alto?', a: 'Primero, comprueba que la estatura y el peso están bien introducidos. Después, ten en cuenta el perímetro de cintura, la actividad, la alimentación, el sueño y los antecedentes médicos. Un IMC alto es un motivo para mirar más a fondo, no para alarmarse. Si se mantiene alto o va acompañado de otros síntomas, coméntalo con tu médico o con un dietista-nutricionista.' },
    ],
  },
  'tile-calculator': {
    longDescription: 'Calcula cuántos azulejos, cuántos paquetes y cuánto adhesivo hacen falta para alicatar una superficie. Se puede partir de las medidas de la estancia o directamente del área, porque en la obra unas veces se tiene el plano y otras la superficie ya medida. El margen de reserva se indica aparte y no viene impuesto: los cortes de una estancia rectangular sencilla gastan poco, y un suelo con rincones o colocado en diagonal gasta bastante más. El resultado incluye los paquetes redondeados hacia arriba, porque los azulejos se venden por paquete y comprar cuatro paquetes y medio no es una opción.',
    howToUse: [
      'Elige si vas a partir de las medidas de la estancia o del área.',
      'Introduce el tamaño del azulejo y la superficie que cubre un paquete.',
      'Añade el margen de reserva y, si quieres, el precio del paquete.',
      'Consulta las piezas, los paquetes y el adhesivo estimado.',
    ],
    howItWorks: 'El área con reserva se divide entre el área de un azulejo para obtener las piezas, y entre la superficie de un paquete para obtener los paquetes, que se redondean siempre hacia arriba. El adhesivo se estima multiplicando el área por el consumo por metro cuadrado que indique el fabricante.',
    example: 'Una estancia de 4 por 3 metros con azulejos de 30 por 30 cm y un 10 % de reserva necesita unas 147 piezas.',
    faq: [
      { q: '¿Cuánto margen de reserva conviene dejar?', a: 'Depende del trazado. En una estancia rectangular y sencilla suele bastar un 5 o un 10 %; con rincones, columnas o colocación en diagonal, los cortes gastan más y el 15 % es más realista. La calculadora no impone ningún valor porque solo tú ves la superficie.' },
      { q: '¿Por qué los paquetes se redondean hacia arriba?', a: 'Porque los azulejos se venden por paquete cerrado. Si el cálculo da 4,2 paquetes, hacen falta 5: los 0,8 restantes no se pueden comprar por separado.' },
      { q: '¿El adhesivo estimado es fiable?', a: 'Es una estimación a partir del consumo que declara el fabricante. El gasto real depende del tamaño del diente de la llana, de la planitud del soporte y del formato del azulejo; en un soporte irregular puede subir de forma notable.' },
      { q: '¿Se tiene en cuenta la junta entre azulejos?', a: 'No de forma explícita. Con juntas de 2 o 3 milímetros la diferencia queda dentro del margen de reserva; con juntas anchas conviene añadir el ancho de la junta a la medida del azulejo.' },
      { q: '¿Puedo usarla para pared y para suelo?', a: 'Sí, el cálculo es el mismo: lo que cambia es la superficie que introduces. Para una pared, resta los huecos de puertas y ventanas antes de escribir el área.' },
    ],
  },
  'age-calculator': {
    longDescription: 'Calcula la edad exacta entre dos fechas en años, meses y días, no solo en años cumplidos. La cuenta sigue el calendario y no una media de días: los meses tienen distinta duración y los años bisiestos añaden un día, así que restar y dividir entre 365 da un resultado que se desvía. La fecha de referencia es hoy por defecto, pero puede cambiarse por cualquier otra, que es lo que se necesita para saber qué edad se tendrá en una fecha futura o qué edad se tenía en una pasada.',
    howToUse: [
      'Introduce la fecha de nacimiento.',
      'Cambia la fecha de referencia si no quieres calcular la edad de hoy.',
      'Consulta la edad exacta, los días vividos y los días que faltan para el próximo cumpleaños.',
    ],
    howItWorks: 'Los años se cuentan mientras la fecha de nacimiento quepa entera en el intervalo; después se cuentan los meses completos y, por último, los días que sobran. Los años bisiestos se tienen en cuenta al pasar de febrero.',
    example: 'De una fecha de nacimiento del 31 de enero de 2000 al 1 de marzo de 2026 hay 26 años, 1 mes y 1 día.',
    faq: [
      { q: '¿Por qué no basta con restar los años?', a: 'Porque la edad solo aumenta cuando ya ha pasado el cumpleaños. De 2000 a 2026 hay 26 años en el calendario, pero si el cumpleaños aún no ha llegado, la edad cumplida son 25.' },
      { q: '¿Cómo se cuentan los años bisiestos?', a: 'Se cuentan solos: el cálculo recorre fechas reales del calendario y no una media de 365,25 días, así que un 29 de febrero se trata como el día que es.' },
      { q: '¿Qué edad tiene quien nació un 29 de febrero?', a: 'En los años no bisiestos su cumpleaños se sitúa en el 1 de marzo a efectos de la cuenta: es la convención más habitual, y evita que se quede sin cumpleaños tres años de cada cuatro.' },
      { q: '¿Puedo poner una fecha de referencia en el futuro?', a: 'Sí. Es justo para eso: saber qué edad tendrás en una fecha concreta, por ejemplo el día de un examen o de un trámite.' },
      { q: '¿Qué son los días vividos en total?', a: 'El número de días del calendario entre ambas fechas, bisiestos incluidos. Es una cifra distinta de la edad en años, meses y días, y suele sorprender.' },
    ],
  },
};
