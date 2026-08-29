import type { DeDetailedContent } from './types';

export const deLegacy3Content: Partial<Record<string, DeDetailedContent>> = {
  'bmi-calculator': {
    longDescription: 'Der Body-Mass-Index setzt das Gewicht ins Verhältnis zum Quadrat der Körpergröße und ordnet das Ergebnis den Bereichen der Weltgesundheitsorganisation zu. Er ist ein Reihenuntersuchungswert und keine Messung der Körperzusammensetzung: die Formel kennt nur zwei Zahlen und unterscheidet deshalb nicht zwischen Muskel und Fett. Genau daher weicht sie bei Kraftsportlern, Schwangeren und älteren Menschen ab, und ein einzelner Wert sagt weniger als sein Verlauf über Monate.',
    howToUse: [
      'Trage deine Körpergröße in Zentimetern ein.',
      'Trage dein Gewicht in Kilogramm ein.',
      'Lies den Wert zusammen mit dem Bereich, in den er fällt.',
    ],
    howItWorks: 'BMI = Gewicht in Kilogramm ÷ (Größe in Metern)². Die Grenzen folgen der WHO: unter 18,5 Untergewicht, 18,5 bis 25 Normalbereich, 25 bis 30 Übergewicht, darüber Adipositas in drei Graden.',
    example: 'Bei 180 cm und 78 kg ergibt sich ein BMI von 24,1 — der obere Teil des Normalbereichs.',
    faq: [
      { q: 'Wie genau ist der BMI?', a: 'Als Reihenuntersuchungswert für Erwachsene brauchbar, als Aussage über den Körper eines Einzelnen begrenzt. Er kennt nur Gewicht und Größe und unterscheidet nicht zwischen Muskel und Fett.' },
      { q: 'Warum stimmt er bei Sportlern nicht?', a: 'Muskelgewebe ist dichter als Fett. Ein trainierter Körper wiegt bei gleicher Größe mehr und landet rechnerisch im Übergewicht, obwohl der Körperfettanteil niedrig ist.' },
      { q: 'Gilt der BMI für Kinder?', a: 'Nicht in dieser Form. Für Kinder und Jugendliche gelten alters- und geschlechtsabhängige Perzentilkurven statt fester Grenzen.' },
      { q: 'Welcher BMI gilt als normal?', a: 'Die WHO setzt den Normalbereich bei 18,5 bis 25. Das sind statistische Grenzen für Bevölkerungen und keine persönliche Zielvorgabe.' },
      { q: 'Was sagt der BMI über die Gesundheit?', a: 'Für sich genommen wenig. Bauchumfang, Körperfettanteil, Blutwerte und Verlauf sagen mehr, und die Einordnung gehört zu einer ärztlichen Beurteilung.' },
    ],
  },
  'calorie-calculator': {
    longDescription: 'Schätzt den Grundumsatz nach Mifflin-St Jeor und rechnet ihn mit dem Aktivitätsfaktor auf den Tagesbedarf hoch. Beide Zahlen stehen getrennt, weil sie verschiedene Fragen beantworten: der Grundumsatz ist das, was der Körper in völliger Ruhe braucht, der Tagesbedarf das, was Bewegung daraus macht. Die Anpassung für das Ziel ist ein eigenes Feld statt einer festen Zahl — ein Defizit von zehn Prozent ist etwas anderes als eines von fünfundzwanzig, und die Entscheidung gehört dir. Eiweiß und Fett werden als Anteile vorgegeben, die Kohlenhydrate bleiben der Rest.',
    howToUse: [
      'Trage Geschlecht, Alter, Größe und Gewicht ein.',
      'Wähle den Aktivitätsfaktor ehrlich — die meisten überschätzen ihn.',
      'Wähle das Ziel und setze die Anpassung in Prozent.',
      'Setze die Anteile von Eiweiß und Fett; die Kohlenhydrate ergeben sich daraus.',
    ],
    howItWorks: 'Grundumsatz nach Mifflin-St Jeor: 10 × Gewicht + 6,25 × Größe − 5 × Alter, plus 5 bei Männern und minus 161 bei Frauen. Der Tagesbedarf ist der Grundumsatz mal dem Aktivitätsfaktor, danach um die gewählte Anpassung verschoben. Eiweiß und Kohlenhydrate liefern 4 kcal je Gramm, Fett 9.',
    example: 'Ein Mann von 30 Jahren mit 180 cm und 78 kg hat einen Grundumsatz von rund 1760 kcal und bei mittlerer Aktivität einen Tagesbedarf von etwa 2730 kcal.',
    faq: [
      { q: 'Welchen Aktivitätsfaktor soll ich wählen?', a: 'Meist einen niedrigeren, als man denkt. Der Faktor meint den ganzen Tag und nicht die Stunde im Studio: wer sitzend arbeitet und dreimal die Woche trainiert, liegt bei 1,375 bis 1,55.' },
      { q: 'Wie groß darf ein Defizit sein?', a: 'Ein Defizit von 10 bis 20 Prozent ist gut haltbar. Deutlich mehr kostet Muskeln und Leistungsfähigkeit; sehr niedrige Werte gehören in ärztliche oder ernährungsfachliche Begleitung.' },
      { q: 'Wie genau ist die Formel?', a: 'Mifflin-St Jeor trifft für die meisten Erwachsenen auf etwa zehn Prozent genau. Sie kennt die Körperzusammensetzung nicht, deshalb weicht sie bei sehr muskulösen oder sehr schweren Menschen stärker ab.' },
      { q: 'Warum bleiben die Kohlenhydrate der Rest?', a: 'Weil Eiweiß und Fett Mindestbedarfe haben und die Kohlenhydrate den Energiehaushalt ausgleichen. Sind beide Anteile gesetzt, ist der Rest festgelegt.' },
      { q: 'Soll ich den Wert nachjustieren?', a: 'Ja. Nimm ihn als Ausgangspunkt und korrigiere ihn nach dem Gewichtsverlauf über zwei bis drei Wochen — der eigene Verlauf schlägt jede Formel.' },
    ],
  },
  'body-fat-calculator': {
    longDescription: 'Schätzt den Körperfettanteil aus Umfängen nach der Methode der US Navy, der Regression von Hodgdon und Beckett. Männer rechnen über die Differenz von Taille und Hals, Frauen über Taille plus Hüfte minus Hals. Die ursprünglichen Koeffizienten sind in Zoll definiert, deshalb werden die eingetragenen Zentimeter zuerst umgerechnet und erst danach in die Formel gegeben. Der Logarithmus verlangt eine echt positive Differenz: ist die Taille nicht größer als der Hals, entsteht kein Ergebnis statt einer erfundenen Zahl.',
    howToUse: [
      'Wähle das Geschlecht — die Formeln unterscheiden sich vollständig.',
      'Trage die Körpergröße in Zentimetern ein.',
      'Miss Hals, Taille und bei Frauen die Hüfte mit locker anliegendem Maßband.',
      'Miss mehrmals zur gleichen Tageszeit und nimm den Mittelwert.',
    ],
    howItWorks: 'Die Umfänge werden in Zoll umgerechnet und in die Regression der US Navy gegeben. Bei Männern geht der Logarithmus der Differenz von Taille und Hals ein, bei Frauen der von Taille plus Hüfte minus Hals; die Körpergröße wirkt in beiden Fällen als Korrektur der Körpergröße.',
    example: 'Ein Mann von 180 cm mit 38 cm Hals und 90 cm Taille erhält rund 19,9 %. Eine Frau von 165 cm mit 32 cm Hals, 72 cm Taille und 96 cm Hüfte erhält etwa 26,7 %.',
    faq: [
      { q: 'Wie genau ist die Methode?', a: 'Sie trifft auf wenige Prozentpunkte an die hydrostatische Wägung heran. Gebaut wurde sie für Reihenuntersuchungen, deshalb sagt ein Verlauf über Monate deutlich mehr als eine einzelne Zahl.' },
      { q: 'Wie soll ich messen?', a: 'Das Maßband liegt flach an, ohne einzuschneiden, und bleibt waagerecht. Der Hals knapp unter dem Kehlkopf, die Taille an der schmalsten Stelle über dem Beckenkamm, die Hüfte an der breitesten Stelle mit geschlossenen Füßen.' },
      { q: 'Warum rechnen Männer und Frauen verschieden?', a: 'Fett verteilt sich unterschiedlich, deshalb wurden die Regressionen getrennt angepasst. Die Formel für Frauen enthält die Hüfte, und Koeffizienten wie Konstante unterscheiden sich vollständig.' },
      { q: 'Wozu wird die Körpergröße gebraucht?', a: 'Sie geht als Korrektur der Körpergröße in die Regression ein: dieselbe Umfangsdifferenz bedeutet bei einem großen und einem kleinen Menschen einen anderen Fettanteil.' },
      { q: 'Warum verweigert die Rechnung manchmal ein Ergebnis?', a: 'Der Logarithmus ist nur für positive Zahlen erklärt. Ist die Taille nicht größer als der Hals — bei Frauen Taille plus Hüfte —, gibt es kein Ergebnis, und auch sinnlose negative Anteile werden nicht ausgegeben.' },
      { q: 'Warum steht keine Einordnung dabei?', a: 'Bewusst nicht. Die Grenzen eines gesunden Körperfettanteils unterscheiden sich zwischen Fachgesellschaften und hängen von Alter und Geschlecht ab; eine einzelne Skala als Wahrheit auszugeben wäre falsche Genauigkeit.' },
    ],
  },
  'running-pace-calculator': {
    longDescription: 'Rechnet Tempo und Geschwindigkeit aus Strecke und Zeit und stellt daneben Prognosen für 5 km, 10 km, den Halbmarathon und den Marathon. Die Prognosen folgen der Formel von Riegel mit dem Exponenten 1,06: die doppelte Strecke kostet mehr als die doppelte Zeit, und genau dieser Aufschlag macht den Unterschied zwischen einer ehrlichen Hochrechnung und der naiven Verlängerung des Tempos. Sie setzen ein entsprechendes Training voraus — ein 5-km-Ergebnis sagt nichts über die Ausdauer, die ein Marathon verlangt.',
    howToUse: [
      'Trage die gelaufene Strecke ein und wähle Kilometer oder Meilen.',
      'Trage die Zeit in Stunden, Minuten und Sekunden ein.',
      'Lies Tempo und Geschwindigkeit ab.',
      'Nimm die Prognosen als Anhaltspunkt für ein entsprechend trainiertes Rennen.',
    ],
    howItWorks: 'Tempo = Zeit ÷ Strecke, Geschwindigkeit = Strecke ÷ Zeit. Die Prognose folgt Riegel: Zeit₂ = Zeit₁ × (Strecke₂ ÷ Strecke₁)^1,06.',
    example: '10 km in 50 Minuten ergeben ein Tempo von 5:00 min/km, 12 km/h und eine Prognose von rund 24:00 über 5 km.',
    faq: [
      { q: 'Wie zuverlässig sind die Prognosen?', a: 'Für benachbarte Strecken gut, über große Sprünge weniger. Von 5 km auf den Marathon hochzurechnen setzt ein Ausdauertraining voraus, das die Formel nicht kennt.' },
      { q: 'Warum der Exponent 1,06?', a: 'Weil das Tempo mit der Strecke fällt. Peter Riegel hat den Wert aus Wettkampfergebnissen gewonnen: er drückt genau aus, wie viel langsamer eine doppelte Strecke gelaufen wird.' },
      { q: 'Was ist der Unterschied zwischen Tempo und Geschwindigkeit?', a: 'Tempo ist Zeit je Strecke, Geschwindigkeit Strecke je Zeit. Ein Tempo von 5:00 min/km sind 12 km/h — dieselbe Leistung, zwei Blickrichtungen.' },
      { q: 'Sind Steigung und Wetter berücksichtigt?', a: 'Nein. Höhenmeter, Wind, Hitze und Untergrund kosten Zeit, die in dieser Rechnung nicht vorkommt.' },
      { q: 'Kann ich in Meilen rechnen?', a: 'Ja, die Einheit lässt sich umstellen. Tempo und Prognosen erscheinen zusätzlich je Meile.' },
    ],
  },
  'one-rep-max-calculator': {
    longDescription: 'Schätzt das Einwiederholungsmaximum aus einem Arbeitssatz und zeigt daneben die üblichen Trainingsprozente. Drei Formeln laufen nebeneinander — Epley, Brzycki und Lander —, weil sie sich im Bereich hoher Wiederholungszahlen deutlich unterscheiden und ein einzelner Wert eine Genauigkeit vortäuschte, die keine von ihnen hat. Der Nenner bei Brzycki und Lander wechselt jenseits von 36 beziehungsweise 37 Wiederholungen das Vorzeichen, deshalb sind diese Bereiche abgefangen statt negative Maxima auszugeben. Verlässlich ist die Schätzung bis etwa zehn Wiederholungen.',
    howToUse: [
      'Trage das Gewicht ein, mit dem du sauber gearbeitet hast.',
      'Trage die Zahl der Wiederholungen bis zum technischen Versagen ein.',
      'Nimm die Prozentzeilen für die Planung deiner Sätze.',
      'Bleibe unter zehn Wiederholungen, wenn die Schätzung tragen soll.',
    ],
    howItWorks: 'Epley: Gewicht × (1 + Wiederholungen ÷ 30). Brzycki: Gewicht × 36 ÷ (37 − Wiederholungen). Lander: 100 × Gewicht ÷ (101,3 − 2,67123 × Wiederholungen). Der ausgewiesene Mittelwert fasst die drei zusammen.',
    example: '100 kg bei 8 Wiederholungen ergeben nach Epley rund 126,7 kg, und 80 % davon sind etwa 101 kg.',
    faq: [
      { q: 'Wie genau ist die Schätzung?', a: 'Bis etwa zehn Wiederholungen brauchbar. Darüber wächst der Fehler schnell, weil die Kraftausdauer stärker mitspielt als die Maximalkraft.' },
      { q: 'Warum drei Formeln?', a: 'Weil sie sich unterscheiden, und der Abstand zwischen ihnen ist die ehrlichere Antwort als eine einzelne Zahl. Bei wenigen Wiederholungen liegen sie eng beieinander, bei vielen weit auseinander.' },
      { q: 'Soll ich mein Maximum wirklich testen?', a: 'Nicht ohne Erfahrung, Aufwärmen und Sicherung. Die Schätzung aus einem Arbeitssatz ist genau dafür da, den Test zu ersetzen.' },
      { q: 'Gilt das für jede Übung?', a: 'Am besten für mehrgelenkige Übungen mit der Langhantel. Bei Isolationsübungen und Maschinen streuen die Formeln stärker.' },
      { q: 'Wozu die Prozentzeilen?', a: 'Trainingspläne arbeiten in Prozent des Maximums. Die Zeilen sparen das Nachrechnen und machen die Sätze unmittelbar planbar.' },
    ],
  },
};
