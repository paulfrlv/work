/* var arr = [20,4,5,9]; */

/* let a = arr.some(function(c){
  return c<4;
});
console.log(a); */

/* let a = arr.reduce(function(accum,currentValue){
  console.log('Accum = '+ accum);
  console.log('currentValue = ' + currentValue);
  return accum + currentValue;
});
console.log(a); */
/* 
for(var i=-4; i<=100; i=i+2){
  console.log(i);
}; */

function upDown(a, b) {
  if (a > b) {
    console.log(`${a} больше ${b}`);
  } else if (a < b) {
    console.log(`${a} меньше ${b}`);
  } else {
    console.log(`${a} равно ${b}`);
  };

  upDown(2, 5);
