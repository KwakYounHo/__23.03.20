// const data = require('./module/basic_data.js');

// 이게 무엇인지 다신 안 봐도 되게 변수명이 길어지더라도 명세하는 것
// const fromModuleObjectBasicData = require('./module/basic_data.js'); 
// console.dir(data);
// type module 적용 후

// import fromModuleObjectBasicData from './module/basic_data.js'
// console.dir(fromModuleObjectBasicData);

function first() {
  console.log('첫 번째 함수')
  function second() {
    console.log('두 번째 함수');
    function third() {
      console.log('세 번째 함수');
      function fourth() {
        console.log('네 번째 함수')
      }
    }
  }
}

