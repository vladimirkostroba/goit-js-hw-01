let userInput;
let total = 0;

do {
  userInput = prompt('Введите Ваше число!');
  total += Number(userInput);
} while (userInput !== null);

alert(`Общая сумма чисел равна ${total}`);
