import fs from 'fs' // fs = file system


let name = "kwakyounho";
// let date = new Date();
// let filename = date.getMinutes() + name;
let yera = '2023';
let month = '03';
let day = '20';
let filename = yera + month + day + '_' + name

// 파일 생성
// fs.writeFileSync('./' + filename + '.txt', name); // write = 쓰다 / File = 파일을 / Sync = 동기방식으로 / 첫 매개변수 : 경로/파일 이름 / name : 우리가 쓴 변수 이름

// 파일 삭제
// for (let i=0; i<5; i++){
//   fs.writeFileSync(`./sample${i+1}.txt`, '덮어씌우기', (err)=>{
//     console.log(err);
//   });
// }


// for (let i =6; i<11; i++) {
  //   fs.writeFile(`./sample${i}.txt`, '덮어쓰기', (err) =>{
    //     console.log(err);
    //   })
    // }

// for (let i=0; i<10; i++) {
//   fs.writeFile(`./sample${i+1}.txt`,'곧 삭제될 텍스트',(err)=>{if (err) throw err;})
// } // 파일을 만드는 코드

// for (let i=0; i<10; i++) {
//   fs.unlink(`./sample${i+1}.txt`,(err)=>{if (err) throw err;})
// } // 파일을 삭제하는 코드

// const data = fs.readFileSync('./soloprac/select_result.json','utf8',(err)=>{if (err) throw err;})
// console.log(JSON.parse(data));
// 동기식으로 파일을 읽었기 때문에 컴퓨터가 어느 명령줄을 실행하는지 분명하게 알 수 있음, 그렇기 때문에 data라는 변수에 원하는 대로 담기는 것 같음

fs.readFile('./soloprac/select_result.json','utf-8',(err,data)=>{if (err) {console.error(err)}else{console.log(JSON.parse(data))}})
// 비동기식으로 처리하고 있기 때문에, 파일을 읽으라고 시켜놓고, 실행줄은 다른 곳으로 가버림, 결과는 나왔지만, 어디에 전달을 해야할지 함수가 끝나버리면 아이를 놓쳐버리기 때문에 찾이러 가기 힘듦

// fs.unlink('./test.txt',(err)=>{if(err)throw err;});