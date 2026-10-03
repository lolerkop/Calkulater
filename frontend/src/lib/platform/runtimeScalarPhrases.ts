import type { TranslatedLocale } from './types';
// Only identical phrase pairs occurring at least3times in reviewed runtime bundles.
const phrases:Readonly<Record<TranslatedLocale,readonly(readonly[string,string])[]>>={
  "en": [
    [
      "Введите корректные числовые данные",
      "Enter valid finite numbers"
    ],
    [
      "Введите корректные числовые данные",
      "Enter valid numeric values"
    ],
    [
      "Доход должен быть больше нуля",
      "Income must be greater than zero"
    ],
    [
      "Значение",
      "Value"
    ],
    [
      "Количество должно быть целым в допустимом диапазоне",
      "The count must be a whole number within the supported range"
    ],
    [
      "Неизвестный режим расчёта",
      "Unknown calculation mode"
    ],
    [
      "Проверьте данные",
      "Check the values"
    ],
    [
      "Результат вне допустимого диапазона",
      "Result is outside the supported numeric range"
    ],
    [
      "Результат вне допустимого диапазона",
      "The result is outside the supported numeric range"
    ],
    [
      "Срок должен быть больше нуля",
      "The term must be greater than zero"
    ],
    [
      "Срок должен быть не меньше месяца",
      "The term must be at least one month"
    ],
    [
      "Ставка не может быть отрицательной",
      "The rate cannot be negative"
    ],
    [
      "Сумма должна быть больше нуля",
      "The amount must be greater than zero"
    ],
    [
      "Сумма ряда",
      "Sum of the series"
    ],
    [
      "Членов",
      "Terms"
    ],
    [
      "₽",
      "$"
    ]
  ],
  "uk": [
    [
      "n-й член",
      "n-й член"
    ],
    [
      "Введите корректные числовые данные",
      "Введіть коректні скінченні числа"
    ],
    [
      "Введите корректные числовые данные",
      "Введіть коректні числові дані"
    ],
    [
      "Доход должен быть больше нуля",
      "Дохід має бути більшим за нуль"
    ],
    [
      "Значение",
      "Значення"
    ],
    [
      "Количество должно быть целым в допустимом диапазоне",
      "Кількість має бути цілим числом у підтримуваному діапазоні"
    ],
    [
      "Количество должно быть целым в допустимом диапазоне",
      "Кількість має бути цілою в допустимому діапазоні"
    ],
    [
      "Неизвестный режим расчёта",
      "Невідомий режим розрахунку"
    ],
    [
      "Проверьте данные",
      "Перевірте дані"
    ],
    [
      "Результат вне допустимого диапазона",
      "Результат поза допустимим числовим діапазоном"
    ],
    [
      "Результат вне допустимого диапазона",
      "Результат поза підтримуваним числовим діапазоном"
    ],
    [
      "Срок должен быть больше нуля",
      "Строк має бути більшим за нуль"
    ],
    [
      "Ставка не может быть отрицательной",
      "Ставка не може бути від’ємною"
    ],
    [
      "Сумма должна быть больше нуля",
      "Сума має бути більшою за нуль"
    ],
    [
      "Сумма ряда",
      "Сума ряду"
    ],
    [
      "Членов",
      "Членів"
    ],
    [
      "₽",
      "₴"
    ]
  ],
  "de": [
    [
      "n-й член",
      "n-tes Glied"
    ],
    [
      "Введите корректные числовые данные",
      "Gib gültige Zahlen ein"
    ],
    [
      "Введите корректные числовые данные",
      "Gib gültige endliche Zahlen ein"
    ],
    [
      "Доход должен быть больше нуля",
      "Das Einkommen muss größer als null sein"
    ],
    [
      "Значение",
      "Wert"
    ],
    [
      "Количество должно быть целым в допустимом диапазоне",
      "Die Anzahl muss eine ganze Zahl im unterstützten Bereich sein"
    ],
    [
      "Количество должно быть целым в допустимом диапазоне",
      "Die Anzahl muss eine ganze Zahl im zulässigen Bereich sein"
    ],
    [
      "Неизвестный режим расчёта",
      "Unbekannter Berechnungsmodus"
    ],
    [
      "Проверьте данные",
      "Prüfe die Werte"
    ],
    [
      "Результат вне допустимого диапазона",
      "Das Ergebnis liegt außerhalb des unterstützten Zahlenbereichs"
    ],
    [
      "Результат вне допустимого диапазона",
      "Das Ergebnis liegt außerhalb des zulässigen Zahlenbereichs"
    ],
    [
      "Срок должен быть не меньше месяца",
      "Die Laufzeit muss mindestens einen Monat betragen"
    ],
    [
      "Ставка не может быть отрицательной",
      "Der Zinssatz kann nicht negativ sein"
    ],
    [
      "Сумма должна быть больше нуля",
      "Der Betrag muss größer als null sein"
    ],
    [
      "Сумма ряда",
      "Summe der Reihe"
    ],
    [
      "Членов",
      "Glieder"
    ],
    [
      "₽",
      "€"
    ]
  ],
  "es": [
    [
      "Введите корректные числовые данные",
      "Introduce números finitos válidos"
    ],
    [
      "Введите корректные числовые данные",
      "Introduce valores numéricos válidos"
    ],
    [
      "Доход должен быть больше нуля",
      "Los ingresos deben ser mayores que cero"
    ],
    [
      "Значение",
      "Valor"
    ],
    [
      "Количество должно быть целым в допустимом диапазоне",
      "El recuento debe ser entero dentro del rango admitido"
    ],
    [
      "Количество должно быть целым в допустимом диапазоне",
      "La cantidad debe ser un entero dentro del rango admitido"
    ],
    [
      "Неизвестный режим расчёта",
      "Modo de cálculo desconocido"
    ],
    [
      "Проверьте данные",
      "Revisa los datos"
    ],
    [
      "Результат вне допустимого диапазона",
      "El resultado está fuera del rango numérico admitido"
    ],
    [
      "Результат вне допустимого диапазона",
      "El resultado queda fuera del rango numérico admitido"
    ],
    [
      "Срок должен быть больше нуля",
      "El plazo debe ser mayor que cero"
    ],
    [
      "Срок должен быть не меньше месяца",
      "El plazo debe ser de al menos un mes"
    ],
    [
      "Ставка не может быть отрицательной",
      "El tipo no puede ser negativo"
    ],
    [
      "Сумма ряда",
      "Suma de la serie"
    ],
    [
      "Членов",
      "Términos"
    ],
    [
      "₽",
      "€"
    ]
  ]
};
export function runtimeScalarPhrases(locale:TranslatedLocale,ids:readonly number[]):Record<string,string>{return Object.fromEntries(ids.map(i=>phrases[locale][i]));}
