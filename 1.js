/* Модуль 7.3 Задание 1*/
const person = {

    city: "Moscow",
   
    age : 12
  
  }
  function printObject (obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop]);
      }
    }
  }
  
  printObject(person);