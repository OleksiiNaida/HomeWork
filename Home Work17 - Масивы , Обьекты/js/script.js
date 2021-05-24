// Массивы .

// Задача 1 .

// let nums = [5, 2, 10, 25,40];
// let newArr = [];

// function doubleArray(arr){
//    for(let i = 0;i < arr.length; i++){
//       newArr[i] = nums[i] * 2; 
//    }
//    return newArr;
// }

// console.log(doubleArray(nums));

// Задача 2 .

// let start = 1 ;
// let unum = +prompt('Введите число');

// function remainderDivision (num){
//    for(let i = 0; i < num; i++){
//       if(start % 3 == 0 && start % 5 == 0){
//          console.log('fizzbuzz');
//       }else if(start % 5 == 0){
//          console.log('buzz');
//       }else if(start % 3 == 0){
//          console.log('fizz');
//       }else{
//          console.log(start);
//       }
//       start++;
//    }
// }

// remainderDivision (unum);

//Задача 3 .

let matrixA = [
   [4, 5, 13],
   [-5, 0, 4],
   [12, -3, 12],
]

let matrixB = [
   [5, 8, 0],
   [87, 65, 7],
   [-50, 24, 43],
]

let matrixResult = [];

for(let i = 0; i < matrixA.length; i++){
   matrixResult[i] = [];
   for(let j = 0; j < matrixA[i].length; j++){
      matrixResult [i][j] = matrixA[i][j] + matrixB[i][j];
   }
}

console.log(matrixResult);



//Обьекты 
//Задача 1 .

// let obj = {
// 	bread: 25,
// 	milk: 30,
// 	chips: 50,
// 	water: 10,
// 	cucumbers: 42
// }

//1
// let sum = 0;

// for(key in obj){
//    sum += obj[key];
// }

// console.log(sum);


//2

// let sumBiggest = 0;

// for(key in obj){
//    if(sumBiggest < obj[key])
//    sumBiggest = obj[key];
// }

// console.log(sumBiggest);

// //3

// let sumSmallest = Infinity;

// for(key in obj){
//    if(sumSmallest > obj[key])
//    sumSmallest = obj[key];
// }

// console.log(sumSmallest);



//Задача 2 .

// let films = [ 
// {
// 	title: 'Joker',
// 	rating: 8.1,
// 	premier: true,
// } ,
// {
// 	title: 'Iron Man',
// 	rating: 7,
// 	premier: true,
// } ,
// {
// 	title: 'Thor',
// 	rating: 7.5,
// 	premier: false,
// } ,
// {
// 	title: 'Black Panther',
// 	rating: 8.2,
// 	premier: true,
// } ,
// {
// 	title: 'Hulk',
// 	rating: 8.5,
// 	premier: false,
// } ]

//1

// let ratingFilms = 0;

// for(let i = 0; i < films.length; i++){
//    ratingFilms += films[i]['rating'];
// }

// ratingFilms/=films.length;

// console.log(`Средний рейтинг фильмов: ${ratingFilms.toFixed(1)}`);

//2

// function premier(films){
//    for(let i = 0; i < films.length; i++){
//       if(films[i]['premier'] == true){
//          console.log(`Премьера фильма: ${films[i]['title']}`);
//       }
//    }
// } 

// premier(films);

//3

// function rating(filmsRating){
//    for(let i = 0; i < filmsRating.length; i++){
//       if(filmsRating[i]['rating'] >= 8){
//          console.log(`Рейтинг Выше восьми: ${filmsRating[i]['title']} - ${filmsRating[i]['rating']}`);
//       }
//    } 
// }
// rating(films);