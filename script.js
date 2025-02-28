const passLen = document.getElementById("length");
const upper = document.getElementById("uppercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
const generate = document.getElementById("generate");
const password = document.getElementById("password");

const alphLower = "abcdefghijklmnopqrstuvwxyz";
const alphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "!@#$%^&*()_+{};~?,./";
const numbers = "0123456789";

generate.addEventListener("click", () => {
  generatePass();
});

function generatePass() {
  let options = alphLower;
  if (upper.checked === true) {
    options = options + alphUpper;
  }
  if (number.checked === true) {
    options = options + numbers;
  }
  if (symbol.checked === true) {
    options = options + specialChar;
  }

  let pass = "";
  for (let i = 0; i < passLen.value; i++) {
    const indexNum = Math.floor(Math.random() * options.length);
    pass = pass + options[indexNum];
  }

  password.value = pass;
}
