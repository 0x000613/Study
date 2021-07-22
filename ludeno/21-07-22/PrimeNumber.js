const readline = require('readline');
 
// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N; // 정수를 저장할 변수
let count;
let resArr = [];
rl.on("line", function(line){
    N = Number(line);
	for(let i = 1; i <= N; i++)
	{
		count = 0;
		for(let j = 1; j <= i; j++){
			if(i % j == 0)
				count++;
		}
		if(count == 2)
			resArr.push(i);
	}
	console.log(String(resArr));
    rl.close();
})