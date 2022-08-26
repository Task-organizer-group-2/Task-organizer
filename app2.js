// laith
function Task(title, description, priority) {
	this.title = title;
	this.description = description;
	this.priority = priority;
	this.status = "incomplete";
	this.id = new Date().getTime();
	this.id2 = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
}

let allTasks = [];
let allCards = [];

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
// let userName = JSON.parse(sessionStorage.getItem(currentloggedin)).fName;
// console.log(userName);

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
let cardRow = document.getElementById("card-row");
// bootstrap tooltip
let tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

// addCard function to add cards from form
let cardContainer = document.getElementById("card-container");

function addCard(task) {
	const taskCard = document.createElement("div");
	taskCard.classList.add("col-sm-4");
	let x = "";
	if (task.status == "completed") {
		x = "checked";
	}
	taskCard.innerHTML = `
    <div class="box ${colorClass(task.priority)}" data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="${task.priority}">
    <a href="" class="delete-btn" style="color: black" 
    >
    <img src="./duaa-images/trash-outline.svg" id= "${task.id}" name="id">
     </a>
    <h2>${task.title}</h2>
    <p>${task.description}</p>
	<input type="checkbox" name="checkbox" class="check-btn" id="${task.id2}"  ${x}>
    </div>
  
    `;

	document.getElementById("card-row").appendChild(taskCard);
	task.element = taskCard;
	allCards.push(task);

	// function to delete each element
	let deleteBtn = document.querySelectorAll(".delete-btn");
	deleteBtn.forEach((ele) => {
		ele.addEventListener("click", (e) => {
			e.preventDefault();
			console.log(e);
			let deleteId = e.target.id;
			console.log(deleteId);
			console.log(allTasks);
			allTasks = allTasks.filter((ele) => {
				return ele.id == deleteId ? false : true;
			});
			console.log(allTasks);
			saveToLocal();
			cardRow.innerHTML = "";
			getFromLocal();
		});
	});

	// function to delete all cards
	let deleteAllBtn = document.getElementById("delete-all");

	deleteAllBtn.addEventListener("click", deleteAll);
	function deleteAll() {
		cardRow.innerHTML = "";
		allTasks = [];
		saveToLocal();
	}

	// function to switch between completed and incomplete
	const checkbox = document.querySelectorAll(".check-btn");
	checkbox.forEach((ele) => {
		ele.addEventListener("change", (e) => {
			let checkId = e.target.id;
			if (e.target.checked) {
				console.log("Checkbox is checked..");
				// ele.setAttribute("checked", "");

				allTasks.forEach((element) => {
					if (element.id2 == checkId) {
						element.status = "completed";
						saveToLocal();
					}
				});
			} else {
				console.log("Checkbox is not checked..");
			}
		});
	});

	// function to delete completed cards
	let deleteCompleted = document.getElementById("delete-all-com");

	deleteCompleted.addEventListener("click", deleteCom);
	function deleteCom() {
		allTasks = allTasks.filter((ele) => {
			return ele.status == "completed" ? false : true;
		});
		saveToLocal();
		cardRow.innerHTML = "";
		getFromLocal();
	}
}

// function to change top border color of cards based on priority
function colorClass(priority) {
	switch (priority) {
		case "Critical":
			return "red";
		case "Normal":
			return "orange";
		case "Low priority":
			return "blue";
	}
}

// function
function setCheckClass(check) {
	switch (check) {
		case "completed":
			return "checked";
		case "incomplete":
			return "unchecked";
	}
}

// jafar

console.log(allCards);

function show1(firstDropdownvalue) {
	document.querySelector(".textBox1").value = firstDropdownvalue;
}

function show2(secondDropdownvalue) {
	document.getElementById("TextBox2").value = secondDropdownvalue;
}

//toggle to class active once we clicked on the dropdown

let dropdown1 = document.getElementById("filterByStatus");
dropdown1.onclick = function () {
	dropdown1.classList.toggle("active");
};

let dropdown2 = document.getElementById("filterByPriority");
dropdown2.onclick = function () {
	dropdown2.classList.toggle("active");
};

let inComplete = document.getElementById("InCompleteDropdown");
inComplete.addEventListener("click", (event) => {
	event.preventDefault();

	let otherFilterValue = document.querySelector(".textBox1").value;
	// firstCondition = document.querySelector(".textBox1").value;
	// secondCondition = document.querySelector(".textBox2").value;

	let filteredArray = allCards.filter(
		(card) => card.priority === otherFilterValue
	);

	// console.log(filteredArray.length);
	console.log(otherFilterValue);
	// console.log(filteredArray);

	if (filteredArray.length == 0) {
		allCards.forEach((card) => {
			const visible = card.status.toLowerCase() === "incomplete";
			if (visible != true) {
				card.element.style.display = "none";
			} else {
				card.element.style.display = "block";
			}
		});
	} else {
		filteredArray.forEach((card) => {
			const visible = card.status.toLowerCase() === "incomplete";
			if (visible != true) {
				card.element.style.display = "none";
			} else {
				card.element.style.display = "block";
			}
		});
	}
});

let completedDropdown = document.getElementById("completedDropdown");

completedDropdown.addEventListener("click", (event) => {
	event.preventDefault();

	let otherFilterValue = document.querySelector(".textBox1").value;
	// console.log(allCards.filter((card) => card.priority == otherFilterValue));
	let filteredArray = allCards.filter(
		(card) => card.priority == otherFilterValue
	);

	console.log(filteredArray.length);

	if (filteredArray.length == 0) {
		allCards.forEach((card) => {
			const visible = card.status.toLowerCase() === "completed";
			if (visible != true) {
				card.element.style.display = "none";
			} else {
				card.element.style.display = "block";
			}
		});
	} else {
		filteredArray.forEach((card) => {
			const visible = card.status.toLowerCase() === "completed";
			if (visible === true) {
				card.element.style.display = "block";
			} else {
				card.element.style.display = "none";
			}
		});
	}
});

let CriticalDropdown = document.getElementById("CriticalDropdown");

CriticalDropdown.addEventListener("click", (event) => {
	event.preventDefault();

	let otherFilterValue = document.querySelector(".textBox2").value;
	console.log(allCards.filter((card) => card.status === otherFilterValue));
	let filteredArray = allCards.filter(
		(card) => card.status == otherFilterValue
	);

	console.log(otherFilterValue);

	console.log(filteredArray.length);

	if (filteredArray.length == 0) {
		allCards.forEach((card) => {
			const visible = card.priority.toLowerCase() === "critical";
			if (visible != true) {
				card.element.style.display = "none";
			} else {
				card.element.style.display = "block";
			}
		});
	} else {
		filteredArray.forEach((card) => {
			const visible = card.priority.toLowerCase() === "critical";
			if (visible === true) {
				card.element.style.display = "block";
			} else {
				card.element.style.display = "none";
			}
		});
	}
});

let MediumDropdown = document.getElementById("MediumDropdown");

MediumDropdown.addEventListener("click", (event) => {
	event.preventDefault();

	let otherFilterValue = document.querySelector(".textBox2").value;
	console.log(allCards.filter((card) => card.status == otherFilterValue));
	let filteredArray = allCards.filter(
		(card) => card.status == otherFilterValue
	);
	console.log(filteredArray.length);

	console.log(otherFilterValue);

	if (filteredArray.length == 0) {
		allCards.forEach((card) => {
			const visible = card.priority.toLowerCase() === "normal";
			if (visible != true) {
				card.element.style.display = "none";
			} else {
				card.element.style.display = "block";
			}
		});
	} else {
		filteredArray.forEach((card) => {
			const visible = card.priority.toLowerCase() === "normal";
			if (visible === true) {
				card.element.style.display = "block";
			} else {
				card.element.style.display = "none";
			}
		});
	}
});

let LowPrioritDropdown = document.getElementById("LowPrioritDropdown");

LowPrioritDropdown.addEventListener("click", (event) => {
	event.preventDefault();

	let otherFilterValue = document.querySelector(".textBox2").value;
	console.log(allCards.filter((card) => card.status == otherFilterValue));
	let filteredArray = allCards.filter(
		(card) => card.status == otherFilterValue
	);

	console.log(filteredArray.length);

	if (filteredArray.length == 0) {
		allCards.forEach((card) => {
			const visible = card.priority.toLowerCase() === "low priority";
			if (visible != true) {
				card.element.style.display = "none";
			} else {
				card.element.style.display = "block";
			}
		});
	} else {
		filteredArray.forEach((card) => {
			const visible = card.priority.toLowerCase() === "low priority";
			if (visible === true) {
				card.element.style.display = "block";
			} else {
				card.element.style.display = "none";
			}
		});
	}
});

let RefreshFilter1 = document.getElementById("RefreshFilter1");

RefreshFilter1.addEventListener("click", (event) => {
	event.preventDefault();
	location.reload();
});

let RefreshFilter2 = document.getElementById("RefreshFilter2");

RefreshFilter2.addEventListener("click", (event) => {
	event.preventDefault();
	location.reload();
});
