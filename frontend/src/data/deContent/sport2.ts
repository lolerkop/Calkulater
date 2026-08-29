import type { DeDetailedContent } from './types';

export const deSport2Content: Partial<Record<string, DeDetailedContent>> = {
  'ideal-weight': {
    longDescription: 'Alle vier Formeln sind gleich gebaut: ein Grundgewicht bei fünf Fuß plus ein Zuschlag für jeden Zoll darüber — deshalb wird die Größe in Zoll umgerechnet, das gehört zu ihrer Funktionsweise und ist keine Verzierung. Keine ist richtiger als die anderen: sie gehen um mehrere Kilogramm auseinander und stammen allesamt aus Statistiken der Mitte des vorigen Jahrhunderts. Deshalb stehen alle vier da, dazu ihr Mittel, und daneben der gesunde Gewichtsbereich nach BMI — als einzige der fünf Angaben ein Intervall statt eines Punkts. Eine einzelne Zahl sähe hier nach einer Genauigkeit aus, die es nicht gibt.',
    howToUse: [
      'Wähle dein Geschlecht — jede Formel hat dafür eigene Konstanten.',
      'Trage deine Größe in Zentimetern ein.',
      'Vergleiche die vier Ergebnisse: ihre Streuung ist die ehrliche Unsicherheit.',
      'Lies den BMI-Bereich als das Intervall, in dem die Formeln einen Punkt schätzen.',
    ],
    howItWorks: 'Jede Formel nimmt ein Grundgewicht und addiert einen Zuschlag je Zoll für jeden Zoll Größe über fünf Fuß. Der BMI-Bereich sind 18,5 und 24,9 mal der Größe in Metern zum Quadrat.',
    example: 'Ein Mann mit 180 cm kommt nach Devine auf 74,99 kg und nach Miller auf 71,52 kg, im Mittel 74,12 kg.',
    faq: [
      { q: 'Welches der vier Ergebnisse ist die Antwort?', a: 'Keines für sich. Sie wurden an verschiedenen Bevölkerungen zu verschiedenen Zwecken angepasst — Devine für die Arzneimitteldosierung und nicht für Gesundheitsratschläge —, und ihre Uneinigkeit ist genau der Grund, alle vier zu zeigen.' },
      { q: 'Warum passt der BMI-Bereich nicht zu den Formeln?', a: 'Weil er eine andere Frage beantwortet. Die Formeln schätzen ein Gewicht; der Bereich sagt, welche Gewichte bei deiner Größe unauffällig sind. Ein gesunder Mensch kann überall darin liegen.' },
      { q: 'Berücksichtigen die Formeln Muskeln?', a: 'Nein. Keine von ihnen weiß etwas über dich außer deiner Größe, weshalb eine schlanke, muskulöse Person alle vier übersteigt und dabei völlig gesund ist.' },
      { q: 'Warum gibt es keine Angabe außer männlich und weiblich?', a: 'Weil die veröffentlichten Formeln nur zwei Sätze von Konstanten festlegen. Einen dritten zu erfinden hieße, Zahlen auszudenken, und das tut der Rechner nicht.' },
      { q: 'Ist das dasselbe wie ein BMI-Rechner?', a: 'Nein. Der BMI nimmt dein tatsächliches Gewicht und ordnet es ein. Dieser geht andersherum: von der Größe allein zu einem Gewicht, das die Formeln erwarten würden.' },
    ],
  },
  'max-heart-rate': {
    longDescription: 'Schätzt den Maximalpuls aus dem Alter und legt die Trainingsbereiche aus. Es gibt mehrere Formeln, und sie gehen merklich auseinander: „220 − Alter“ ist die einfachste, setzt den Wert bei älteren Menschen aber regelmäßig zu hoch und bei jüngeren zu niedrig an, während die Formel von Tanaka auf Messungen beruht und eine andere Steigung hat. Die Wahl bleibt dir überlassen, denn fünf bis sieben Schläge verschieben jede Bereichsgrenze. Ist ein Ruhepuls angegeben, folgen die Bereiche der Methode nach Karvonen — gerechnet aus der Herzfrequenzreserve statt unmittelbar aus dem Maximum, was die unteren Bereiche spürbar anhebt.',
    howToUse: [
      'Trage dein Alter in vollen Jahren ein.',
      'Wähle eine Formel: die klassische ist einfacher, Tanaka liegt bei Erwachsenen näher.',
      'Miss deinen Ruhepuls morgens vor dem Aufstehen und trage ihn ein.',
      'Nutze die Bereichstabelle: untere Bereiche für gleichmäßige Arbeit, obere für Intervalle.',
    ],
    howItWorks: 'Der Maximalpuls wird aus dem Alter nach der gewählten Formel geschätzt. Herzfrequenzreserve = Maximum minus Ruhepuls. Eine Bereichsgrenze = Ruhepuls + ein Anteil der Reserve; ohne Ruhepuls entspricht die Reserve dem Maximum, und die Bereiche werden zu unmittelbaren Anteilen davon.',
    example: 'Mit 35 ergibt „220 − Alter“ 185, und bei einem Ruhepuls von 60 läuft der aerobe Bereich von 148 bis 160 Schlägen.',
    faq: [
      { q: 'Wie genau ist eine Schätzung aus dem Alter?', a: 'Sie ist ein Bevölkerungsmittel und keine Messung: die Streuung erreicht zehn bis zwölf Schläge nach beiden Seiten. Den genauen Wert liefert ein Belastungstest mit Stufenprotokoll.' },
      { q: 'Welche Formel soll ich wählen?', a: '„220 − Alter“ ist bekannter, setzt das Ergebnis bei älteren Menschen aber zu hoch an. Tanaka beruht auf späteren Messungen, und Gulati wurde an einer weiblichen Gruppe abgeleitet.' },
      { q: 'Warum zählt der Ruhepuls?', a: 'Er erlaubt, die Bereiche aus der Herzfrequenzreserve statt aus dem Maximum zu rechnen. Bei Trainierten mit niedrigem Ruhepuls verschieben sich die Bereiche deutlich, und ohne ihn fallen die unteren Grenzen zu niedrig aus.' },
      { q: 'Wie messe ich den Ruhepuls?', a: 'Morgens, sofort nach dem Aufwachen, im Liegen, vor dem Aufstehen und vor dem Kaffee. Ein Mittel über drei oder vier Tage taugt gut.' },
      { q: 'Kann ich ohne Vorbereitung nach diesen Bereichen trainieren?', a: 'Die Rechnung ist ein Anhaltspunkt und kein Trainingsplan. Bei Herz- oder Blutdruckproblemen und nach einer langen Pause stimme die Belastung mit einer Ärztin oder einem Arzt ab.' },
    ],
  },
  'steps-distance-calories': {
    longDescription: 'Macht aus der Zahl auf deinem Schrittzähler Strecke und Energie. Die Schrittlänge kommt entweder über das übliche Verhältnis 0,415 aus deiner Größe oder unmittelbar aus einer Messung, die du selbst gemacht hast — eine gemessene Schrittlänge schlägt eine geschätzte immer, und wer seine gemessen hat, hat keinen Grund, einem Faktor zu vertrauen. Die Energie je Kilometer ist eine änderbare, sichtbare Annahme: 0,53 kcal je Kilogramm Körpergewicht und Kilometer sind gewöhnliches Gehen, und Laufen, ein Rucksack oder ein Anstieg ändern das. Diese Zahl im Programmtext zu verstecken sähe nach einer Genauigkeit aus, die diese Rechnung nicht hat.',
    howToUse: [
      'Trage die Zahl der Schritte ein.',
      'Gib entweder deine Größe an oder wechsle zur Eingabe deiner gemessenen Schrittlänge.',
      'Trage dein Körpergewicht ein — die Kalorien wachsen mit ihm.',
      'Passe die Energie je Kilometer an, wenn du nicht einfach gegangen bist.',
    ],
    howItWorks: 'Die Schrittlänge ist die Größe mal 0,415, sofern du sie nicht unmittelbar einträgst. Die Strecke ist Schritte mal Schrittlänge, und die Kalorien sind der Energiefaktor mal Gewicht mal Strecke in Kilometern.',
    example: '10 000 Schritte bei 175 cm Größe sind 7,263 km und rund 269 kcal bei 70 kg Körpergewicht.',
    faq: [
      { q: 'Wie genau ist das Verhältnis 0,415?', a: 'Es ist eine verbreitete Faustregel fürs Gehen und kein Gesetz. Schrittlängen schwanken mit Beinlänge, Tempo und Schuh; wenn es darauf ankommt, miss zehn Schritte und teile.' },
      { q: 'Warum ist der Kalorienfaktor ein Feld?', a: 'Weil er davon abhängt, was du gemacht hast. Gehen liegt bei rund 0,5 kcal je Kilogramm und Kilometer; Laufen liegt merklich höher, ebenso Tragen und Bergaufgehen.' },
      { q: 'Zählt es die Kalorien mit, die ich ohnehin verbraucht hätte?', a: 'Nein. Die Zahl ist die Energie der Bewegung selbst und nicht die Differenz zum Liegen, sie setzt den Mehrverbrauch also leicht zu hoch an.' },
      { q: 'Warum ändert das Gewicht die Kalorien?', a: 'Weil einen schwereren Körper über dieselbe Strecke zu bewegen mehr Arbeit kostet. Die Strecke bleibt gleich, die Energie nicht.' },
      { q: 'Worin unterscheidet sich das vom Kalorienrechner für Sport?', a: 'Jener geht von einer Tätigkeit und einer Dauer über MET-Werte aus. Dieser geht von Schritten und einer Schrittlänge aus, ganz ohne Uhr.' },
    ],
  },
  'waist-ratio': {
    longDescription: 'Beide Verhältnisse sind einheitenlos, die Einheiten spielen also keine Rolle, solange gleich gemessen wird. Der Bereich folgt dem Verhältnis von Taille zu Größe und nicht dem von Taille zu Hüfte: das erste lässt sich zwischen Menschen verschiedener Größe vergleichen, während das zweite stärker vom Körperbau abhängt. Die Grenze bei der halben Größe ist die bekannteste und einfachste der Faustregeln — Taille unter der halben Größe — und genau dort endet der gesunde Bereich und beginnt der erhöhte.',
    howToUse: [
      'Miss die Taille an der schmalsten Stelle bei gewöhnlicher Ausatmung.',
      'Miss die Hüfte an der breitesten Stelle.',
      'Trage deine ohne Schuhe gemessene Größe ein.',
      'Lies das Verhältnis von Taille zu Größe ab: unter 0,5 ist der gesunde Bereich.',
    ],
    howItWorks: 'Taille zu Größe ist die Taille geteilt durch die Größe. Taille zu Hüfte ist die Taille geteilt durch die Hüfte. Der Bereich folgt dem ersten: unter 0,4 unter dem Üblichen, unter 0,5 gesund, unter 0,6 erhöht, darüber hoch.',
    example: 'Eine Taille von 84 cm bei 178 cm Größe ergibt 0,4719 — innerhalb des gesunden Bereichs.',
    faq: [
      { q: 'Wo genau wird die Taille gemessen?', a: 'An der schmalsten Stelle zwischen Rippen und Hüfte, bei Ausatmung, ohne den Bauch einzuziehen. Am Nabel gemessen kommt eine größere Zahl und eine andere Antwort heraus.' },
      { q: 'Warum Taille zu Größe und nicht der BMI?', a: 'Weil es bemerkt, wo das Gewicht sitzt. Zwei Menschen mit demselben BMI können sehr verschiedene Taillen haben, und die Taille ist der Teil, den die Forschung mit dem Risiko in Verbindung bringt.' },
      { q: 'Gilt die Regel mit der halben Größe wirklich bei jeder Größe?', a: 'Sie ist eine Faustregel und kein Gesetz, und sie trägt in der Mitte des Größenbereichs besser als an den Rändern. Deshalb steht das genaue Verhältnis neben dem Bereich.' },
      { q: 'Wozu dann Taille zu Hüfte?', a: 'Es beschreibt die Form statt der Größe und wird eigenständig verwendet, mit verschiedenen Schwellen für Männer und Frauen. Hier steht es als Zahl, ohne Urteil.' },
      { q: 'Ersetzt das eine ärztliche Beurteilung?', a: 'Nein. Es ist eine Zahl unter vielen, und kein Verhältnis kann dir etwas sagen, was ein Maßband nicht sieht.' },
    ],
  },
  'water-intake': {
    longDescription: 'Die Zahl beginnt beim Körpergewicht mit rund 33 ml je Kilogramm, addiert etwa 350 ml je halber Stunde Bewegung und hebt die ganze Summe bei heißem Wetter um ein Zehntel. Der Faktor gilt für alles und nicht nur für den Bewegungsanteil, denn Hitze erhöht die laufenden Verluste über Haut und Atmung und nicht nur den Schweiß beim Sport. Es sind anerkannte Faustregeln und keine Messungen an einem bestimmten Körper: Ernährung, Gesundheit und Klima verschieben den tatsächlichen Bedarf stärker als das Gewicht. Die Gläser stehen daneben, weil niemand in Litern trinkt und elf Gläser eine Zahl sind, die man abends noch im Kopf hat.',
    howToUse: [
      'Trage dein Körpergewicht in Kilogramm ein.',
      'Trage ein, wie viele Bewegungsminuten du am Tag erwartest.',
      'Setze heißes Wetter, wenn der Tag heiß oder der Raum warm ist.',
      'Verteile die Menge über den Tag, statt sie auf einmal zu trinken.',
    ],
    howItWorks: 'Grundbedarf = Gewicht × 0,033 Liter. Bewegung bringt Minuten ÷ 30 × 0,35 Liter hinzu. Heißes Wetter vervielfacht die ganze Summe mit 1,1.',
    example: 'Bei 72 kg und 45 Minuten Bewegung sind es 2,901 Liter, also rund 11,6 Gläser.',
    faq: [
      { q: 'Zählen Tee und Kaffee mit?', a: 'Ja. Die alte Vorstellung, Koffein entwässere, hält bei üblichem Konsum nicht stand; die Flüssigkeit in Tee, Kaffee und Essen zählt mit, deshalb geht es um die Zufuhr und nicht um reines Wasser.' },
      { q: 'Warum wird bei Hitze die ganze Summe erhöht und nicht nur der Bewegungsanteil?', a: 'Weil Hitze die Verluste über Haut und Atmung erhöht, ob du dich bewegst oder nicht. Den Faktor nur auf die Bewegung anzuwenden setzte einen heißen Tag im Sitzen zu niedrig an.' },
      { q: 'Ist mehr Wasser immer besser?', a: 'Nein. Weit über den Durst hinaus zu trinken verdünnt das Natrium im Blut und ist im Übermaß gefährlich. Diese Zahl ist ein über den Tag verteiltes Ziel und kein Mindestmaß, das erzwungen werden müsste.' },
      { q: 'Wie genau sind 33 ml je Kilogramm?', a: 'Es ist eine Übereinkunft, und eine ziemlich grobe. Nierengesundheit, Arzneimittel, Höhenlage und Ernährung verschieben den tatsächlichen Bedarf weit über das hinaus, was eine Regel nach Gewicht erfassen kann.' },
    ],
  },
};
