import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: { results: { 'Разница B − A': 'Difference B − A' }, values: {
    'Введите конечные числовые значения.': 'Enter finite numeric values.',
    'Результат выходит за пределы числовой точности.': 'The result exceeds numeric precision.',
    'При отрицательной исходной базе знак относительного изменения нельзя читать как направление роста или снижения.': 'With a negative starting value, the sign of relative change cannot be read as the direction of increase or decrease.',
  } },
  uk: { results: { 'Разница B − A': 'Різниця B − A' }, values: {
    'Введите конечные числовые значения.': 'Введіть скінченні числові значення.',
    'Результат выходит за пределы числовой точности.': 'Результат виходить за межі числової точності.',
    'При отрицательной исходной базе знак относительного изменения нельзя читать как направление роста или снижения.': 'За від’ємного початкового значення знак відносної зміни не можна тлумачити як напрям зростання або зниження.',
  } },
  de: { results: { 'Разница B − A': 'Differenz B − A' }, values: {
    'Введите конечные числовые значения.': 'Gib endliche Zahlenwerte ein.',
    'Результат выходит за пределы числовой точности.': 'Das Ergebnis überschreitet die numerische Genauigkeit.',
    'При отрицательной исходной базе знак относительного изменения нельзя читать как направление роста или снижения.': 'Bei einem negativen Ausgangswert zeigt das Vorzeichen der relativen Änderung nicht die Richtung einer Zu- oder Abnahme an.',
  } },
  es: { results: { 'Разница B − A': 'Diferencia B − A' }, values: {
    'Введите конечные числовые значения.': 'Introduce valores numéricos finitos.',
    'Результат выходит за пределы числовой точности.': 'El resultado supera la precisión numérica.',
    'При отрицательной исходной базе знак относительного изменения нельзя читать как направление роста или снижения.': 'Con un valor inicial negativo, el signo del cambio relativo no indica la dirección de un aumento o una disminución.',
  } },
};
