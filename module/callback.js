// function six () {
//   return 1;
// }
// function six (number, append) {
  // if (typeof(number) === 'number' && typeof(append) === 'number') { // 조건이 true일 때만 리턴을 뱉는 똑똑한 함수가 되었다 함수가 조금 복잡해 졌지만 버그를 잡았다
    // return number + append;
  // } else {
    // console.error('이 매개변수는 숫자여야 동작합니다.')
  // }
// }

// const a = six(); // ? 데이터가 변한다 -> 함수에서 숫자로
// console.log(a); // a = 1

// const b = six(5, 6); // ? six()는 어떤 수가 들어오면 + append 를 하는 함수가 된다
// console.log(b);


function seven (number, append) { // 이게 만약 (-)뿐만 아니라 가짓수를 책정할 수 없다는 경우의 수가 없을 땐 어떻게 하실 겁니까? -> 호출 할 때 cutom 하고 싶을 때가 있을 거라고
    return number - append;
  } // +나 - 말고도 이 함수를 사용하고 싶어 -> 이럴 땐 어떡하느냐

function eight (number, append, callback) { // 커스텀이 중요한 우리에게는 매번 함수를 만들어 주는 것이 바람직 하지 않다. -> 그럴거면 호출할 때
  let a = number + 1;
  let b = append + 2;
  return callback(a, b); // 인자를 전달 받는다 Argument를 전달 받았다
} // 결과적으로는 실체가 없는 함수가 되었다. 하지만 굉장히 중요한 함수가 되었다.
// 매개변수자리엔 문자열만 들어가지 않는다

// console.log(eight(1,2,function(a,b) {
//   return a + b;
// }))

console.log(eight(3,4,seven));