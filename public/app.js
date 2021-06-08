"use strict";
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var fromTo = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault;
    console.log(type.value, fromTo.value, details.value, amount.value);
});
