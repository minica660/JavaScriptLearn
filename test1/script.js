let message = "Hello World";

console.log(message);

message = "2番目のメッセージ!";

console.log(message);

function test(testMessage){

    console.log("テストメソッドから:" + testMessage )

}

testMessage("aaa");

const constMessage = 1;

testMessage(constMessage);

