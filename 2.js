/* Модуль 7.3 Задание 2*/
const person = {

    city: "Moscow",
   
    age : 12
  
  }
  function printObject (string, obj) {
    console.log(string  in obj);
  }
  
  printObject("city", person);