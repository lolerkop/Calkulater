import type { DeDetailedContent } from './types';

export const deMath4Content: Partial<Record<string, DeDetailedContent>> = {
  'power-root': {
    longDescription: 'Erhebt eine Zahl in eine Potenz und zieht eine Wurzel beliebigen Grades, gebrochene Exponenten eingeschlossen. Eine Wurzel ungeraden Grades aus einer negativen Zahl gibt es sehr wohl — die dritte Wurzel aus −8 ist −2 — und sie wird hier aus dem Betrag berechnet, wobei das Vorzeichen gesondert herausgezogen wird, denn eine negative Basis mit gebrochenem Exponenten liefert keine reelle Antwort: dieser Exponent ist für negative Basen nicht durchgängig festgelegt. Eine Wurzel geraden Grades aus einer negativen Zahl hat keinen reellen Wert, die Rechnung hält deshalb an, statt ein leeres Ergebnis zu zeigen. Null in einer negativen Potenz wird aus demselben Grund abgewiesen: es ist eine Division durch null.',
    howToUse: [
      'Wähle die Rechenart — Potenz oder Wurzel.',
      'Trage die Zahl ein, mit der du arbeitest.',
      'Trage den Grad ein: 2 für Quadrat oder Quadratwurzel, 3 für Kubus oder Kubikwurzel.',
      'Der Exponent darf negativ oder gebrochen sein.',
    ],
    howItWorks: 'Potenzieren: aⁿ multipliziert die Zahl n-mal mit sich selbst, und für gebrochenes n ist es dasselbe wie eine Wurzel. Wurzelziehen: ⁿ√a ist die Zahl, die in die n-te Potenz erhoben a ergibt. Ein negativer Exponent bedeutet eins geteilt durch die positive Potenz: 2⁻³ = 1/8.',
    example: 'Zwei hoch zehn sind 1024, und die dritte Wurzel aus 27 ist 3.',
    faq: [
      { q: 'Warum kann ich keine Quadratwurzel aus einer negativen Zahl ziehen?', a: 'Weil jede reelle Zahl im Quadrat nicht negativ ist, eine solche reelle Wurzel gibt es also nicht. Unter den komplexen Zahlen gibt es sie, aber das ist ein anderer Bereich.' },
      { q: 'Und die dritte Wurzel aus einer negativen Zahl?', a: 'Die gibt es, und sie wird berechnet: ∛−8 = −2, denn (−2)³ = −8. Dasselbe gilt für jede Wurzel ungeraden Grades.' },
      { q: 'Was bedeutet ein negativer Exponent?', a: 'Eins geteilt durch dieselbe Potenz mit positivem Exponenten: 2⁻³ ist 1/2³, also 0,125.' },
      { q: 'Warum ist jede Zahl hoch null gleich eins?', a: 'Weil beim Teilen von Potenzen die Exponenten voneinander abgezogen werden: aⁿ ÷ aⁿ = a⁰, und die linke Seite ist eins. Die Null selbst ist die Ausnahme — 0⁰ hat keinen vereinbarten Wert.' },
      { q: 'Kann ich einen gebrochenen Exponenten verwenden?', a: 'Ja. Eine Potenz von 0,5 ist die Quadratwurzel und 1/3 die Kubikwurzel. Für eine negative Basis wird ein gebrochener Exponent nicht angenommen: er ist nicht durchgängig festgelegt, und einen plausiblen Wert einzusetzen wäre falsch.' },
    ],
  },
  'prime-factorization': {
    longDescription: 'Zerlegt eine ganze Zahl durch Probedivision in Primfaktoren und zeigt die kanonische Form mit Exponenten, wie viele verschiedene Primzahlen sie enthält und wie viele Teiler daraus folgen.',
    howToUse: [
      'Trage eine ganze Zahl ab zwei ein.',
      'Lies die Zerlegung ab.',
      'Prüfe bei Bedarf die Zahl der Teiler.',
    ],
    howItWorks: 'Die Probedivision läuft bis zur Quadratwurzel der Zahl; was darüber hinaus größer als eins bleibt, ist selbst prim.',
    example: '360 = 2³ · 3² · 5, woraus (3+1)(2+1)(1+1) = 24 Teiler folgen.',
    faq: [
      { q: 'Wie kommt die Zahl der Teiler zustande?', a: 'Multipliziere jeden um eins erhöhten Exponenten. Für 2³ · 3² · 5 sind das 4 × 3 × 2 = 24.' },
      { q: 'Warum lässt sich die Eins nicht zerlegen?', a: 'Die Eins hat überhaupt keine Primfaktoren, es gibt also nichts zu schreiben statt einer leeren Antwort.' },
      { q: 'Gibt es eine obere Grenze?', a: 'Ja. Über 10¹² wird die Probedivision langsam, und die gewöhnliche Zahlengenauigkeit beginnt Stellen zu verlieren, größere Eingaben werden deshalb abgewiesen statt falsch beantwortet.' },
      { q: 'Woran erkenne ich, dass eine Zahl prim ist?', a: 'Ihre Zerlegung ist die Zahl selbst, und der Rechner sagt das in einer eigenen Zeile.' },
    ],
  },
  'probability-basic': {
    longDescription: 'Berechnet einfache Wahrscheinlichkeiten auf vier Wegen: den Anteil günstiger Ausgänge, die Wahrscheinlichkeit des Gegenereignisses sowie das gemeinsame Eintreten und den Fall „mindestens eines“ für zwei unabhängige Ereignisse. Beim letzten versagt die Anschauung am häufigsten: „mindestens eines“ zweier Ereignisse mit je 50 % sind nicht 100 %, sondern 75 %, denn Wahrscheinlichkeiten lassen sich nicht einfach addieren — die richtige Formel zieht die Überschneidung ab.',
    howToUse: [
      'Wähle, was berechnet werden soll.',
      'Trage die Ausgänge oder die Wahrscheinlichkeiten der Ereignisse ein.',
      'Lies die Wahrscheinlichkeit als Bruch, als Prozentwert und als Chancen ab.',
    ],
    howItWorks: 'Die Wahrscheinlichkeit eines Ereignisses ist die Zahl der günstigen Ausgänge geteilt durch alle Ausgänge. Das Gegenereignis ist 1 − p. Beide unabhängigen Ereignisse: p₁ · p₂. Mindestens eines: p₁ + p₂ − p₁ · p₂.',
    example: 'Ein günstiger Ausgang von sechs ergibt eine Wahrscheinlichkeit von 0,1667, also 16,667 %.',
    faq: [
      { q: 'Warum sind „mindestens eines“ zweier Ereignisse mit je 50 % nicht 100 %?', a: 'Weil Wahrscheinlichkeiten sich nicht einfach addieren lassen: das Addieren zählte den Fall, dass beide eintreten, zweimal. Die richtige Formel zieht diese Überschneidung ab: 0,5 + 0,5 − 0,25 = 0,75.' },
      { q: 'Was bedeutet „unabhängige Ereignisse“?', a: 'Dass der Ausgang des einen den anderen nicht beeinflusst: zwei Münzwürfe sind unabhängig, während das Ziehen zweier Karten ohne Zurücklegen es nicht ist und eine andere Formel braucht.' },
      { q: 'Wie lese ich die Chancen?', a: 'Chancen von „5 zu 1“ bedeuten fünf ungünstige Ausgänge auf einen günstigen. Es ist dieselbe Angabe wie die Wahrscheinlichkeit, nur anders geschrieben.' },
      { q: 'Kann eine Wahrscheinlichkeit über eins liegen?', a: 'Nein. Eins bedeutet ein sicheres Ereignis, und nichts geht darüber hinaus — deshalb kann es auch nicht mehr günstige Ausgänge als Ausgänge insgesamt geben.' },
    ],
  },
  'proportion': {
    longDescription: 'Löst eine Verhältnisgleichung nach dem Glied, das du wählst. Das Kreuzprodukt macht aus der Gleichheit eine einzige Division, und der Rechner zeigt die vervollständigte Gleichung samt der Probe über die Kreuzprodukte.',
    howToUse: [
      'Wähle, welches Glied gesucht ist.',
      'Fülle die drei bekannten Glieder aus.',
      'Lies die Antwort und die Probe ab.',
    ],
    howItWorks: 'Aus a : b = c : d folgt a × d = b × c, jedes Glied ist also das Produkt des anderen Paares geteilt durch das ihm gegenüberliegende Glied.',
    example: 'In 2 : 3 = 4 : d ist das vierte Glied 3 × 4 ÷ 2 = 6.',
    faq: [
      { q: 'Warum ist ein Feld ausgeblendet?', a: 'Das gesuchte Glied wird berechnet, es sichtbar zu lassen lüde also zu einer Eingabe ein, die danach ohnehin übergangen wird.' },
      { q: 'Welches Glied darf nicht null sein?', a: 'Das dem gesuchten schräg gegenüberliegende — es wird zum Teiler.' },
      { q: 'Dürfen die Glieder negativ sein?', a: 'Ja. Das Kreuzprodukt gilt für beliebige Vorzeichen, und die Zeile mit der Probe macht das Ergebnis nachprüfbar.' },
      { q: 'Was ist die Probe über die Kreuzprodukte?', a: 'Sie multipliziert beide Diagonalen. In einer richtigen Verhältnisgleichung sind die beiden Produkte gleich.' },
    ],
  },
  'quartile': {
    longDescription: 'Der Mittelwert verbirgt die Gestalt einer Stichprobe; die Quartile zeigen sie. Die Hälfte der Werte liegt zwischen dem ersten und dem dritten Quartil, und die Breite dieses Bandes sagt mehr über die Streuung aus als eine Standardabweichung. Die Whisker des Boxplots und die Ausreißer folgen aus denselben zwei Zahlen. Eine Feinheit zählt: es gibt mehrere Festlegungen eines Quartils, und sie liefern auf denselben Daten verschiedene Zahlen — diese Seite nutzt die lineare Interpolation nach Stellung, die Regel, die Tabellenkalkulationen QUARTILE.INKL nennen.',
    howToUse: [
      'Trenne die Zahlen mit Leerzeichen, Zeilenumbrüchen oder Semikola; ein Komma vor einem Leerzeichen zählt ebenfalls als Trenner.',
      'Schreibe Dezimalzahlen mit Komma: 2,5 ist zweieinhalb und nicht zwei Werte.',
      'Es werden mindestens vier Werte gebraucht: bei drei Zahlen verlieren Quartile ihren Sinn.',
      'Ein Wert jenseits von Q1 − 1,5·IQA oder Q3 + 1,5·IQA gilt als Ausreißer — die übliche Boxplot-Übereinkunft.',
    ],
    howItWorks: 'Perzentilstelle (n−1)·p mit linearer Interpolation zwischen den Nachbarn, wie bei QUARTILE.INKL; Whisker bei Q1 − 1,5·IQA und Q3 + 1,5·IQA.',
    example: 'Für die Stichprobe 2 4 4 5 7 9 11 12 ist das erste Quartil 4, der Median 6 und das dritte Quartil 9,5.',
    faq: [
      { q: 'Warum liefern verschiedene Werkzeuge verschiedene Quartile?', a: 'Weil es mehrere Festlegungen gibt: manche schließen den Median beim Teilen der Stichprobe aus, andere schließen ihn ein, wieder andere interpolieren anders. Diese Seite nutzt die lineare Interpolation nach Stellung (n−1)·p — dieselbe wie QUARTILE.INKL und NumPy in der Voreinstellung.' },
      { q: 'Warum ist der Interquartilsabstand besser als die schlichte Spannweite?', a: 'Die schlichte Spannweite wird von den beiden äußersten Werten bestimmt, ein einzelner Ausreißer bläht sie also vollständig auf. Der Interquartilsabstand ruht auf der Mitte der Stichprobe und ist deshalb robust: füge zehn Werten eine riesige Zahl hinzu, und die Spannweite vervielfacht sich, während der Interquartilsabstand sich kaum bewegt.' },
      { q: 'Warum anderthalb Abstände für einen Ausreißer?', a: 'Es ist Tukeys Übereinkunft für den Boxplot. Bei einer Normalverteilung liegen weniger als ein Prozent der Werte jenseits dieser Grenzen, alles darüber hinaus lohnt also einen genaueren Blick.' },
      { q: 'Was, wenn alle Zahlen gleich sind?', a: 'Dann fallen die Quartile zusammen, der Interquartilsabstand ist null, und die Whisker schrumpfen auf einen Punkt. Ausreißer gibt es keine: kein Wert fällt aus den Grenzen.' },
    ],
  },
  'ratio': {
    longDescription: 'Kürzt ein Verhältnis und teilt, wenn ein Betrag angegeben ist, diesen über die Glieder auf. Das Kürzen ist genau — über den größten gemeinsamen Teiler — und gilt nur für ganze Glieder: aus gebrochenen lässt sich kein gemeinsamer Teiler herausziehen, und „1,5:2,5“ als gekürzt auszugeben beschriebe falsch, was getan wurde, ein solches Verhältnis erscheint deshalb wie eingetragen. Die Summe der Glieder und die Anteile werden aus dem berechnet, was du eingetippt hast, und nicht aus der gekürzten Form, die Prozentwerte passen also zu deinen eigenen Zahlen. Das Feld für den Betrag ist freiwillig: lass es weg, und es wird allein das Verhältnis bearbeitet.',
    howToUse: [
      'Trage die Glieder des Verhältnisses mit Leerzeichen oder Doppelpunkten getrennt ein.',
      'Zwei oder mehr Glieder sind erlaubt.',
      'Lass den Betrag auf null, um nur das Verhältnis zu kürzen.',
      'Trage einen Betrag ein, um ihn in dieser Proportion aufzuteilen.',
    ],
    howItWorks: 'Ganze Glieder werden durch ihren größten gemeinsamen Teiler geteilt — das ist das Kürzen. Der Anteil eines Gliedes = Glied ÷ Summe der Glieder. Ist ein Betrag angegeben, erhält ein Glied Betrag × Glied ÷ Summe der Glieder.',
    example: 'Das Verhältnis 2:3:5 auf 6000 angewendet ergibt 1200, 1800 und 3000, und der Anteil des ersten Gliedes beträgt 20 %.',
    faq: [
      { q: 'Wie unterscheidet sich das von einer Verhältnisgleichung?', a: 'Eine Verhältnisgleichung löst a/b = c/d nach dem fehlenden Glied. Hier geht es um eine andere Aufgabe: ein Verhältnis zu kürzen und einen Betrag darüber aufzuteilen, ohne dass etwas unbekannt wäre.' },
      { q: 'Warum werden gebrochene Glieder nicht gekürzt?', a: 'Der größte gemeinsame Teiler ist für ganze Zahlen festgelegt. Ein Verhältnis von 1,5:2,5 erscheint wie eingetragen — es gekürzt zu nennen beschriebe die ausgeführte Rechnung falsch.' },
      { q: 'Wie viele Glieder darf ich eintragen?', a: 'Zwei oder mehr, ohne obere Grenze. Das Kürzen und die Anteile werden über die ganze Menge auf einmal berechnet.' },
      { q: 'Warum wird die Summe aus den eingetragenen Werten genommen?', a: 'Damit die Prozentwerte zu dem passen, was du eingetippt hast. Für 12:18 ist die Summe der Glieder 30 und nicht 5, obwohl die gekürzte Form 2:3 lautet.' },
      { q: 'Wie teile ich einen Betrag ungleich auf?', a: 'Gib die Glieder in der gewünschten Proportion an: 50:30:20 teilt einen Betrag in diesem Verhältnis, während 1:1:1 ihn zu gleichen Teilen dreiteilt.' },
    ],
  },
};
