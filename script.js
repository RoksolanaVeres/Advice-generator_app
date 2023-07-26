// DOM elements
const adviceContainer = document.querySelector(".advice__container");
const adviceIdSpan = document.querySelector(".advice__id");
const adviceTextPar = document.querySelector(".advice__text");
const diceButton = document.querySelector(".dice-icon__container");
const loader = document.querySelector(".loader");

// constants
const apiUrlBase = "https://api.adviceslip.com/advice";
const MIN_ADVICE_ID = 1;
const MAX_ADVICE_ID = 224;

// functions
function generateRandomId() {
  return (
    Math.floor(Math.random() * (MAX_ADVICE_ID - MIN_ADVICE_ID + 1)) +
    MIN_ADVICE_ID
  );
}

function showLoading() {
  loader.hidden = false;
  adviceContainer.hidden = true;
}

function hideLoading() {
  loader.hidden = true;
  adviceContainer.hidden = false;
}

async function generateAdvice() {
  try {
    showLoading();
    const id = generateRandomId();
    const response = await fetch(`${apiUrlBase}/${id}`);
    const advice = await response.json();
    hideLoading();
    return advice.slip;
  } catch (error) {
    alert(error);
  }
}

async function showNewAdvice() {
  const newAdvice = await generateAdvice();
  adviceIdSpan.textContent = newAdvice.id;
  adviceTextPar.textContent = `"${newAdvice.advice}"`;
}

// event listeners
diceButton.addEventListener("click", showNewAdvice);

// init
showNewAdvice();
