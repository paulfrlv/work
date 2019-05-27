'use strict';
function fun1() {
  let chbox = document.getElementById('one');
  if (chbox.checked) {
    alert('Selected');
  } else {
    alert('Not selected');
  }
}

function fun2() {
  let radi = document.getElementsByName('r1');
  for (let i = 0; i < radi.length; i++) {
    if (radi[i].checked) {
      alert(`Выбран ${i} элемент`);
    }
  }
}