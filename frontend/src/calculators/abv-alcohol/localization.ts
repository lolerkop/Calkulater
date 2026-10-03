import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "og": "Original gravity",
    "fg": "Final gravity",
    "factor": "Conversion factor"
  },
  "options": {},
  "results": {
    "Крепость": "Alcohol by volume",
    "Степень сбраживания": "Apparent attenuation",
    "Падение плотности": "Gravity drop",
    "Начальная плотность": "Original gravity",
    "Конечная плотность": "Final gravity",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "Начальная плотность должна быть больше единицы": "The original gravity must be greater than one",
    "Конечная плотность должна быть больше нуля": "The final gravity must be greater than zero",
    "Конечная плотность не может быть выше начальной": "The final gravity cannot exceed the original gravity",
    "Линейная оценка крепости не может превышать 100 %": "The linear ABV estimate cannot exceed 100%",
    "Коэффициент должен быть больше нуля": "The factor must be greater than zero",
    "Степень сбраживания здесь кажущаяся: это падение SG относительно OG − 1, а не измеренная доля потреблённого сахара. ABV — линейная оценка, не лабораторное измерение.": "Attenuation here is apparent: SG fall relative to OG − 1, not measured sugar consumption. ABV is a linear estimate, not a laboratory measurement."
  }
},
  "uk": {
  "fields": {
    "og": "Початкова щільність",
    "fg": "Кінцева щільність",
    "factor": "Коефіцієнт перерахунку"
  },
  "options": {},
  "results": {
    "Крепость": "Міцність",
    "Степень сбраживания": "Позірний ступінь зброджування",
    "Падение плотности": "Падіння щільності",
    "Начальная плотность": "Початкова щільність",
    "Конечная плотность": "Кінцева щільність",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "Начальная плотность должна быть больше единицы": "Початкова щільність має бути більшою за одиницю",
    "Конечная плотность должна быть больше нуля": "Кінцева щільність має бути більшою за нуль",
    "Конечная плотность не может быть выше начальной": "Кінцева щільність не може бути вищою за початкову",
    "Линейная оценка крепости не может превышать 100 %": "Лінійна оцінка міцності не може перевищувати 100%",
    "Коэффициент должен быть больше нуля": "Коефіцієнт має бути більшим за нуль",
    "Степень сбраживания здесь кажущаяся: это падение SG относительно OG − 1, а не измеренная доля потреблённого сахара. ABV — линейная оценка, не лабораторное измерение.": "Ступінь зброджування тут позірний: падіння SG відносно OG − 1, не виміряна частка спожитого цукру. ABV — лінійна оцінка, не лабораторний вимір."
  }
},
  "de": {
  "fields": {
    "og": "Anfangsdichte",
    "fg": "Enddichte",
    "factor": "Umrechnungsfaktor"
  },
  "results": {
    "Крепость": "Alkoholgehalt",
    "Степень сбраживания": "Scheinbarer Vergärungsgrad",
    "Падение плотности": "Dichteabfall",
    "Начальная плотность": "Anfangsdichte",
    "Конечная плотность": "Enddichte",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "Начальная плотность должна быть больше единицы": "Die Anfangsdichte muss größer als eins sein",
    "Конечная плотность должна быть больше нуля": "Die Enddichte muss größer als null sein",
    "Конечная плотность не может быть выше начальной": "Die Enddichte kann die Anfangsdichte nicht übersteigen",
    "Линейная оценка крепости не может превышать 100 %": "Lineare ABV-Schätzung darf 100% nicht überschreiten",
    "Коэффициент должен быть больше нуля": "Der Faktor muss größer als null sein",
    "Степень сбраживания здесь кажущаяся: это падение SG относительно OG − 1, а не измеренная доля потреблённого сахара. ABV — линейная оценка, не лабораторное измерение.": "Vergärungsgrad ist hier scheinbar: SG-Abfall relativ zu OG − 1, keine gemessene Zuckermenge. ABV ist eine lineare Schätzung, keine Labormessung."
  }
},
  "es": {
  "fields": {
    "og": "Densidad inicial",
    "fg": "Densidad final",
    "factor": "Factor de conversión"
  },
  "options": {},
  "results": {
    "Крепость": "Alcohol por volumen",
    "Степень сбраживания": "Atenuación aparente",
    "Падение плотности": "Caída de densidad",
    "Начальная плотность": "Densidad inicial",
    "Конечная плотность": "Densidad final",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "Начальная плотность должна быть больше единицы": "La densidad inicial debe ser mayor que uno",
    "Конечная плотность должна быть больше нуля": "La densidad final debe ser mayor que cero",
    "Конечная плотность не может быть выше начальной": "La densidad final no puede superar a la inicial",
    "Линейная оценка крепости не может превышать 100 %": "La estimación lineal de ABV no puede superar el 100%",
    "Коэффициент должен быть больше нуля": "El factor debe ser mayor que cero",
    "Степень сбраживания здесь кажущаяся: это падение SG относительно OG − 1, а не измеренная доля потреблённого сахара. ABV — линейная оценка, не лабораторное измерение.": "La atenuación es aparente: caída de SG respecto a OG − 1, no azúcar consumido medido. ABV es estimación lineal, no medición de laboratorio."
  }
}
};
