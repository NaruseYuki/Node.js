const ToString = require("./JSONString");
const port = 3000,
      http = require("http"),
      httpStatus = require("http-status-codes"),
      app = http.createServer();

//リクエストを監視するリスナ
app.on("request",(req,res) => {     //リクエストを監視
    var body = [];                  //チャンクを格納する配列を作成
    req.on("data",(bodyData) => {   //そのデータを別のコールバック関数で処理
        body.push(bodyData);        //受信したデータをbody配列に入れる
    });
    req.on("end", () => {           
        body = Buffer.concat(body).toString();//body配列を文字列テキストに変換
        //リクエストの内容をコンソールにロギングする
        console.log('Request Body Contains :'+ body);      
    });

console.log('Method:'+ ToString.getJSONString(req.method));
console.log('URL:'+ ToString.getJSONString(req.url));
console.log('Headers:'+ ToString.getJSONString(req.headers));
    //レスポンスを準備
res.writeHead(httpStatus.OK,{
    "Content-type":"text/html"
    });

    //「このメッセージが画面に現れます」
    let responseMessage = "<h1>This will show on the screen.</h1>";
    //HTMLでレスポンスする
    res.end(responseMessage);
}).listen(port);

//「サーバーが起動しました。監視しているポート番号は：」
console.log('The server has started and is listening on port number :' + port);
