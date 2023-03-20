function A (numberA, numberB) { // 3
  return numberA + numberB;
}

function B (numberA, numberB) { // 7
  return numberA + numberB;
}

function C (numberA, numberB) { // 11
  return numberA + numberB;
}

function D (A, B, C, callback) {
  return callback(A,B,C);
}

function E (A,B,C) {
  return A + B + C;
}

console.log(D(A('가','나'),B('다','라'),C('마','바'),E));