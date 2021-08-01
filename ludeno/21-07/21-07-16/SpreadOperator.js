let arr1 = ['HTML', 'CSS', 'Javascript'];
let arr2 = [...arr1];

console.log(arr2);

/*
... 는 전개연산자라고 한다.
어떤 배열이 있으면 그 배열의 요소를 하나씩 차례대로 
전개해주는 역할을 한다.
이걸 이용하여 배열과 배열을 합칠때 유용하게 사용할 수 있다.
*/
let arr3 = [0, 1, ...arr2, 2, 3, 4];
console.log(arr3);

/*
또한 함수의 인자값으로 배열의 요소 하나하나를 지정해서
넣을 필요 없이 전개 연산자 하나로 쉽게 배열의 요소를 
인자값으로 쉽게 넣을 수 있다.
*/
let arr4 = [10, 100, 1000];
function sum(a,b,c){
	return a+b+c;
}
/*
전개연산자를 사용하지 않을시 
console.log(sum(arr4[0], arr4[1], arr4[2]);
*/
console.log(sum(...arr4));