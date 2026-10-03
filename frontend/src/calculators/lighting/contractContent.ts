import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Оценивает суммарные люмены и целое число одинаковых ламп для площади и выбранных люксов. Поток лампы берётся с упаковки; доля сохраняющегося света увеличивает требуемый начальный поток при снижении света со временем. Это упрощённая связь люменов с площадью при использовании света, принятом за 100%. Она помогает сравнить комплекты ламп, но не рассчитывает распределение и не гарантирует освещённость на рабочем столе.",
    "howToUse": [
      "Введите площадь пола комнаты.",
      "Выберите освещённость, к которой стремитесь.",
      "Введите поток одной лампы в люменах — он указан на коробке.",
      "Задайте долю сохраняющегося света 0,4–1 для своего сценария; это отдельное допущение, а не компенсация всех потерь распределения."
    ],
    "howItWorks": "Упрощённая оценка потока Φ=A×E/f люмен, где A — площадь, E — выбранная освещённость в люксах, f — доля сохраняющегося света 0,4..1. Ламп N=ceil(Φ/φ), установленный поток N×φ. Коэффициент использования света принят равным 1: распределение, отражения, рабочая плоскость и фактические люксы не рассчитываются. Целое N округляется вверх, но достижение нормы этим не гарантируется.",
    "example": "18 м² при 150 лк лампами по 800 лм с коэффициентом 0,8 требуют 3 375 лм, то есть пять ламп. На 1 м² при 50 лк, f=1 и лампе 1000 лм расчётный поток 50 лм, но целое число ламп 1 и установленный поток 1000 лм.",
    "faq": [
      {
        "q": "К какой освещённости стремиться?",
        "a": "Выберите целевую освещённость под конкретную задачу.150 лк здесь — сохранённый пример, не универсальная норма комнаты. Требования зависят от рабочей поверхности и применимого стандарта; итог проверяют измерением или светотехническим расчётом."
      },
      {
        "q": "Зачем коэффициент запаса?",
        "a": "Поле содержит долю сохраняющегося света, а не множитель больше единицы. При 0,8 исходная потребность делится на 0,8 и растёт на 25%. Фактор не учитывает, сколько света действительно попадёт на рабочую плоскость, и не обеспечивает норму сам по себе."
      },
      {
        "q": "Имеет ли значение высота потолка?",
        "a": "Да, для реального распределения важны расстояние до рабочей плоскости и характеристики светильника. Высоты здесь нет, поэтому калькулятор не компенсирует высокий потолок автоматически. Не заменяйте отдельный светотехнический расчёт произвольным процентом."
      },
      {
        "q": "Влияет ли цвет стен и потолка?",
        "a": "Да. Отражение поверхностей меняет долю потока на нужной плоскости. Коэффициент использования в этой прикидке равен 1 и эти свойства не рассчитывает. Для тёмных поверхностей и направленного света проверьте распределение отдельно."
      },
      {
        "q": "Можно ли смешивать разные лампы?",
        "a": "Да: сложите люмены разных ламп вручную и сравните с оценкой потока. Число ламп в результате относится к одинаковым лампам указанного потока. Одна сумма люменов не определяет распределение люксов."
      }
    ]
  },
  "en": {
    "longDescription": "Estimate total lumens and whole identical lamps for an area and selected lux. Use the lamp output from its package; a retained-light factor raises initial flux to allow for reduced light over time. This simplified relation assumes 100% utilisation. It compares lamp sets without calculating distribution or guaranteeing illuminance at your work surface.",
    "howToUse": [
      "Enter the floor area of the room.",
      "Choose the illuminance you are aiming for.",
      "Enter the output of one lamp in lumens — it is on the box.",
      "Set a retained-light fraction 0.4–1 for your scenario; it is a separate assumption, not compensation for all distribution losses."
    ],
    "howItWorks": "Simplified flux estimate Φ=A×E/f lumens, with area A, selected illuminance E lux and retained-light factor f from 0.4 to 1. Lamps N=ceil(Φ/φ); installed flux N×φ. Utilisation is assumed 1: beam distribution, reflections, working plane and measured lux are not calculated. N rounds up to whole lamps without guaranteeing compliance with the illuminance target.",
    "example": "18 m² at 150 lx with 800 lm lamps and a 0.8 factor needs 3,375 lm, which is five lamps. For 1 m² at 50 lx, f=1 and a 1000 lm lamp, estimated flux is 50 lm but whole lamp count 1 and installed flux 1000 lm.",
    "faq": [
      {
        "q": "What illuminance should I aim for?",
        "a": "Choose a target for the actual task. The retained 150 lux is an example, not a universal room requirement. Requirements depend on the work surface and applicable standard; verify the result by measurement or lighting design."
      },
      {
        "q": "What is the maintenance factor for?",
        "a": "The field is the retained fraction of light, not a multiplier above one. With 0.8 the required initial flux is divided by 0.8, increasing 25%. It does not determine how much reaches the work plane or ensure compliance on its own."
      },
      {
        "q": "Does the ceiling height matter?",
        "a": "Yes: actual distribution depends on distance to the work plane and luminaire characteristics. Height is absent here, so a high ceiling is not automatically compensated. An arbitrary percentage is no substitute for a lighting calculation."
      },
      {
        "q": "Do wall and ceiling colours matter?",
        "a": "Yes. Surface reflectance changes the flux reaching the relevant plane. This estimate fixes utilisation at 1 and does not calculate those properties. Check distribution separately for dark surfaces and directional light."
      },
      {
        "q": "Can I mix different lamps?",
        "a": "Yes: add their lumens manually and compare with the estimated flux. The displayed lamp count assumes identical lamps at the entered output. A lumen sum alone does not determine lux distribution."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Оцінює сумарні люмени й ціле число однакових ламп для площі та обраних люксів. Потік береться з упаковки; частка збереженого світла підвищує початкову потребу з урахуванням зменшення світла з часом. Спрощений зв’язок люменів із площею припускає 100% використання. Він порівнює набори ламп, але не рахує розподіл і не гарантує люкси на робочій поверхні.",
    "howToUse": [
      "Введіть площу підлоги кімнати.",
      "Оберіть освітленість, до якої прагнете.",
      "Введіть потік однієї лампи в люменах — він указаний на коробці.",
      "Задайте частку збереженого світла 0,4–1 для свого сценарію; це окреме припущення, не компенсація всіх втрат розподілу."
    ],
    "howItWorks": "Спрощена оцінка потоку Φ=A×E/f люменів, де A — площа, E — обрана освітленість у люксах, f — частка збереженого світла 0,4..1. Ламп N=ceil(Φ/φ), встановлений потік N×φ. Коефіцієнт використання прийнятий за 1: розподіл, відбиття, робоча площина й виміряні люкси не рахуються. N округлюється вгору без гарантії дотримання норми.",
    "example": "18 м² за 150 лк лампами по 800 лм з коефіцієнтом 0,8 потребують 3 375 лм, тобто п’ять ламп. Для 1 м² за 50 лк, f=1 і лампи 1000 лм розрахунковий потік 50 лм, ціла лампа 1, встановлений потік 1000 лм.",
    "faq": [
      {
        "q": "До якої освітленості прагнути?",
        "a": "Оберіть ціль під конкретне завдання. Збережені 150 лк — приклад, не універсальна норма кімнати. Вимоги залежать від робочої поверхні та застосовного стандарту; результат перевіряють вимірюванням або світлотехнічним розрахунком."
      },
      {
        "q": "Навіщо коефіцієнт запасу?",
        "a": "Поле задає частку збереженого світла, а не множник понад одиницю. За 0,8 початкова потреба ділиться на 0,8 і росте на 25%. Це не частка потоку, що дійде до робочої площини, і не гарантія норми."
      },
      {
        "q": "Чи має значення висота стелі?",
        "a": "Так: реальний розподіл залежить від відстані до робочої площини й характеристик світильника. Висоти тут немає, тому висока стеля автоматично не компенсується. Довільний відсоток не замінює світлотехнічного розрахунку."
      },
      {
        "q": "Чи впливає колір стін і стелі?",
        "a": "Так. Відбиття поверхонь змінює потік на потрібній площині. Коефіцієнт використання в цій прикидці дорівнює 1 й не рахує цих властивостей. Для темних поверхонь і спрямованого світла окремо перевірте розподіл."
      },
      {
        "q": "Чи можна змішувати різні лампи?",
        "a": "Так: складіть люмени різних ламп вручну й порівняйте з оцінкою потоку. Число ламп у результаті стосується однакових ламп введеного потоку. Сама сума люменів не визначає розподілу люксів."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте вихідні дані."
  },
  "de": {
    "longDescription": "Schätzt Gesamtlichtstrom und ganze gleiche Leuchtmittel für Fläche und gewählte Lux. Der Lampenstrom steht auf der Packung; der verbleibende Lichtanteil erhöht den benötigten Anfangsstrom für Lichtverlust über die Zeit. Diese vereinfachte Beziehung setzt 100% Nutzungsgrad voraus. Sie vergleicht Lampensätze, berechnet aber weder Verteilung noch garantierte Lux am Arbeitsplatz.",
    "howToUse": [
      "Trage die Grundfläche des Raumes ein.",
      "Wähle die Beleuchtungsstärke, die du anstrebst.",
      "Trage den Lichtstrom eines Leuchtmittels in Lumen ein — er steht auf der Verpackung.",
      "Verbleibenden Lichtanteil 0,4–1 für das Szenario angeben; separate Annahme, kein Ausgleich aller Verteilungsverluste."
    ],
    "howItWorks": "Vereinfachte Lichtstromschätzung Φ=A×E/f Lumen mit Fläche A, gewählten E Lux und verbleibendem Lichtanteil f von 0,4 bis 1. Leuchtmittel N=ceil(Φ/φ), installierter Strom N×φ. Der Nutzungsgrad wird mit 1 angenommen: Verteilung, Reflexionen, Arbeitsebene und gemessene Lux werden nicht berechnet. N wird ganz aufgerundet, garantiert aber keine Normerfüllung.",
    "example": "18 m² bei 150 lx mit Leuchtmitteln zu 800 lm und einem Faktor von 0,8 brauchen 3375 lm, also fünf Leuchtmittel. 1 m² bei 50 lx, f=1 und 1000-lm-Leuchtmittel: Schätzung 50 lm, ganze Anzahl 1, installierter Strom 1000 lm.",
    "faq": [
      {
        "q": "Welche Beleuchtungsstärke soll ich anstreben?",
        "a": "Ziel für die konkrete Tätigkeit wählen. Die erhaltenen 150 Lux sind ein Beispiel, keine allgemeine Raumnorm. Anforderungen hängen von Arbeitsebene und geltender Vorgabe ab; Ergebnis messen oder lichttechnisch berechnen."
      },
      {
        "q": "Wozu der Wartungsfaktor?",
        "a": "Das Feld enthält den verbleibenden Lichtanteil, keinen Faktor größer eins. Bei 0,8 wird der Anfangsbedarf durch 0,8 geteilt und steigt 25%. Der Faktor bestimmt nicht das Licht auf der Arbeitsebene und garantiert allein keine Normerfüllung."
      },
      {
        "q": "Spielt die Raumhöhe eine Rolle?",
        "a": "Ja: Tatsächliche Verteilung hängt von Abstand zur Arbeitsebene und Leuchte ab. Höhe ist hier kein Eingang; hohe Decken werden nicht automatisch ausgeglichen. Ein beliebiger Prozentsatz ersetzt keine Lichtberechnung."
      },
      {
        "q": "Spielen Wand- und Deckenfarben eine Rolle?",
        "a": "Ja. Oberflächenreflexion verändert den Lichtstrom auf der Bezugsebene. Diese Abschätzung setzt den Nutzungsgrad auf 1 und berechnet diese Eigenschaften nicht. Bei dunklen Flächen und gerichtetem Licht die Verteilung gesondert prüfen."
      },
      {
        "q": "Kann ich verschiedene Leuchtmittel mischen?",
        "a": "Ja: Lumen verschiedener Lampen von Hand addieren und mit der Schätzung vergleichen. Die Anzahl gilt für gleiche Lampen mit eingegebenem Lichtstrom. Eine Lumensumme bestimmt allein keine Luxverteilung."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Estima lúmenes totales y lámparas iguales enteras para superficie y lux elegidos. El flujo está en el envase; el factor de luz conservada aumenta el flujo inicial para prever reducción con el tiempo. Esta relación simplificada supone 100% de utilización. Compara conjuntos de lámparas sin calcular distribución ni garantizar lux en la superficie de trabajo.",
    "howToUse": [
      "Introduce la superficie de la habitación.",
      "Elige la iluminancia que buscas.",
      "Introduce el flujo de una lámpara en lúmenes: viene en la caja.",
      "Fija una fracción de luz conservada 0,4–1 para tu escenario; es un supuesto separado, no compensa todas las pérdidas de distribución."
    ],
    "howItWorks": "Estimación simplificada de flujo Φ=A×E/f lúmenes, con superficie A, iluminancia elegida E lux y fracción conservada f de 0,4 a 1. Lámparas N=ceil(Φ/φ), flujo instalado N×φ. Se supone utilización 1: distribución, reflexiones, plano de trabajo y lux medidos no se calculan. N se redondea a lámparas enteras sin garantizar la norma.",
    "example": "18 m² con 150 lx, lámparas de 800 lm y un factor de 0,8 necesitan 3375 lm, es decir, cinco lámparas. 1 m² a 50 lx, f=1 y lámpara 1000 lm: flujo estimado 50 lm, una lámpara entera y flujo instalado 1000 lm.",
    "faq": [
      {
        "q": "¿Qué iluminancia debo buscar?",
        "a": "Elige una meta para la tarea concreta. Los 150 lux conservados son un ejemplo, no una norma universal de habitación. Depende de superficie de trabajo y norma aplicable; verifica con medición o diseño lumínico."
      },
      {
        "q": "¿Para qué sirve el factor de mantenimiento?",
        "a": "El campo es la fracción de luz conservada, no un multiplicador mayor que uno. Con 0,8 el flujo inicial se divide entre 0,8 y aumenta 25%. No calcula cuánto llega al plano de trabajo ni garantiza cumplimiento por sí solo."
      },
      {
        "q": "¿Influye la altura del techo?",
        "a": "Sí: la distribución real depende de distancia al plano de trabajo y características de la luminaria. Aquí no hay altura, por lo que no se compensa un techo alto automáticamente. Un porcentaje arbitrario no sustituye el cálculo lumínico."
      },
      {
        "q": "¿Influyen los colores de las paredes y el techo?",
        "a": "Sí. La reflectancia cambia el flujo que llega al plano pertinente. Esta estimación fija utilización en 1 sin calcular esas propiedades. Comprueba la distribución por separado con superficies oscuras o luz direccional."
      },
      {
        "q": "¿Puedo mezclar lámparas distintas?",
        "a": "Sí: suma manualmente sus lúmenes y compáralos con el flujo estimado. La cantidad mostrada supone lámparas iguales del flujo introducido. Sumar lúmenes no determina por sí solo la distribución de lux."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
