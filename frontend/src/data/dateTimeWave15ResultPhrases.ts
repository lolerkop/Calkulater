import type {CalculatorLocaleBundle} from '../lib/platform/types';
const records:Readonly<Record<string,readonly string[]>> = {
  "Выберите дату рождения": [
    "Select the birth date",
    "Оберіть дату народження",
    "Wähle das Geburtsdatum",
    "Selecciona la fecha de nacimiento"
  ],
  "Дата расчёта раньше даты рождения": [
    "The reference date precedes birth",
    "Дата розрахунку раніша за народження",
    "Der Stichtag liegt vor der Geburt",
    "La fecha de referencia es anterior al nacimiento"
  ],
  "Выберите исходную дату": [
    "Select the starting date",
    "Оберіть початкову дату",
    "Wähle das Ausgangsdatum",
    "Selecciona la fecha inicial"
  ],
  "Выберите направление сдвига": [
    "Select the shift direction",
    "Оберіть напрямок зсуву",
    "Wähle die Verschieberichtung",
    "Selecciona el sentido del desplazamiento"
  ],
  "Итоговая дата должна быть в диапазоне 0001–9999": [
    "The resulting date must be within years 0001–9999",
    "Підсумкова дата має бути в роках 0001–9999",
    "Das Ergebnisdatum muss im Jahrbereich 0001–9999 liegen",
    "La fecha resultante debe estar entre los años 0001–9999"
  ],
  "Интервал должен состоять из целых неотрицательных чисел": [
    "The interval must contain non-negative whole numbers",
    "Інтервал має складатися з цілих невід’ємних чисел",
    "Das Intervall muss aus nichtnegativen ganzen Zahlen bestehen",
    "El intervalo debe contener enteros no negativos"
  ],
  "Выберите начало и конец": [
    "Select the start and end dates",
    "Оберіть початок і кінець",
    "Wähle Anfang und Ende",
    "Selecciona inicio y fin"
  ],
  "Выберите режим учёта выходных": [
    "Select how weekends are counted",
    "Оберіть спосіб урахування вихідних",
    "Wähle die Zählweise für Wochenenden",
    "Selecciona cómo contar los fines de semana"
  ],
  "Дата конца раньше начала": [
    "The end date precedes the start",
    "Кінцева дата раніша за початкову",
    "Das Enddatum liegt vor dem Anfang",
    "La fecha final es anterior a la inicial"
  ],
  "Используйте список дат в формате ГГГГ-ММ-ДД": [
    "Use a list of dates in YYYY-MM-DD format",
    "Використовуйте список дат у форматі YYYY-MM-DD",
    "Verwende Datumswerte im Format YYYY-MM-DD",
    "Usa una lista de fechas en formato YYYY-MM-DD"
  ],
  "Введите целый год от 1 до 9999": [
    "Enter a whole year from 1 to 9999",
    "Введіть цілий рік від 1 до 9999",
    "Gib eine ganze Jahreszahl von 1 bis 9999 ein",
    "Introduce un año entero de 1 a 9999"
  ],
  "Время на засыпание должно быть целым неотрицательным числом минут": [
    "Time to fall asleep must be non-negative whole minutes",
    "Час засинання має бути цілою невід’ємною кількістю хвилин",
    "Die Einschlafzeit muss eine nichtnegative ganze Minutenzahl sein",
    "El tiempo para dormirse debe ser un número entero de minutos no negativo"
  ],
  "Выберите режим расчёта": [
    "Select the calculation mode",
    "Оберіть режим розрахунку",
    "Wähle den Rechenmodus",
    "Selecciona el modo de cálculo"
  ],
  "Минуты должны быть целым числом от 0 до 59": [
    "Minutes must be a whole number from 0 to 59",
    "Хвилини мають бути цілим числом від 0 до 59",
    "Minuten müssen eine ganze Zahl von 0 bis 59 sein",
    "Los minutos deben ser un entero de 0 a 59"
  ],
  "Результат выходит за числовой диапазон калькулятора": [
    "The result exceeds the calculator’s numerical range",
    "Результат виходить за числовий діапазон калькулятора",
    "Das Ergebnis liegt außerhalb des Zahlenbereichs des Rechners",
    "El resultado sale del rango numérico de la calculadora"
  ],
  "Циклов должно быть целое число от 1 до 12": [
    "The block count must be a whole number from 1 to 12",
    "Число блоків має бути цілим від 1 до 12",
    "Die Blockzahl muss eine ganze Zahl von 1 bis 12 sein",
    "La cantidad de bloques debe ser un entero de 1 a 12"
  ],
  "Час должен быть целым числом от 0 до 23": [
    "The hour must be a whole number from 0 to 23",
    "Година має бути цілим числом від 0 до 23",
    "Die Stunde muss eine ganze Zahl von 0 bis 23 sein",
    "La hora debe ser un entero de 0 a 23"
  ],
  "Введите целую длительность: часы от 0 до 999, минуты от 0 до 59": [
    "Enter whole duration parts: hours 0–999, minutes 0–59",
    "Введіть цілі частини тривалості: години 0–999, хвилини 0–59",
    "Gib ganze Dauerwerte ein: Stunden 0–999, Minuten 0–59",
    "Introduce duración entera: horas 0–999, minutos 0–59"
  ],
  "Введите целые часы от 0 до 23 и минуты от 0 до 59": [
    "Enter whole hours 0–23 and minutes 0–59",
    "Введіть цілі години 0–23 та хвилини 0–59",
    "Gib ganze Stunden 0–23 und Minuten 0–59 ein",
    "Introduce horas enteras 0–23 y minutos 0–59"
  ],
  "Смещение UTC должно быть от −12 до +14 и соответствовать целому числу минут": [
    "The UTC offset must be −12 to +14 hours and represent whole minutes",
    "Зміщення UTC має бути від −12 до +14 годин і відповідати цілим хвилинам",
    "Der UTC-Versatz muss −12 bis +14 Stunden betragen und ganze Minuten ergeben",
    "El desplazamiento UTC debe estar entre −12 y +14 horas y equivaler a minutos enteros"
  ],
  "Перерыв должен быть целым неотрицательным числом минут": [
    "The break must be non-negative whole minutes",
    "Перерва має бути цілою невід’ємною кількістю хвилин",
    "Die Pause muss eine nichtnegative ganze Minutenzahl sein",
    "El descanso debe ser un número entero de minutos no negativo"
  ],
  "Ставка должна быть конечным неотрицательным числом": [
    "The rate must be a finite non-negative number",
    "Ставка має бути скінченним невід’ємним числом",
    "Der Satz muss eine endliche nichtnegative Zahl sein",
    "La tarifa debe ser un número finito no negativo"
  ],
  "Число смен должно быть целым положительным числом": [
    "The shift count must be a positive whole number",
    "Кількість змін має бути цілим додатним числом",
    "Die Schichtzahl muss eine positive ganze Zahl sein",
    "La cantidad de turnos debe ser un entero positivo"
  ],
  "Циклов": [
    "Blocks",
    "Блоків",
    "Blöcke",
    "Bloques"
  ],
  "Чистый сон": [
    "Modelled sleep blocks",
    "Розрахункові блоки сну",
    "Berechnete Schlafblöcke",
    "Bloques de sueño calculados"
  ],
  "ден. ед.": ["currency units","гр. од.","Geldeinheiten","unidades monetarias"],
  "₽": [
    "currency units",
    "гр. од.",
    "Geldeinheiten",
    "unidades monetarias"
  ],
  "через двое суток": [
    "two days later",
    "через дві доби",
    "zwei Tage später",
    "dos días después"
  ],
  "двое суток назад": [
    "two days earlier",
    "дві доби раніше",
    "zwei Tage früher",
    "dos días antes"
  ],
  "Переход вперёд через границу суток": [
    "Crossed a day boundary forward",
    "Перехід уперед через межу доби",
    "Tagesgrenze vorwärts überschritten",
    "Cruce hacia adelante del límite del día"
  ],
  "Переход назад через границу суток": [
    "Crossed a day boundary backward",
    "Перехід назад через межу доби",
    "Tagesgrenze rückwärts überschritten",
    "Cruce hacia atrás del límite del día"
  ]
};
export function dateTimeWave15Phrases(locale:string,keys:readonly string[]):Readonly<Record<string,string>>{
 const index=['en','uk','de','es'].indexOf(locale);if(index<0)return {};
 return Object.fromEntries(keys.map(key=>{const translated=records[key]?.[index];if(!translated)throw new Error('Missing owned date phrase: '+key);return [key,translated];}));
}
