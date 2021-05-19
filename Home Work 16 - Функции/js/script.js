// Задача 1
// function ucFirst(str){
//    let newstr = str.charAt(0).toUpperCase() + str.slice(1);
//    return newstr;
// }

// let str = prompt('Введите строку');

// alert(ucFirst(str));

//Задача 2

// function maxNumber(a, b){
//    let max = Math.max(a, b);
//    return alert(`Максимально указанное Вами числы: ${max}`);
// }

// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');
// maxNumber(a, b);

//Задача 3

//a

// let min = 1;
// let max = 6;
// let cazino = confirm('Хотите бросить два кубика?');
// if(cazino){
//    function cub(min, max){
//    let cubik1 =  Math.floor(Math.random() * (max - min + 1) + min);
//    let cubik2 =  Math.floor(Math.random() * (max - min + 1) + min);
//    return alert(`Кубик1 : ${cubik1}\nКубик2 : ${cubik2}`);
// }
// }else{
//    alert('Как хотите');
// }

// cub(min, max);


//b
// let game = confirm('Вы бросаете монету');
// if(game){
//    function orelReshka(){
//       let r = Math.round(Math.random());
//       if(r){
//          alert('Орел');
//       }else{
//          alert('Решка');
//       }
//    }
// }else{
//    alert('Как хотите');
// }

// orelReshka();


//c

// let min = 1 ;
// let max = +prompt('Введите число');
// function random(min, max){
//    let result = Math.floor(Math.random() * (max - min + 1) + min); 
//    return alert(`Держите случайное число в промежутке от 1 до ${max} : ${result}`);
// }

// random(min, max);

//d

// let min = +prompt('Введите первое число');
// let max = +prompt('Введите второе число');
// function random(min, max){
//    let arr=[];
//    for(let i=0; i<10; i++){
//       arr.push(Math.floor(Math.random() * (max - min + 1) + min))
//    }
//    // let result = Math.floor(Math.random() * (max - min + 1) + min); 
//    return alert(`Держите 10 случайных чисел в промежутке от ${min} до ${max} : ${arr}`);
// }

// random(min, max);


//Задача 4

// инструкция для пользователля и заполнение лотерейного билета.
let n1, n2, n3, n4, n5, n6;
let lotteryConfirm = confirm('Вы готовы начать игру?\nВам необходимо ввести поcледовательно шесть чисел\nв диапазоне от 1 до 36');
if(lotteryConfirm ){
   n1 = +prompt('Введите первое число');
   n2 = +prompt('Введите второе число');
   n3 = +prompt('Введите третье число');
   n4 = +prompt('Введите четвертое число');
   n5 = +prompt('Введите пятое число');
   n6 = +prompt('Введите шестое число');
}else{
   alert('Как хотите');
}

//Генерация лотерейного билета.

let arrLn = [];
let  ln, ln1, ln2, ln3, ln4, ln5, ln6;
let min = 1;
let max = 36;

function lotteryNum(){
   for(let i=0; i<6; i++){
      ln = Math.floor(Math.random() * (max - min + 1) + min);
      arrLn[i] = ln;
   }
   return arrLn;
}

lotteryNum();

console.log(lotteryNum());
// Сравнение результата .

let yes = 0;

if(arrLn.indexOf(n1) != -1){
   yes+=1;
}
if(arrLn.indexOf(n2) != -1){
   yes+=1;
}
if(arrLn.indexOf(n3) != -1){
   yes+=1;
}
if(arrLn.indexOf(n4) != -1){
   yes+=1;
}
if(arrLn.indexOf(n5) != -1){
   yes+=1;
}
if(arrLn.indexOf(n6) != -1){
   yes+=1;
}


//Результат лотереи 

console.group('Результаты лотереи');
console.log(`Числа что выпали: ${arrLn[0]}, ${arrLn[1]}, ${arrLn[2]}, ${arrLn[3]}, ${arrLn[4]}, ${arrLn[5]},`);
console.log(`Числа что Вы ввели: ${n1} - ${arrLn.indexOf(n1) != -1 ? 'yes' : 'no'}, 
                              ${n2} - ${arrLn.indexOf(n2) != -1 ? 'yes' : 'no'}, 
                              ${n3} - ${arrLn.indexOf(n3) != -1 ? 'yes' : 'no'}, 
                              ${n4} - ${arrLn.indexOf(n4) != -1 ? 'yes' : 'no'}, 
                              ${n5} - ${arrLn.indexOf(n5) != -1 ? 'yes' : 'no'}, 
                              ${n6} - ${arrLn.indexOf(n6) != -1 ? 'yes' : 'no'}`);
console.log(`Результат ${yes}/6`);
console.groupEnd();