/*
from 메소드를 사용하기 전에 먼저 arguments 부터 
이해해야 한다.
arguments는 객체이다.
arguments는 함수에 전달된 인자 값에 해당하는 배열 형태의
객체이다.
배열처럼 접근할때 arguments[0], arguments[1] 
이렇게 인덱스를 주어 접근을 할 수 있다.
하지만, 진짜 배열은 아니다.
그게 무슨뜻이나면, 배열에서 사용할 수 있는 메소드를
arguments 객체에서는 사용하지 못한다. (length 제외)
arguments 객체는 함수가 받는 인자값이 변동이 있을때 유용하다.

아래의 코드처럼 사용할 수 있다. 
------------------------------------------------------
function addMark() {
	let newData = [];
	
	for(let i = 0; i < arguments.length; i++){
		newData.push(arguments[i] + "i");
	}
	console.log(newData);
}

addMark(1,2,3,4,5,6);
------------------------------------------------------
그럼 arguments 객체에서 배열 메소드를 사용하고 싶다면?
arguments 객체를 실제 배열로 변환하면 된다. 이때 Array.from을 
사용하거나 전개 연산자를 사용하면 된다.
*/

function addMark() {
	let arr1 = Array.from(arguments);
	//let arr1 = [...arguments] 로 변경 가능
	let arr2 = arr1.map(value => value + "!");
	console.log(arr2);
}

addMark(1,2,3,4,5,6);