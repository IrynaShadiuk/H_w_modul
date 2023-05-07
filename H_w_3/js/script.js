// Завдання 1.

// Напишіть функцію яка приймає одне число. При першому виклику, вона його запам'ятовує, при другому - 
// сумує з попереднім і так далі. Для виконання цього завдання використайте замикання. 
// Наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236

function getSum() {
    let sum = 0;
    return function(num) {
      sum += num;
      return sum;
    }
  }
  
  const sum = getSum();
  
  console.log(sum(3)); 
  console.log(sum(5)); 
  console.log(sum(228)); 

// ------------------------------------------------------------------------------------------

// Завдання 2.

// Напишіть модуть який буде обробляти покупку товарів. В модулі має бути тільки логіка, весь зв’язок з html, 
// тобто кліки, зміна даних в html робити там не потрібно. Все має працювати. Можете добавити додатковий функціонал від себе.

const Cart = (function() {
    const items = [];
  
    function addItem(item) {
      items.push(item);
    }
  
    function removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    }
  
    function calculateTotal() {
      let total = 0;
      for (let item of items) {
        total += item.price;
      }
      return total;
    }
  
    return {
      addItem,
      removeItem,
      calculateTotal,
    };
  })();
  
  // Додавання товарів в кошик
  const item1 = { name: 'Футболка', price: 20 };
  const item2 = { name: 'Джинси', price: 50 };
  Cart.addItem(item1);
  Cart.addItem(item2);
  
  // Видалення товару з кошика
  Cart.removeItem(item1);
  
  // Розрахунок загальної вартості товарів в кошику
  const total = Cart.calculateTotal();
  console.log(total); 