/**
 * WS 22/23 DuA - Übungsaufgaben: Arrays in JavaScript
 */
console.log("%cÜbungsaufgabe: Arrays in JavaScript", "color: #bf0b22");
console.log("%c--", "color: #bf0b22");

// 1.   Arrays anlegen
// => Geben Sie nach jeder Teilaufgabe das Ergebnis per console.log() auf der Konsole aus
// --
// 1.a  Deklarieren Sie ein leeres Array und weisen es einer Variable zu
const empty = [];
console.log(empty);
// 1.b  Deklarieren Sie ein Array, das Ihren Vor- und Nachnamen als String enthält
const names = ["Thomas", "May"];
console.log(names);
// 1.c  Deklarieren Sie ein Array der Länge 5, das nur gerade, positive Zahlen enthält
const numbers = [2, 4, 6, 8, 10];
console.log(numbers);
// 1.d  Deklarieren Sie ein Array der Länge 5, das für jeden der bekannten Ihnen primitiven Datentypen einen Eintrag enthält
const types = ["JavaScript", true, null, 42, undefined];
console.log(types);
// 1.e  Deklarieren Sie ein Array der Länge 3, dessen Enträge wiederum aus Arrays bestehen. Jeder Eintrag ist ein Array der Länge 2, das jeweils einen String und eine Nummer enthält
const nested = [
	["Dasher", 7],
	["Dancer", 17],
	["Prancer", 77],
];
console.log(nested);

// 2.   Auf Arrays zugreifen
// --
// 2.a  Verwenden Sie das Array aus 1.a und geben es auf der Konsole aus
console.log(empty);
// 2.b  Verwenden Sie das Array aus 1.b und geben Sie alle Einträge auf der Konsole aus
console.log(names[0], names[1]);
// 2.c  Verwenden Sie das Array aus 1.c und geben Sie den ersten und den letzten Eintrag auf der Konsole aus
console.log(numbers[0], names[4]);
// oder
console.log(numbers[0], names[names.length - 1]);
// 2.d  Verwenden Sie das Array aus 1.d und geben Sie die Einträge zu den Datentypen String, Number und Boolean auf der Konsole aus
console.log(types[0], types[1], types[3]);
// 2.e  Verwenden Sie das Array aus 1.e und geben Sie alle Einträge des zweiten Arrays auf der Konsole aus
console.log(nested[1][0], nested[1][1]);
// oder
const secondItem = nested[1];
console.log(secondItem[0], secondItem[1]);

// 3.   Arrays manipulieren
// => Geben Sie nach jeder Teilaufgabe das Ergebnis per console.log() auf der Konsole aus
// --
// 1.a  Verwenden Sie das Array aus 1.a und fügen mit der push() Methode einen beliebigen Eintrag hinzu
empty.push("Ich bin nicht mehr leer!");
console.log(empty);
// 1.b  Verwenden Sie das Array aus 1.b und fügen mit der push() Methode Ihren Studiengang als String hinzu
empty.push("DuA");
console.log(empty);
// 1.c  Verwenden Sie das Array aus 1.c und fügen mit der unshift() Methode den Wert -1 hinzu. Geben Sie anschließend auf der Konsole den Eintrag mit dem Wert -1 und ein Eintrag mit dem höchsten numerischen Wert aus
numbers.unshift(-1);
console.log(numbers);
// 1.d  Verwenden Sie das Array aus 1.d mit der shift() Methode. Geben Sie anschließend den ersten und den letzten Eintrag im Array auf der Konsole aus
types.shift();
console.log(types[0], types[types.length - 1]);
// 1.e  Verwenden Sie das Array aus 1.e mit der pop() Methode. Geben Sie anschließend den ersten und den letzten Eintrag im Array auf der Konsole aus
nested.pop();
console.log(nested[0], nested[nested.length - 1]);
