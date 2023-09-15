"use strict"

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilm,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('Во сколько Вы его оцените', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('Во сколько Вы его оцените', '');

// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d;   

// console.log(personalMovieDB);

// if( 4 == 9) {
//     console.log('Ok!');
// } else{
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
// console.log('Ok');
// }


// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100: 
//         console.log('Неверно');
//         break; 
//     case 51: 
//         console.log('Верно');
//         break; 
//     default:
//         console.log('Не в этот раз');
//         break;          
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }

//     console.log(i);
// 


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
           numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };




 function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('Во сколько Вы его оцените', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    
            personalMovieDB.movies[a] = b;
            console.log('done');
        }  else {
            console.log('Error');
            i--;
        }   
          
    } 
}

rememberMyFilms();




function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB (hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt('Ваш любимый жанр под номером *{i}');
        personalMovieDB.genres[i - 1] = genres;
    }
}

writeYourGenres();