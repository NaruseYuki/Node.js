const port = 3000,
      http = require("http"),
      httpStatus = require("http-status-codes"),
      app = http.createServer();

//リクエストを監視するリスナ
app.on("request",(req,res) => {

console.log(req.method);//リクエストのHTTPメソッドを見る
console.log(req.url);//リクエストのurlを見る
console.log(req.headers)

    //レスポンスを準備
res.writeHead(httpStatus.OK,{
    "Content-type":"text/html"
    });

    //「このメッセージが画面に現れます」
    let responseMessage = "<h1>This will show on the screen.</h1>";
    //HTMLでレスポンスする
    res.end(responseMessage);
});

app.listen(port);
//「サーバーが起動しました。監視しているポート番号は：」
console.log('The server has started and is listening on port number :' + port);
    