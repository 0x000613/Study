let data = [1,2,undefined,NaN,null,""];
Array.prototype.getIndex = function(){};

/*
반복문의 for in 문법은 프로토타입에 추가된 상위 객체도 같이 불러오기 때문에 원하는 값만 반복을 못하는 경우가 있다.

이때 for of를 쓰면 해결이 된다.
*/
for(let i in data){
	console.log(data[i]);
}
for(let a of data){
	console.log(a);
}