// Задача 1 ;

// let price, input;

// price = +prompt('Укажите цену товара');

// if (price < 100){
//    alert('Это дешево');
// } else if (price > 100){
//    alert('Это дорого');
// }

// input = price > 100 ? 'Это дорого' : 'Это дешево';

// alert(input);


//Задача 2

let authorization, login, password;

login = prompt('Укажите Ваш логин');

if (login == 'админ'){
   password = prompt('Укажите Ваш пароль');
   if (password == 'admin'){
      alert('Добро пожаловать');
   }else if(password == null){
      alert('Вход отменен');
   }else {
      alert('Пароль не верен');
   }
}else if (login == null){
   alert('Вход отменен');
}else {
   alert('Я Вас не знаю');
}


