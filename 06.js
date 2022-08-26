const loopWithRange = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr.join(', ');
};

console.log(
  loopWithRange(4, 8)
);