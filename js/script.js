"use strict";

let saerch = document.querySelector(".search-button");
let form = document.querySelector(".search-form form");
let arrival_date = form.querySelector("[name=arrival-date]");
let date_of_departure = form.querySelector("[name=date-of-departure]");
let adult = form.querySelector("[name=adult-number]");
let children = form.querySelector("[name=children-number]");
let map = document.querySelector(".map");

saerch.addEventListener("click", function (evt) {
	evt.preventDefault();
	if(form.classList.contains("search-form-on")){
		form.classList.remove("search-form-on");
		form.classList.add("search-form-off");
	}	else {
		form.classList.remove("search-form-off");
		form.classList.add("search-form-on");
	}
});

form.addEventListener("submit", function(evt){
	if(!arrival_date.value || !date_of_departure.value || !adult.value || !children.value) {
		evt.preventDefault();
	}
});