// const mysql = require('mysql2');
// const conn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   port     : '3306',
//   database : 'test_youn'
// })
// conn.connect();
// let command = `select * from testtable3`;
// conn.query(
//   command,
//   (err,result,fields)=>{
//     if (err) throw err;
//     console.log(result);
//     console.log('?');
//   }
// );
// conn.end();

const p     = document.createElement('p');
p.innerHTML = 'hello';
document.body.appendChild(p);