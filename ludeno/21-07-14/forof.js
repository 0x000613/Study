let data = [1,2,undefined,NaN,null,""];
let string = "Let's Study Javascript"
Array.prototype.getIndex = function(){};

/*
반복문의 for in 문법은 프로토타입에 추가된 상위 객체도 같이 불러오기 때문에 원하는 값만 반복을 못하는 경우가 있다.

이때 for of를 쓰면 해결이 된다.
*/
for(let i in data){
	console.log(data[i]);
} // 프로토타입에 추가된 상위 객체도 같이 불러서 반복을 시행한다. 고로 배열을 이용해 반복을 진행할때 for in 을 사용하면 안된다.
for(let a of data){
	console.log(a);
} // 배열만 가지고 반복을 시행한다.

for(let b of string){
	console.log(b);
} // 또한 for of 는 배열만을 위한 반복이 아니라 문자열을 가지고도 반복을 수행할 수 있다.