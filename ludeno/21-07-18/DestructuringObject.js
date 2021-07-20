/*
마찬가지로 객체에서도 Destructuring이 가능하다.
변수 선언때 {객체1, 객체2...} 를 이용하고 변수 값으로 
객체를 넣으면 해당 객체에 프로퍼티 값이 변수에 저장된다
*/
let obj = {
	name : "ludeno",
	From : "Korea",
	Learn : "Javascript",
	Blog : "https://ludeno-studying.tistory.com"
}

let {name, age, From} = obj; 
// 프로퍼티 이름으로 값을 할당하기 때문에 변수 선언의 위치는 중요하지 않다.
console.log(name,age,From);

let {name:myName, age:myAge} = obj;
console.log(myName)
/*
또한 위의 코드처럼 객체의 프로퍼티 이름을 변경해서 
변경한 프로퍼티 이름으로 똑같은 값을 출력해 낼 수 있다.
*/
