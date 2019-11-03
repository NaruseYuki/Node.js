const port = 3000;
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");//fsモジュールをインポート
  
/*
  const routeMap = {//HTMLファイルの経路を設定
    "/":"views/index.html"
  };
*/
//urlを補完してファイルのパスにする関数を作る
const getViewUrl = (url) =>{
  return 'views' + url + '.html';
} 

/*1 
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
  */
 http.createServer((req,res) =>
 {
   //ファイルのパス文字列を取得
   let viewUrl = getViewUrl(req.url);
   //リクエストのurlを補完してfsでファイルを探す
   fs.readFile(viewUrl,(error,data) =>{
     if(error){//エラーなら404のレスポンスコードで処理
        res.writeHead(httpStatus.NOT_FOUND);
        res.write("<h1>FILE NOT FOUND</h1>");
     } else {//ファイルの内容で応答する
      res.writeHead(httpStatus.OK,{"Content-Type" :"text/html"
      });
        res.write(data)
     }
     res.end();
   }); 
 })
  .listen(port);
console.log('The server has started and is listening on port number :' + port);
