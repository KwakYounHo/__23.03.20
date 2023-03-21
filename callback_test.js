function A (numberA, numberB) { // 3
  return numberA + numberB;
}

function B (numberA, numberB) { // 7
  return numberA - numberB;
}

function C (numberA, numberB) { // 11
  return numberA * numberB;
}

function D (A, B, C, callback) {
  return callback(A,B,C);
}

function E (A,B,C) {
  return A + B + C;
}

console.log(D(A(1,2),B(3,4),C(5,6),E));