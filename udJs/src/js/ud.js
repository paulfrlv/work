'use strict';
//(a == 40) ? console.log('Верно') : console.log('Неверно');


/* switch (a) {
  case a < 40:
    console.log('меньше 39');
    break;
  case 40:
    console.log('равно 40');
    break;
  case a > 41:
    console.log('больше 41');
    break;
  default:
    console.log('qwe');
    break;
}; */

/* let arr = [1, 15, 4],
  i = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(arr);
console.log(i); */


/* let options = {
  width: 1024,
  height: 1440,
  name: "test"
};

options.color = {
  border: 'black',
  bg: "red"
};
delete options.height;
console.log(options.color.bg);

for(let key in options) {
  console.log('Свойство ' + key + " имеет значение " + options[key]);
}
console.log(Object.keys(options).length); */



// Массивы

/* let arr = [1,2,3,4,5];

arr.forEach(function(item, i, mass) {
  console.log(i + ": " + item + '(массив: ' + mass + ")");
}); 
/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */
//console.log(arr); */


/* let mass = [1,3,4,6,7];
for(let key of mass) {
  console.log(key);
} */


/* let ans = prompt("", ""),
  arr = [];
arr = ans.split(',');
console.log(arr); */

/* let arr = ["qwe", "dsg", 'asdf', "sdgert"],
  i = arr.join(', ');
  console.log(i); */

/* let arr = ["qwe", "dsg", 'asdf', "sdgert"],
  i = arr.sort(compareNum);
  function compareNum(a,b) {
    return a-b;
  }
console.log(arr); */


// ООП
/* let soldier = {
  health: 400,
  armor: 100
};

let jonh = {
  health: 200
};

jonh.__proto__ = soldier;
console.log(jonh);
console.log(jonh.armor); */


/* let sum = (a, b) => {
  a + b;
};

sum(44, 55);
console.log(sum); */

/* let btn = document.getElementsByTagName('button');
 btn[0].onclick = function() {
  alert("Вы нажали кнопку");
} 
btn[0].addEventListener('click', function(){
  alert("Вы нажали кнопку");
  alert("Вы опять нажали кнопку");
}); */

/* class Rectangle {
  constructor(height, width = 20) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}

let square = new Rectangle(10);
console.log(square.calcArea()); */

/* let video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejornal', 'blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];
//console.log(internet);

function log(a,b,c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

let numbers = [2, 4, 7];
log(...numbers); */


//AJAX
/* let inputUan = document.getElementById('uan'),
  inputUsd = document.getElementById('usd');

inputUsd.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  request.open('GET', 'js/on.json');
  request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
  request.send();

  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);

      inputUsd.value = inputUan.value / data.usd;
    } else {
      inputUsd.value = "Что-то пошло не так!";
    }
  });
});
 */

//Promise
/* let food = 1;

function shoot(arrow) {
  console.log('Вы сделали выстрел...');
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
    }, 3000);
  });
  return promise;
};

function win() {
  console.log('Вы победили!');
  (food == 1) ? buySneakers(): giveMoney();
}

function buySneakers() {
  console.log('Вам купили сникерс!');
}

function giveMoney() {
  console.log('Вы выиграли деньги!');
}

function lose() {
  console.log('Вы проиграли!');
}

shoot({})
  .then(mark => console.log('Вы попали в цель'))
  .then(win)
  .catch(lose) */