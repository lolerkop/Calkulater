// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Полезная ёмкость RAID-массива, запас на отказы и эффективность уровня.",
    "seoDescription": "Рассчитайте полезную ёмкость RAID 0, 1, 5, 6 и 10, запас на отказы дисков и эффективность использования.",
    "longDescription": "Сравнивает идеальную полезную ёмкость пяти RAID-моделей для одинаковых дисков. RAID1 здесь означает полную копию данных на каждом из n дисков: половина сырой ёмкости получается только при n=2. Для RAID10 используется обычная схема парных зеркал; допустимым показано гарантированное число отказов независимо от удачного распределения по парам. Ёмкость файловой системы и требования конкретного контроллера нужно проверять отдельно.",
    "howToUse": [
      "Выберите уровень массива.",
      "Укажите число дисков — для RAID 10 оно должно быть чётным.",
      "Введите объём одного диска в терабайтах.",
      "Диски считаются одинаковыми: массив равняется по самому маленькому."
    ],
    "howItWorks": "Для n одинаковых дисков по S десятичных TB сырая ёмкость равна nS. Модель RAID0 даёт nS без избыточности; RAID1 — S как n полных копий; RAID5 — (n−1)S; RAID6 — (n−2)S; RAID10 — nS/2 для чётного n≥4 и парных зеркал. Минимумы данного инструмента: 0 — один диск (вырожденный случай без чередования), 1 — два, 5 — три, 6 — четыре. Гарантированное число отказов у исправного синхронизированного массива: 0, n−1, 1, 2 и 1 соответственно. Это не вероятность потери данных.",
    "example": "RAID 5 из шести дисков по 4 ТБ даёт 20 ТБ полезной ёмкости из 24 ТБ сырой, то есть 83,33 %.",
    "faq": [
      {
        "q": "Какой уровень выбрать для домашнего хранилища?",
        "a": "Выбор зависит от требований к ёмкости, доступности, записи, восстановлению и резервным копиям. Эта страница сравнивает идеальные ёмкости и число переносимых отказов; не рассчитывает вероятность восстановления и не рекомендует уровень по числу дисков."
      },
      {
        "q": "Что будет, если диски разного объёма?",
        "a": "Массив равняется по самому маленькому: диск на 8 ТБ в паре с диском на 4 ТБ отдаст только 4 ТБ. Поэтому расчёт исходит из одинаковых дисков."
      },
      {
        "q": "Почему у RAID 10 указан только один допустимый отказ?",
        "a": "Это гарантированное число. Массив переживёт и половину дисков, если отказы попадут в разные зеркала, но два отказа в одном зеркале убьют его при любом размере — обещать удачное распределение нельзя."
      },
      {
        "q": "Заменяет ли RAID резервную копию?",
        "a": "Нет. RAID защищает от отказа диска, но не от удаления файла, шифровальщика, пожара или кражи — всё это одинаково затронет весь массив. Резервная копия нужна отдельно."
      },
      {
        "q": "Почему производитель обещает больше терабайт, чем видит система?",
        "a": "Производитель считает терабайт как 10¹² байт, а система показывает тебибайты — 2⁴⁰ байт. Разница около 9 %, и к уровню массива она отношения не имеет."
      }
    ],
    "disclaimer": "Учебные RAID-схемы одинаковых синхронизированных дисков. Реальные RAID-реализации, служебный объём, восстановление, скрытые ошибки чтения и резервные копии не моделируются. Минимумы интерфейса не универсальны для всех контроллеров."
  },
  "en": {
    "shortDescription": "Usable capacity of a RAID array, its failure tolerance and the efficiency of each level.",
    "seoDescription": "Calculate the usable capacity of RAID 0, 1, 5, 6 and 10, the disk failures tolerated and the efficiency of each level.",
    "longDescription": "Compare ideal usable capacity for five RAID models with equal disks. RAID1 here stores a complete copy on each of n disks: usable space is half of raw capacity only when n=2. RAID10 uses conventional paired mirrors; the tolerated count is guaranteed independently of a fortunate failure distribution. Filesystem capacity and specific controller requirements need separate checks.",
    "howToUse": [
      "Choose the array level.",
      "Enter the number of disks — RAID 10 needs an even count.",
      "Enter the size of a single disk in terabytes.",
      "Disks are assumed identical: an array levels down to its smallest one."
    ],
    "howItWorks": "For n equal disks of S decimal TB, raw capacity is nS. RAID0 gives nS with no redundancy; RAID1 gives S as n complete copies; RAID5 gives (n−1)S; RAID6 gives (n−2)S; RAID10 gives nS/2 for even n≥4 with paired mirrors. This tool’s minima are one disk for level 0 (a degenerate unstriped case), two for 1, three for 5 and four for 6. Guaranteed tolerable failures for a healthy synchronized array are respectively 0, n−1, 1, 2 and 1. These are not data-loss probabilities.",
    "example": "RAID 5 built from six 4 TB disks gives 20 TB usable out of 24 TB raw, or 83.33%.",
    "faq": [
      {
        "q": "Which level suits a home storage box?",
        "a": "Choice depends on capacity, availability, writes, rebuilds and backups. This page compares ideal capacities and tolerated failure counts; it does not calculate rebuild probability or recommend a level from disk count."
      },
      {
        "q": "What happens with disks of different sizes?",
        "a": "The array levels down to the smallest one: an 8 TB disk paired with a 4 TB disk contributes only 4 TB. That is why the calculation assumes identical disks."
      },
      {
        "q": "Why does RAID 10 show only one tolerated failure?",
        "a": "That is the guaranteed figure. The array can survive half its disks if the failures land in different mirrors, but two failures inside one mirror destroy it at any size — a lucky distribution cannot be promised."
      },
      {
        "q": "Does RAID replace a backup?",
        "a": "No. RAID protects against a disk failing, not against a deleted file, ransomware, fire or theft — all of which hit the whole array equally. A backup is a separate requirement."
      },
      {
        "q": "Why does the manufacturer promise more terabytes than the system shows?",
        "a": "Manufacturers count a terabyte as 10¹² bytes while the system displays tebibytes of 2⁴⁰ bytes. The gap is about 9% and has nothing to do with the array level."
      }
    ],
    "disclaimer": "Educational RAID layouts with equal synchronized disks. Actual implementations, metadata, rebuilds, latent read errors and backups are not modelled. Interface minima are not universal controller requirements."
  },
  "uk": {
    "shortDescription": "Корисна ємність RAID-масиву, запас на відмови та ефективність рівня.",
    "seoDescription": "Розрахуйте корисну ємність RAID 0, 1, 5, 6 і 10, запас на відмови дисків та ефективність використання.",
    "longDescription": "Порівнює ідеальну корисну ємність п’яти RAID-моделей для однакових дисків. RAID1 тут зберігає повну копію на кожному з n дисків: половина сирої ємності виходить лише за n=2. Для RAID10 використано звичайні парні дзеркала; показано гарантовану кількість відмов незалежно від їх вдалого розподілу. Ємність файлової системи та вимоги контролера перевіряються окремо.",
    "howToUse": [
      "Виберіть рівень RAID.",
      "Введіть кількість дисків і ємність одного.",
      "Прочитайте корисну ємність і частку від сирої."
    ],
    "howItWorks": "Для n однакових дисків по S десяткових TB сира ємність дорівнює nS. RAID0 дає nS без надлишковості; RAID1 — S як n повних копій; RAID5 — (n−1)S; RAID6 — (n−2)S; RAID10 — nS/2 за парного n≥4 і парних дзеркал. Мінімуми цього інструмента: 0 — один диск (вироджений випадок без чергування), 1 — два, 5 — три, 6 — чотири. Гарантовані відмови для справного синхронізованого масиву: відповідно 0, n−1, 1, 2 та 1. Це не ймовірності втрати даних.",
    "example": "RAID 5 із шести дисків по 4 ТБ дає 20 ТБ корисної ємності з 24 ТБ сирої, тобто 83,33 %.",
    "faq": [
      {
        "q": "Чи замінює RAID резервну копію?",
        "a": "Ні. Надлишкові рівні можуть пережити визначені відмови дисків, але не повертають видалені або зашифровані файли. RAID0 не має такої надлишковості. Окрема резервна копія потрібна незалежно від цього розрахунку."
      },
      {
        "q": "Чому RAID 6, якщо є RAID 5?",
        "a": "У цій ідеальній моделі RAID5 переносить одну відмову, RAID6 — дві завдяки двом еквівалентам ємності під паритет. Ризик відмов під час відновлення тут не оцінюється й не оголошується найбільшим саме в цей момент."
      },
      {
        "q": "Що обрати для дому?",
        "a": "Інструмент не обирає рівень для дому. Порівнюйте потрібну ємність, підтримку контролера, доступність, відновлення й окреме резервне копіювання. RAID0 не забезпечує надлишковості; це не прогноз того, які дані фізично залишаться після відмови."
      },
      {
        "q": "Чи можна змішувати диски різного обсягу?",
        "a": "Технічно так, але ємність вирівнюється за найменшим. Диск на 8 ТБ у масиві з дисками на 4 ТБ працюватиме як чотиритерабайтний."
      }
    ],
    "disclaimer": "Навчальні RAID-схеми однакових синхронізованих дисків. Реалізації, службовий обсяг, відновлення, приховані помилки читання й резервні копії не моделюються. Мінімуми інтерфейсу не універсальні для контролерів."
  },
  "de": {
    "shortDescription": "Nutzbare Kapazität eines RAID-Verbunds, seine Ausfallsicherheit und die Effizienz jeder Stufe.",
    "seoDescription": "Berechne die nutzbare Kapazität von RAID 0, 1, 5, 6 und 10, die verkraftbaren Plattenausfälle und die Effizienz jeder Stufe.",
    "longDescription": "Vergleicht die ideale Nutzkapazität von fünf RAID-Modellen mit gleichen Laufwerken. RAID1 speichert hier eine vollständige Kopie auf jedem der n Laufwerke; die Hälfte der Rohkapazität bleibt nur bei n=2 nutzbar. RAID10 verwendet übliche Spiegelpaare; die Ausfallzahl ist unabhängig von einer günstigen Verteilung garantiert. Dateisystemkapazität und Controlleranforderungen sind gesondert zu prüfen.",
    "howToUse": [
      "Wähle die Stufe des Verbunds.",
      "Trage die Zahl der Platten ein — RAID 10 braucht eine gerade Zahl.",
      "Trage die Größe einer einzelnen Platte in Terabyte ein.",
      "Es wird von gleichen Platten ausgegangen: ein Verbund richtet sich nach seiner kleinsten."
    ],
    "howItWorks": "Bei n gleichen Laufwerken mit je S dezimalen TB beträgt die Rohkapazität nS. RAID0 ergibt nS ohne Redundanz; RAID1 ergibt S als n vollständige Kopien; RAID5 (n−1)S; RAID6 (n−2)S; RAID10 nS/2 bei geradem n≥4 und paarweisen Spiegeln. Die Mindestzahlen dieses Werkzeugs sind ein Laufwerk für 0 (degenerierter Fall ohne Striping), zwei für 1, drei für 5 und vier für 6. Garantiert tolerierte Ausfälle eines intakten synchronisierten Arrays sind 0, n−1, 1, 2 bzw. 1, keine Datenverlustwahrscheinlichkeiten.",
    "example": "RAID 5 aus sechs Platten zu 4 TB ergibt 20 TB nutzbar von 24 TB roh, also 83,33 %.",
    "faq": [
      {
        "q": "Welche Stufe passt zu einem Speicher für zu Hause?",
        "a": "Die Wahl hängt von Kapazität, Verfügbarkeit, Schreiblast, Wiederaufbau und Backups ab. Hier werden ideale Kapazitäten und tolerierte Ausfälle verglichen, keine Wiederaufbauwahrscheinlichkeit oder Empfehlung nach Laufwerkszahl."
      },
      {
        "q": "Was passiert bei Platten verschiedener Größe?",
        "a": "Der Verbund richtet sich nach der kleinsten: eine 8-TB-Platte neben einer 4-TB-Platte steuert nur 4 TB bei. Deshalb geht die Rechnung von gleichen Platten aus."
      },
      {
        "q": "Warum zeigt RAID 10 nur einen verkraftbaren Ausfall?",
        "a": "Das ist die garantierte Zahl. Der Verbund kann die Hälfte seiner Platten überleben, wenn die Ausfälle in verschiedene Spiegel fallen, aber zwei Ausfälle in einem Spiegel zerstören ihn bei jeder Größe — eine glückliche Verteilung lässt sich nicht zusagen."
      },
      {
        "q": "Ersetzt RAID eine Sicherung?",
        "a": "Nein. RAID schützt gegen den Ausfall einer Platte, nicht gegen eine gelöschte Datei, Erpressungssoftware, Feuer oder Diebstahl — die treffen den ganzen Verbund gleichermaßen. Eine Sicherung ist eine eigene Anforderung."
      },
      {
        "q": "Warum verspricht der Hersteller mehr Terabyte, als das System zeigt?",
        "a": "Hersteller zählen ein Terabyte als 10¹² Byte, das System zeigt Tebibyte zu 2⁴⁰ Byte. Der Abstand liegt bei rund 9 % und hat mit der Stufe des Verbunds nichts zu tun."
      }
    ],
    "disclaimer": "Lehrmodelle mit gleichen synchronisierten Laufwerken. Implementierungen, Metadaten, Wiederaufbau, latente Lesefehler und Backups werden nicht modelliert. Die Mindestzahlen gelten nicht universell für Controller."
  },
  "es": {
    "shortDescription": "Capacidad aprovechable de un conjunto RAID, su tolerancia a fallos y la eficiencia de cada nivel.",
    "seoDescription": "Calcula la capacidad aprovechable de RAID 0, 1, 5, 6 y 10, los fallos de disco tolerados y la eficiencia de cada nivel.",
    "longDescription": "Compara la capacidad útil ideal de cinco modelos RAID con discos iguales. RAID1 guarda una copia completa en cada uno de n discos: la mitad de la capacidad bruta solo resulta con n=2. RAID10 usa parejas de espejos convencionales; el recuento de fallos es garantizado sin depender de una distribución favorable. La capacidad del sistema de archivos y los requisitos del controlador deben comprobarse aparte.",
    "howToUse": [
      "Elige el nivel del conjunto.",
      "Introduce el número de discos: RAID 10 exige una cantidad par.",
      "Introduce el tamaño de un solo disco en terabytes.",
      "Se supone que los discos son idénticos: un conjunto se nivela por el más pequeño."
    ],
    "howItWorks": "Con n discos iguales de S TB decimales, la capacidad bruta es nS. RAID0 da nS sin redundancia; RAID1 da S con n copias completas; RAID5 da (n−1)S; RAID6 da (n−2)S; RAID10 da nS/2 con n par≥4 y espejos por parejas. Los mínimos de esta herramienta son un disco para 0 (caso degenerado sin distribución), dos para 1, tres para 5 y cuatro para 6. Los fallos garantizados en un conjunto sano y sincronizado son 0, n−1, 1, 2 y 1, respectivamente; no son probabilidades de pérdida.",
    "example": "Un RAID 5 formado con seis discos de 4 TB da 20 TB aprovechables de 24 TB brutos, es decir, un 83,33 %.",
    "faq": [
      {
        "q": "¿Qué nivel va bien en un almacenamiento doméstico?",
        "a": "La elección depende de capacidad, disponibilidad, escritura, reconstrucción y copias. Esta página compara capacidades ideales y fallos tolerados; no calcula probabilidades de reconstrucción ni recomienda un nivel por la cantidad de discos."
      },
      {
        "q": "¿Qué ocurre con discos de distinto tamaño?",
        "a": "El conjunto se nivela por el más pequeño: un disco de 8 TB emparejado con uno de 4 TB aporta solo 4 TB. Por eso el cálculo supone discos idénticos."
      },
      {
        "q": "¿Por qué RAID 10 muestra solo un fallo tolerado?",
        "a": "Es la cifra garantizada. El conjunto puede sobrevivir a la mitad de sus discos si los fallos caen en espejos distintos, pero dos fallos dentro de un mismo espejo lo destruyen con cualquier tamaño: una distribución afortunada no puede prometerse."
      },
      {
        "q": "¿RAID sustituye a una copia de seguridad?",
        "a": "No. RAID protege frente al fallo de un disco, no frente a un archivo borrado, un secuestro de datos, un incendio o un robo, que golpean por igual a todo el conjunto. Una copia de seguridad es un requisito aparte."
      },
      {
        "q": "¿Por qué el fabricante promete más terabytes de los que muestra el sistema?",
        "a": "Los fabricantes cuentan un terabyte como 10¹² bytes mientras que el sistema muestra tebibytes de 2⁴⁰ bytes. La diferencia ronda el 9 % y no tiene nada que ver con el nivel del conjunto."
      }
    ],
    "disclaimer": "Modelos educativos con discos iguales sincronizados. No modelan implementaciones, metadatos, reconstrucción, errores latentes ni copias. Los mínimos de la interfaz no son requisitos universales de controladores."
  }
};
