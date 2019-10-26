    const routeResponseMap = {
        "/info":"<h1>Info Page</h1>",
        "/contact":"<h1>Contact Us</h1>"
    };
    
    const port = 3000;
    //httpとhttpsのモジュールをロードする
    const http = require("http");
    const httpStatus = require("http-status-codes");
    //requstとresponseのパラメータを指定してサーバーを作成
    const app = http.createServer((req,res) => {
        //クライアントに対するレスポンスを書く
        res.writeHead(200,{
            "Content-Type":"text/html"
        });
        //リクエストの経路がマップで定義されているかチェック
        if (routeResponseMap[req.url]){
            setTimeout(()=>res.end(routeResponseMap[req.url]),2000);
        }else{
            //デフォルトのhtmlでレスポンス
            res.end("<h1>Welcome!</h1>");
        }
    });
        //アプリケーションのサーバーにポート3000を監視させる
        app.listen(port);
        //「サーバーが起動して、このポートを監視中：」
        console.log('The Server has started and is listening on port number:'+ port);
   