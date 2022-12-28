// Test link of script
// console.log("hello");

// Pseudo code

// Select the form
const form = document.querySelector("#todo-form");
// Listen for "Submit"
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // Select the text in the input
  const input = document.querySelector("#todo-input");
  // test: alert(input.value);
  // Select the to-do list element
  const list = document.querySelector("#todo-list");
  // Create a new list item with the input text
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  // Add the new list item to our list
  list.append(newLi);
  // When we add something to our list, we clear text input
  input.value = "";
});
// Homework: Add more to the list!
// Clearing a list
//Marking a list item done
