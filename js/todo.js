const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSumit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDoInput.value = "";
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function sayHello(item) {
  paintToDo(item);
}

toDoForm.addEventListener("submit", handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //parsedToDos.forEach(sayHello);
  parsedToDos.forEach(paintToDo);
}
