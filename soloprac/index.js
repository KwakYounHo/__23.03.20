import mysql from 'mysql2'
import fs from 'fs'
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : '3306',
  database : 'test_youn'
})
conn.connect();
let command = `select * from testtable3`;
conn.query(
  command,
  (err,result,fields)=>{
    if (err) throw err;
    console.log(result);
    fs.writeFileSync('./'+'select_result'+'.json',JSON.stringify(result));
  }
);
conn.end();

// const p     = document.createElement('p');
// p.innerHTML = 'hello';
// document.body.appendChild(p);