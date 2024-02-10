const btnForm = document.querySelector(".button-form");
const cardNumber = document.querySelector("#card-number-form");
const nameForm = document.querySelector("#name-form");
const mmForm = document.querySelector("#mm-form");
const yyForm = document.querySelector("#yy-form");
const cvcForm = document.querySelector("#cvc-form");

const cardNumberImg = document.querySelector(".card-front__number");
const nameImg = document.querySelector(".card-front__name");
const mmImg = document.querySelector(".card-front__mm");
const yyImg = document.querySelector(".card-front__yy");
const cvcImg = document.querySelector(".card-front__cvc");

// to leave spaces every 4 digits
cardNumber.addEventListener("input", () => {
  // Remove whitespace and dashes from the input value
  const valorSinEspacios = cardNumber.value.replace(/[\s-]/g, "");

  // Divide the number into groups of 4 digits
  const grupos = valorSinEspacios.match(/.{1,4}/g);

  // Format the number with spaces between groups of 4 digits
  if (grupos) {
    cardNumber.value = grupos.join(" ");
  }

  cardNumberImg.textContent = cardNumber.value;
});

nameForm.addEventListener("input", () => {
  nameImg.textContent = nameForm.value;
});

mmForm.addEventListener("input", () => {
  mmImg.textContent = mmForm.value;
});

yyForm.addEventListener("input", () => {
  yyImg.textContent = yyForm.value;
});

cvcForm.addEventListener("input", () => {
  cvcImg.textContent = cvcForm.value;
});

btnForm.addEventListener("click", (event) => {
  // Prevent default page reload
  event.preventDefault();

  //  name error
  const nameValue = document.querySelector("#name-form").value;
  const nameForm = document.querySelector("#name-form");
  const blankErrorName = document.querySelector("#blank-error-name");
  const formatErrorName = document.querySelector("#format-error-name");

  if (!nameValue) {
    blankErrorName.style.display = "block";
    formatErrorName.style.display = "none";
    nameForm.classList.add("error");
  } else if (/\d/.test(nameValue)) {
    blankErrorName.style.display = "none";
    formatErrorName.style.display = "block";
    nameForm.classList.add("error");
  } else {
    blankErrorName.style.display = "none";
    formatErrorName.style.display = "none";
    nameForm.classList.remove("error");
  }

  let nameHasError;
  if (
    blankErrorName.style.display === "none" &&
    formatErrorName.style.display === "none"
  ) {
    nameHasError = true;
  } else {
    nameHasError = false;
  }

  //  card number error
  const cardNumberValue = document.querySelector("#card-number-form").value;
  const cardNumberForm = document.querySelector("#card-number-form");
  const blankErrorCardNumber = document.querySelector(
    "#blank-error-card-number"
  );
  const formatErrorCardNumber = document.querySelector(
    "#format-error-card-number"
  );
  const numberErrorCardNumber = document.querySelector(
    "#numbers-error-card-number"
  );

  let cardNumberHasError = findErrorNummerValue(
    cardNumberValue,
    cardNumberForm,
    blankErrorCardNumber,
    formatErrorCardNumber,
    numberErrorCardNumber,
    19
  );

  //  mm-yy error
  const mmVal = document.querySelector("#mm-form").value;
  const mmForm = document.querySelector("#mm-form");
  const blankErrorMmYy = document.querySelector("#blank-error-mm-yy");
  const formatErrorMmYy = document.querySelector("#format-error-mm-yy");
  const numberErrorMmYy = document.querySelector("#numbers-error-mm-yy");

  let mmHasError = findErrorNummerValue(
    mmVal,
    mmForm,
    blankErrorMmYy,
    formatErrorMmYy,
    numberErrorMmYy,
    2
  );

  const yyVal = document.querySelector("#yy-form").value;
  const yyForm = document.querySelector("#yy-form");

  let yyHasError = findErrorNummerValue(
    yyVal,
    yyForm,
    blankErrorMmYy,
    formatErrorMmYy,
    numberErrorMmYy,
    2
  );

  //  cvc error
  const cvcVal = document.querySelector("#cvc-form").value;
  const cvcForm = document.querySelector("#cvc-form");
  const blankErrorCvc = document.querySelector("#blank-error-cvc");
  const formatErrorCvc = document.querySelector("#format-error-cvc");
  const numberErrorCvc = document.querySelector("#numbers-error-cvc");

  let cvcHasError = findErrorNummerValue(
    cvcVal,
    cvcForm,
    blankErrorCvc,
    formatErrorCvc,
    numberErrorCvc,
    3
  );

  chargeNewPage(
    nameHasError,
    cardNumberHasError,
    mmHasError,
    yyHasError,
    cvcHasError,
    nameValue,
    cardNumberValue,
    mmVal,
    yyVal,
    cvcVal
  );
});

const chargeNewPage = (
  nameStatus,
  cardNumberStatus,
  mmStatus,
  yyStatus,
  cvcStatus,
  nameValue,
  cardNumberValue,
  mmVal,
  yyVal,
  cvcVal
) => {
  if (
    nameStatus === true &&
    cardNumberStatus === true &&
    mmStatus === true &&
    yyStatus === true &&
    cvcStatus === true
  ) {
    localStorage.setItem("name", nameValue);
    localStorage.setItem("cardNumber", cardNumberValue);
    localStorage.setItem("mm", mmVal);
    localStorage.setItem("yy", yyVal);
    localStorage.setItem("cvc", cvcVal);

    window.location.href = "./thank-you.html";
  }
};

const findErrorNummerValue = (
  value,
  form,
  blankError,
  formatError,
  numberError,
  numberLenght
) => {
  if (!value) {
    blankError.style.display = "block";
    formatError.style.display = "none";
    numberError.style.display = "none";
    form.classList.add("error");
  } else if (/[a-zA-Z]/.test(value)) {
    formatError.style.display = "block";
    blankError.style.display = "none";
    numberError.style.display = "none";
    form.classList.add("error");
  } else if (value.length !== numberLenght) {
    form.classList.add("error");
    blankError.style.display = "none";
    formatError.style.display = "none";
    numberError.style.display = "block";
  } else {
    form.classList.remove("error");
    blankError.style.display = "none";
    formatError.style.display = "none";
    numberError.style.display = "none";
  }

  if (
    blankError.style.display === "none" &&
    formatError.style.display === "none" &&
    numberError.style.display === "none"
  ) {
    return true;
  } else {
    return false;
  }
};
