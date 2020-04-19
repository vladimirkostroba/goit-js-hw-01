let credits = 23580;
const pricePerDroid = 3000;
let message = prompt('Cколько единиц Вы желаете приобрести?');

if (message === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  message = Number(message);
}

const totalPrice = message * pricePerDroid;

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (message >= 0) {
  credits -= totalPrice;
  alert(`Вы купили ${message} дроидов, на счету осталось ${credits} кредитов.`);
}
