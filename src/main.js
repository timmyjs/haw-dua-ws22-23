/**
 * WS 22/23 DuA - Übungsaufgaben: DOM & Events - Table
 */
console.log("%cÜbungsaufgabe: DOM & Events - Table", "color: #bf0b22");
console.log("%c--", "color: #bf0b22");

const cells = document.querySelectorAll(".cell");

for (let n = 0; n < cells.length; n += 1) {
	cells[n].addEventListener("mouseenter", function (ev) {
		const element = ev.currentTarget;
		element.classList.add("cell-entered");
		setTimeout(function () {
			element.classList.remove("cell-entered");
		}, 1000);
	});
}
