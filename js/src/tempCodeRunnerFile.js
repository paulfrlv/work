function upDown(a, b) {
  if (a > b) {
    console.log(`${a} больше ${b}`);
  } else if (a < b) {
    console.log(`${a} меньше ${b}`);
  } else {
    console.log(`${a} равно ${b}`);
  };

  upDown(2, 5);