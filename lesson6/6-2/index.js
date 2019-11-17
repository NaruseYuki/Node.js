const port =3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

const sendErrorResponse = res => {//エラー関数処理を作る
    res.writeHead(httpStatus.NOT_FOUND,{
        "Content-Type":"text-html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
};

http
    .createServer((req,res) =>{
    let url = req.url;  //リクエストのURLをurl変数に保存
    //URLにファイル拡張子が含まれているかチェック
    if(url.indexOf(".html")!==-1){
        res.writeHead(httpStatus.OK,{
            "Content-Type": "text-html"
    });//レスポンスのコンテンツタイプを設定
    //readFileでファイルの内容を読む
    customReadFile('./views'+ url, res);
    } else if (url.indexOf(".js")!==-1){
                 res.writeHead(httpStatus.OK,{
                    "Content-Type": "javascript" 
    });
    customReadFile('./public/js'+ url, res);
    } else if (url.indexOf(".css")!==-1){
    res.writeHead(httpStatus.OK,{
       "Content-Type": "text/css" 
    });
    customReadFile('./public/css'+ url, res);
    } else if (url.indexOf(".png")!==-1){
        res.writeHead(httpStatus.OK,{
           "Content-Type": "image/png" 
        });
        customReadFile('./public/images'+ url, res);
    } else {
        sendErrorResponse(res);
    }
})
.listen(3000);

console.log('The server is listening on port number:' + port);

//リクエストされた名前のファイルを探す
const customReadFile = (file_path,res) =>{
    //ファイルは存在するか？
    if(fs.existsSync(file_path,res)){
        fs.readFile(file_path,(error,data) =>{
            if(error){
                console.log(error);
                sendErrorResponse(res);
                return;
            }
        res.write(data);
        res.end();
    });
} else {
    sendErrorResponse(res);
}
};