import type { DeDetailedContent } from './types';

export const deMath1Content: Partial<Record<string, DeDetailedContent>> = {
  'arithmetic-progression': {
    longDescription: 'Findet jedes Glied einer Folge und die Summe der ganzen Reihe aus drei Werten: erstem Glied, Differenz und Gliednummer. Die Summe nutzt die geschlossene Form Sₙ = n(a₁+aₙ)/2 statt die Glieder in einer Schleife zu addieren — bei großer Gliednummer häufte eine Schleife Rundungsfehler an, während die Formel in einem Schritt antwortet. Die Differenz darf negativ sein, dann fällt die Reihe, und die Summe kommt trotzdem richtig heraus. Die Tabelle zeigt die ersten zehn Glieder, damit das Muster sichtbar wird, aber das n-te Glied und die Summe beziehen sich auf die ganze Reihe und nicht auf den Ausschnitt auf dem Bildschirm.',
    howToUse: [
      'Trage das erste Glied der Folge ein.',
      'Trage die Differenz ein — wie viel jedes Glied zum vorigen hinzufügt.',
      'Trage die Nummer des gesuchten Glieds ein.',
      'Für eine fallende Reihe nimm eine negative Differenz.',
    ],
    howItWorks: 'Das n-te Glied ist aₙ = a₁ + (n−1)d. Die Summe der ersten n Glieder ist Sₙ = n(a₁ + aₙ)/2 — die Zahl der Glieder mal dem Mittel aus erstem und letztem.',
    example: 'Mit a₁ = 3 und d = 5 ist das zehnte Glied 48 und die Summe der ersten zehn Glieder 255.',
    faq: [
      { q: 'Wie unterscheidet sich eine arithmetische von einer geometrischen Folge?', a: 'Eine arithmetische Folge ADDIERT zu jedem Glied dieselbe Zahl; eine geometrische MULTIPLIZIERT jedes Glied mit derselben Zahl. Deshalb wächst eine arithmetische Reihe geradlinig und eine geometrische immer steiler.' },
      { q: 'Darf die Differenz negativ sein?', a: 'Ja, und das ist der gewöhnliche fallende Fall. Mit a₁ = 100 und d = −7 ist das fünfzehnte Glied 2 und die Summe von fünfzehn Gliedern 765.' },
      { q: 'Warum wird die Summe mit einer Formel und nicht durch Addieren berechnet?', a: 'Die geschlossene Form Sₙ = n(a₁+aₙ)/2 antwortet in einem Schritt und mit derselben Genauigkeit wie das n-te Glied selbst. Hunderte Glieder in einer Schleife zu addieren häufte Rundungsfehler an, wo keiner entstehen muss.' },
      { q: 'Was passiert bei einer Differenz von null?', a: 'Die Reihe wird konstant: jedes Glied gleicht dem ersten, und die Summe ist das erste Glied mal der Zahl der Glieder. Die Formeln arbeiten ohne Sonderfall weiter.' },
      { q: 'Warum zeigt die Tabelle nur zehn Glieder?', a: 'Das Muster ist schon nach drei erkennbar, und hunderte Zeilen brächten nichts hinzu. Das n-te Glied und die Summe werden trotzdem für die ganze Reihe berechnet und nicht für den gezeigten Ausschnitt.' },
    ],
  },
  'binomial-probability': {
    longDescription: 'Berechnet Wahrscheinlichkeiten für eine Reihe unabhängiger Versuche mit jedes Mal derselben Erfolgschance. Die Formel C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ hat drei Faktoren mit verschiedenen Aufgaben: auf wie viele Weisen sich die Erfolge über die Versuche verteilen lassen, wie wahrscheinlich diese Erfolge sind und wie wahrscheinlich die übrigen Misserfolge sind. Neben dem genauen Wert stehen die kumulierten Wahrscheinlichkeiten für „höchstens“ und „mindestens“ — in der Praxis sind meist sie gefragt — sowie Erwartungswert und Standardabweichung der Reihe.',
    howToUse: [
      'Trage die Zahl der Versuche in der Reihe ein.',
      'Trage die Zahl der Erfolge ein, für die die Wahrscheinlichkeit gesucht ist.',
      'Trage die Erfolgswahrscheinlichkeit eines einzelnen Versuchs ein, von 0 bis 1.',
      'Wähle, ob du die genaue oder die kumulierte Wahrscheinlichkeit brauchst.',
    ],
    howItWorks: 'Die Wahrscheinlichkeit für genau k Erfolge ist C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Kumulierte Werte entstehen durch Summieren über die betreffenden k. Der Erwartungswert ist n·p und die Abweichung die Wurzel aus n·p·(1−p).',
    example: 'Genau dreimal Kopf bei zehn Würfen einer fairen Münze hat die Wahrscheinlichkeit 0,1172 — rund 11,72 % der Versuchsreihen.',
    faq: [
      { q: 'Wann gilt diese Formel?', a: 'Wenn die Versuche unabhängig sind, ihre Zahl feststeht und die Erfolgschance jedes Mal dieselbe ist. Beeinflussen sich die Versuche gegenseitig, passt das Modell nicht.' },
      { q: 'Wie unterscheidet sich „höchstens k“ von „genau k“?', a: 'Die kumulierte Wahrscheinlichkeit summiert jeden Ausgang bis einschließlich k. In der Praxis lautet die Frage meist „nicht mehr als wie viele“ und nicht „genau so viele“.' },
      { q: 'Warum werden die Kombinationen nicht über Fakultäten berechnet?', a: 'Weil 20! schon die genaue Darstellung übersteigt, während die Kombination selbst eine kleine ganze Zahl ist. Sie wird durch abwechselndes Multiplizieren und Dividieren aufgebaut.' },
      { q: 'Was passiert bei einer Wahrscheinlichkeit von 0 oder 1?', a: 'Der Ausgang wird sicher: bei p = 1 gelingt jeder Versuch, bei p = 0 keiner. Die Standardabweichung ist in beiden Fällen null.' },
      { q: 'Warum dürfen die Erfolge die Versuche nicht übersteigen?', a: 'Weil es einen solchen Ausgang nicht gibt. Formal ist die Wahrscheinlichkeit null, in der Praxis ist es ein Tippfehler, deshalb hält die Rechnung an.' },
    ],
  },
  'combinatorics': {
    longDescription: 'Zählt, auf wie viele Weisen sich eine Auswahl aus einer Menge ziehen lässt, in allen vier Fällen: Reihenfolge zählt oder nicht, Wiederholung erlaubt oder nicht. Gerechnet wird in genauer ganzzahliger Arithmetik — die Anzahl wächst schnell genug, dass die gewöhnliche Genauigkeit des Browsers die niedrigen Stellen stillschweigend verlöre, lange bevor die Antwort ihren Sinn verliert.',
    howToUse: [
      'Wähle Kombinationen oder Variationen.',
      'Gib an, ob Wiederholung erlaubt ist.',
      'Trage die Größe der Menge und die der Auswahl ein.',
    ],
    howItWorks: 'Kombinationen nutzen C(n, k); Variationen nutzen P(n, k); mit Wiederholung werden daraus C(n + k − 1, k) und n hoch k.',
    example: '5 Karten aus 52 zu wählen ergibt C(52, 5) = 2 598 960 mögliche Blätter.',
    faq: [
      { q: 'Was ist der Unterschied zwischen Kombinationen und Variationen?', a: 'Die Reihenfolge. Kombinationen behandeln AB und BA als dieselbe Auswahl; Variationen zählen sie getrennt.' },
      { q: 'Wann darf die Auswahl größer sein als die Menge?', a: 'Nur bei erlaubter Wiederholung. 5 Stücke aus 3 Sorten zu ziehen ergibt Sinn, wenn jede Sorte mehrfach genommen werden darf.' },
      { q: 'Warum wird in genauen ganzen Zahlen gerechnet?', a: 'Die Anzahlen verlassen den sicheren Bereich gewöhnlicher Zahlen schnell. C(60, 30) übersteigt ihn bereits, und eine Rundung dort verfälschte die Antwort still.' },
      { q: 'Warum gibt es eine obere Grenze?', a: 'Über tausend hat das Ergebnis hunderte Stellen und hört auf, lesbar zu sein. Die Grenze betrifft die Nützlichkeit und nicht die Rechnung.' },
    ],
  },
  'confidence-interval': {
    longDescription: 'Zeigt den Bereich, in dem der wahre Mittelwert vermutlich liegt, gegeben ein Stichprobenmittel, eine Standardabweichung und einen Stichprobenumfang. Die Breite setzt nicht die Streuung selbst, sondern der Standardfehler des Mittelwerts: die Abweichung geteilt durch die Wurzel des Stichprobenumfangs. Daraus folgt unmittelbar die praktische Folge — das Intervall zu halbieren verlangt die vierfache Stichprobe und nicht die doppelte. Die kritischen Werte sind die der Normalverteilung: 1,645 für 90 %, 1,96 für 95 % und 2,576 für 99 %.',
    howToUse: [
      'Trage das Stichprobenmittel ein — es darf negativ sein.',
      'Trage die Standardabweichung der Stichprobe ein.',
      'Trage den Stichprobenumfang ein; er muss mindestens zwei betragen.',
      'Wähle das Konfidenzniveau — ein höheres Niveau ergibt ein breiteres Intervall.',
    ],
    howItWorks: 'Standardfehler = Abweichung ÷ Wurzel des Stichprobenumfangs. Fehlergrenze = kritischer Wert × Standardfehler. Das Intervall ist der Mittelwert ± die Fehlergrenze.',
    example: 'Ein Mittelwert von 100 mit einer Abweichung von 15 über eine Stichprobe von 36 ergibt 95,1 … 104,9 auf dem Niveau von 95 %.',
    faq: [
      { q: 'Warum geht der Stichprobenumfang über eine Wurzel ein?', a: 'Weil Mitteln die Streuung im Verhältnis zur Wurzel der Zahl der Beobachtungen senkt. Das Intervall zu halbieren braucht die vierfache Stichprobe.' },
      { q: 'Wird die t-Verteilung verwendet?', a: 'Nein — angewendet werden kritische Werte der Normalverteilung. Bei kleinen Stichproben ist das wahre Intervall etwas breiter, und das ist eine bewusste Vereinfachung.' },
      { q: 'Warum wird eine Stichprobe von eins abgewiesen?', a: 'Weil ein einzelner Wert keine Streuung hat: der Standardfehler wäre sinnlos und das angezeigte Intervall eine Zahl ohne Inhalt.' },
      { q: 'Was bedeutet ein Konfidenzniveau von 95 %?', a: 'Dass über wiederholte Versuche hinweg rund 95 % solcher Intervalle den wahren Mittelwert enthielten. Es ist eine Eigenschaft des Verfahrens und keine Wahrscheinlichkeit für ein einzelnes Intervall.' },
      { q: 'Darf die Abweichung null sein?', a: 'Ja. Sind alle Werte gleich, gibt es keine Streuung, und das Intervall schrumpft auf einen Punkt — die Rechnung sagt das ehrlich.' },
    ],
  },
  'correlation': {
    longDescription: 'Berechnet den Korrelationskoeffizienten nach Pearson für zwei Reihen und leitet daraus die Gerade der kleinsten Quadrate ab. Der Koeffizient misst allein Stärke und Vorzeichen eines LINEAREN Zusammenhangs: bei einem parabelförmigen Zusammenhang kann er nahe null herauskommen, obwohl der Zusammenhang exakt ist. Reihen verschiedener Länge werden abgewiesen und nicht gekürzt — die Paare entstehen nach Stellung, und ein stillschweigend abgeschnittenes Ende berechnete die Korrelation der falschen Daten. Sind alle Werte einer Reihe gleich, hat der Koeffizient keinen Sinn, und die Rechnung sagt das, statt null auszugeben.',
    howToUse: [
      'Füge die erste Reihe ein: Werte mit Leerzeichen, Kommas oder Zeilenumbrüchen getrennt.',
      'Füge die zweite Reihe ein — sie muss gleich viele Werte enthalten.',
      'Lies den Koeffizienten ab: er liegt zwischen −1 und 1.',
      'Steigung und Achsenabschnitt beschreiben die Gerade, die am besten zu den Daten passt.',
    ],
    howItWorks: 'Für jede Reihe werden die Abweichungen vom Mittel bestimmt. Der Koeffizient ist die Summe der Produkte der Abweichungen geteilt durch die Wurzel aus dem Produkt ihrer Quadratsummen. Die Steigung ist dieselbe Produktsumme geteilt durch die Quadratsumme für X.',
    example: 'Die Reihen 1, 2, 3, 4, 5 gegen 2, 4, 5, 4, 5 ergeben einen Koeffizienten von 0,7746 und eine Gerade mit der Steigung 0,6.',
    faq: [
      { q: 'Was bedeutet ein Koeffizient von 0,77?', a: 'Einen deutlichen positiven linearen Zusammenhang: steigt die eine Reihe, steigt die andere tendenziell mit. Eins bedeutete eine genaue Gerade, minus eins eine genaue Umkehrung.' },
      { q: 'Beweist eine Korrelation eine Ursache?', a: 'Nein. Ein Zusammenhang kann von einem dritten Faktor herrühren oder Zufall sein. Der Koeffizient misst, wie zwei Reihen zusammen laufen, und nicht, ob die eine die andere treibt.' },
      { q: 'Warum werden Reihen verschiedener Länge abgewiesen?', a: 'Weil die Paare nach Stellung entstehen. Die längere Reihe zu kürzen berechnete ohne Hinweis die Korrelation der falschen Daten.' },
      { q: 'Was, wenn alle Werte einer Reihe gleich sind?', a: 'Der Koeffizient lässt sich nicht berechnen: der Nenner wird null. Null auszugeben behauptete „kein Zusammenhang“, wo die Frage selbst keinen Sinn ergibt.' },
      { q: 'Wie trage ich Dezimalwerte ein?', a: 'Mit Komma, wie in „1,5 2,5“. Ein Komma trennt Werte nur, wenn ein Leerzeichen folgt, der Nachkommateil geht also nicht verloren.' },
    ],
  },
};
