const readline = require('readline');
 
// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ifNum;
rl.on("line", function(line){
	if(typeof line == "Number")
		ifNum = Number(line);
	if(line == "Edge")
		console.log("Edge 사용중");
	else if(line == "Chrome" || line == "FireFox" || line == "Opera" || line == "Sapari")
		console.log("호환가능 브라우저 사용중");
	else
		console.log("호환불가");
    rl.close();
})