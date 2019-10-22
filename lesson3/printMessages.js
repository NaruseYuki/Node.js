//ローカルモジュールのmessages.jsを要求する
const MESSAGE_MODULE =require("./messages");

//配列をMESSAGE_MODULEとして参照する。
MESSAGE_MODULE.messages.array.forEach(m => (console.log(m)));