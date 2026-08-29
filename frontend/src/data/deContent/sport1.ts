import type { DeDetailedContent } from './types';

export const deSport1Content: Partial<Record<string, DeDetailedContent>> = {
  'activity-calories': {
    longDescription: 'Berechnet den Verbrauch einer bestimmten Tätigkeit und keinen Tagesbedarf: MET drückt aus, wie viel mehr Energie eine Tätigkeit kostet als Ruhe, und die ganze Rechnung folgt daraus. Das Körpergewicht geht als Faktor ein und nicht als Korrektur — wer mit 90 kg fährt, verbrennt auf demselben Rad fast ein Drittel mehr als mit 70 kg, und ein Tabellenmittel setzt das zu niedrig an. Die angebotenen Werte sind die verbreiteten Bezugswerte, aber Mittelwerte und keine Messungen, deshalb lässt sich das eigene Tempo über einen eigenen Listeneintrag angeben.',
    howToUse: [
      'Wähle eine Tätigkeit oder den Eintrag für deinen eigenen MET-Wert.',
      'Trage dein Körpergewicht ein — es geht als Faktor in die Rechnung ein.',
      'Trage die Dauer der Einheit in Minuten ein.',
      'Sieh dir den Stundenverbrauch an, wenn du eine längere Einheit planst.',
    ],
    howItWorks: 'Kalorien = MET × 3,5 × Gewicht in Kilogramm ÷ 200 × Minuten. Die 3,5 sind die Sauerstoffaufnahme in Ruhe in Millilitern je Kilogramm und Minute, und MET sagt, um wie viel die Tätigkeit darüber liegt.',
    example: '45 Minuten Radfahren bei 70 kg und MET 7,5 verbrennen 413 kcal, das sind 9,19 kcal je Minute.',
    faq: [
      { q: 'Was bedeutet der MET-Wert?', a: 'Wie viel mehr Energie eine Tätigkeit kostet als Ruhe. MET 7,5 heißt, dass Radfahren siebeneinhalbmal so viel Energie braucht wie ruhiges Sitzen.' },
      { q: 'Warum zählt das Gewicht so stark?', a: 'Es geht als Faktor in die Formel ein: einen schwereren Körper zu bewegen kostet mehr Energie. Bei 90 kg statt 70 liegt der Verbrauch fast ein Drittel höher.' },
      { q: 'Wie genau sind die aufgeführten Werte?', a: 'Es sind Mittelwerte für ein gemäßigtes Tempo. Der tatsächliche Verbrauch hängt von Geschwindigkeit, Gelände und Fitness ab, deshalb lässt sich ein eigener Wert von Hand eintragen.' },
      { q: 'Ist der Grundumsatz enthalten?', a: 'Nein. Hier geht es um den Verbrauch der Einheit selbst; ein Tagesbedarf einschließlich Grundumsatz ist ein eigener Rechner.' },
      { q: 'Darf ich diese Kalorien von meiner Tageszufuhr abziehen?', a: 'Nur teilweise: dein Körper hätte in dieser Zeit ohnehin Energie in Ruhe verbraucht. Streng genommen ziehst du den Verbrauch minus dem Grundumsatz desselben Zeitraums ab.' },
    ],
  },
  'barbell-plates': {
    longDescription: 'Nimmt das Gewicht, das du auf der Stange haben willst, und ermittelt, was je Seite daranhängt — beginnend bei der schwersten Scheibe, die du hast, und dann abwärts. Die Liste der vorhandenen Scheiben gehört dir: ein Studio ohne 1,25er liefert andere Antworten, und etwas anderes zu behaupten ergäbe eine Beladung, die du gar nicht bauen kannst. Lässt sich das Ziel nicht genau treffen, steht der Fehlbetrag in einer eigenen Zeile statt weggerundet zu werden: zu wissen, dass 1,25 kg fehlen, hilft mehr als eine Zahl, die stillschweigend nicht das gewünschte Gewicht ist.',
    howToUse: [
      'Trage das Gesamtgewicht ein, das auf der Stange liegen soll.',
      'Trage das Gewicht der Stange selbst ein — eine olympische Stange wiegt 20 kg.',
      'Liste die dir zur Verfügung stehenden Scheiben mit Leerzeichen getrennt auf.',
      'Lege die angezeigte Kombination auf jede Seite.',
    ],
    howItWorks: 'Die Stange wird vom Ziel abgezogen und der Rest halbiert, das ergibt eine Seite. Danach werden Scheiben von der schwersten zur leichtesten genommen, jede so oft, wie sie hineinpasst.',
    example: '100 kg auf einer 20-kg-Stange ergeben je Seite 25 + 15.',
    faq: [
      { q: 'Warum beginnt es bei der schwersten Scheibe?', a: 'Weil eine Stange in der Praxis so beladen wird: große Scheiben innen am Bund, kleine außen. Die jeweils schwerste passende zu nehmen ergibt außerdem die wenigsten Scheiben.' },
      { q: 'Was ist, wenn das genaue Gewicht nicht möglich ist?', a: 'Der Fehlbetrag wird angezeigt. Mit nur 25ern und 20ern lassen sich 87,5 kg nicht bauen, und der Rechner sagt, wie viel fehlt, statt die Antwort zu runden.' },
      { q: 'Trage ich Scheiben je Seite oder insgesamt ein?', a: 'Nur die Gewichte, die du besitzt, jedes einmal. Der Rechner geht von einer gleichmäßigen Beladung aus und zählt die Paare selbst.' },
      { q: 'Wie gehe ich mit einer anderen Stange um?', a: 'Ändere das Stangengewicht: eine olympische Damenstange wiegt 15 kg, eine Übungsstange oft 10 kg, und manche feste Stangen sind schwerer, als sie aussehen.' },
      { q: 'Sind Verschlüsse enthalten?', a: 'Nein. Sind deine Verschlüsse schwer — Wettkampfverschlüsse wiegen je 2,5 kg —, rechne ihr Gewicht der Stange zu.' },
    ],
  },
  'bike-gear-ratio': {
    longDescription: 'Berechnet die Übersetzung — wie oft sich das Hinterrad bei einer Pedalumdrehung dreht. Ein Verhältnis von 2 bedeutet zwei Radumdrehungen je Pedalumdrehung. Gibst du den Radumfang an, bekommst du zusätzlich die Entfaltung: den Weg, den das Rad je Pedalumdrehung zurücklegt. Das ist die Zahl, nach der Gänge tatsächlich verglichen werden, denn sie berücksichtigt die Radgröße bereits und hängt nicht davon ab, aus welchen Zähnezahlen das Verhältnis entstand.',
    howToUse: [
      'Trage die Zähnezahlen von Kettenblatt und Ritzel ein.',
      'Gib bei Bedarf den Radumfang an.',
      'Lies Übersetzung und Entfaltung ab.',
    ],
    howItWorks: 'Übersetzung = Zähne am Kettenblatt ÷ Zähne am Ritzel. Entfaltung = Übersetzung × Radumfang.',
    example: 'Ein Kettenblatt mit 50 Zähnen und ein Ritzel mit 25 ergeben eine Übersetzung von 2,00: zwei Radumdrehungen je Pedalumdrehung.',
    faq: [
      { q: 'Was bedeutet das Übersetzungsverhältnis?', a: 'Wie oft das Rad die Pedale überholt. Ein Verhältnis von 4 ist ein schwerer Gang für Tempo in der Ebene; rund 1 ist ein leichter Gang für den Anstieg.' },
      { q: 'Warum zählt die Entfaltung?', a: 'Sie macht aus der Übersetzung Meter und lässt Gänge über Räder mit verschiedenen Laufrädern hinweg vergleichen. Dieselbe Übersetzung legt an 26 und an 29 Zoll verschiedene Wege zurück.' },
      { q: 'Woher bekomme ich den Radumfang?', a: 'Messen ist am einfachsten: markiere eine Stelle am Reifen, rolle das Rad eine Umdrehung weit und miss den Weg. So sind Reifendruck und Sitz gleich mit erfasst.' },
      { q: 'Warum muss die Zähnezahl eine ganze Zahl sein?', a: 'Weil Zähne in ganzen Einheiten vorkommen. Ein gebrochener Wert bedeutet einen Tippfehler, und der Rechner sagt das.' },
    ],
  },
  'bike-wheel-size': {
    longDescription: 'Zwei Wege, eine Größe einzutragen, weil die Felge etwas anderes sagt als die Radfahrenden. ETRTO nennt den Sitzdurchmesser der Felge und die Reifenbreite in Millimetern, und der Laufraddurchmesser ist die Felge plus ZWEI Breiten — der Reifen sitzt oben und unten. Die Zollangabe ist gerundetes Erbe, deshalb kommen „26 Zoll“ und ETRTO 559 verschieden heraus: gerechnet wird genau das, was du einträgst. Der Umfang ist das, was ein Fahrradcomputer braucht und was der Rechner für die Übersetzung als Eingabe nimmt — anderswo als hier oder auf der Reifenverpackung ist er nicht zu holen.',
    howToUse: [
      'Sieh auf die Reifenflanke: ETRTO sind zwei Zahlen wie 25-622.',
      'Trage die zweite als Felge und die erste als Reifenbreite ein.',
      'Oder wechsle zu Zoll, wenn du nur das weißt.',
      'Nutze den Umfang, um einen Fahrradcomputer einzurichten.',
    ],
    howItWorks: 'Im ETRTO-Modus ist der Durchmesser die Felge plus der doppelten Reifenbreite. Im Zollmodus sind es die Zoll mal 25,4. Der Umfang ist pi mal dem Durchmesser, und die Umdrehungen je Kilometer sind eine Million Millimeter geteilt durch ihn.',
    example: 'Ein Reifen 25-622 ergibt ein Laufrad von 672 mm und einen Umfang von 2111,15 mm.',
    faq: [
      { q: 'Wo finde ich die ETRTO-Größe?', a: 'Auf der Reifenflanke, als zwei durch einen Strich getrennte Zahlen: 25-622 bedeutet 25 mm breit auf einer Felge von 622 mm. Es ist die einzige Größenangabe, die tatsächlich genormt ist.' },
      { q: 'Warum zählt die Reifenbreite doppelt?', a: 'Weil der Reifen auf beiden Seiten der Felge sitzt. Das Laufrad wächst oben um eine Reifenbreite und unten um eine weitere.' },
      { q: 'Warum stimmen Zoll und ETRTO nicht überein?', a: 'Weil Zollgrößen historische Bezeichnungen sind und keine Messungen. 26 Zoll sind rechnerisch 660,4 mm, eine 26-Zoll-Mountainbikefelge misst aber 559 mm — der Unterschied sind Reifen und Rundung.' },
      { q: 'Ist diese Zahl genau genug für einen Fahrradcomputer?', a: 'Sie ist ein guter Anfang. Für echte Genauigkeit rollst du das Laufrad unter deinem eigenen Gewicht eine Umdrehung weit und misst — ein belasteter Reifen ist etwas kleiner als ein unbelasteter.' },
      { q: 'Wie hängt das mit dem Rechner für die Übersetzung zusammen?', a: 'Jener fragt nach dem Radumfang. Hier kommt die Zahl her.' },
    ],
  },
  'calories-from-macros': {
    longDescription: 'Rechnet Gramm Eiweiß, Fett und Kohlenhydrate über die Atwater-Faktoren in Kalorien um und zeigt, welchen Anteil jeder Makronährstoff am Gesamtwert beiträgt.',
    howToUse: [
      'Trage die Gramm Eiweiß ein.',
      'Trage die Gramm Fett ein.',
      'Trage die Gramm Kohlenhydrate ein.',
    ],
    howItWorks: 'Kalorien = 4 × Eiweiß + 9 × Fett + 4 × Kohlenhydrate.',
    example: '100 g Eiweiß, 50 g Fett und 200 g Kohlenhydrate ergeben 1650 kcal.',
    faq: [
      { q: 'Warum steht bei Fett 9 und nicht 4?', a: 'Fett ist je Gramm energiedichter als Eiweiß oder Kohlenhydrate. Die Atwater-Faktoren geben die Energie wieder, die der Körper tatsächlich gewinnt.' },
      { q: 'Sind Ballaststoffe und Alkohol enthalten?', a: 'Nein. Der Rechner deckt nur die drei wichtigsten Makronährstoffe ab; für Ballaststoffe und Alkohol gelten andere Faktoren.' },
      { q: 'Sind die Faktoren genau?', a: 'Es sind vereinbarte Mittelwerte. Die tatsächliche Aufnahme schwankt nach Lebensmittel und Person, nimm das Ergebnis also als Arbeitsschätzung.' },
      { q: 'Warum zählen die Anteile?', a: 'Zwei Ernährungsweisen mit denselben Kalorien können sich in der Zusammensetzung deutlich unterscheiden, und meist ist genau die Aufteilung das, worauf ein Plan zielt.' },
    ],
  },
};
