const port = 3000;
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");//fsモジュールをインポート
  
  const rootMap = {//HTMLファイルの経路を設定
    "/":"views/index.html"
  };
  
http
  .createServer((req,res)=>{
    res.writeHead(httpStatus.OK,{
      "Content-Type" :"text/html"
    });
    if(routeMap[req.url]){
      //マップされたファイルを読んで、その内容を応答する
      fs.readFile(routeMap[req.url],(error,data) =>{
        res.write(data);
        res.end();
      });
    } else {
      res.end("<h1>Sorry, not found.</h1>");
    }
  })
  .listen(port);
console.log('The server has started and is listening on port number :' + port);
