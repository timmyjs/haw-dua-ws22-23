/**
 * WS 22/23 DuA - Übungsaufgaben: Kontrollstrukturen
 */
console.log("%cÜbungsaufgabe: Kontrollstrukturen", "color: #bf0b22");
console.log("%c--", "color: #bf0b22");

// 1.   Vergleichsoperatoren
// --
console.log("~~ Lösungen 1 ~~");

// 1.a  Was ist der Unterschied zwischen einem Vergleichsoperator und einem Zuweisungsoperator?
// => Vergleichsoperatoren (===, !==, <, <= , >, >=) werden verwendet, um Vergleiche und Bedingungen auszuwerten
// => Der Zuweisungsoperator (=) wird verwendet um einen Wert z.B. einer Variablen zuzuweisen

// 1.b  Was ist ein boolescher Wert (Boolean)? Was stellt es dar?
// => Ein boolescher Wert drückt einen Wahrheitswert aus (wahr / falsch, true / false) und entspricht dem Datentypen Boolean

// 1.c  Wie unterscheidet sich der Operator >= vom Operator >?
// => >= / <= (größer oder gleich, kleiner oder gleich) schließt die zu vergleichende Zahl mit ein
// => > / < (größer, kleiner) schließen die zu vergleichende Zahl aus

// 1.d  Verwenden Sie die Operatoren <= und >=, indem Sie zwei Zahlen vergleichen.
console.log(7 >= 4);
console.log(10 <= 10);

// 1.e  Erstellen Sie zwei Variablen und mit je unterschiedlichen Zahlen.
//      Verwenden Sie einen Vergleichsoperator, um diese beiden Variablen zu vergleichen.
const ersteZahl = 42;
const zweiteZahl = 12;
console.log(ersteZahl > zweiteZahl);

// 1.f  Verwenden Sie den Gleichheitsoperator ===, indem Sie zwei Strings vergleichen.
console.log("Foo" === "Foo");

// 1.g  Verwenden Sie als den Gleichheitsoperator !== für zwei Zeichenfolgen oder Zahlen, um einen wahren und einen falschen Rückgabewert zu erhalten.
console.log("Bar" !== "Baz");
console.log(42 !== 42);

// 2.   Bedingte Anweisungen
// --
console.log("~~ Lösungen 2 ~~");

// 2.a  Prüfen Sie, ob 'zufallszahl' größer als 10 ist.
//      Ist das der Fall, geben Sie die Zahl auf der Konsole aus.
const zufallszahl = Math.floor(Math.random() * 20);

if (zufallszahl > 10) {
	console.log(zufallszahl);
}

// 2.b  Prüfen Sie, ob 'punkte' mindestens halb so groß wie 'grenze' ist.
//      Falls ja, geben Sie "Prüfung bestanden" auf der Konsole aus.
//      Falls nein, geben Sie "Leider durchgefallen" auf der Konsole aus.
const punkte = 42;
const grenze = 50;

if (punkte >= grenze / 2) {
	console.log("Prüfung bestanden");
} else {
	console.log("Leider durchgefallen");
}

// 2.c  Prüfen Sie, welches der Variablen die höchste Zahl beinhaltet.
//      Geben Sie die höchste Zahl auf der Konsole aus.
//      Falls beide Zahlen den gleichen Wert haben, geben Sie den String "Gleichstand" auf der Konsole aus
const zahl1 = Math.floor(Math.random() * 10);
const zahl2 = Math.floor(Math.random() * 10);

console.log("Zahl 1: ", zahl1);
console.log("Zahl 2: ", zahl2);

if (zahl1 === zahl2) {
	console.log("Gleichstand");
} else {
	if (zahl1 > zahl2) {
		console.log(zahl1);
	}
	if (zahl2 > zahl1) {
		console.log(zahl2);
	} else {
	}
}

// 3.   Schleifen
// --
console.log("~~ Lösungen 3 ~~");
// 3.a  Erstellen Sie ein Array der Länge 7, das nur Strings enthält.
//      Schreiben Sie eine Schleife, in der alle Elemente des Arrays nacheinander auf der Konsole ausgegeben werden.
const stringArray = ["JavaScript", "Java", "PHP", "Python", "C", "C++", ".Net"];

for (let n = 0; n < stringArray.length; n = n + 1) {
	const ergebnis = stringArray[n];
	console.log(ergebnis);
}

// 3.b  Erstellen Sie ein Array der Länge 5, das nur Zahlen enthält. Erstellen Sie zusätzlich ein leeres Array.
//      Schreiben Sie eine Schleife, in der die jeweiligen Zahlenwerte aus dem ersten Array verdoppelt und anschließend in das neue Array hineingeschrieben werden.
const numbers = [3, 5, 7, 9, 11];
const empty = [];

for (let l = 0; l < numbers.length; l = l + 1) {
	empty.push(numbers[l] * 2);
}
console.log(empty);

// 3.c  Schreiben Sie eine Schleife, dass die Summe der Zahlen von 1 bis 50 berechnet und anschließend auf der Konsole ausgibt.
let summe = 0;

for (let k = 1; k <= 50; k = k + 1) {
	summe = summe + k;
}
console.log(summe);

// 3.d  Schreiben Sie ein Programm, das für alle Zahlen von 1 bis 50 prüft, ob die jeweilige Zahl duchh 5 teilbar ist.
for (let k = 1; k <= 50; k = k + 1) {
	if (Number.isInteger(k / 5)) {
		console.log(k, " ist durch 5 TEILBAR");
	}
	// oder
	// if (k % 5 === 0) {
	//   console.log(k, " ist durch 5 TEILBAR");
	// }
}
