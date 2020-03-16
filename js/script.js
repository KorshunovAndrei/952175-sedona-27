"use strict";

let searchBtn = document.querySelector(".search-button");
let form = document.querySelector(".search-form form");
let arrivalDate = form.querySelector("[name=arrival-date]");
let dateOfDeparture = form.querySelector("[name=date-of-departure]");
let adult = form.querySelector("[name=adult-number]");
let children = form.querySelector("[name=children-number]");
let map = document.querySelector(".map");

form.classList.add("search-form-off");

searchBtn.addEventListener("click", function () {
  if(form.classList.contains("search-form-off")) 
    form.classList.remove("search-form-off");
  else
    form.classList.add("search-form-off");
});

form.addEventListener("submit", function(evt){
  if(!arrivalDate.value || !dateOfDeparture.value || !adult.value || !children.value) {
    evt.preventDefault();
  }
});