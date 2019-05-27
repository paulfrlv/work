let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 1; i<=100; i++) {
  let excel = document.createElement('div');
  field.appendChild(excel);
  excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
excel[0].setAttribute('posX', 'test');
excel[0].setAttribute('posY', 'test');
let x = 1, y = 10;
for (let i = 0; i<excel.length; i++) {
  if (x>10) {
    x=1;
    y--;
  }
  excel[i].setAttribute('posX', x);
  excel[i].setAttribute('posY', y);
  x++;
}

function generateSnake() {
  let posX = Math.round(Math.random() * (10 - 3) + 3);
  let posY = Math.round(Math.random() * (10 - 1) + 1);
  return[posX, posY];
}
let coordinates = generateSnake();

let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')];

for (let i = 0; i < snakeBody.length; i++) {
  snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('head');

let apple;
function createApple() {
  function generateApple() {
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
  }
  let appleCoordinates = generateApple();
  apple = document.querySelector('[posX = "' + appleCoordinates[0] + '"][posY = "' + appleCoordinates[1] + '"]');

  //цикл проверки чтобы 
  while(apple.classList.contains('snakeBody')){
    let appleCoordinates = generateApple();
    apple = document.querySelector('[posX = "' + appleCoordinates[0] + '"][posY = "' + appleCoordinates[1] + '"]');
  }
  
  apple.classList.add('apple');
}

createApple();



let direction = 'right'; // Значение направления змейки
let steps = false;

let input = document.createElement('input');
document.body.appendChild(input);
input.style.cssText = `
margin: auto;
padding: 12px;
margin-top: 40px;
font-size: 25px;
border-radius: 5px;
border: solid 1px black;
display: block;
outline: none
`;

let score = 0;
input.value = `Ваши очки: ${score}`;

let move = () => {
  let snakeСoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
  snakeBody[0].classList.remove('head');// Удаляем "голову" у змейки
  snakeBody[snakeBody.length-1].classList.remove('snakeBody');//Убираем последнюю часть змейки
  snakeBody.pop();// Удаляем последий элемент массива




  if (direction == 'right'){
    if (snakeСoordinates[0] < 10) {
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeСoordinates[0] + 1) + '"][posY = "' + snakeСoordinates[1] + '"]'));
    }
    else {
      snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeСoordinates[1] + '"]'));
    }
  }

  else if (direction == 'left') {
    if (snakeСoordinates[0] > 1) {
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeСoordinates[0] - 1) + '"][posY = "' + snakeСoordinates[1] + '"]'));
    }
    else {
      snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + snakeСoordinates[1] + '"]'));
    }
  }

  else if (direction == 'up') {
    if (snakeСoordinates[1] < 10) {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeСoordinates[0] + '"][posY = "' + (+snakeСoordinates[1]+1) + '"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeСoordinates[0] + '"][posY = "1"]'));
    }
  }

  else if (direction == 'down') {
    if (snakeСoordinates[1] > 1) {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeСoordinates[0] + '"][posY = "' + (snakeСoordinates[1]-1) + '"]'));
    } else {
      snakeBody.unshift(document.querySelector('[posX = "' + snakeСoordinates[0] + '"][posY = "10"]'));
    }
  }

  if (snakeBody[0].getAttribute('posX') == apple.getAttribute('posX') && snakeBody[0].getAttribute('posY') == apple.getAttribute('posY')) {
    apple.classList.remove('apple');
    let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
    let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
    snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
    createApple();
    score++;
    input.value = `Ваши очки: ${score}`;
  }

   if (snakeBody[0].classList.contains('snakeBody')) {
    setTimeout(() => {
      alert(`Игра окончена. Ваши очки: ${score}`);
    }, 200);
    clearInterval(interval);
  } 


  snakeBody[0].classList.add('head');
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
  }
  steps = true;
}


let interval = setInterval(move, 300);

window.addEventListener('keydown', function (e) {
  if (steps == true) {
    if(e.keyCode == 37 && direction != 'right'){
      direction = 'left';
      steps = false;
    }
    else if (e.keyCode == 38 && direction != 'down') {
      direction = 'up';
      steps = false;
    }
    else if (e.keyCode == 39 && direction != 'left') {
      direction = 'right';
      steps = false;
    }
    else if (e.keyCode == 40 && direction != 'up') {
      direction = 'down';
      steps = false;
    }
  }
  
});

