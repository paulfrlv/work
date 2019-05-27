'use strict';
//let nav = 
document.querySelector('#nav').onmouseover = function (event) {
  const target = event.target;
  if(target.className == 'menu-item') {
    const s = target.querySelectorAll('.submenu');
    closeMenu();
    s[0].style.display = 'block';
  }
};

document.onmouseover = function(event) {
  const target = event.target;
  console.log(event.target);
  if (target.className != 'menu-item' && target.className != 'submenu') {
    closeMenu();
  }
};

function closeMenu() {
  let menu = document.querySelector('#nav');
  let sub = document.querySelectorAll('.submenu');
  for (let i = 0; i < sub.length; i++) {
    sub[i].style.display = 'none';
    
  };
};
