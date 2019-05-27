'use strict';
function func() {
  let sel = document.getElementById('mySelect').selectedIndex;
  let options = document.getElementById('mySelect').options;
  alert('Выбрана опция ' + options[sel].text);
}