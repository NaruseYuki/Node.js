   const httpStatus = require("http-Status-Codes"),
        httpContentType = {
            "Content-Type":"text/html"
        },
        //POSTとGETリクエストに対応する経路を格納するroutesオブジェクトを定義
    routes = {
        "GET" : {
                 "/info" : (req,res) => {
                    res.writeHead(httpStatus.OK,{
                        "Content-Type" : "text/plain"
                    })
                    res.end("Welcome to the Info Page!")    
                }
            },
        "POST":{}
    };

    //経路のコールバック関数を処理するhandle関数を作る
    exports.handle = (req,res) => {
        try {
            if(routes[req.method][req.url]){
                routes[req.method][req.url](req,res);
            } else {
                res.writeHead(httpStatus.NOT_FOUND,httpContentType);
                res.end("<h1>No such file exists</h1>");
            }
        } catch(ex) {
            console.log("error:" + ex);
        }
    };

    //main.jsから経路を登録するために、GETとPOSTの関係を作る
    exports.get = (url,action) =>{
        routes["GET"][url] = action;
    };

    exports.post = (url,action) =>{
        routes["POST"][url] = action;
    };