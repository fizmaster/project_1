"use strict";



const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних фильмов', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);