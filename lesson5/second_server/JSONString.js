//Javascriptオブジェクトを文字列に変換する
exports.getJSONString = obj =>{
    return JSON.stringify(obj,null,2);
};