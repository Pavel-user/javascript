/*let money, time;
function start(){
     money = +prompt('Ваш бюджет за месяц?','');
     time = prompt('Введите дату в формате YYYY-MM-DD','');
     while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет за месяц?','');

     }

}

start();





let appData = { 
                budjet: money,
                timeDate: time,
                expenses: {},
                optionalExpenses: {},
                income: [],
                savings: false


};

function chooseExpenses (){
    for( let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        if( (typeof(a)==='string') &&(typeof(a) !=null) && (typeof(b) !=null) && a !='' && b !='' && a.length<50){
            console.log('все хорошо');
            appData.expenses[a] = b;
        }  else  { 
            i=i-1;
            
        }
    
    }

}

chooseExpenses();




appData.fistDay=(appData.budjet / 30).toFixed();
 
alert("ежедневный доход= " + appData.fistDay);

if(appData.fistDay < 100){
    console.log("Мало");
} else if(appData.fistDay > 100 && appData.fistDay < 1000) {
    console.log("Нормально");
} else{
    console.log("Ты в своем уме?");
}

function checkSavings(){
    if(appData.savings==true){
        let save =+prompt("Какова сумма накоплений?"),
            procent =+prompt("Какой процент?");

            appData.monthIncome = save/100/12*procent;
            alert("Доход с вашего депозита за месяц :" +  appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget(){
    
}*/

/*let user = {};
  user.name = "John";
  user.surname = "Smith";
  
  user.name = "Pete";
  delete user.name;
  console.log(user);
*/ 
  /*let obj = {
      name: "Pavel",
      age: 30,
      weight: 123,
  }; 
  obj.name =20;
 
   let sum = 0;
   for( let key in obj) {
    console.log( sum = sum + obj[key]);
}
 alert(sum);*/


 /*let obj = {      
     money: 300,
     rest:200,
     name: 'Piter',
 };
  
 function checkObject(obj) {
     for( let key in obj) {
         if( typeof(obj[key]) =='number') {
            obj[key]*=2;
         }
     }
 }

 
 checkObject(obj);
 console.log(obj);*/
 /*function sum(a,b) {
     alert(a+b) ;
 } 
 sum(1,1);*/
 /*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
  for( let key in salaries){
      sum = sum + salaries[key]; 
    
  } 
   alert(sum);
let obj = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplyNumeric(obj){
    for(let key in obj){
        if ( typeof(obj[key])==='number' ){
            obj[key] = obj[key]*2;
        }
    }

}
multiplyNumeric(obj);
console.log(obj);
*/
let numberOfFilms = prompt("Сколько фильмов, вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
 
    const a = prompt('Один из просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?', ''),
            c = prompt('Один из просмотренных фильмов?',''),
            d= prompt('На сколько оцените его?', '');


personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;
console.log(personalMovieDB);