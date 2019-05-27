'use strict';
const palindrom = str => {
  str = str.toLowerCase();
  //Переводим строку в массив, "разварачиваем" массив, Переводим массив в строку
  return str == str.split('').reverse().join('');
}
console.log(palindrom('asdfqdsa'));