"use strict";


const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних фильмов', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних фильмов', '', length >= 50);
// const d = prompt('На сколько оцените его?', '', length >= 50);

// personalMovieDB.movies [a] = b;
// personalMovieDB.movies [c] = d;


for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних фильмов', '');
    const b = prompt('На сколько оцените его?', '');

if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies [a] = b;
    console.log('done');
} else {
    console.log('Error');
    i--;
}

}


// let num = 0;

// do {
    
//     num++;
//     const a = prompt('Один из последних фильмов', '');
//     const b = prompt('На сколько оцените его?', '');
// }
// while (num < 2);


console.log(personalMovieDB);
// if (personalMovieDB == 0) {
// } else {
//    alert('Вы не указали, сколько фильмов вы посмотрели. Введите заново.');
// console.log('Вы не указали, сколько фильмов вы посмотрели. Введите заново.');
// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
// }
 if (personalMovieDB.count == "") {
    alert('Ты не ввел ничего');
    console.log('Ты не ввел ничего');
    do {
        const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
    }
    while (personalMovieDB.count < 0);
} 
else if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
alert('Просмотрено довольно мало фильмов');
console.log('Просмотрено довольно мало фильмов');
}

else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
    console.log('Вы классический зритель');
} 
else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
    console.log('Вы киноман');
} 


else {
    alert('Хотя бы один глянул бы');
    console.log('Хотя бы один глянул бы');
}

   




