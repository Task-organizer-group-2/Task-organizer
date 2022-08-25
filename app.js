// emad

// manar

// laith
function Task(title, description, priority) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.status = "incomplete";
  this.id = new Date().getTime();
}

let allTasks = [];

let form = document.getElementById("newTaskForm");

function render(event) {
  event.preventDefault();

  let title = event.target.Title.value;
  let description = event.target.Description.value;
  let priority = event.target.Radio.value;

  let taskCard = new Task(title, description, priority);
  allTasks.push(taskCard);
  saveToLocal();

  addCard(taskCard);
  document.getElementById("newTaskForm").reset();
}

form.addEventListener("submit", render);

let userName = "laith"; // example for testing, actual username is from manar

function saveToLocal() {
  let stringArr = JSON.stringify(allTasks);
  localStorage.setItem(userName, stringArr);
}
function getFromLocal() {
  let jsonArr = localStorage.getItem(userName);
  let objArr = JSON.parse(jsonArr);

  if (objArr !== null) {
    objArr.forEach((element) => {
      allTasks = objArr;
      addCard(element);
    });
  }
}
getFromLocal();
// duaa

// jafar
