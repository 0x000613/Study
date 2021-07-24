function call(funcPara){
	for(let i = 1; i <= 3; i++){
		funcPara(i);
	}
}

function Output(num){
	console.log(`${num} 번째 출력`);
}

call(Output);