// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Размер записи по битрейту видео и звука — в гигабайтах и в мебибайтах.",
    "seoDescription": "Рассчитайте размер видеофайла по битрейту видео и звука и длительности записи — в гигабайтах, мегабайтах и мебибайтах.",
    "longDescription": "Оценивает размер заданных видеопотока и аудиопотока по их среднему битрейту и длительности. Скорости сначала приводятся к одной шкале и складываются, затем биты переводятся в байты. Результат показывается в десятичных GB/MB и двоичных MiB. Это разные записи одного объёма; поведение конкретной ОС не входит в модель.",
    "howToUse": [
      "Введите битрейт видео — он задаётся в настройках камеры или кодировщика.",
      "Укажите битрейт звуковой дорожки, обычно от 96 до 320 кбит/с.",
      "Введите длительность записи в минутах.",
      "Сравните гигабайты и мебибайты, если сверяетесь с проводником."
    ],
    "howItWorks": "Общий битрейт в bit/s = videoMbps·10⁶ + audioKbps·10³. Размер в байтах = общий битрейт·минуты·60/8. GB=10⁹ байт, MB=10⁶ байт, MiB=2²⁰ байт; двоичная строка — MiB, не GiB. Видео и длительность положительные, звук может быть 0 для записи без аудио. Для VBR используйте средние битрейты за ту же длительность. Служебные данные контейнера и дополнительные дорожки сюда автоматически не добавляются.",
    "example": "Десять минут при 8 Мбит/с видео и 128 кбит/с звука занимают 0,6096 ГБ, то есть 581,36 МиБ в проводнике.",
    "faq": [
      {
        "q": "Почему размер отличается от того, что показывает проводник?",
        "a": "Windows считает гигабайтом 2³⁰ байт, а битрейт и накопители — 10⁹. Поэтому одна и та же запись показана и как 0,6096 ГБ, и как 581,36 МиБ."
      },
      {
        "q": "Нужно ли учитывать звук отдельно?",
        "a": "Он уже учтён: битрейты складываются до перевода в байты. За час записи дорожка в 128 кбит/с добавляет почти 58 МБ."
      },
      {
        "q": "Подходит ли расчёт для переменного битрейта?",
        "a": "Приблизительно. При VBR введите средний битрейт, который показывает кодировщик, — итог будет близким, но не точным до байта."
      },
      {
        "q": "Что такое контейнерные накладные расходы?",
        "a": "Метаданные MP4/MKV, индексы, субтитры и дополнительные дорожки зависят от контейнера и файла. Универсального процента накладных расходов здесь нет. Формула оценивает только заданные потоки."
      },
      {
        "q": "Как выбрать битрейт под нужный размер?",
        "a": "При неизменном звуке уменьшение только видеобитрейта вдвое не делит весь файл пополам: (4+0,128)/(8+0,128)≈0,50787. Вдвое меньшая длительность или вдвое меньший суммарный битрейт дают половину модельного размера."
      }
    ],
    "disclaimer": "Модель среднего суммарного битрейта заданных аудио/видеопотоков. Не выбирает кодек или качество и не учитывает автоматически контейнер, субтитры и дополнительные дорожки."
  },
  "en": {
    "shortDescription": "Recording size from video and audio bitrate — in gigabytes and mebibytes.",
    "seoDescription": "Calculate a video file size from the video and audio bitrate and the recording length — in gigabytes, megabytes and mebibytes.",
    "longDescription": "Estimate the supplied video and audio streams from their mean bitrates and duration. Rates are first converted to one scale and added, then bits are converted to bytes. The output uses decimal GB/MB and binary MiB. These are different representations of one volume; operating-system display behaviour is not part of the model.",
    "howToUse": [
      "Enter the video bitrate — it is set in the camera or the encoder.",
      "Enter the audio bitrate, usually between 96 and 320 kbit/s.",
      "Enter the length of the recording in minutes.",
      "Compare gigabytes with mebibytes if you are checking against Explorer."
    ],
    "howItWorks": "Total bitrate in bit/s = videoMbps·10⁶ + audioKbps·10³. Bytes = total bitrate·minutes·60/8. GB=10⁹ bytes, MB=10⁶ bytes and MiB=2²⁰ bytes; the binary row is MiB, not GiB. Video rate and duration are positive; audio may be 0 for a silent recording. For VBR use average rates over the same duration. Container data and extra tracks are not added automatically.",
    "example": "Ten minutes at 8 Mbit/s video and 128 kbit/s audio takes 0.6096 GB, shown as 581.36 MiB in Explorer.",
    "faq": [
      {
        "q": "Why does the size differ from what Explorer shows?",
        "a": "Windows treats a gigabyte as 2³⁰ bytes, while bitrate and storage use 10⁹. The same recording is therefore both 0.6096 GB and 581.36 MiB."
      },
      {
        "q": "Does audio need counting separately?",
        "a": "It is already counted: the bitrates are summed before the conversion to bytes. Over an hour, a 128 kbit/s track adds almost 58 MB."
      },
      {
        "q": "Does this work for variable bitrate?",
        "a": "Approximately. For VBR enter the average bitrate the encoder reports — the result will be close, though not exact to the byte."
      },
      {
        "q": "What about container overhead?",
        "a": "MP4/MKV metadata, indexes, subtitles and extra tracks depend on the container and file. There is no universal overhead percentage here. The formula estimates only the supplied streams."
      },
      {
        "q": "How do I pick a bitrate for a target size?",
        "a": "Halving only the video rate while audio stays fixed does not halve the whole file: (4+0.128)/(8+0.128)≈0.50787. Halving duration or the total bitrate halves the modelled size."
      }
    ],
    "disclaimer": "Mean total-bitrate model for the supplied audio/video streams. It does not select codec or quality and does not automatically include container data, subtitles or extra tracks."
  },
  "uk": {
    "shortDescription": "Розмір запису за бітрейтом відео та звуку — у гігабайтах і мебібайтах.",
    "seoDescription": "Розрахуйте розмір відеофайлу за бітрейтом відео та звуку і тривалістю запису — у гігабайтах, мегабайтах і мебібайтах.",
    "longDescription": "Оцінює задані відео- й аудіопотоки за середніми бітрейтами та тривалістю. Швидкості спочатку приводяться до однієї шкали й додаються, потім біти переводяться в байти. Результат подано в десяткових GB/MB та двійкових MiB. Це різні записи одного обсягу; відображення конкретної ОС не входить у модель.",
    "howToUse": [
      "Введіть середній відеобітрейт у Mbit/s і аудіобітрейт у kbit/s.",
      "Введіть додатну тривалість у хвилинах; для запису без звуку задайте аудіо 0.",
      "Прочитайте обсяг у десяткових GB/MB та двійкових MiB; службові дані контейнера додайте окремо."
    ],
    "howItWorks": "Загальний бітрейт у bit/s = videoMbps·10⁶ + audioKbps·10³. Байти = загальний бітрейт·хвилини·60/8. GB=10⁹ байтів, MB=10⁶ байтів, MiB=2²⁰ байтів; двійковий рядок — MiB, не GiB. Відео й тривалість додатні, звук може бути 0 для запису без аудіо. Для VBR введіть середні бітрейти за ту саму тривалість. Дані контейнера й додаткові доріжки автоматично не додаються.",
    "example": "Десять хвилин за 8 Мбіт/с відео і 128 кбіт/с звуку займають 0,6096 ГБ, тобто 581,36 МіБ у провіднику.",
    "faq": [
      {
        "q": "Який бітрейт обрати?",
        "a": "Візьміть налаштований бітрейт кодувальника або виміряний середній для свого матеріалу. Роздільна здатність і назва кодека не задають універсальних чисел чи гарантованого співвідношення якості."
      },
      {
        "q": "Чому провідник показує інше число?",
        "a": "Порівнюйте однакові одиниці: GB=10⁹ байтів, MiB=2²⁰ байтів. Тут двійковий результат саме в MiB. Для прикладу 0,6096GB і 581,36MiB описують ті самі 609 600 000 байтів."
      },
      {
        "q": "Чи впливає роздільна здатність напряму?",
        "a": "Ні, розмір визначає бітрейт. Але для більшої роздільної здатності потрібен і більший бітрейт, інакше з’являться артефакти — звідси й непрямий зв’язок."
      },
      {
        "q": "Чим змінний бітрейт відрізняється від сталого?",
        "a": "VBR змінює швидкість у часі. Розмір визначається її середнім за повною тривалістю; сам факт VBR не гарантує певної якості чи економії. Контейнер і додаткові доріжки оцінюються окремо."
      }
    ],
    "disclaimer": "Модель середнього сумарного бітрейту заданих аудіо/відеопотоків. Не обирає кодек чи якість і не враховує автоматично контейнер, субтитри та додаткові доріжки."
  },
  "de": {
    "shortDescription": "Größe einer Aufnahme aus Video- und Tonbitrate — in Gigabyte und Mebibyte.",
    "seoDescription": "Berechne die Größe einer Videodatei aus Video- und Tonbitrate und der Länge der Aufnahme — in Gigabyte, Megabyte und Mebibyte.",
    "longDescription": "Schätzt die angegebenen Video- und Audioströme anhand mittlerer Bitraten und Dauer. Die Raten werden auf dieselbe Skala gebracht und addiert, danach Bits in Bytes umgerechnet. Ausgegeben werden dezimale GB/MB und binäre MiB. Das sind Darstellungen desselben Volumens; die Anzeige einer bestimmten Betriebssystemversion wird nicht modelliert.",
    "howToUse": [
      "Trage die Videobitrate ein — sie wird in der Kamera oder im Encoder gesetzt.",
      "Trage die Tonbitrate ein, meist zwischen 96 und 320 kbit/s.",
      "Trage die Länge der Aufnahme in Minuten ein.",
      "Vergleiche Gigabyte mit Mebibyte, wenn du gegen den Dateimanager prüfst."
    ],
    "howItWorks": "Gesamtbitrate in bit/s = videoMbps·10⁶ + audioKbps·10³. Bytes = Gesamtbitrate·Minuten·60/8. GB=10⁹ Bytes, MB=10⁶ Bytes, MiB=2²⁰ Bytes; die binäre Zeile zeigt MiB, nicht GiB. Videorate und Dauer sind positiv, Audio darf für eine stumme Aufnahme 0 sein. Bei VBR sind mittlere Raten derselben Dauer einzugeben. Containerdaten und zusätzliche Spuren werden nicht automatisch ergänzt.",
    "example": "Zehn Minuten mit 8 Mbit/s Video und 128 kbit/s Ton brauchen 0,6096 GB, im Dateimanager angezeigt als 581,36 MiB.",
    "faq": [
      {
        "q": "Warum weicht die Größe von der Anzeige im Dateimanager ab?",
        "a": "Windows behandelt ein Gigabyte als 2³⁰ Byte, während Bitrate und Datenträger 10⁹ verwenden. Dieselbe Aufnahme sind deshalb sowohl 0,6096 GB als auch 581,36 MiB."
      },
      {
        "q": "Muss der Ton gesondert gezählt werden?",
        "a": "Er ist schon gezählt: die Bitraten werden vor der Umrechnung in Byte addiert. Über eine Stunde bringt eine Tonspur mit 128 kbit/s fast 58 MB hinzu."
      },
      {
        "q": "Funktioniert das bei variabler Bitrate?",
        "a": "Näherungsweise. Trage bei VBR die mittlere Bitrate ein, die der Encoder meldet — das Ergebnis liegt nah dran, wenn auch nicht auf das Byte genau."
      },
      {
        "q": "Und der Aufwand des Containers?",
        "a": "MP4/MKV-Metadaten, Indizes, Untertitel und zusätzliche Spuren hängen vom Container und der Datei ab. Hier gilt kein universeller Zuschlagsprozentsatz. Die Formel schätzt nur die angegebenen Datenströme."
      },
      {
        "q": "Wie wähle ich eine Bitrate für eine Zielgröße?",
        "a": "Wird nur die Videorate halbiert und Audio bleibt gleich, halbiert sich die Datei nicht: (4+0,128)/(8+0,128)≈0,50787. Halbe Dauer oder halbe Gesamtbitrate ergeben die halbe Modellgröße."
      }
    ],
    "disclaimer": "Modell der mittleren Gesamtbitrate der angegebenen Audio-/Videoströme. Es wählt keinen Codec oder Qualitätsgrad und berücksichtigt Container, Untertitel und zusätzliche Spuren nicht automatisch."
  },
  "es": {
    "shortDescription": "Tamaño de una grabación a partir de la tasa de bits de vídeo y de audio, en gigabytes y mebibytes.",
    "seoDescription": "Calcula el tamaño de un archivo de vídeo a partir de la tasa de bits de vídeo y de audio y la duración de la grabación, en gigabytes, megabytes y mebibytes.",
    "longDescription": "Estima los flujos de vídeo y audio indicados mediante sus bitrates medios y duración. Primero se convierten a la misma escala y se suman; después los bits pasan a bytes. El resultado usa GB/MB decimales y MiB binarios. Son representaciones del mismo volumen; la visualización de un sistema operativo no pertenece al modelo.",
    "howToUse": [
      "Introduce la tasa de bits de vídeo: se fija en la cámara o en el codificador.",
      "Introduce la tasa de bits de audio, normalmente entre 96 y 320 kbit/s.",
      "Introduce la duración de la grabación en minutos.",
      "Compara los gigabytes con los mebibytes si estás contrastando con el explorador."
    ],
    "howItWorks": "Bitrate total en bit/s = videoMbps·10⁶ + audioKbps·10³. Bytes = bitrate total·minutos·60/8. GB=10⁹ bytes, MB=10⁶ bytes y MiB=2²⁰ bytes; la fila binaria indica MiB, no GiB. Vídeo y duración son positivos; audio puede ser 0 para una grabación muda. Para VBR usa tasas medias de la misma duración. No se añaden automáticamente datos del contenedor ni pistas extra.",
    "example": "Diez minutos con vídeo a 8 Mbit/s y audio a 128 kbit/s ocupan 0,6096 GB, que el explorador muestra como 581,36 MiB.",
    "faq": [
      {
        "q": "¿Por qué el tamaño difiere del que muestra el explorador?",
        "a": "Windows trata un gigabyte como 2³⁰ bytes, mientras que la tasa de bits y el almacenamiento usan 10⁹. La misma grabación son por tanto 0,6096 GB y 581,36 MiB."
      },
      {
        "q": "¿Hay que contar el audio aparte?",
        "a": "Ya está contado: las tasas de bits se suman antes de la conversión a bytes. A lo largo de una hora, una pista de 128 kbit/s añade casi 58 MB."
      },
      {
        "q": "¿Vale para tasa de bits variable?",
        "a": "De forma aproximada. Para VBR introduce la tasa media que indique el codificador: el resultado será cercano, aunque no exacto al byte."
      },
      {
        "q": "¿Y la sobrecarga del contenedor?",
        "a": "Los metadatos MP4/MKV, índices, subtítulos y pistas extra dependen del contenedor y archivo. No hay un porcentaje universal de sobrecarga. La fórmula estima solo los flujos indicados."
      },
      {
        "q": "¿Cómo elijo una tasa de bits para un tamaño objetivo?",
        "a": "Dividir solo el bitrate de vídeo por dos, manteniendo el audio, no divide todo el archivo por dos: (4+0,128)/(8+0,128)≈0,50787. La mitad de duración o de bitrate total da la mitad del tamaño modelado."
      }
    ],
    "disclaimer": "Modelo del bitrate total medio de los flujos de audio/vídeo indicados. No selecciona códec ni calidad y no incluye automáticamente contenedor, subtítulos ni pistas extra."
  }
};
