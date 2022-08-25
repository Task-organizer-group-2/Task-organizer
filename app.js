// emad

// manar

// laith

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

	taskCard.innerHTML = `
    <div class="box ${colorClass(task.priority)}" data-bs-toggle="tooltip"
    data-bs-placement="top"
    title="${task.priority}">
    <a href="" class="delete-btn" style="color: black" 
    >
    <img src="./duaa-images/trash-outline.svg" id= "${task.id}" name="id">
     </a>
    <a href="" class="edit-btn" style="color: black"
        ><img src="./duaa-images/create-outline.svg"></a>
    <h2>${task.title}</h2>
    <p>${task.description}</p>
    <a
        href=""
        id="check-btn"
        style="color: rgba(50, 85, 51, 0.321)"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
        >
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
        </svg>
    </a>
    </div>
  
    `;

	document.getElementById("card-row").appendChild(taskCard);

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
			// localStorage.setItem(userName, JSON.stringify(allTasks));
			cardRow.innerHTML = "";
			getFromLocal();
			// let jsonArr = localStorage.getItem(userName);
			// let arr = JSON.parse(jsonArr);
			// allTasks = arr;
			// arr.forEach((ele) => {
			// 	addCard(ele);
			// });
		});
	});
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

// const editBtn = document.querySelector(".edit-btn");

// function to delete all cards

// function to switch between completed and incomplete

// jafar
