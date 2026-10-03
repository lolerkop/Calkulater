import type {Field} from '../lib/types';
const patches:Record<string,Record<string,Record<string,Partial<Field>>>> = {
  "ru": {
    "age-calculator": {
      "birthDate": {
        "help": "Дата YYYY-MM-DD, годы 0001–9999, по продолженному григорианскому календарю."
      },
      "targetDate": {
        "help": "Пустое поле означает сегодня по устройству; явная дата позволяет повторить результат."
      }
    },
    "working-days-calculator": {
      "startDate": {
        "help": "Дата YYYY-MM-DD, годы 0001–9999, по продолженному григорианскому календарю."
      },
      "endDate": {
        "help": "Дата YYYY-MM-DD, годы 0001–9999, по продолженному григорианскому календарю."
      },
      "excludedDates": {
        "help": "Даты YYYY-MM-DD через запятую, точку с запятой или новую строку; повторы считаются один раз."
      }
    },
    "date-shift-calculator": {
      "startDate": {
        "help": "Дата YYYY-MM-DD, годы 0001–9999, по продолженному григорианскому календарю."
      },
      "shiftYears": {
        "help": "Целое неотрицательное число; пустое поле означает 0. Направление выбирается отдельно.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftMonths": {
        "help": "Целое неотрицательное число; пустое поле означает 0. Направление выбирается отдельно.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftWeeks": {
        "help": "Целое неотрицательное число; пустое поле означает 0. Направление выбирается отдельно.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftDays": {
        "help": "Целое неотрицательное число; пустое поле означает 0. Направление выбирается отдельно.",
        "optional": true,
        "max": 9007199254740991
      }
    },
    "sleep-time": {
      "hour": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "minute": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "cycles": {
        "help": "От 1 до 12 целых блоков по 90 минут: сценарий формулы, а не измеренные фазы или рекомендация длительности сна.",
        "step": 1,
        "label": "90-минутных блоков"
      },
      "fallAsleep": {
        "help": "Целое число минут не меньше 0; прибавляется ко времени в постели, отдельно от блоков сна.",
        "step": 1,
        "max": 9007199254740991
      }
    },
    "time-duration": {
      "startHour": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "startMinute": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "endHour": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "endMinute": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "spanHour": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      },
      "spanMinute": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      }
    },
    "timezone-difference": {
      "hour": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "minute": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "fromOffset": {
        "help": "Смещение в десятичных часах UTC: 5,5 = 5 ч 30 мин. Оно должно давать целое число минут; город и летнее время не выбираются автоматически."
      },
      "toOffset": {
        "help": "Смещение в десятичных часах UTC: 5,5 = 5 ч 30 мин. Оно должно давать целое число минут; город и летнее время не выбираются автоматически."
      }
    },
    "work-hours": {
      "startHour": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "startMin": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "endHour": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "endMin": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "step": 1
      },
      "breakMin": {
        "help": "Целые минуты от 0, строго меньше длины смены. Равный смене перерыв отклоняется.",
        "step": 1,
        "max": 9007199254740991
      },
      "days": {
        "help": "Положительное целое число одинаковых смен; сумма рабочих минут должна оставаться в точном целочисленном диапазоне.",
        "min": 1,
        "max": 9007199254740991,
        "step": 1
      },
      "ratePerHour": {
        "help": "Одна выбранная денежная единица для ставки и результата; обмена валют нет. 0 означает отсутствие оплаты.",
        "min": 0,
        "label": "Ставка за час",
        "unit": "ден. ед./ч"
      }
    },
    "leap-year": {
      "year": {
        "help": "Только целое число в указанном диапазоне; ошибочный ввод не заменяется ближайшей границей.",
        "max": 9999,
        "step": 1
      }
    }
  },
  "en": {
    "age-calculator": {
      "birthDate": {
        "help": "Use YYYY-MM-DD, years 0001–9999, in the proleptic Gregorian calendar."
      },
      "targetDate": {
        "help": "Blank means today on this device; an explicit date makes the result reproducible."
      }
    },
    "working-days-calculator": {
      "startDate": {
        "help": "Use YYYY-MM-DD, years 0001–9999, in the proleptic Gregorian calendar."
      },
      "endDate": {
        "help": "Use YYYY-MM-DD, years 0001–9999, in the proleptic Gregorian calendar."
      },
      "excludedDates": {
        "help": "Enter YYYY-MM-DD dates separated by commas, semicolons or new lines; duplicates count once."
      }
    },
    "date-shift-calculator": {
      "startDate": {
        "help": "Use YYYY-MM-DD, years 0001–9999, in the proleptic Gregorian calendar."
      },
      "shiftYears": {
        "help": "Non-negative whole number; blank means 0. Select the direction separately.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftMonths": {
        "help": "Non-negative whole number; blank means 0. Select the direction separately.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftWeeks": {
        "help": "Non-negative whole number; blank means 0. Select the direction separately.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftDays": {
        "help": "Non-negative whole number; blank means 0. Select the direction separately.",
        "optional": true,
        "max": 9007199254740991
      }
    },
    "sleep-time": {
      "hour": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "minute": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "cycles": {
        "help": "1–12 whole blocks of 90 minutes: a formula scenario, not measured stages or recommended sleep duration.",
        "step": 1,
        "label": "90-minute blocks"
      },
      "fallAsleep": {
        "help": "Whole minutes from 0; added to time in bed separately from the sleep blocks.",
        "step": 1,
        "max": 9007199254740991
      }
    },
    "time-duration": {
      "startHour": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "startMinute": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "endHour": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "endMinute": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "spanHour": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      },
      "spanMinute": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      }
    },
    "timezone-difference": {
      "hour": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "minute": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "fromOffset": {
        "help": "UTC offset in decimal hours: 5.5 = 5 h 30 min. It must equal whole minutes; city and daylight-saving rules are not selected automatically."
      },
      "toOffset": {
        "help": "UTC offset in decimal hours: 5.5 = 5 h 30 min. It must equal whole minutes; city and daylight-saving rules are not selected automatically."
      }
    },
    "work-hours": {
      "startHour": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "startMin": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "endHour": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "endMin": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "step": 1
      },
      "breakMin": {
        "help": "Whole minutes from 0, strictly shorter than the shift. An equal break is rejected.",
        "step": 1,
        "max": 9007199254740991
      },
      "days": {
        "help": "Positive whole number of identical shifts; total working minutes must stay within the exact integer range.",
        "min": 1,
        "max": 9007199254740991,
        "step": 1
      },
      "ratePerHour": {
        "help": "Use one chosen currency unit for the rate and result; no currency exchange. 0 means no pay.",
        "min": 0,
        "label": "Hourly rate",
        "unit": "currency units/h"
      }
    },
    "leap-year": {
      "year": {
        "help": "Whole numbers within the displayed range; invalid entries are not clamped to a boundary.",
        "max": 9999,
        "step": 1
      }
    }
  },
  "uk": {
    "age-calculator": {
      "birthDate": {
        "help": "Дата YYYY-MM-DD, роки 0001–9999, за продовженим григоріанським календарем."
      },
      "targetDate": {
        "help": "Порожнє поле означає сьогодні за пристроєм; явна дата дозволяє повторити результат."
      }
    },
    "working-days-calculator": {
      "startDate": {
        "help": "Дата YYYY-MM-DD, роки 0001–9999, за продовженим григоріанським календарем."
      },
      "endDate": {
        "help": "Дата YYYY-MM-DD, роки 0001–9999, за продовженим григоріанським календарем."
      },
      "excludedDates": {
        "help": "Дати YYYY-MM-DD через кому, крапку з комою або новий рядок; повтори враховуються один раз."
      }
    },
    "date-shift-calculator": {
      "startDate": {
        "help": "Дата YYYY-MM-DD, роки 0001–9999, за продовженим григоріанським календарем."
      },
      "shiftYears": {
        "help": "Ціле невід’ємне число; порожнє поле означає 0. Напрямок обирається окремо.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftMonths": {
        "help": "Ціле невід’ємне число; порожнє поле означає 0. Напрямок обирається окремо.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftWeeks": {
        "help": "Ціле невід’ємне число; порожнє поле означає 0. Напрямок обирається окремо.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftDays": {
        "help": "Ціле невід’ємне число; порожнє поле означає 0. Напрямок обирається окремо.",
        "optional": true,
        "max": 9007199254740991
      }
    },
    "sleep-time": {
      "hour": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "minute": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "cycles": {
        "help": "Від 1 до 12 цілих блоків по 90 хвилин: сценарій формули, а не виміряні фази чи рекомендована тривалість сну.",
        "step": 1,
        "label": "90-хвилинних блоків"
      },
      "fallAsleep": {
        "help": "Цілі хвилини від 0; додаються до часу в ліжку окремо від блоків сну.",
        "step": 1,
        "max": 9007199254740991
      }
    },
    "time-duration": {
      "startHour": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "startMinute": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "endHour": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "endMinute": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "spanHour": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      },
      "spanMinute": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      }
    },
    "timezone-difference": {
      "hour": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "minute": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "fromOffset": {
        "help": "Зміщення UTC у десяткових годинах: 5,5 = 5 год 30 хв. Воно має давати цілі хвилини; місто й літній час не обираються автоматично."
      },
      "toOffset": {
        "help": "Зміщення UTC у десяткових годинах: 5,5 = 5 год 30 хв. Воно має давати цілі хвилини; місто й літній час не обираються автоматично."
      }
    },
    "work-hours": {
      "startHour": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "startMin": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "endHour": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "endMin": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "step": 1
      },
      "breakMin": {
        "help": "Цілі хвилини від 0, строго менші за зміну. Перерву, що дорівнює зміні, відхилено.",
        "step": 1,
        "max": 9007199254740991
      },
      "days": {
        "help": "Додатне ціле число однакових змін; сума робочих хвилин має бути в точному цілочисельному діапазоні.",
        "min": 1,
        "max": 9007199254740991,
        "step": 1
      },
      "ratePerHour": {
        "help": "Одна обрана грошова одиниця для ставки й результату; обміну валют немає. 0 означає відсутність оплати.",
        "min": 0,
        "label": "Ставка за годину",
        "unit": "гр. од./год"
      }
    },
    "leap-year": {
      "year": {
        "help": "Лише ціле число в заданих межах; помилковий ввід не замінюється найближчою межею.",
        "max": 9999,
        "step": 1
      }
    }
  },
  "de": {
    "age-calculator": {
      "birthDate": {
        "help": "Datum YYYY-MM-DD, Jahre 0001–9999, im proleptischen gregorianischen Kalender."
      },
      "targetDate": {
        "help": "Leer bedeutet heute auf diesem Gerät; ein festes Datum macht das Ergebnis wiederholbar."
      }
    },
    "working-days-calculator": {
      "startDate": {
        "help": "Datum YYYY-MM-DD, Jahre 0001–9999, im proleptischen gregorianischen Kalender."
      },
      "endDate": {
        "help": "Datum YYYY-MM-DD, Jahre 0001–9999, im proleptischen gregorianischen Kalender."
      },
      "excludedDates": {
        "help": "YYYY-MM-DD mit Komma, Semikolon oder Zeilenumbruch trennen; doppelte Daten zählen einmal."
      }
    },
    "date-shift-calculator": {
      "startDate": {
        "help": "Datum YYYY-MM-DD, Jahre 0001–9999, im proleptischen gregorianischen Kalender."
      },
      "shiftYears": {
        "help": "Nichtnegative ganze Zahl; leer bedeutet 0. Die Richtung wird separat gewählt.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftMonths": {
        "help": "Nichtnegative ganze Zahl; leer bedeutet 0. Die Richtung wird separat gewählt.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftWeeks": {
        "help": "Nichtnegative ganze Zahl; leer bedeutet 0. Die Richtung wird separat gewählt.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftDays": {
        "help": "Nichtnegative ganze Zahl; leer bedeutet 0. Die Richtung wird separat gewählt.",
        "optional": true,
        "max": 9007199254740991
      }
    },
    "sleep-time": {
      "hour": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "minute": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "cycles": {
        "help": "1–12 ganze Blöcke zu 90 Minuten: Formelszenario, keine gemessenen Phasen oder Schlafempfehlung.",
        "step": 1,
        "label": "90-Minuten-Blöcke"
      },
      "fallAsleep": {
        "help": "Ganze Minuten ab 0; zusätzlich zu den Schlafblöcken in der Bettzeit.",
        "step": 1,
        "max": 9007199254740991
      }
    },
    "time-duration": {
      "startHour": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "startMinute": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "endHour": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "endMinute": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "spanHour": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      },
      "spanMinute": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      }
    },
    "timezone-difference": {
      "hour": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "minute": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "fromOffset": {
        "help": "UTC-Versatz in Dezimalstunden: 5,5 = 5 h 30 min. Ganze Minuten erforderlich; Ort und Sommerzeit werden nicht automatisch gewählt."
      },
      "toOffset": {
        "help": "UTC-Versatz in Dezimalstunden: 5,5 = 5 h 30 min. Ganze Minuten erforderlich; Ort und Sommerzeit werden nicht automatisch gewählt."
      }
    },
    "work-hours": {
      "startHour": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "startMin": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "endHour": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "endMin": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "step": 1
      },
      "breakMin": {
        "help": "Ganze Minuten ab 0, strikt kürzer als die Schicht. Gleiche Länge wird abgewiesen.",
        "step": 1,
        "max": 9007199254740991
      },
      "days": {
        "help": "Positive ganze Zahl gleicher Schichten; die Gesamtminuten müssen im exakten Ganzzahlbereich bleiben.",
        "min": 1,
        "max": 9007199254740991,
        "step": 1
      },
      "ratePerHour": {
        "help": "Eine gewählte Geldeinheit für Stundensatz und Ergebnis; keine Währungsumrechnung. 0 bedeutet keine Vergütung.",
        "min": 0,
        "label": "Stundensatz",
        "unit": "Geldeinheiten/h"
      }
    },
    "leap-year": {
      "year": {
        "help": "Ganze Zahlen im angezeigten Bereich; ungültige Werte werden nicht auf eine Grenze gesetzt.",
        "max": 9999,
        "step": 1
      }
    }
  },
  "es": {
    "age-calculator": {
      "birthDate": {
        "help": "Fecha YYYY-MM-DD, años 0001–9999, en el calendario gregoriano proléptico."
      },
      "targetDate": {
        "help": "Vacío significa hoy en este dispositivo; una fecha explícita permite repetir el resultado."
      }
    },
    "working-days-calculator": {
      "startDate": {
        "help": "Fecha YYYY-MM-DD, años 0001–9999, en el calendario gregoriano proléptico."
      },
      "endDate": {
        "help": "Fecha YYYY-MM-DD, años 0001–9999, en el calendario gregoriano proléptico."
      },
      "excludedDates": {
        "help": "Fechas YYYY-MM-DD separadas por coma, punto y coma o salto de línea; duplicados una sola vez."
      }
    },
    "date-shift-calculator": {
      "startDate": {
        "help": "Fecha YYYY-MM-DD, años 0001–9999, en el calendario gregoriano proléptico."
      },
      "shiftYears": {
        "help": "Número entero no negativo; vacío significa 0. Selecciona la dirección por separado.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftMonths": {
        "help": "Número entero no negativo; vacío significa 0. Selecciona la dirección por separado.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftWeeks": {
        "help": "Número entero no negativo; vacío significa 0. Selecciona la dirección por separado.",
        "optional": true,
        "max": 9007199254740991
      },
      "shiftDays": {
        "help": "Número entero no negativo; vacío significa 0. Selecciona la dirección por separado.",
        "optional": true,
        "max": 9007199254740991
      }
    },
    "sleep-time": {
      "hour": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "minute": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "cycles": {
        "help": "De 1 a 12 bloques enteros de 90 minutos: escenario de fórmula, no fases medidas ni duración recomendada.",
        "step": 1,
        "label": "Bloques de 90 minutos"
      },
      "fallAsleep": {
        "help": "Minutos enteros desde 0; se suman al tiempo en cama aparte de los bloques de sueño.",
        "step": 1,
        "max": 9007199254740991
      }
    },
    "time-duration": {
      "startHour": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "startMinute": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "endHour": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "endMinute": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "spanHour": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      },
      "spanMinute": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1,
        "showIf": {
          "field": "mode",
          "oneOf": [
            "add",
            "subtract"
          ]
        }
      }
    },
    "timezone-difference": {
      "hour": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "minute": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "fromOffset": {
        "help": "Desplazamiento UTC en horas decimales: 5,5 = 5 h 30 min. Debe equivaler a minutos enteros; no se eligen automáticamente ciudad ni horario de verano."
      },
      "toOffset": {
        "help": "Desplazamiento UTC en horas decimales: 5,5 = 5 h 30 min. Debe equivaler a minutos enteros; no se eligen automáticamente ciudad ni horario de verano."
      }
    },
    "work-hours": {
      "startHour": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "startMin": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "endHour": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "endMin": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "step": 1
      },
      "breakMin": {
        "help": "Minutos enteros desde 0, estrictamente menores que el turno. Un descanso igual se rechaza.",
        "step": 1,
        "max": 9007199254740991
      },
      "days": {
        "help": "Número entero positivo de turnos iguales; los minutos totales deben permanecer en el rango entero exacto.",
        "min": 1,
        "max": 9007199254740991,
        "step": 1
      },
      "ratePerHour": {
        "help": "Una unidad monetaria elegida para tarifa y resultado; sin cambio de moneda. 0 significa sin pago.",
        "min": 0,
        "label": "Tarifa por hora",
        "unit": "unidades monetarias/h"
      }
    },
    "leap-year": {
      "year": {
        "help": "Solo enteros dentro del intervalo; los valores inválidos no se sustituyen por un límite.",
        "max": 9999,
        "step": 1
      }
    }
  }
};
export function applyDateTimeWave15Fields(id:string,fields:Field[],locale:string):Field[]{
 const own=patches[locale]?.[id];return own?fields.map(field=>({...field,...own[field.name]})):fields;
}
