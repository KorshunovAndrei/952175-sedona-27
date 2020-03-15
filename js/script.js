"use strict";

let search = document.querySelector(".search-button");
let form = document.querySelector(".search-form form");
let formBtn = form.querySelector(".form-button");
let arrivalDate = form.querySelector("[name=arrival-date]");
let dateOfDeparture = form.querySelector("[name=date-of-departure]");
let adult = form.querySelector("[name=adult-number]");
let children = form.querySelector("[name=children-number]");
let map = document.querySelector(".map");

search.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(!form.classList.contains("search-form-off")) 
		form.classList.add("search-form-off");
	else
		form.classList.remove("search-form-off");
});

form.addEventListener("submit", function(evt){
	if(!arrivalDate.value || !dateOfDeparture.value || !adult.value || !children.value) {
		evt.preventDefault();
	}
});