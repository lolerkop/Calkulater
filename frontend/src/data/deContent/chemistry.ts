import type { DeDetailedContent } from './types';

export const deChemistryContent: Partial<Record<string, DeDetailedContent>> = {
  'dilution': {
    longDescription: 'Löst die Verdünnungsaufgabe in beide Richtungen: auf welches Volumen die Lösung aufzufüllen ist und wie viel Stammlösung dafür nötig ist. Eine eigene Zeile nennt die Menge Lösungsmittel, die zugegeben werden muss — am Labortisch ist das meist die eigentlich gesuchte Zahl. Die Endkonzentration kann die Ausgangskonzentration nicht übersteigen: Lösungsmittel zuzugeben macht eine Lösung nie stärker, deshalb wird eine solche Eingabe abgewiesen und nicht stillschweigend als Eindampfen gerechnet.',
    howToUse: [
      'Wähle, welches Volumen gesucht ist.',
      'Trage die drei übrigen Größen ein.',
      'Lies das Ergebnis und die zuzugebende Menge Lösungsmittel ab.',
    ],
    howItWorks: 'Beim Verdünnen ändert sich die Stoffmenge nicht, deshalb bleibt das Produkt aus Konzentration und Volumen gleich: C₁·V₁ = C₂·V₂. Das Volumen des Lösungsmittels ist die Differenz zwischen End- und Ausgangsvolumen.',
    example: '50 ml einer 2-molaren Lösung auf 200 ml aufgefüllt ergeben 0,5 mol/l — es kommen also 150 ml Lösungsmittel hinzu.',
    faq: [
      { q: 'In welchen Einheiten müssen die Konzentrationen stehen?', a: 'In beliebigen, solange beide dieselben sind. Die Regel arbeitet mit einem Verhältnis, deshalb taugen Molarität, Prozent und Gramm je Liter gleichermaßen.' },
      { q: 'Warum darf die Endkonzentration nicht höher sein als die Ausgangskonzentration?', a: 'Weil das keine Verdünnung mehr wäre. Lösungsmittel zuzugeben kann eine Konzentration nicht erhöhen — dafür braucht es Eindampfen, und das ist eine andere Physik mit einer anderen Antwort.' },
      { q: 'Was zeigt die Zeile „Lösungsmittel zugeben“?', a: 'Die Differenz zwischen End- und Ausgangsvolumen, also die Menge, die tatsächlich zugegossen werden muss. Genau diese Zahl braucht man beim Ansetzen von Hand.' },
      { q: 'Wird die Volumenkontraktion beim Mischen berücksichtigt?', a: 'Nein. Die Volumina werden als additiv behandelt — die übliche Näherung für verdünnte wässrige Lösungen. Bei konzentrierten Gemischen rechne über die Dichte nach.' },
    ],
  },
  'gas-laws': {
    longDescription: 'Rechnet aus, wie dieselbe Gasportion von einem ersten in einen zweiten Zustand übergeht. Der Unterschied zur idealen Gasgleichung ist einfach: dort wird ein einzelner Zustand über Stoffmenge und Gaskonstante beschrieben, hier kürzt sich die Stoffmenge heraus — beide Zustände enthalten dasselbe Gas — und übrig bleibt nur ein Verhältnis dreier Größen. Die Gesetze von Boyle-Mariotte, Gay-Lussac und Charles fallen aus dieser Formel heraus, sobald eine Größe konstant gehalten wird.',
    howToUse: [
      'Wähle, welche Größe des zweiten Zustands gesucht ist.',
      'Trage Druck, Volumen und Temperatur des ersten Zustands ein.',
      'Fülle die beiden bekannten Größen des zweiten Zustands aus.',
      'Gib Temperaturen in Kelvin an: zu einem Celsius-Wert 273,15 addieren.',
    ],
    howItWorks: 'Für eine feste Gasportion bleibt das Verhältnis p·V/T konstant, also gilt p₁V₁/T₁ = p₂V₂/T₂. Die gesuchte Größe wird aus dieser Gleichheit freigestellt.',
    example: 'Zwei Liter bei 100 kPa und 300 K, auf einen Liter bei gleicher Temperatur verdichtet, ergeben 200 kPa.',
    faq: [
      { q: 'Worin unterscheidet sich das von der idealen Gasgleichung?', a: 'Jene beschreibt einen einzelnen Zustand über Stoffmenge und Gaskonstante. Diese beschreibt den Übergang zwischen zwei Zuständen derselben Portion, und die Stoffmenge kürzt sich heraus.' },
      { q: 'Warum nur Kelvin?', a: 'Weil die Formel mit einem Temperaturverhältnis arbeitet. In Celsius ist der Nullpunkt willkürlich gesetzt, und bei null Grad würde der Nenner verschwinden.' },
      { q: 'Wo stecken das Gesetz von Boyle-Mariotte und das von Gay-Lussac?', a: 'Sie sind Sonderfälle. Hältst du die Temperatur konstant, bleibt Boyle-Mariotte; hältst du den Druck konstant, bleibt das Gesetz von Charles.' },
      { q: 'Gilt das auch für ein reales Gas?', a: 'Als Näherung ja, bei mäßigen Drücken und weit entfernt von der Kondensation. Verdichtete Gase und solche nahe der Verflüssigung weichen merklich ab.' },
    ],
  },
  'ideal-gas-law': {
    longDescription: 'Löst das ideale Gasgesetz nach dem Druck oder nach dem Volumen auf. Die Gaskonstante 8,314462618 gilt nur in Basiseinheiten — Pascal, Kubikmeter, Mol und Kelvin —, deshalb wird jede gewählte Einheit vor dem Einsetzen in die Basis umgerechnet und die Antwort danach zurückgerechnet. Genau hier passiert der übliche Fehler: Liter zusammen mit Kilopascal in derselben Formel ergeben ein zahlenmäßig plausibles und falsches Ergebnis. Temperaturen unterhalb des absoluten Nullpunkts werden abgewiesen, und null Grad Celsius sind 273,15 K, nicht null.',
    howToUse: [
      'Wähle, ob Druck oder Volumen gesucht ist.',
      'Trage Stoffmenge und Temperatur ein und wähle deren Einheit.',
      'Trage die verbleibende Größe in den passenden Einheiten ein und lies das Ergebnis ab.',
    ],
    howItWorks: 'pV = nRT mit R = 8,314462618 J/(mol·K). Diese Konstante gilt in Pascal, Kubikmeter, Mol und Kelvin, deshalb werden die gewählten Einheiten vor dem Einsetzen in die Basiseinheiten umgerechnet und das Ergebnis danach zurückgerechnet. Grad Celsius werden durch Addition von 273,15 zu Kelvin.',
    example: 'Zwei Mol Gas bei 300 K in 0,05 m³ üben einen Druck von 99 773,55 Pa aus — etwas unter dem Luftdruck.',
    faq: [
      { q: 'Warum müssen Einheiten ausgewählt statt frei eingetippt werden?', a: 'Weil die Gaskonstante an ihre Einheiten gebunden ist. In Pascal und Kubikmeter beträgt sie 8,314463; setzt man Liter und Kilopascal in dieselbe Formel ein, kommt eine plausible, falsche Zahl heraus.' },
      { q: 'Muss die Temperatur in Kelvin stehen?', a: 'Die Gleichung braucht die absolute Temperatur, ja. Wenn Celsius bequemer ist, wähle es — die Umrechnung um 273,15 wird für dich übernommen.' },
      { q: 'Was passiert bei der Temperatur null?', a: 'Der Druck geht gegen null, das ist ein zulässiger Grenzfall. Eine Temperatur unter dem absoluten Nullpunkt wird abgewiesen: einen solchen Zustand gibt es nicht.' },
      { q: 'Wie gut beschreibt das Modell reale Gase?', a: 'Gut bei mäßigen Drücken und Temperaturen weit weg von der Kondensation. Nahe der Verflüssigung und bei hohen Drücken braucht es Korrekturen, die das ideale Gasgesetz nicht enthält.' },
    ],
  },
  'molarity': {
    longDescription: 'Ermittelt die molare Konzentration — wie viele Mol gelösten Stoffes auf einen Liter Lösung kommen. Ist die Stoffmenge nicht bekannt, lässt sie sich hier direkt aus Masse und molarer Masse gewinnen, ohne vorher getrennt zu rechnen. Das Volumen wird vor dem Anwenden der Formel in Liter umgerechnet, deshalb werden Milliliter und Kubikmeter aus einer Liste gewählt statt von Hand umgerechnet: genau bei dieser Umrechnung entsteht sonst der Fehler, der ein tausendfach danebenliegendes und völlig plausibles Ergebnis liefert.',
    howToUse: [
      'Wähle, ob du die Stoffmenge oder die Masse kennst.',
      'Trage den Wert ein, bei der Masse zusätzlich die molare Masse.',
      'Wähle die Einheit des Volumens und trage das Volumen der Lösung ein.',
    ],
    howItWorks: 'C = n / V, wobei n die Stoffmenge in Mol und V das Volumen der Lösung in Litern ist. Ist die Masse gegeben, wird die Stoffmenge zuerst als n = m / M bestimmt. Die gewählte Volumeneinheit wird vor der Division in Liter umgerechnet.',
    example: 'Ein halbes Mol in zwei Litern Lösung ergibt eine Konzentration von 0,25 mol/l.',
    faq: [
      { q: 'Bezieht sich die Molarität auf das Volumen der Lösung oder des Lösungsmittels?', a: 'Auf das Volumen der fertigen Lösung. Das ist nicht dasselbe: Beim Lösen ändert sich das Volumen, ein Liter Wasser plus Stoff ergibt keinen Liter Lösung.' },
      { q: 'Wie komme ich von einer Masse zur Molarität?', a: 'Wähle den Massenmodus und gib die molare Masse des Stoffes an. Die Stoffmenge ergibt sich als Masse geteilt durch molare Masse, der Rest der Rechnung ist identisch.' },
      { q: 'Warum muss die Volumeneinheit gewählt werden?', a: 'Weil die Formel in Litern arbeitet. Milliliter und Kubikmeter werden automatisch umgerechnet — ohne das läge das Ergebnis um den Faktor tausend daneben und sähe trotzdem plausibel aus.' },
      { q: 'Wie unterscheidet sich die Molarität von der Prozentkonzentration?', a: 'Die Molarität zählt Teilchen, die Prozentkonzentration zählt Masse. Für dieselbe Lösung sind das zwei verschiedene Zahlen, und die eine darf nicht für die andere eingesetzt werden.' },
    ],
  },
  'moles': {
    longDescription: 'Rechnet eine Masse in eine Stoffmenge um und zurück und zeigt, wie viele Teilchen das sind. Die Avogadro-Konstante ist exakt — seit der SI-Definition von 2019 genau 6,02214076×10²³ mol⁻¹ —, in der Rechnung ist also nichts zu runden. Die molare Masse wird als gewöhnliche Zahl eingetragen: der Rechner liest keine chemische Formel und gibt nicht vor, ein Tabellenwerk zu sein — dafür rät er sie dir auch nicht falsch zusammen.',
    howToUse: [
      'Wähle, ob du die Masse oder die Stoffmenge kennst.',
      'Trage den Wert ein.',
      'Gib die molare Masse des Stoffes aus dem Periodensystem an.',
    ],
    howItWorks: 'n = m / M — die Masse geteilt durch die molare Masse. Im umgekehrten Modus ergibt sich die Masse als m = n · M. Die Zahl der Teilchen ist die Stoffmenge mal der Avogadro-Konstante N_A = 6,02214076×10²³ mol⁻¹.',
    example: '18 Gramm Wasser bei einer molaren Masse von 18,02 g/mol ergeben 0,9989 mol — knapp unter einem Mol.',
    faq: [
      { q: 'Woher bekomme ich die molare Masse?', a: 'Aus dem Periodensystem: addiere die Atommassen aller Atome der Formel. Der Rechner leitet sie nicht her — er liest keine chemischen Formeln und gibt sich nicht als Tabellenwerk aus.' },
      { q: 'Warum sind 18 Gramm Wasser nicht genau ein Mol?', a: 'Weil die molare Masse von Wasser bei etwa 18,02 liegt und nicht bei 18. Genau ein Mol sind 18,02 Gramm; der Unterschied ist klein, im Ergebnis aber sichtbar.' },
      { q: 'Was bedeutet die Zahl der Teilchen?', a: 'Wie viele Moleküle, Atome oder Ionen diese Stoffmenge enthält. Es ist die Stoffmenge in Mol mal der Avogadro-Konstante.' },
      { q: 'Ist die Avogadro-Konstante gerundet?', a: 'Nein. Seit 2019 ist sie exakt auf 6,02214076×10²³ mol⁻¹ festgelegt — sie definiert die Einheit, statt gemessen zu werden.' },
    ],
  },
  'ph-poh': {
    longDescription: 'Rechnet eine Wasserstoffionenkonzentration in den pH-Wert um und zurück und nennt dazu den pOH sowie das Milieu: sauer, neutral oder alkalisch. pH und pOH ergeben zusammen nicht immer vierzehn, sondern bei 25 °C: das ist das Ionenprodukt des Wassers, und bei anderer Temperatur fällt es anders aus — deshalb steht dieser Vorbehalt auf der Seite und nicht im Kleingedruckten. Der Logarithmus ist nur für eine positive Konzentration definiert, null wird deshalb abgewiesen statt unendlich zu werden.',
    howToUse: [
      'Wähle, ob du die Konzentration oder den pH-Wert kennst.',
      'Trage den Wert ein.',
      'Lies die andere Größe, den pOH und das Milieu ab.',
    ],
    howItWorks: 'pH = −log₁₀[H⁺], der dekadische Logarithmus der Konzentration mit umgekehrtem Vorzeichen. Umgekehrt gilt [H⁺] = 10^−pH. Bei 25 °C beträgt das Ionenprodukt des Wassers 10⁻¹⁴, deshalb gilt pH + pOH = 14.',
    example: 'Eine Wasserstoffionenkonzentration von 10⁻³ mol/l entspricht pH 3 und pOH 11 — ein saures Milieu.',
    faq: [
      { q: 'Ergeben pH und pOH immer 14?', a: 'Nein, nur bei 25 °C. Die Summe entspricht dem Exponenten des Ionenprodukts von Wasser, und das hängt von der Temperatur ab: bei 60 °C liegt sie schon bei etwa 13,0.' },
      { q: 'Was bedeutet pH 7?', a: 'Dass die Konzentrationen von Wasserstoff- und Hydroxidionen gleich sind — ein neutrales Milieu. Auch das gilt bei 25 °C.' },
      { q: 'Warum wird die Konzentration null nicht angenommen?', a: 'Null hat keinen Logarithmus. Eine Lösung ganz ohne Wasserstoffionen ist physikalisch unmöglich, deshalb erscheint eine Fehlermeldung statt unendlich.' },
      { q: 'Kann der pH-Wert außerhalb von 0 bis 14 liegen?', a: 'Formal ja, in sehr konzentrierten Lösungen, aber dort verliert die Skala ihren Sinn und die üblichen Näherungen brechen zusammen. Der Bereich ist hier bewusst begrenzt.' },
    ],
  },
  'solution-concentration': {
    longDescription: 'Ermittelt die Konzentration einer Lösung in den beiden gebräuchlichsten Formen sowie in Teilen je Million. Die Form ist eine ausdrückliche Wahl, weil Massenprozent und Volumenprozent verschiedene Größen sind und ein Tausch der einen gegen die andere unter demselben Namen eine andere Zahl liefert. Es kann nicht mehr Stoff als Lösung geben: eine solche Eingabe wird abgewiesen statt auf hundert Prozent gedeckelt, denn ein Deckel würde aus einem Fehler eine plausible Antwort machen.',
    howToUse: [
      'Wähle die Form der Konzentration.',
      'Trage die Masse des gelösten Stoffes ein.',
      'Gib die Masse oder das Volumen der fertigen Lösung an.',
    ],
    howItWorks: 'Der Massenanteil ist die Masse des Stoffes geteilt durch die Masse der Lösung, mal hundert. Masse je Volumen teilt dieselbe Masse durch das Volumen der Lösung. Teile je Million sind dasselbe Verhältnis, mal einer Million.',
    example: '25 Gramm Stoff in 500 Gramm Lösung ergeben 5 % Massenanteil, es bleiben 475 Gramm Lösungsmittel.',
    faq: [
      { q: 'Trage ich die Masse der Lösung oder die des Lösungsmittels ein?', a: 'Die Masse der fertigen Lösung — Stoff und Lösungsmittel zusammen. Die Masse des Lösungsmittels wird als Differenz gesondert ausgewiesen.' },
      { q: 'Wie unterscheidet sich Massenprozent von Masse je Volumen?', a: 'Im Nenner. Das eine nimmt die Masse der Lösung in Gramm, das andere ihr Volumen in Millilitern. Sobald die Dichte nicht eins ist, gehen beide Zahlen auseinander.' },
      { q: 'Was ist ppm?', a: 'Teile je Million — dasselbe Massenverhältnis, mal einer Million statt mal hundert. Es passt zu sehr verdünnten Lösungen, bei denen der Prozentwert in die Tausendstel rutscht.' },
      { q: 'Warum darf ich nicht mehr Stoff als Lösung eintragen?', a: 'Weil es eine solche Lösung nicht gibt: der Stoff ist Teil ihrer Masse. Das Ergebnis bei hundert Prozent zu deckeln, würde einen Eingabefehler als richtige Antwort ausgeben.' },
    ],
  },
};
