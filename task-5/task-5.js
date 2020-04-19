const message = prompt('Выберите страну доставки товара').toLowerCase();
const price = [100, 250, 170, 80, 120];

switch (message) {
  case 'китай':
    alert(`Доставка в Китай будет стоит ${price} кредитов`);
    break;

  case 'чили':
    alert(`Доставка в Чили будет стоит ${price[1]} кредитов`);
    break;

  case 'австралия':
    alert(`Доставка в Австралию будет стоит ${price[2]} кредитов`);
    break;

  case 'индия':
    alert(`Доставка в Индию будет стоит ${price[3]} кредитов`);
    break;

  case 'ямайка':
    alert(`Доставка в Ямайку будет стоит ${price[4]} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
