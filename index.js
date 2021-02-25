document.addEventListener("DOMContentLoaded", () => {
  const diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const dicePara = document.querySelector("#dice-para");
  const sumOfDice = document.querySelector("#sum-para");
  const diceUL = document.querySelector("#ulList");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let arr = [];
    for (let i = 0; i < input.value; i++) {
      arr[i] = diceArr[Math.floor(Math.random() * 6)];
    }
    console.log(diceArr);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === diceArr[0]) {
        sum += 1;
      } else if (arr[i] === diceArr[1]) {
        sum += 2;
      } else if (arr[i] === diceArr[2]) {
        sum += 3;
      } else if (arr[i] === diceArr[3]) {
        sum += 4;
      } else if (arr[i] === diceArr[4]) {
        sum += 5;
      } else if (arr[i] === diceArr[5]) {
        sum += 6;
      }
    }

    const diceLi = document.createElement("li");
    diceLi.innerHTML = `${arr.join("")} = ${sum}`;
    diceUL.appendChild(diceLi);

    sumOfDice.innerHTML = `Sum of Rolled Dice: ${sum}`;
    dicePara.innerHTML = arr.join("");
  });
});
