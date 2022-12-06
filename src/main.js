/**
 * WS 22/23 DuA - Übungsaufgaben: DOM & Events - Accordion
 */
console.log("%cÜbungsaufgabe: DOM & Events - Accordion", "color: #bf0b22");
console.log("%c--", "color: #bf0b22");

const accordionTitle = document.querySelectorAll(".accordion-title");

for (let n = 0; n < accordionTitle.length; n += 1) {
	accordionTitle[n].addEventListener("click", function (ev) {
		const element = ev.currentTarget;

		if (element.classList.contains("clicked")) {
			element.classList.remove("clicked");
		} else {
			element.classList.add("clicked");
		}
	});
}
