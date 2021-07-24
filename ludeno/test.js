let betweenArr = (a, b) => {
	let result = [];
	for(i = a; i <= b; i++){
		result.push(i);
	}
	return result;
};
console.log(betweenArr(10,20));