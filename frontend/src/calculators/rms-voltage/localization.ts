import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was bekannt ist',
      'wave': 'Signalform',
      'value': 'Wert, V',
    },
    options: {
      'peak': 'Scheitelwert',
      'pp': 'Spitze-Spitze',
      'rms': 'Effektivwert',
      'sine': 'Sinus',
      'square': 'Rechteck',
      'triangle': 'Dreieck',
    },
    results: {
      'Действующее напряжение': 'Effektivwert der Spannung',
      'Амплитудное значение': 'Scheitelwert',
      'Размах': 'Spitze-Spitze',
      'Коэффициент амплитуды': 'Scheitelfaktor',
      'Среднее по модулю': 'Gleichrichtwert',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'В': 'V',
      'Выберите, что задано, из списка': 'Wähle aus der Liste, was gegeben ist',
      'Выберите форму сигнала из списка': 'Wähle die Signalform aus der Liste',
      'Значение напряжения должно быть больше нуля': 'Der Spannungswert muss größer als null sein',
    },
  },
  en: {
    fields: { mode: 'What is known', wave: 'Waveform', value: 'Value, V' },
    options: {
      peak: 'peak value', pp: 'peak-to-peak', rms: 'RMS value',
      sine: 'sine', square: 'square', triangle: 'triangle',
    },
    results: {
      'Действующее напряжение': 'RMS voltage', 'Амплитудное значение': 'Peak value',
      'Размах': 'Peak-to-peak', 'Коэффициент амплитуды': 'Crest factor',
      'Среднее по модулю': 'Mean absolute value', 'Проверьте данные': 'Check the values',
    },
    values: {
      'В': 'V',
      'Выберите, что задано, из списка': 'Choose what is known from the list',
      'Выберите форму сигнала из списка': 'Choose a waveform from the list',
      'Значение напряжения должно быть больше нуля': 'The voltage must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що задано', wave: 'Форма сигналу', value: 'Значення, В' },
    options: {
      peak: 'амплітудне значення', pp: 'розмах', rms: 'діюче значення',
      sine: 'синус', square: 'меандр', triangle: 'трикутник',
    },
    results: {
      'Действующее напряжение': 'Діюча напруга', 'Амплитудное значение': 'Амплітудне значення',
      'Размах': 'Розмах', 'Коэффициент амплитуды': 'Коефіцієнт амплітуди',
      'Среднее по модулю': 'Середнє за модулем', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'В': 'В',
      'Выберите, что задано, из списка': 'Оберіть, що задано, зі списку',
      'Выберите форму сигнала из списка': 'Оберіть форму сигналу зі списку',
      'Значение напряжения должно быть больше нуля': 'Значення напруги має бути більшим за нуль',
    },
  },
};
