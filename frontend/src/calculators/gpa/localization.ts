import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"grades": "Grades: one per line, weight after a space"},
    options: {},
    results: { ...runtimeScalarPhrases("en",[6]),"Средний балл": "Grade point average", "Сумма кредитов": "Total weight", "Сумма произведений": "Sum of products", "Предметов": "Subjects", "Простое среднее": "Unweighted mean", "Сумма весов": "Total weight" },
    values: { ...runtimeScalarPhrases("en",[1, 8]),"Введите хотя бы одну оценку": "Enter at least one grade", "Оценка не может быть отрицательной": "A grade cannot be negative", "Вес предмета должен быть больше нуля": "The subject weight must be greater than zero", "Значение выходит за числовой диапазон": "The value exceeds the numeric range", "Ненулевое значение меньше числового диапазона": "The nonzero value is below the numeric range", "Допускается не более 10000 строк": "At most 10000 rows are supported", "Укажите оценку и необязательный вес в каждой строке": "Enter a grade and an optional weight on each row" },
  },
  "uk": {
    fields: {"grades": "Оцінки: по одній у рядку, через пробіл вага"},
    options: {},
    results: { ...runtimeScalarPhrases("uk",[8]),"Средний балл": "Середній бал", "Сумма кредитов": "Сума кредитів", "Сумма произведений": "Сума добутків", "Предметов": "Предметів", "Простое среднее": "Просте середнє", "Сумма весов": "Сума ваг" },
    values: { ...runtimeScalarPhrases("uk",[2, 10]),"Введите хотя бы одну оценку": "Введіть хоча б одну оцінку", "Оценка не может быть отрицательной": "Оцінка не може бути від'ємною", "Вес предмета должен быть больше нуля": "Вага предмета має бути більшою за нуль", "Значение выходит за числовой диапазон": "Значення перевищує числовий діапазон", "Ненулевое значение меньше числового диапазона": "Ненульове значення менше за числовий діапазон", "Допускается не более 10000 строк": "Підтримується не більш ніж 10000 рядків", "Укажите оценку и необязательный вес в каждой строке": "У кожному рядку вкажіть оцінку та необов’язкову вагу" },
  },
  "de": {
    fields: {"grades": "Noten: eine je Zeile, Gewicht nach einem Leerzeichen"},
    options: {},
    results: { ...runtimeScalarPhrases("de",[8]),"Средний балл": "Notendurchschnitt", "Сумма кредитов": "Summe der Gewichte", "Сумма произведений": "Summe der Produkte", "Предметов": "Fächer", "Простое среднее": "Ungewichtetes Mittel", "Сумма весов": "Summe der Gewichte" },
    values: { ...runtimeScalarPhrases("de",[1, 9]),"Введите хотя бы одну оценку": "Gib mindestens eine Note ein", "Оценка не может быть отрицательной": "Eine Note darf nicht negativ sein", "Вес предмета должен быть больше нуля": "Das Gewicht eines Fachs muss größer als null sein", "Значение выходит за числовой диапазон": "Der Wert überschreitet den Zahlenbereich", "Ненулевое значение меньше числового диапазона": "Der Wert ungleich null liegt unter dem Zahlenbereich", "Допускается не более 10000 строк": "Höchstens 10000 Zeilen werden unterstützt", "Укажите оценку и необязательный вес в каждой строке": "Gib je Zeile eine Note und ein optionales Gewicht ein" },
  },
  "es": {
    fields: {"grades": "Notas: una por línea, el peso tras un espacio"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Средний балл": "Nota media", "Сумма кредитов": "Suma de pesos", "Сумма произведений": "Suma de productos", "Предметов": "Asignaturas", "Простое среднее": "Media simple", "Сумма весов": "Suma de pesos" },
    values: { ...runtimeScalarPhrases("es",[1, 8]),"Введите хотя бы одну оценку": "Introduce al menos una nota", "Оценка не может быть отрицательной": "Una nota no puede ser negativa", "Вес предмета должен быть больше нуля": "El peso de la asignatura debe ser mayor que cero", "Значение выходит за числовой диапазон": "El valor supera el rango numérico", "Ненулевое значение меньше числового диапазона": "El valor no nulo está por debajo del rango numérico", "Допускается не более 10000 строк": "Se admiten como máximo 10000 filas", "Укажите оценку и необязательный вес в каждой строке": "Introduce una nota y un peso opcional en cada fila" },
  },
};
