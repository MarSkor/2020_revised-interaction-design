const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const email = document.querySelector("#email");
const invalidEmail = document.querySelector("#invalidEmailError");
let emailHasError = false;

const details = document.querySelector("#details");
const detailsError = document.querySelector("#detailsError");
let detailsHasError = false;

const sentMessage = document.querySelector("#sent-message");

form.addEventListener("submit", formValidation);

function formValidation() {
  event.preventDefault();

  //name - needed
  const nameValue = name.value;
  if (verifyLength(nameValue, 1) === true) {
    nameError.style.display = "none";
    nameHasError = false;
  } else {
    nameError.style.display = "block";
    nameHasError = true;
  }

  //email - required
  const emailValue = email.value;
  if (verifyEmail(emailValue)) {
    invalidEmail.style.display = "none";
    emailHasError = false;
  } else {
    invalidEmail.style.display = "block";
    emailHasError = true;
  }

  //details regarding contact = required
  const detailsValue = details.value;
  if (verifyLength(detailsValue, 1) === true) {
    detailsError.style.display = "none";
    detailsHasError = false;
  } else {
    detailsError.style.display = "block";
    detailsHasError = true;
  }

  // message to display
  if (
    nameHasError === true ||
    emailHasError === true ||
    detailsHasError === true
  ) {
    sentMessage.style.display = "none";
  } else {
    sentMessage.style.display = "block";
  }
}

function verifyLength(value, lengthCheck) {
  const valueIsTrimmed = value.trim();

  if (valueIsTrimmed.length >= lengthCheck) {
    return true;
  } else {
    return false;
  }
}

// verify if email is valid
function verifyEmail(email) {
  const regEx = /\S+@\S+\.\S+/;

  if (regEx.test(email)) {
    return true;
  } else {
    return false;
  }
}
