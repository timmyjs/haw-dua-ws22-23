/**
 * WS 22/23 DuA - Übungsaufgaben: DOM & Events - ToDo Liste
 */
console.log("%cÜbungsaufgabe: DOM & Events - ToDo Liste", "color: #bf0b22");
console.log("%c--", "color: #bf0b22");

const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoSubmit = document.getElementById("todo-submit");

let todos = ["Foo", "Bar", "Baz"];

function renderTodos() {
	todoList.innerHTML = "";

	for (let n = 0; n < todos.length; n += 1) {
		const listItem = document.createElement("li");

		listItem.innerHTML = todos[n];

		todoList.appendChild(listItem);
	}
}

renderTodos();

todoSubmit.addEventListener("click", function () {
	todos.push(todoInput.value);
	renderTodos();
});
