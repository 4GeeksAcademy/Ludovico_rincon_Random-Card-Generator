/* eslint-disable */
import "./style.css";
const symbols = ["heart", "diamond", "spade", "club"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let symbolUp = document.querySelector(".symbolUp");
let number = document.querySelector(".number");
let symbolDown = document.querySelector(".symbolDown");

function selectCard(arr1, arr2) {
  let cardArr = [];
  cardArr.push(arr1[Math.floor(Math.random() * arr1.length)]);
  cardArr.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return cardArr;
}

function generateRandomCard() {
  let card = selectCard(symbols, values);
  symbolUp.classList.add(card[0]);
  symbolDown.classList.add(card[0]);
  number.innerHTML = card[1];
  console.log(card);
}
window.onload = function() {
  generateRandomCard();
};
