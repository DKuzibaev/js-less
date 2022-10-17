"use strict";

let numbresOfFilms = +prompt("Сколько фильмов уже смотрели?", ' ');

const personalMovieDB = {
    count: numbresOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privrite: false
};

const a = prompt("Один из последних просмотренных фильмов?", " "),
      b = prompt("Насколько оцените его?", " "),
      c = prompt("Один из последних просмотренных фильмов?", " "),
      d = prompt("Насколько оцените его?", " ");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

