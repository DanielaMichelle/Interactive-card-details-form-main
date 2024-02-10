const name = localStorage.getItem("name");
const cardNumber = localStorage.getItem("cardNumber");
const mm = localStorage.getItem("mm");
const yy = localStorage.getItem("yy");
const cvc = localStorage.getItem("cvc");

const nameImg = document.querySelector(".card-front__name");
const cardNumberImg = document.querySelector(".card-front__number");
const mmImg = document.querySelector(".card-front__mm");
const yyImg = document.querySelector(".card-front__yy");
const cvcImg = document.querySelector(".card-front__cvc");

nameImg.textContent = name;
cardNumberImg.textContent = cardNumber;
mmImg.textContent = mm;
yyImg.textContent = yy;
cvcImg.textContent = cvc;
