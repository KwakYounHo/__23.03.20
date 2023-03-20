import http from 'http';
import fs   from 'fs';
// console.dir(http);


const HTML_Head = fs.readFileSync('./index01.txt','utf-8')
const HTML_tail = fs.readFileSync('./index02.txt','utf-8')


const server = http.createServer(function(request,response) {
  // body += "<!DOCTYPE html>";
  // body += "<html lang='ko'>";
  // body += "<head>";
  // body += "<meta charset='utf-8'>";
  // body += "<title>node.js</title>";
  // body += "</head>";
  // body += "<body>";
  // body += "<h1>Hello world</h1>";
  // body += "</body>";
  // body += "</html>";
  if (request.method === 'GET' && request.url === '/') {
    response.statusCode = 200;
    let body = '';
    body += `
    <h1>Hello world</h1>
    <form action="./whatsthemean" method="POST" accept-charset="utf-8">
      <h2>파일명</h2>
      <input type="text" name="fileName">
      <h3>파일 내용</h3>
      <textarea name="fileDetail" cols="30" rows="10" style="resize:none;"></textarea>
      <h4>생성</h4>
      <input type="submit" value="행복 버튼">
    `
    // console.log(getHTML);
    response.setHeader('Content-Type', 'text/html'); // plain = 설명 text가 아니라 json이라면? => pokeAPI! 그거 맞아요 사실은 다르겠지만 형태는 똑같습니다.
    response.end(HTML_Head + body + HTML_tail) // response의 형태는 '객체'이다 , return이 객체일 수가 있다
  }

  if (request.method === 'POST' && request.url.startsWith('/whatsthemean')) {
    let body = '';
    request.on('data',(chunk)=>{body += chunk})
    request.on('end',()=>{

      const fileName          = body.split('=')[1].split('&')[0]
      const fileDetail        = body.split('=')[2]
      const decodedfileName   = decodeURIComponent(fileName);
      const decodedfileDetail = decodeURIComponent(fileDetail);
      const re_decName        = decodedfileName.replace(/\+/g,' ');
      const re_decDetail      = decodedfileDetail.replace(/\+/g,' ');
      fs.writeFileSync(`./${re_decName}.txt`,re_decDetail,(err)=>{if(err) throw err});

      let bodyHTML = `
        <h1>파일 생성 결과</h1>
        <p>
        요청하신 파일 생성은<br>
        <strong>${re_decName}.txt</strong>파일로 생성되었으며,<br>
        <strong>${re_decDetail}</strong><br>
        내용으로 채워졌습니다.
        </p>
      `;
      // response.writeHead(200, {'Content-Type' : 'text/html'});
      // let result = request.url
      // console.log(request);
      // response.write(HTML_Head + body + HTML_tail);
      response.end(HTML_Head + bodyHTML + HTML_tail);
    })
  }
});




server.listen(2080, (err)=>{
  if (err) {console.error('error')} else {console.log('run')}
})