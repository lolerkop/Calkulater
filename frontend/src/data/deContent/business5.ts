import type { DeDetailedContent } from './types';

export const deBusiness5Content: Partial<Record<string, DeDetailedContent>> = {
  'return-rate': {
    longDescription: 'Die Rücksendequote teilt zurückgeschickte Bestellungen durch alle Bestellungen desselben Zeitraums. Beide Zahlen sind ganze Zahlen, und Rücksendungen können die Bestellungen nicht übersteigen — diese Verbindung heißt, dass die beiden Zahlen aus verschiedenen Zeiträumen stammen.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Rücksendequote = Rücksendungen ÷ Bestellungen × 100, beides über denselben Zeitraum gezählt.',
    example: '45 Rücksendungen von 900 Bestellungen ergeben eine Rücksendequote von 5 %.',
    faq: [
      { q: 'Was zählt als Rücksendung?', a: 'Eine Bestellung, die der Kunde zurückgeschickt und für die er sein Geld erhalten hat. Stornierungen vor dem Versand werden gewöhnlich gesondert gezählt.' },
      { q: 'Warum dürfen Rücksendungen die Bestellungen nicht übersteigen?', a: 'Weil die beiden Zahlen dann aus verschiedenen Zeiträumen stammen, und jeder Prozentwert daraus wäre plausibel und falsch.' },
      { q: 'Ist eine hohe Rücksendequote immer schlecht?', a: 'Nicht unbedingt. Bei Bekleidung ist sie gewöhnlich und eingepreist; bei Elektronik wiese derselbe Wert auf ein Problem hin.' },
      { q: 'Wie wirkt sich das auf die Deckungsrechnung aus?', a: 'Rücksendungen mindern den Umsatz und bringen Logistikkosten, der Deckungsbeitrag gehört deshalb auf behaltene Bestellungen neu gerechnet.' },
    ],
  },
  'revenue-per-employee': {
    longDescription: 'Der Umsatz je Mitarbeiter teilt den Jahresumsatz durch die Beschäftigtenzahl. Er ist das gröbste Maß der Arbeitsproduktivität und das über Jahre hinweg am leichtesten vergleichbare, weil er weder von Gehaltsniveaus noch von der Kostenzurechnung abhängt.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Umsatz je Mitarbeiter = Jahresumsatz ÷ Beschäftigtenzahl.',
    example: 'Ein Umsatz von 1 200 000 € über 40 Mitarbeiter ergibt 30 000 € je Person und Jahr.',
    faq: [
      { q: 'Sollen Teilzeitkräfte mitgezählt werden?', a: 'Rechne sie vor der Eingabe in Vollzeitstellen um, sonst mischt die Kennzahl still zwei verschiedene Einheiten.' },
      { q: 'Sind freie Mitarbeiter enthalten?', a: 'Das entscheidest du, aber halte es über die Jahre gleich, sonst verliert der Verlauf seine Aussage.' },
      { q: 'Was ist ein guter Wert?', a: 'Er ergibt nur innerhalb einer Branche Sinn. Software und Einzelhandel liegen um eine Größenordnung auseinander.' },
      { q: 'Warum wird der Monatswert angezeigt?', a: 'Er lässt sich leichter gegen Gehälter halten, die gewöhnlich monatlich gedacht werden.' },
    ],
  },
  'roas': {
    longDescription: 'Teilt den Umsatz durch die Werbeausgaben. ROAS und ROI beschreiben dieselbe Kampagne, unterscheiden sich im Faktor aber um genau eins: ein vierfacher Rückfluss sind dreihundert Prozent ROI, und den einen zu nennen, wo der andere gemeint ist, setzt die Leistung stark zu hoch oder zu niedrig an. Beide werden angezeigt, damit der Unterschied sichtbar bleibt.',
    howToUse: [
      'Trage den Umsatz ein, den die Kampagne gebracht hat.',
      'Trage ein, was sie gekostet hat.',
      'Ergänze deine Rohmarge für die Sicht auf den Gewinn.',
    ],
    howItWorks: 'ROAS = Umsatz ÷ Ausgaben; ROI = (Umsatz − Ausgaben) ÷ Ausgaben × 100.',
    example: '9600 € aus 2400 € Ausgaben sind ein ROAS von 4×, also ein ROI von 300 Prozent.',
    faq: [
      { q: 'Ist ROAS dasselbe wie ROI?', a: 'Nein. Der ROAS teilt den Umsatz durch die Ausgaben; der ROI teilt den Gewinn durch die Ausgaben. Sie unterscheiden sich im Faktor um genau eins, weshalb hier beide erscheinen.' },
      { q: 'Was bringt die Sicht auf die Marge?', a: 'Umsatz ist kein Gewinn. Die Rohmarge anzuwenden zeigt, wie viel vom Rückfluss den Wareneinsatz tatsächlich überlebt.' },
      { q: 'Ist ein ROAS über eins immer gut?', a: 'Nicht unbedingt. Er deckt allein die Werbeausgaben; alles andere, was der Betrieb zahlt, muss noch aus dem Rest kommen.' },
      { q: 'Warum werden Ausgaben von null abgewiesen?', a: 'Eine Division dadurch hat keinen Wert. Ist nichts ausgegeben, gibt es auch keinen Rückfluss je Ausgabe.' },
    ],
  },
  'shipping-per-unit': {
    longDescription: 'Verteilt die Kosten einer Lieferung und wahlweise der Verpackung auf die Stücke, die sie befördert hat. Die Zahl gehört in der Deckungsrechnung neben die variablen Kosten, denn sie wächst mit der Menge, genauso wie das Material.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Je Stück = (Versand + Verpackung) ÷ Stück in der Sendung.',
    example: 'Eine Lieferung für 30 € mit 25 Stück kostet 1,20 € je Stück.',
    faq: [
      { q: 'Soll die Verpackung enthalten sein?', a: 'Nimm sie hinein, wenn du sie je Sendung zahlst. Lass das Feld leer, und nur die Lieferung wird verteilt.' },
      { q: 'Warum muss die Stückzahl ganzzahlig sein?', a: 'Eine Sendung enthält ganze Artikel; eine gebrochene Zahl heißt, dass die Sendung oder die Daten nicht stimmen.' },
      { q: 'Gehört das zu den variablen Kosten?', a: 'Ja. Die Logistik wächst mit der Menge, sie steht im Deckungsbeitrag also neben dem Material.' },
      { q: 'Und die Rücksendungen?', a: 'Der Rückversand ist eine eigene Kostenart. Rechne ihn nur dann zu den Lieferkosten, wenn du die vollständig belastete Zahl willst.' },
    ],
  },
  'timesheet-week': {
    longDescription: 'Ein Stundenzettel wird für die ganze Woche abgerechnet und nicht für eine einzelne Schicht, und genau dort gehen Minuten verloren: hier eine Pause von fünfundvierzig Minuten, dort eine Schicht über Mitternacht, am Ende ein kurzer Tag. Jede Schicht ist eine Zeile, die Summe wird in ganzen Minuten angesammelt und erst einmal am Schluss in Stunden umgerechnet — so stimmt die Summe mit dem Zettel auf Papier überein. Eine Zeile wie 22:00,06:00 wird als Übergang über Mitternacht verstanden und nicht als Fehler.',
    howToUse: [
      'Eine Schicht je Zeile: Beginn, Ende und Pause in Minuten mit Kommas getrennt.',
      'Die Pause darf entfallen: eine Zeile 09:00,18:00 zählt als Schicht ohne Pause.',
      'Eine Nachtschicht wird geschrieben, wie sie ist: 22:00,06:00 gilt als Übergang über Mitternacht.',
      'Alles über den Sollstunden geht als Überstunde zum Anderthalbfachen des Satzes.',
    ],
    howItWorks: 'Schichtminuten = Ende − Beginn − Pause, ein Übergang über Mitternacht addiert einen Tag; Stunden über der Sollzeit werden mit 1,5× vergütet.',
    example: 'Fünf Schichten mit Pausen ergeben zusammen 36,75 Stunden und 551,25 € bei einem Satz von 15 € je Stunde.',
    faq: [
      { q: 'Warum wird in Minuten und nicht in Stunden gezählt?', a: 'Eine Schicht von 8 Stunden 45 Minuten sind 8,75 Stunden, eine von 7 Stunden 20 Minuten sind 7,333… Solche Brüche zu addieren und unterwegs jeden zu runden verliert Minuten; in ganzen Minuten ist die Summe genau.' },
      { q: 'Wie trage ich eine Nachtschicht ein?', a: 'Als gewöhnliche Zeile: 22:00,06:00. Liegt das Ende vor dem Beginn, gilt die Schicht als über Mitternacht laufend, und dem Ende wird ein Tag zugerechnet.' },
      { q: 'Woher kommt der Faktor 1,5?', a: 'Es ist ein verbreiteter Satz für die ersten Stunden über der Sollzeit. Gelten bei dir andere Regeln, nimm die gewöhnlichen und die Überstunden von hier und wende deinen eigenen Satz auf das Geld an.' },
      { q: 'Was, wenn die Pause länger ist als die Schicht?', a: 'Diese Zeile wird abgewiesen. Negative Arbeitszeit heißt einen Tippfehler in den Uhrzeiten oder in der Pause, und sie stillschweigend zu null zu machen wäre schlechter, als es zu sagen.' },
    ],
  },
};
