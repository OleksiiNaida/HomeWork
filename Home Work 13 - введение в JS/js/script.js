// Задача 1 ;

var num1 = prompt('Укажите первое число');

var num2 = prompt('Укажите второе число');

function sum(num1, num2) {
   let sum = num1 * num2;
   return alert(sum);
}

sum(num1, num2);

// Задача 2;

var name = prompt('Введите Ваше Имя');
var lastName = prompt('Введите Фамилию');
var performanc = prompt('Спектакль', 'Ромео и Джульетта');
var tuatre = prompt('Театр', 'Оперный театр');
var sector = prompt('Сектор', '5');
var row = prompt('Ряд', '4');
var place = prompt('Место', '45');
var time = prompt('Время', '19:30');

function ticket(name, lastName, performanc, tuatre, sector, row, place, time){
   return console.log(`Имя: ${name};\nФамилия: ${lastName};\nСпектакль: ${performanc};\nТеатр: ${tuatre};\nСектор: ${sector};\nРяд: ${row};\nМесто: ${place};\nВремя: ${time};\nПриятного просмотра!!! `);
}

ticket(name, lastName, performanc, tuatre, sector, row, place, time);