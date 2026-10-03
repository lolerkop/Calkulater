import type{CalculatorLocalization}from '../lib/platform/types';
const phrases:Record<string,readonly string[]>={
  "Введите конечные числа во все активные поля": [
    "Enter finite numbers in every active field",
    "Введіть скінченні числа",
    "Gib endliche Zahlen in alle aktiven Felder ein",
    "Introduce números finitos en todos los campos activos"
  ],
  "Выберите поддерживаемый режим расчёта": [
    "Choose a supported calculation mode",
    "Оберіть підтримуваний режим розрахунку",
    "Wähle einen unterstützten Rechenmodus",
    "Elige un modo de cálculo válido"
  ],
  "Результат выходит за числовой диапазон; измените данные": [
    "The result is outside the numeric range; change the inputs",
    "Результат поза числовим діапазоном; змініть дані",
    "Das Ergebnis liegt außerhalb des Zahlenbereichs; ändere die Eingaben",
    "El resultado está fuera del rango numérico; cambia los datos"
  ],
  "Количество окон, дверей и слоёв должно быть целым в допустимом диапазоне": [
    "Window, door and coat counts must be whole numbers in range",
    "Кількості вікон, дверей і шарів мають бути цілими в допустимих межах",
    "Fenster, Türen und Anstriche müssen ganze Anzahlen im zulässigen Bereich sein",
    "Ventanas, puertas y capas deben ser cantidades enteras dentro del rango"
  ],
  "Количество должно быть целым в допустимом диапазоне": [
    "Enter a whole count within the allowed range",
    "Введіть цілу кількість у допустимих межах",
    "Gib eine ganze Anzahl im zulässigen Bereich ein",
    "Introduce una cantidad entera dentro del intervalo permitido"
  ],
  "Введите положительные размеры и неотрицательные запас, расход и цену": [
    "Enter positive dimensions and non-negative reserve, rate and price",
    "Введіть додатні розміри й невід’ємні запас, витрату та ціну",
    "Gib positive Maße und nicht negative Reserve, Verbrauch und Preis ein",
    "Introduce dimensiones positivas y reserva, consumo y precio no negativos"
  ],
  "Введите положительные размеры и неотрицательные раппорт и цену": [
    "Enter positive dimensions and non-negative repeat and price",
    "Введіть додатні розміри й невід’ємні рапорт та ціну",
    "Gib positive Maße und nicht negativen Rapport und Preis ein",
    "Introduce dimensiones positivas y repetición y precio no negativos"
  ],
  "Из рулона не получается ни одного полного полотна": [
    "The roll yields no full strip",
    "Із рулону не виходить жодного повного полотна",
    "Die Rolle ergibt keine vollständige Bahn",
    "El rollo no permite ninguna tira completa"
  ],
  "Введите положительные размеры и неотрицательные запас и цены": [
    "Enter positive dimensions and non-negative reserve and prices",
    "Введіть додатні розміри й невід’ємні запас та ціни",
    "Gib positive Maße und nicht negative Reserve und Preise ein",
    "Introduce dimensiones positivas y reserva y precios no negativos"
  ],
  "Расход, запас и цена должны быть неотрицательными": [
    "Consumption, reserve and price must be non-negative",
    "Витрата, запас і ціна мають бути невід’ємними",
    "Verbrauch, Reserve und Preis dürfen nicht negativ sein",
    "Consumo, reserva y precio deben ser no negativos"
  ],
  "Введите положительные размеры, расход и объём банки; запас и цена неотрицательные": [
    "Enter positive dimensions, consumption and can volume; reserve and price must be non-negative",
    "Введіть додатні розміри, витрату й об’єм банки; запас і ціна невід’ємні",
    "Gib positive Maße, Verbrauch und Gebindevolumen ein; Reserve und Preis dürfen nicht negativ sein",
    "Introduce dimensiones, consumo y volumen de envase positivos; reserva y precio no negativos"
  ],
  "Площадь окрашивания после вычета проёмов должна быть положительной": [
    "Paintable area after subtracting openings must be positive",
    "Площа фарбування після віднімання прорізів має бути додатною",
    "Die Anstrichfläche nach Abzug der Öffnungen muss positiv sein",
    "El área a pintar tras descontar huecos debe ser positiva"
  ],
  "Цена камня должна быть неотрицательной": [
    "Unit price must be non-negative",
    "Ціна каменя має бути невід’ємною",
    "Der Steinpreis darf nicht negativ sein",
    "El precio por pieza debe ser no negativo"
  ],
  "₽": [
    "RUB",
    "RUB",
    "RUB",
    "RUB"
  ]
};
// Each calculator receives its actual error vocabulary. Unrelated errors from
// the other five tools need not be serialized into every page's browser props.
const errorsById:Record<string,readonly string[]>={
  'tile-calculator':['Выберите поддерживаемый режим расчёта','Введите положительные размеры и неотрицательные запас, расход и цену'],
  'wallpaper-calculator':['Количество окон, дверей и слоёв должно быть целым в допустимом диапазоне','Количество должно быть целым в допустимом диапазоне','Введите положительные размеры и неотрицательные раппорт и цену','Из рулона не получается ни одного полного полотна'],
  'paint-calculator':['Выберите поддерживаемый режим расчёта','Количество окон, дверей и слоёв должно быть целым в допустимом диапазоне','Количество должно быть целым в допустимом диапазоне','Введите положительные размеры, расход и объём банки; запас и цена неотрицательные','Площадь окрашивания после вычета проёмов должна быть положительной'],
  'laminate-calculator':['Введите положительные размеры и неотрицательные запас и цены'],
  'screed-calculator':['Выберите поддерживаемый режим расчёта','Расход, запас и цена должны быть неотрицательными'],
  'brick-calculator':['Выберите поддерживаемый режим расчёта','Цена камня должна быть неотрицательной'],
};
export function withBuildingWave17Phrases(base:CalculatorLocalization,id:string):CalculatorLocalization {
  const wanted=new Set(['Введите конечные числа во все активные поля','Результат выходит за числовой диапазон; измените данные','₽',...(errorsById[id]??[])]);
  const entries=Object.entries(phrases).filter(([key])=>wanted.has(key));
  return Object.fromEntries((['en','uk','de','es'] as const).map((locale,i)=>[
    locale,
    {...base[locale],values:{...base[locale]?.values,...Object.fromEntries(entries.map(([key,value])=>[key,value[i]]))}},
  ]));
}
