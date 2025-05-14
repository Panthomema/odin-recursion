// Iterative approach
function fibs(num) {
  const seq = [0, 1];

  if (num < 2) return seq.slice(0, num);

  while (num > 2) {
    seq.push(seq.at(-1) + seq.at(-2));
    num--;
  }

  return seq;
}

// Recursive approach
function fibsRec(num, seq = [0, 1]) {
  if (seq.length >= num) return seq.slice(0, num);

  const newNum = seq.at(-1) + seq.at(-2);
  seq.push(newNum);

  return fibsRec(num, seq);
}

console.log('Iterative tests:');
console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(4)); // [0, 1, 1, 2]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(100000000)); // Starts being slow
console.log('\n');
console.log('Recursive tests:');
console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(4)); // [0, 1, 1, 2]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(10000)); // Stack overflow
