const port = 3000;
    
    //httpとhttpsのモジュールをロードする
    const http = require("http");
    const httpStatus = require("http-status-codes");
    //requstとresponseのパラメータを指定してサーバーを作成
    const app = http.createServer((request,response) => {
        //「リクエストを受信しました!」
        console.log("Recieved an incoming request!");
        //クライアントに対するレスポンスを書く
        response.writeHead(httpStatus.OK,{
            "Content-Type":"text/html"
        });

        let responseMessage ="<h1>Hello, Universe!</h1>"; 
        response.write(responseMessage);
        response.end();
        //「レスポンスを受信しました:」
        console.log('Sent a response :' + responseMessage);
    });
        //アプリケーションのサーバーにポート3000を監視させる
        app.listen(port);
        //「サーバーが起動して、このポートを監視中：」
        console.log('The Server has started and is listening on port number:'+ port);
   