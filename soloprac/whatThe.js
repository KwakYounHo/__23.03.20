import fs from 'fs'

const data = fs.readFileSync('./select_result.json','utf-8');
// console.log(data)

let data3 = "";
const data2 = fs.readFile('./select_result.json','utf-8',(err,result)=>{
  if (err) {
    throw err
  } else {
    data3 += result;
  }
})

// console.log(data2)
// console.log(data3)