" use strict ";

let numberOfFilms;
function huwMenyFilms () {
   numberOfFilms=+prompt("Сколько фильмов, вы уже посмотрели?", "");
   while(numberOfFilms==null || numberOfFilms==" " || isNaN(numberOfFilms) ) {
      numberOfFilms=+prompt("Сколько фильмов, вы уже посмотрели?", "");


   }
}
huwMenyFilms ();


let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
 
   /* const a = prompt('Один из просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?', ''),
            c = prompt('Один из просмотренных фильмов?',''),
            d= prompt('На сколько оцените его?', '');


personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;
console.log(personalMovieDB);*/
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания
function oneShowedFilm () {
   for( let i=0; i<2; i++) {
      const a = prompt('Один из просмотренных фильмов?',''),
         b = prompt('На сколько оцените его?', '');
      if( a != null && a != "" && b != null && b != "" && a.length < 50){
          console.log("done");
          personalMovieDB.movie[a] =b;
      } else { console.log("error");
          i--;

      }
}

}
oneShowedFilm();

function personalLivel () {
   if(personalMovieDB.count < 10){
      console.log("Просмотрено довольно мало фильмов");
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
     console.log("Вы классический зритель");
 
  } else if(personalMovieDB.count >= 30){
     console.log("Вы киноман");
 
  } else {
     console.log("Произошла ошибка");
 
  }

}
personalLivel();

 
 
 
 /* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания
function showMyDB(hidden) {
  
   if(!hidden) {
      console.log(personalMovieDB);
   } 
}
showMyDB(personalMovieDB.privat);
 
function writeYourGenres(){
   for( let i = 1; i<4; i++) {
      let qwetion = prompt(`Ваш любимый жанр под номером ${i}`, '');
      personalMovieDB.genres[ i-1] = qwetion;
   }

}
writeYourGenres();

