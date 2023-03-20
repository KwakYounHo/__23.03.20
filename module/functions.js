function one () {
  return 1;
}

// function two () {
//   return '1';
// }
function twoReturnString () { // 결과가 무엇이 되었든 어쨋거나 결과는 String!
  return '1';
}

two() === '1'; // -> 같다고 볼 수 있습니까? ----> 우리의 직관이 벗어나는 점. 함수를 열어보기 전에는 return이 1이라는 것을 죽어도 모릅니다.

function isthree () { // 어쩃거나 결과는 불리언 --> 보통 함수명 앞에 is가 붙어있다면 불리언일 확률이 매우 큼
  return true;
}

// 함수가 뭐든간에 리턴만 알면 해결이 빨라진다

function four() { // 호출할 때 까지는 함수 이지만, 호출하고 나면 객체가 된다 우리의 직관에서 벗어난다.
  return {
    a: 1,
    b: '2',
    c: true
  }
}

// 까보지 않으면 알 수 없기에 디버거에 의지하여야 합니다.

function five () { // 리턴이 없다. 하지만 1과 1을 더해서 a에 담았다 C언어에서는 return void라고 부른다. C언어에서 제로는 false
  let a = 1 + 1;
} // 더하는 행위만 하는 실행 함수 (실행만 한다 === 동작만을 위한 함수가 있다)