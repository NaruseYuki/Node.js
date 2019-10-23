//ローカルモジュール"./addNum","./compareNum"を要求する
const resultModule1=require("./addNum");
const resultModule2=require("./compareNum");

//計算結果を代入
var result1 = resultModule1.addNum(process.argv[2],process.argv[3]);
var result2 = resultModule2.compareNum(process.argv[3],process.argv[4]);

//結果を出力
console.log(result1,result2);

//argv[0]=node
//argv[1]=result.js
//コマンドラインから引数を渡して、ファイルへ出力>result.txt