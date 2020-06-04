import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import main from "./view/main.js";

const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	//buka
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
	});
};
navSlide();

console.log("hi");

const allFunction = () => {
	document.addEventListener("DOMContentLoaded", main);
};

allFunction();
