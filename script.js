"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const label = document.querySelector(".result-lab");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  function handleButtonClick(event) {
    const button = event.currentTarget; // instead of target we use currentTagert to get the value quickliy
    const buttonValue = button.getAttribute("data-value") || button.innerText;

    if (buttonValue === "AC") {
      // Clear the diplay results label
      label.innerText = "";
    } else if (buttonValue === "=") {
      // Calculate the result and display it
      try {
        // Replace any icon representations with their corresponding operators
        let expression = label.innerText
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/−/g, "-")
          .replace(/\+/g, "+")
          .replace(/%/g, "/100");
        label.innerText = eval(expression);
      } catch (e) {
        label.innerText = "Error";
      }
    } else if (buttonValue === "←") {
      // remove the last character
      label.innerText = label.innerText.slice(0, -1);
    } else if (buttonValue === "±") {
      // Handle sign change
      if (label.innerText !== "") {
        if (label.innerText.charAt(0) === "-") {
          // If the number is negative, remove the minus sign
          label.innerText = label.innerText.slice(1);
        } else {
          // If the number is positive, add a minus sign
          label.innerText = "-" + label.innerText;
        }
      }
    } else {
      // Append the button value to the display
      label.innerText += buttonValue;
    }
  }
});
