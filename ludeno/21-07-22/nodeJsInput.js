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
	console.log(line);
    rl.close();
})