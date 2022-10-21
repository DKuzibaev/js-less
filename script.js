"use strict";

/*let numbresOfFilms = +prompt("Сколько фильмов уже смотрели?", ' ');

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
*/


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for(let i = 3; i <= 50; i++) {
    if (i % 3 == 0)
    result[i - 50] = i++;
    console.log(result);
}