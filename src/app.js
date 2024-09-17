/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateExcuse() {
    console.log("Hello Rigo from the console!");

    let who = ["The gog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let excusa =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      action[Math.floor(Math.random() * action.length)] +
      " " +
      what[Math.floor(Math.random() * what.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];

    document.getElementById("excuse").innerHTML = excusa;
  }
  generateExcuse();
};

// document.generateExcuse("#excuse").innerHTML =
//   who[rdm1] + action[rdm2] + ehat[rdm3] + when[rdm4];

// let rdm1 = Math.floor(Math.random() * who.length);
// let rdm2 = Math.floor(Math.random() * action.length);
// let rdm3 = Math.floor(Math.random() * ehat.length);
// let rdm4 = Math.floor(Math.random() * when.length);
