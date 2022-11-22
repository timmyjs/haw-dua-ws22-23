/**
 * WS 22/23 DuA - Übungsaufgaben: Arrays in JavaScript II
 */
console.log("%cÜbungsaufgabe: Arrays in JavaScript II", "color: #bf0b22");
console.log("%c--", "color: #bf0b22");

// 1.   Arrays sortieren
// --
// Sortieren Sie das Array 'numbers' so, dass die Zahlen in aufsteigender Reihenfolge vorkommen.
// Regeln:
// - Es dürfen nur diejenigen Elemente verwendet werden, welche bereits im Array angelegt sind
// - Das Array darf zu keinem Zeitpunkt mehr als 5 oder weniger als 1 Eintrag haben
// - Erlaubt sind die Array-Meethoden push(), pop(), shift(), unshift() sowie direkte Zuweisungen und Variablen
const numbers = [5, 2, 4, 3, 1];

/** Variante 1 */
const five = numbers.shift();
// [2, 4, 3, 1]
const two = numbers.shift();
// [4, 3, 1]
const one = numbers.pop();
// [4, 1]
const three = numbers.pop();
// [4]
numbers.push(five);
// [4, 5]
numbers.unshift(three);
// [3, 4, 5]
numbers.unshift(two);
// [2, 3, 4, 5]
numbers.unshift(one);
// [1, 2, 3, 4, 5]
console.log(numbers);

/** Variante 2
 const five = numbers.shift();
 // [2, 4, 3, 1]
 const two = numbers.shift();
 // [4, 3, 1]
 const four = numbers.shift();
 // [1]
 const three = numbers.shift();
 // [3, 1]
 numbers.push(two, three, four, five);
 // [1, 2, 3, 4, 5]
 console.log(numbers);
*/
