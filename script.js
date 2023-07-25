// DOM elements
const adviceContainer = document.querySelector(".advice__container");
const adviceIdSpan = document.querySelector(".advice__id");
const adviceTextPar = document.querySelector(".advice__text");
const diceButton = document.querySelector(".dice-icon__container");
const loader = document.querySelector(".loader");

// constants
const apiUrl = "https://api.adviceslip.com/advice";

// functions

function showLoading() {
  loader.hidden = false;
  adviceContainer.hidden = true;
}

function hideLoading() {
  loader.hidden = true;
  adviceContainer.hidden = false;
}

async function showNewAdvice() {
  try {
    showLoading();
    const response = await fetch(apiUrl);
    const advice = await response.json();
    hideLoading();
    adviceIdSpan.textContent = advice.slip.id;
    adviceTextPar.textContent = `"${advice.slip.advice}"`;
  } catch (error) {
    alert(error);
  }
}

// event listeners
diceButton.addEventListener("click", showNewAdvice);

// init
showNewAdvice();
