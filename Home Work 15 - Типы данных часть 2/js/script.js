
//Часть 1

// задача 1
// let n1 = +prompt('Введите первое число');
// let n2 = +prompt('Введите второе число');
// alert(`Держите сумму чисел: ${n1+n2}`);

//задача 2

//1 игральньные кости
// let max = 7;
// let min = 1;
// let cubik1 = Math.floor(Math.random() * (max - min + 1)) + min;
// let cubik2 = Math.floor(Math.random() * (max - min + 1)) + min;
// function cubik(){
//    alert('Вы бросили кубики');
//    return alert(`Первый кубик: ${cubik1}\nВторой кубик: ${cubik2}`);
// }

// cubik();

//4
// let n1 = +prompt('Введите первое число');
// let n2 = +prompt('Введите второе число');
// let r = Math.floor(Math.random() * (Math.max(n1, n2) - Math.min(n1, n2))) + Math.min(n1, n2);
// alert(`Держите случайное число \nв диапазане указаных Вами чисел: ${r}`);

//3
// let n1 = 1;
// let n2 = +prompt('Введите максимальное число');
// let r = Math.floor(Math.random() * (Math.max(n1, n2) - 1)) + 1;
// alert(`Держите случайное число в диапазане от 1 \nдо указанного Вами числа: ${r}`);

//2 Орел и решка 

// let random = Math.random();
// if(Math.round(random)){
//    console.log('Орел');
// }else{
//    console.log('Решка');
// }

//задача 3
// let js = prompt('Каково официальное название JavaScript?');
// if (js == 'ECMAScript'){
//    alert('Верно!');
// }else {
//    alert('Не знаете? "ECMAScript"!');
// }

//Задача 4
// let a = 1;
// let b = 2;
// let sum = a + b < 4? 'Мало' : 'Много';
// console.log(sum);

//Часть 2

//Задача 1
// let n=1;
// for(let i=0;i<=25;i++){
//    console.log(n);
//    n+=3;
// }

//Задача 2;
let prev=0;
let next=1;
for(let i=0;i<50;i++){
   let temp=next;
   next=prev+next;
   prev=temp;
   console.log(prev);
}
