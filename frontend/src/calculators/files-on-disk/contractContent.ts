// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Сколько файлов заданного размера влезет на диск или карту.",
    "seoDescription": "Узнайте, сколько файлов заданного размера поместится на носитель, с разделением десятичных и двоичных единиц.",
    "longDescription": "Показывает число целых файлов одного размера, помещающихся в заданный доступный объём. Ёмкость носителя и размер файла имеют отдельные переключатели десятичных и двоичных единиц. Перевод единиц не теряет байты. Процент резерва уменьшает доступный объём только на явно указанную долю; автоматического вычета файловой системы здесь нет.",
    "howToUse": [
      "Введите ёмкость носителя и выберите единицу.",
      "Введите размер файла и его единицу.",
      "Добавьте резерв, если часть места занята."
    ],
    "howItWorks": "Обе выбранные единицы переводятся в байты. Доступный объём = ёмкость·(100−резерв)/100, число файлов — целая часть доступного объёма / размера одного файла. Частное округляется вниз по рациональному отношению десятичной записи разобранных чисел; остаток вычисляется после вычитания полных файлов. Резерв от 0 до менее 100% задаётся отдельно и не дублирует перевод GB/GiB. Число файлов ограничено безопасным целым диапазоном.",
    "example": "На носитель 1000 ГБ помещается 250 000 файлов по 4 МБ.",
    "faq": [
      {
        "q": "Почему диск показывает меньше, чем написано на коробке?",
        "a": "GB=10⁹ байт, GiB=2³⁰ байт; это разные единицы одного объёма, а не пропажа байтов. Программа или ОС может использовать любую шкалу. Служебные данные — отдельная причина расхода места и здесь задаются резервом."
      },
      {
        "q": "Вычитаются ли накладные расходы файловой системы?",
        "a": "Автоматически — нет. Размер кластера и метаданные зависят от файловой системы, поэтому поле резерва позволяет учесть их явно."
      },
      {
        "q": "Что если файл больше носителя?",
        "a": "Ответом будет ноль, и это корректный результат, а не ошибка."
      },
      {
        "q": "Считается, что все файлы одинаковы?",
        "a": "Да. Расчёт отвечает, сколько поместится файлов одного заданного размера, а не как уложится смешанная коллекция."
      }
    ],
    "disclaimer": "Модель одинаковых файлов без автоматического учёта кластеров, метаданных, лимита записей файловой системы и скрытых разделов. Резерв задаёт пользователь."
  },
  "en": {
    "shortDescription": "How many files of a given size fit on a drive.",
    "seoDescription": "Work out how many files of a given size fit on a drive, with decimal and binary units kept apart and an optional reserve.",
    "longDescription": "Find how many whole files of one size fit into the supplied usable space. Drive capacity and file size have separate decimal/binary unit selectors. Changing units does not lose bytes. The reserve percentage removes only the explicitly supplied fraction; filesystem space is not deducted automatically.",
    "howToUse": [
      "Enter the drive capacity and pick its unit.",
      "Enter the file size and pick its unit.",
      "Add a reserve if some space is spoken for."
    ],
    "howItWorks": "Both selected units are converted to bytes. Usable space = capacity·(100−reserve)/100; file count is the floor of usable space / one file size. The floor uses the rational ratio of the parsed numbers’ decimal spellings; leftover space is calculated after subtracting whole files. Reserve is from 0 to below 100% and is separate from GB/GiB conversion. File count is bounded by the safe integer range.",
    "example": "A 1000 GB drive holds 250 000 files of 4 MB each.",
    "faq": [
      {
        "q": "Why does my drive show less than the label?",
        "a": "GB=10⁹ bytes and GiB=2³⁰ bytes are different units for the same space, not lost bytes. Software may use either scale. Filesystem data is a separate use of space and is represented here by the reserve."
      },
      {
        "q": "Is filesystem overhead subtracted?",
        "a": "Not automatically. Cluster size and metadata vary by filesystem, so the reserve field lets you account for them explicitly."
      },
      {
        "q": "What if the file is bigger than the drive?",
        "a": "The answer is zero, which is a correct result rather than an error."
      },
      {
        "q": "Are files assumed to be identical?",
        "a": "Yes. The calculation answers how many files of one given size fit, not how a mixed collection would pack."
      }
    ],
    "disclaimer": "Equal-file packing excludes automatic cluster allocation, metadata, filesystem entry limits and hidden partitions. Reserve is supplied by the user."
  },
  "uk": {
    "shortDescription": "Скільки файлів заданого розміру помістяться на носій.",
    "seoDescription": "Дізнайтеся, скільки файлів заданого розміру помістяться на носій, з десятковими та двійковими одиницями.",
    "longDescription": "Показує кількість цілих файлів одного розміру, що вміщуються у заданий доступний обсяг. Ємність носія й файл мають окремі перемикачі десяткових і двійкових одиниць. Переведення одиниць не втрачає байтів. Резерв зменшує доступний обсяг тільки на явно задану частку; автоматичного віднімання файлової системи немає.",
    "howToUse": [
      "Введіть ємність і виберіть її десяткову або двійкову одиницю.",
      "Задайте явний резерв від 0 до менш ніж 100%; він не дублює різницю GB/GiB.",
      "Введіть один спільний розмір файлів і його одиницю; читайте кількість повних файлів та залишок."
    ],
    "howItWorks": "Обидві вибрані одиниці переводяться в байти. Доступний обсяг = ємність·(100−резерв)/100; кількість файлів — ціла частина доступного обсягу / розміру одного файла. Округлення вниз використовує раціональне відношення десяткових записів розібраних чисел; залишок обчислюється після віднімання повних файлів. Резерв від 0 до менш ніж 100% задається окремо й не дублює перетворення GB/GiB. Кількість обмежена безпечним цілим діапазоном.",
    "example": "На носій 1000 ГБ вміщується 250 000 файлів по 4 МБ.",
    "faq": [
      {
        "q": "Чому доступного місця менше за паспортне?",
        "a": "GB=10⁹ байтів, GiB=2³⁰ байтів — різні одиниці того самого обсягу, а не втрачені байти. Програма може використовувати будь-яку шкалу. Службові структури враховуються окремим резервом, а не фіксованими 8–10%."
      },
      {
        "q": "Чи впливає розмір кластера?",
        "a": "Так, для дрібних файлів сильно. Файл на 1 КБ у файловій системі з кластером 4 КБ займає всі 4 КБ — і мільйон таких файлів витратить учетверо більше місця, ніж їхня сумарна вага."
      },
      {
        "q": "Чи є обмеження на кількість файлів?",
        "a": "Так, у файлової системи є ліміт на кількість записів. Для сучасних систем він дуже великий, але дуже багато дрібних файлів помітно сповільнюють роботу з каталогом."
      },
      {
        "q": "Скільки місця лишати вільним?",
        "a": "Поле резерву — ваше явне припущення про недоступний простір. Воно не є рекомендацією щодо ресурсу SSD чи швидкості HDD. Візьміть реально недоступну частину або вимоги конкретного сховища; універсального відсотка ця модель не визначає."
      }
    ],
    "disclaimer": "Модель однакових файлів без автоматичного врахування кластерів, метаданих, ліміту записів файлової системи й прихованих розділів. Резерв задає користувач."
  },
  "de": {
    "shortDescription": "Wie viele Dateien einer bestimmten Größe auf einen Datenträger passen.",
    "seoDescription": "Ermittle, wie viele Dateien einer bestimmten Größe auf einen Datenträger passen, mit getrennten dezimalen und binären Einheiten und wahlweise einer Reserve.",
    "longDescription": "Ermittelt, wie viele vollständige gleich große Dateien in den angegebenen Platz passen. Datenträgerkapazität und Dateigröße besitzen getrennte dezimale/binäre Einheiten. Die Umrechnung verliert keine Bytes. Der Reserveprozentsatz zieht nur den angegebenen Anteil ab; Dateisystemplatz wird nicht automatisch abgezogen.",
    "howToUse": [
      "Trage die Kapazität des Datenträgers ein und wähle ihre Einheit.",
      "Trage die Dateigröße ein und wähle ihre Einheit.",
      "Ergänze eine Reserve, wenn ein Teil des Platzes schon vergeben ist."
    ],
    "howItWorks": "Beide gewählten Einheiten werden in Bytes umgerechnet. Nutzbarer Platz = Kapazität·(100−Reserve)/100; die Dateizahl ist der abgerundete Quotient aus nutzbarem Platz und Dateigröße. Die Abrundung nutzt das rationale Verhältnis der Dezimalschreibweisen der eingelesenen Zahlen; der Rest entsteht nach Abzug ganzer Dateien. Die Reserve liegt zwischen 0 und unter 100% und ist von der GB/GiB-Umrechnung getrennt. Die Dateizahl ist auf sichere ganze Zahlen begrenzt.",
    "example": "Auf einen Datenträger mit 1000 GB passen 250 000 Dateien zu je 4 MB.",
    "faq": [
      {
        "q": "Warum zeigt mein Datenträger weniger an als aufgedruckt?",
        "a": "GB=10⁹ Bytes und GiB=2³⁰ Bytes sind verschiedene Einheiten desselben Platzes, keine verlorenen Bytes. Software kann beide Skalen verwenden. Dateisystemdaten benötigen gesonderten Platz und werden hier durch die Reserve dargestellt."
      },
      {
        "q": "Wird der Aufwand des Dateisystems abgezogen?",
        "a": "Nicht von selbst. Clustergröße und Verwaltungsdaten unterscheiden sich je nach Dateisystem, deshalb lässt dich das Reservefeld sie ausdrücklich berücksichtigen."
      },
      {
        "q": "Was gilt, wenn die Datei größer ist als der Datenträger?",
        "a": "Die Antwort ist null, und das ist ein richtiges Ergebnis und kein Fehler."
      },
      {
        "q": "Wird angenommen, dass alle Dateien gleich groß sind?",
        "a": "Ja. Die Rechnung beantwortet, wie viele Dateien einer bestimmten Größe hineinpassen, nicht wie sich eine gemischte Sammlung packen ließe."
      }
    ],
    "disclaimer": "Modell gleich großer Dateien ohne automatische Clusterbelegung, Metadaten, Dateisystem-Eintragsgrenzen oder versteckte Partitionen. Die Reserve gibt der Nutzer vor."
  },
  "es": {
    "shortDescription": "Cuántos archivos de un tamaño dado caben en una unidad.",
    "seoDescription": "Calcula cuántos archivos de un tamaño dado caben en una unidad, con las unidades decimales y binarias por separado y una reserva opcional.",
    "longDescription": "Calcula cuántos archivos completos del mismo tamaño caben en el espacio indicado. Capacidad y tamaño de archivo tienen selectores decimales/binarios separados. Cambiar de unidad no pierde bytes. La reserva resta solo la fracción indicada; no se descuenta automáticamente el sistema de archivos.",
    "howToUse": [
      "Introduce la capacidad de la unidad y elige su unidad de medida.",
      "Introduce el tamaño del archivo y elige su unidad.",
      "Añade una reserva si parte del espacio está comprometido."
    ],
    "howItWorks": "Ambas unidades se convierten a bytes. Espacio útil = capacidad·(100−reserva)/100; el número de archivos es la parte entera inferior del espacio útil dividido por un archivo. Se redondea usando la proporción racional de las representaciones decimales de los números interpretados; el sobrante se calcula después de restar archivos completos. La reserva, entre 0 y menos del 100%, es independiente de la conversión GB/GiB. El recuento queda limitado a enteros seguros.",
    "example": "Una unidad de 1000 GB alberga 250 000 archivos de 4 MB cada uno.",
    "faq": [
      {
        "q": "¿Por qué mi unidad muestra menos que la etiqueta?",
        "a": "GB=10⁹ bytes y GiB=2³⁰ bytes son unidades distintas del mismo espacio, no bytes perdidos. El programa puede usar cualquiera de las escalas. Los datos del sistema de archivos ocupan espacio aparte y se representan con la reserva."
      },
      {
        "q": "¿Se resta la sobrecarga del sistema de archivos?",
        "a": "No de forma automática. El tamaño de clúster y los metadatos varían según el sistema de archivos, así que el campo de reserva permite tenerlos en cuenta de forma explícita."
      },
      {
        "q": "¿Y si el archivo es mayor que la unidad?",
        "a": "La respuesta es cero, que es un resultado correcto y no un error."
      },
      {
        "q": "¿Se supone que todos los archivos son iguales?",
        "a": "Sí. El cálculo responde a cuántos archivos de un tamaño dado caben, no a cómo se acomodaría una colección variada."
      }
    ],
    "disclaimer": "Modelo de archivos iguales sin asignación automática de clústeres, metadatos, límites de registros ni particiones ocultas. El usuario indica la reserva."
  }
};
