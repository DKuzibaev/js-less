"use strict";

let numbresOfFilms = +prompt("Сколько фильмов уже смотрели?", ' ');

const personalMovieDB = {
    count: numbresOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privrite: false
};


for (let i = 0; i < 2; i ++) {
    const a = prompt("Один из последних просмотренных фильмов?", " "),
          b = prompt("Насколько оцените его?", " ");
    personalMovieDB.movies[a] = b;
    
}      


console.log(personalMovieDB);



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 3; i <= 50; i++) {
//     if (i % 3 == 0)
//     result[i - 50] = i++;
//     console.log(result);
// }
// let userName = prompt();
// let admin = userName;
// alert(admin);

// alert( `hello ${1}`); 
// alert( `hello ${"name"}`);
// alert( `hello ${admin}`); 

// let number = 10;

// for(let i = 0; i < number; i++) {
//     if (i === 5 ) {
//         continue;
//     }
//     console.log(i);
// }

