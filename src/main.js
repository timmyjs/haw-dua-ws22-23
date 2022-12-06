/**
 * WS 22/23 DuA - Übungsaufgaben: DOM & Events - Counter
 */
 console.log("%cÜbungsaufgabe: DOM & Events - Counter", "color: #bf0b22");
 console.log("%c--", "color: #bf0b22");

 const increaseButton = document.getElementById("increase");
 const decreaseButton = document.getElementById("decrease");

 const result = document.getElementById("result");

 let count = parseInt(result.innerHTML);

 function updateHtml(updatedCount) {
	 result.innerHTML = updatedCount;

	 if (updatedCount === 0) {
		 decreaseButton.disabled = true;
	 } else {
		 decreaseButton.disabled = false;
	 }
 }

 increaseButton.addEventListener("click", function () {
	 count += 1;
	 updateHtml(count);
 });

 decreaseButton.addEventListener("click", function () {
	 count -= 1;
	 updateHtml(count);
 });
