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

//when click on dropdown data show it instead of the placeholder "filter"

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

//toggle to class active once we clicked on the dropdown

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  const isdropdown = e.target.matches("[data-dropdpwn-button]");
  if (!isdropdown && e.target.closest("[data-dropdown]") != null) return "";
});

let arr = [
  { Title: "First Title", status: "incomplete", priority: "low priority" },
  { Title: "second Title", status: "completed", priority: "critical" },
  {
    Title: "Third Title",
    status: "completed",
    priority: "incomplete",
    priority: "Medium",
  },
];
let inComplete = document.getElementById("InCompleteDropdown");

inComplete.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.status.toLowerCase() === "incomplete";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let completedDropdown = document.getElementById("completedDropdown");

completedDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.status.toLowerCase() === "completed";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let CriticalDropdown = document.getElementById("CriticalDropdown");

CriticalDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.priority.toLowerCase() === "critical";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let MediumDropdown = document.getElementById("MediumDropdown");

MediumDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.priority.toLowerCase() === "medium";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});

let LowPrioritDropdown = document.getElementById("LowPrioritDropdown");

LowPrioritDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  arr.forEach((card) => {
    console.log(card);
    const visible = card.priority.toLowerCase() === "low priority";
    console.log(visible);
    if (visible != true) {
      console.log("hidden");
      // card.element.style.display = "none";
    } else {
      // card.element.style.display = "block";
      console.log("not hidden");
    }
  });
});
