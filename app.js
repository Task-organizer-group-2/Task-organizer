window.addEventListener("load", (e) => {
	// e.preventDefault();
	if (localStorage.getItem("currentloggedin")) {
		window.location = "./taskpage.html";
	}
});

// // emad

// emad js
const body = document.querySelector("body"),
	nav = document.querySelector("nav"),
	modeToggle = document.querySelector(".dark-light"),
	sidebarOpen = document.querySelector(".sidebarOpen"),
	siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
	body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
	modeToggle.classList.toggle("active1");
	body.classList.toggle("dark");

	// js code to keep user selected mode even page refresh or file reopen
	if (!body.classList.contains("dark")) {
		localStorage.setItem("mode", "light-mode");
	} else {
		localStorage.setItem("mode", "dark-mode");
	}
});

//   js code to toggle sidebar

// end emad js //
// manar

// popoup form
//toggle elements
const btn = document.querySelectorAll(".showMe");
const exit = document.getElementById("exit");
exit.addEventListener("click", undoToggle);

btn.forEach((ele) => {
	ele.addEventListener("click", toggle);
});

function toggle() {
	const blur = document.getElementById("blur");
	blur.classList.toggle("active");
	blur.classList.remove("disabled");
	const popUp = document.getElementById("popup");
	popUp.classList.toggle("active");
	popUp.classList.remove("disabled");
	console.log("btn");
}

function undoToggle() {
	const blur = document.getElementById("blur");
	blur.classList.toggle("disabled");
	const popUp = document.getElementById("popup");
	popUp.classList.toggle("disabled");
}

/// crearte user object

function User(fName, lName, email, password) {
	this.fName = fName;
	this.lName = lName;
	this.email = email;
	this.password = btoa(password);
	//generate random id
	this.id = new Date().getTime();
	/// user tasks
}

let usersArr = new Array();

// push when user hit submit sign up
const signUp = document.getElementById("signup");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const signEmail = document.getElementById("signEmail");
const signPassword = document.getElementById("signPassword");
const regForm = document.getElementById("regForm");
// fire sign-up action

// regex checker
const inputs = document.querySelectorAll(".regex");

const patterns = {
	email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
	fName: /^[a-z\d]{3,12}$/i,
	lName: /^[a-z\d]{3,12}$/i,
	password: /^[\w@-]{8,20}$/,
};

function validate(field, regex) {
	if (regex.test(field.value)) {
		field.classList.add("valid");
	} else {
		field.classList.add("invalid");
	}
}

inputs.forEach((input) => {
	input.addEventListener("keyup", (e) => {
		// console.log(e.target.attributes.name.value)
		validate(e.target, patterns[e.target.attributes.name.value]);
	});
});

let jsonArr = localStorage.getItem("users");
let arr = JSON.parse(jsonArr);

regForm.addEventListener("submit", function (e) {
	if (fName.value && lName.value && signEmail.value && signPassword.value) {
		fName.style.background = "rgba(0, 128, 0, 0.347)";
		lName.style.background = "rgba(0, 128, 0, 0.347)";
		signEmail.style.background = "rgba(0, 128, 0, 0.347)";
		signPassword.style.background = "rgba(0, 128, 0, 0.347)";

		e.preventDefault();
		// get data into array
		if (arr != null) {
			arr.forEach((user) => {
				if (signEmail.value != user.email) {
					signUpAction();
				} else {
					alert("This email is already registered!");
				}
			});
		} else {
			signUpAction();
		}
	}
});

function signUpAction() {
	usersArr.push(
		new User(fName.value, lName.value, signEmail.value, signPassword.value)
	);
	console.log(usersArr);
	// save array into local
	localStorage.setItem("users", JSON.stringify(usersArr));
	//set current user
	localStorage.setItem(
		"currentloggedin",
		JSON.stringify(usersArr[usersArr.length - 1])
	);
	window.location = "./taskpage.html";
	alert(`Welcome ${fName.value} ${lName.value}`);
}
//get current user from sussion
// define user tasks basd on current
// push when user hit submit log in

const logIn = document.getElementById("login");
const logEmail = document.getElementById("logEmail");
const logPassword = document.getElementById("logPassword");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
	e.preventDefault();

	if (arr != null) {
		arr.forEach((user) => {
			if (
				user.email == logEmail.value &&
				atob(user.password) == logPassword.value
			) {
				console.log(user.email);
				logEmail.style.background = "rgba(0, 128, 0, 0.347)";
				logPassword.style.background = "rgba(0, 128, 0, 0.347)";
				localStorage.setItem("currentloggedin", JSON.stringify(user));

				window.location = "./taskpage.html";

				alert(`Welcome ${user.fName} ${user.lName}`);
			} else {
				alert("Wrong email or password");
			}
		});
	}
});

// global get local to display old array users
function getFromLocalUsers() {
	let jsonArr = localStorage.getItem("users");
	let arr = JSON.parse(jsonArr);

	if (arr != null) {
		usersArr = arr;
	}
}
// on load get all data
getFromLocalUsers();
