import type { DeDetailedContent } from './types';

export const deFinance4Content: Partial<Record<string, DeDetailedContent>> = {
  'lease-payment': {
    longDescription: 'Leasing unterscheidet sich von einem Darlehen durch den Restwert: getilgt wird nicht die ganze Sache, sondern der Abstand zwischen Preis und Restwert, was die Rate merklich senkt. Der Zinsanteil wird jedoch auf die SUMME aus finanziertem Betrag und Restwert berechnet — das Geld des Leasinggebers steckt in der ganzen Sache und nicht nur in dem Teil, der getilgt wird. Das erklärt, warum ein hoher Restwert die Rate weniger senkt, als man erwartet.',
    howToUse: [
      'Der Restwertanteil ist das, was am Ende noch abzulösen ist; beim Fahrzeugleasing sind 20–45 % üblich.',
      'Der Jahressatz ist hier der im Leasing übliche Aufschlag und kein effektiver Jahreszins eines Darlehens.',
      'Die Anzahlung mindert sowohl den Abschreibungs- als auch den Zinsanteil, sie wirkt hier also stärker als bei einem Darlehen.',
      'Versicherung, Steuer und Wartung stecken nicht in der Rate — rechne sie gesondert.',
    ],
    howItWorks: 'Rate = (finanziert − Restwert)/Laufzeit + (finanziert + Restwert)×Satz/2400.',
    example: '40 000 € mit 8000 € Anzahlung, 40 % Restwert und 12 % ergeben 822,22 € im Monat.',
    faq: [
      { q: 'Warum ist eine Leasingrate niedriger als eine Darlehensrate?', a: 'Weil die Laufzeit nur den Abstand zum Restwert tilgt und nicht den ganzen Preis. Der Restwert wird am Ende auf einmal abgelöst oder die Sache zurückgegeben — die Rate ist niedriger, aber das Eigentum geht nicht von selbst über.' },
      { q: 'Warum werden auch auf den Restwert Zinsen berechnet?', a: 'Das Geld des Leasinggebers steckt in der ganzen Sache und nicht nur in dem Teil, der getilgt wird. Der Aufschlag wird deshalb auf die Summe aus finanziertem Betrag und Restwert genommen — daher der Teiler 2400 statt 1200.' },
      { q: 'Höhere Anzahlung oder niedrigerer Restwert?', a: 'Die Anzahlung senkt beide Teile der Rate zugleich, sie wirkt also stärker. Ein höherer Restwert senkt die Rate, schiebt die Kosten aber ans Ende der Laufzeit und erhöht den gesamten Aufschlag.' },
      { q: 'Was ist der jährliche Aufschlag?', a: 'Eine im Leasing übliche Art, die Kosten des Geldes anzugeben: wie viel Prozent des Preises je Jahr hinzukommen. Er ist NICHT dasselbe wie ein effektiver Jahreszins und lässt sich damit nicht unmittelbar vergleichen.' },
    ],
  },
  'leverage': {
    longDescription: 'Ein Hebel vervielfacht die Position und teilt den Spielraum für Fehler durch dieselbe Zahl, und die zweite Hälfte wird unterschätzt. Der Kehrwert des Hebels ist das ganze Polster: beim Fünffachen wischt eine Bewegung von zwanzig Prozent gegen die Position die Sicherheit weg; beim Zwanzigfachen genügen fünf Prozent. Die Erhaltungsmarge rückt den Liquidationspreis danach noch näher, denn eine Börse schließt eine Position etwas vor dem Punkt, an dem das Eigenkapital tatsächlich null erreicht, und nicht danach. Dieser Rechner zeigt die Position, diesen Liquidationspreis und den prozentualen Rückgang bis dorthin.',
    howToUse: [
      'Trage die Sicherheit ein, die du einsetzt.',
      'Trage den Hebelfaktor ein.',
      'Trage den Einstiegspreis des Instruments ein.',
      'Trage die von der Handelsplattform verlangte Erhaltungsmarge ein.',
    ],
    howItWorks: 'Position = Sicherheit × Hebel. Der Liquidationspreis ist der Einstiegspreis mal eins minus dem Kehrwert des Hebels plus der Erhaltungsmarge, und der Rückgang dorthin folgt aus den beiden Preisen.',
    example: 'Eine Sicherheit von 5000 € bei 5× und einem Einstieg von 2400 € mit 0,5 % Erhaltungsmarge liquidiert bei 1932 €.',
    faq: [
      { q: 'Warum rückt ein höherer Hebel die Liquidation so viel näher?', a: 'Weil das Polster der Kehrwert des Hebels ist. Den Hebel zu verdoppeln halbiert die Bewegung, die du überstehst, und am oberen Ende wirkt das schnell: 100× lassen ein Prozent.' },
      { q: 'Wozu die Erhaltungsmarge?', a: 'Sie ist der Boden an Eigenkapital, auf dem eine Plattform besteht. Die Liquidation geschieht, wenn das Eigenkapital auf diesen Boden fällt und nicht auf null, der auslösende Preis liegt also stets etwas näher, als die naive Rechnung vermuten lässt.' },
      { q: 'Gilt das auch für Short-Positionen?', a: 'Die Rechnung spiegelt sich, aber die Richtung kehrt sich um: eine Short-Position wird von einem Anstieg liquidiert und nicht von einem Rückgang. Diese Rechnung ist für eine Long-Position geschrieben.' },
      { q: 'Sind Finanzierung und Gebühren enthalten?', a: 'Nein. Finanzierungszahlungen, Leihkosten und Handelsgebühren zehren die Sicherheit mit der Zeit auf und ziehen den wirklichen Liquidationspreis näher heran als die hier gezeigte Zahl.' },
    ],
  },
  'market-cap': {
    longDescription: 'Berechnet die Marktkapitalisierung — ausstehende Aktien mal dem Kurs einer Aktie. Sie ist das, womit der Markt das ganze Unternehmen bewertet, und die Zahl, nach der Unternehmen in große, mittlere und kleine Werte sortiert werden. Die umgekehrte Richtung ergibt den Aktienkurs aus einer bekannten Kapitalisierung. Beachte, dass die Marktkapitalisierung nicht der Wert des Geschäfts ist: sie lässt Schulden und Barmittel außer Acht, wofür es eine eigene Kennzahl gibt.',
    howToUse: [
      'Wähle, was du brauchst.',
      'Trage die Aktienzahl und den anderen bekannten Wert ein.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Marktkapitalisierung = ausstehende Aktien × Kurs je Aktie; daraus Kurs = Kapitalisierung ÷ ausstehende Aktien.',
    example: 'Eine Million Aktien zu je 25 € ergeben eine Kapitalisierung von 25 000 000 €.',
    faq: [
      { q: 'Ist die Marktkapitalisierung der Wert des Unternehmens?', a: 'Nicht ganz. Sie ist die Bewertung seiner Aktien durch den Markt. Der Wert des Geschäfts berücksichtigt zusätzlich Schulden und Barmittel und nutzt eine andere Kennzahl.' },
      { q: 'Welche Aktien zählen — ausgegebene oder ausstehende?', a: 'Die ausstehenden. Vom Unternehmen zurückgekaufte Aktien bleiben gewöhnlich außen vor, nimm die Zahl also aus dem Abschluss und nicht aus der Satzung.' },
      { q: 'Ändert sich die Marktkapitalisierung im Tagesverlauf?', a: 'Ja, zusammen mit dem Aktienkurs. Hier steht eine Momentaufnahme zu dem Kurs, den du einträgst; es werden keine Kurse abgerufen.' },
      { q: 'Was ist die voll verwässerte Kapitalisierung?', a: 'Eine Bewertung, die künftige Aktien aus Optionen und Wandelanleihen einbezieht. Sie wird hier nicht berechnet — verwendet wird die derzeitige Zahl der ausstehenden Aktien.' },
    ],
  },
  'max-loan': {
    longDescription: 'Löst die übliche Darlehensrechnung rückwärts: jene geht von einem Betrag zu einer Rate, diese von einer tragbaren Rate zu einem Betrag. Die Rate kommt zuerst, aus deinem Einkommen und der Schuldendienstquote, die du hinnimmst, und das Darlehen ist danach der Barwert dieser Annuität. Bei einem Zinssatz von null teilte die Formel durch null, der Grenzfall bekommt deshalb einen eigenen Zweig: ohne Zinsen ist der Betrag schlicht die Summe aller Raten. Das Ergebnis ist eine von einer Formel erzeugte Obergrenze und kein bewilligtes Angebot — eine Bank wägt zusätzlich Schufa, Beschäftigung, Unterhaltspflichten und Sicherheiten und bewilligt gewöhnlich weniger.',
    howToUse: [
      'Trage dein monatliches Einkommen ein.',
      'Trage den Anteil davon ein, den du einer Bank zahlen willst.',
      'Trage Zinssatz und Laufzeit ein.',
      'Das Ergebnis ist eine rechnerische Obergrenze und keine Entscheidung einer Bank.',
    ],
    howItWorks: 'Rate = Einkommen × Schuldendienstquote. Betrag = Rate × (1 − (1 + i)⁻ⁿ) ÷ i, wobei i der Monatszins und n die Zahl der Raten ist. Bei einem Zinssatz von null ist der Betrag die Rate mal der Zahl der Raten.',
    example: 'Bei einem Einkommen von 3000 €, einer Quote von 40 %, 6 % Zinsen und 20 Jahren beträgt der Höchstbetrag 167 469,68 €.',
    faq: [
      { q: 'Welche Schuldendienstquote soll ich nehmen?', a: 'Banken arbeiten meist mit 40–50 % des Einkommens über alle Kredite zusammen. Hast du bereits andere Raten, zieh ihren Anteil ab — was bleibt, steht noch zur Verfügung.' },
      { q: 'Bewilligt eine Bank den berechneten Betrag?', a: 'Nicht unbedingt. Das ist eine rechnerische Obergrenze, während die Entscheidung zusätzlich auf Schufa, Dauer der Beschäftigung, Unterhaltspflichten und Sicherheiten beruht. Bewilligt wird meist weniger.' },
      { q: 'Warum wächst der Betrag nicht im Verhältnis zur Laufzeit?', a: 'Weil jede spätere Rate stärker abgezinst wird als die vorige. Bei 6 % bringt eine Verdopplung der Laufzeit von 10 auf 20 Jahre merklich weniger als die Hälfte hinzu.' },
      { q: 'Wie stark zählt der Zinssatz?', a: 'Erheblich, und am stärksten über lange Laufzeiten. Bei gleicher Rate hebt ein Rückgang von 6 % auf 4 % den verfügbaren Betrag um rund ein Fünftel.' },
      { q: 'Einkommen vor oder nach Steuern?', a: 'Nach Steuern. Eine Bank beurteilt das Geld, das dein Konto tatsächlich erreicht, das Bruttoeinkommen zu nehmen setzt deine Tragfähigkeit also zu hoch an.' },
    ],
  },
  'overtime': {
    longDescription: 'Die Überstundenvergütung ist der gewöhnliche Satz mal einem Zuschlag, angewendet allein auf die Stunden über der regulären Arbeitszeit. Der tatsächliche Stundensatz neben der Summe ist der Teil, der sich zu lesen lohnt: er teilt alles Verdiente durch alle geleisteten Stunden, und er steigt weit weniger, als der Faktor vermuten lässt. Vierzehn Überstunden mit dem Anderthalbfachen auf hundertsechzig reguläre heben den tatsächlichen Satz um vier Prozent und nicht um fünfzig. Genau dieser Abstand lässt Überstunden im Vertrag besser aussehen, als sie sich auf der Abrechnung anfühlen.',
    howToUse: [
      'Trage den gewöhnlichen Stundensatz ein.',
      'Trage die im Zeitraum geleisteten regulären Stunden ein.',
      'Trage die Überstunden gesondert ein.',
      'Trage den Faktor ein, den dein Vertrag anwendet — 1,25 und 1,5 sind verbreitet.',
    ],
    howItWorks: 'Reguläre Vergütung = Satz × reguläre Stunden. Überstundenvergütung = Satz × Faktor × Überstunden. Der tatsächliche Satz teilt die Summe durch alle geleisteten Stunden.',
    example: 'Bei 20 € je Stunde ergeben 160 reguläre und 14 Überstunden mit dem Faktor 1,5 zusammen 3620 € — tatsächlich 20,80 € je Stunde.',
    faq: [
      { q: 'Warum liegt der tatsächliche Satz so viel unter dem Faktor?', a: 'Weil der Zuschlag allein für die Überstunden gilt, der Durchschnitt aber durch alle Stunden teilt. Ein kleiner Block Zuschlagsstunden bewegt den Durchschnitt sehr wenig.' },
      { q: 'Welcher Überstundenfaktor gilt für mich?', a: 'Der, den Vertrag oder Tarif setzen. Ein Zuschlag von 25 % für die ersten Stunden und mehr danach ist ein verbreitetes Muster, die genaue Regel unterscheidet sich aber nach Rechtsraum und Arbeitgeber.' },
      { q: 'Sind die Zahlen brutto oder netto?', a: 'Brutto. Lohnsteuer und Sozialabgaben kommen danach und liegen außerhalb dieser Rechnung.' },
      { q: 'Warum wird ein Faktor unter eins abgewiesen?', a: 'Weil eine Überstunde nicht weniger wert sein kann als eine gewöhnliche. Ein Wert unter eins bedeutet einen Tippfehler und keinen ungewöhnlichen Vertrag.' },
    ],
  },
  'position-size': {
    longDescription: 'Leitet die Größe nicht aus dem Betrag ab, den du einsetzen willst, sondern aus dem, den du verlieren kannst: wie viel an einer Einheit bis zum Stopp verloren geht, so oft passt das zugelassene Risiko hinein. Der Wert der Position fällt dabei als Nebenergebnis ab und kann das Konto durchaus übersteigen — ein Zeichen dafür, dass der Stopp zu nah sitzt, und kein Fehler in der Rechnung, und der Anteil am Konto steht gerade deshalb in einer eigenen Zeile. Ganze Einheiten werden abgerundet: eine gebrochene Einheit lässt sich nicht kaufen, und Aufrunden verletzte das gesetzte Risiko.',
    howToUse: [
      'Trage den ganzen Kontostand ein und nicht die freie Marge.',
      'Setze das je Handel zugelassene Risiko — meist zwischen einem halben und zwei Prozent.',
      'Trage Einstiegspreis und Stoppkurs ein.',
      'Prüfe den Anteil am Konto: über hundert Prozent heißt, dass der Stopp zu nah sitzt.',
    ],
    howItWorks: 'Risikobetrag = Konto × zugelassenes Risiko ÷ 100. Risiko je Einheit = der Abstand vom Einstieg zum Stopp. Größe = Risikobetrag ÷ Risiko je Einheit, ganze Einheiten abgerundet.',
    example: 'Auf einem Konto von 10 000 € mit 1 % Risiko und einem Stopp zehn Punkte entfernt beträgt die Größe 10 Einheiten im Wert von 2500 €.',
    faq: [
      { q: 'Warum folgt die Größe aus dem Stopp und nicht aus dem eingesetzten Betrag?', a: 'Weil nicht die ganze Position verloren geht, sondern der Abstand zum Stopp. Das Risiko wird in Geld gesetzt, und die Größe folgt daraus und nicht umgekehrt.' },
      { q: 'Die Position ist mehr wert als das Konto — ist das ein Fehler?', a: 'Nein, es ist ein Zeichen dafür, dass der Stopp zu nah sitzt. Bei einem Abstand von einem Hundertstel Punkt verlangt das gewählte Risiko eine riesige Größe, und der Anteil am Konto sagt das unmittelbar.' },
      { q: 'Warum werden ganze Einheiten abgerundet?', a: 'Weil Aufrunden die Größe erhöhte und damit den Verlust beim Auslösen des Stopps über das gesetzte Risiko hinaus.' },
      { q: 'Sind Gebühren und Kursschlupf enthalten?', a: 'Nein. Beide erhöhen den tatsächlichen Verlust, das wirkliche Risiko liegt also etwas über der berechneten Zahl.' },
      { q: 'Welcher Risikoprozentsatz gilt als sinnvoll?', a: 'Ein verbreiteter Anhaltspunkt sind 0,5 bis 2 % des Kontos je Handel. Das ist eine Übereinkunft des Geldmanagements und keine Empfehlung — den Wert setzt du selbst.' },
    ],
  },
  'real-return': {
    longDescription: 'Teilt eins plus den Nominalzins durch eins plus die Inflation, und das ist die ehrliche Art, die Inflation herauszurechnen. Die beiden Sätze voneinander abzuziehen ist die vertraute Näherung, und sie steht daneben: bei 12 und 7 Prozent nennt sie 5, während der wahre Wert bei 4,67 liegt, und der Abstand wächst mit steigender Inflation.',
    howToUse: [
      'Trage den Nominalzins ein, der dir geboten wird.',
      'Trage die Inflation ein, die du erwartest.',
      'Ergänze bei Bedarf einen Betrag und einen Zeitraum.',
    ],
    howItWorks: 'Reale Rendite = ((1 + nominal) ÷ (1 + Inflation) − 1) × 100, mit beiden Sätzen als Bruchteilen.',
    example: 'Ein Satz von 12 Prozent bei 7 Prozent Inflation sind real 4,67 Prozent und nicht die 5, die die Subtraktion nahelegt.',
    faq: [
      { q: 'Warum nicht einfach die Sätze abziehen?', a: 'Weil die Inflation auf den gewachsenen Betrag wirkt und nicht auf den anfänglichen. Die Subtraktion liegt bei niedrigen Sätzen nah dran und weicht mit steigender Inflation merklich ab.' },
      { q: 'Kann die reale Rendite negativ sein?', a: 'Ja, und das ist sie oft. Es bedeutet, dass das Geld langsamer wächst als die Preise, es kauft am Ende also weniger als am Anfang.' },
      { q: 'Welche Inflationszahl soll ich nehmen?', a: 'Die, die du über deinen Zeitraum erwartest, und nicht die amtliche Zahl des Vorjahres. Das Ergebnis ist nur so gut wie diese Annahme.' },
      { q: 'Ist die Steuer berücksichtigt?', a: 'Nein. Wende deine eigene Steuer zuerst auf den Nominalzins an, wenn die Rendite steuerpflichtig ist, und vergleiche danach mit der Inflation.' },
    ],
  },
};
