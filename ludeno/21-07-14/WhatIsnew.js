/*
new를 이용하여 객채를 생성할 수 있다.
기본적으로 객체를 생성하는 방법은 아래와 같다.
--------------------------------------------------
let Person = {} //비어있는 객체 설정
Person.name = 'Chulsu'; // 객체 안에 변수(property, 프로퍼티) name을 만든다.
Person.introduce = function(){
	return 'My name is '+this.name;
} // 객체 안에 있는 변수에 담겨있는 함수(method, 메소드) introduce 를 만든다.
console.log(Person);
console.log(Person.name, Person.introduce());
----------------------------------------------------

아니면 객체를 생성할때 미리 값을 세팅하는 경우도 있다.
----------------------------------------------------
let Person = {
	name : 'Chulsu',
	'introduce' : function(){
		return 'My name is '+this.name;
	}
} // 객체를 선언할 때 프로퍼티와 메소드도 같이 값에 넣어서 선언
console.log(Person);
console.log(Person.name, Person.introduce());
----------------------------------------------------

위와 같은 방법들의 문제점은, 비슷한 형태의 객체를 만들고 싶을때 새로 만들어야 한다.
Person 객체의 name 프로퍼티에 다른 사람의 이름을 담을 객체가 필요하다면, 객체를 새로 정의해야될 것이다.
여기서 필요한 것이 생성자(constructor)이다.

생성자는 객체를 만드는 역할을 하는 함수이다.
아비어있는 함수를 만들고 함수를 호출할때 new를 붙여서 호출하면 함수로 사용되는것이 아니라 생성자 역할을 하게 된다.

변수에 함수의 리턴값을 저장할때 함수는 새로운 객체를 만든 후에 그 객체를 리턴값으로 주어서 변수에 저장하게 된다.
----------------------------------------------------
function Person(){}
let An = new Person();
let Kim = new Person();

An.name = 'ludeno';
An.introduce = function(){
	return 'My name is '+this.name;
}
Kim.name = 'blabla';
Kim.introduce = function(){
	return 'My name is '+this.name;
}
console.log(Kim.introduce());
----------------------------------------------------

하지만 위와 같은 방법으로도 근본적인 문제점은 해결하기 힘들다.
결국 비슷한 형태의 객체 두개를 만들어서 비슷한 코드가 반복되는 것이다.

이러한 문제점은 아래의 코드로 해결 가능하다.
----------------------------------------------------
*/
function Person(name){
	this.name = name;
	this.introduce = function(){
		return 'My name is '+this.name;
	}
}


let An = new Person('ludeno');
let Kim = new Person('blabla');

console.log(An.introduce(), Kim.introduce());
/* 함수, 여기서는 객체를 만들기 위해 사용하는 함수이기 때문에 생성자라고 부른다.
생성자에서 여러 개체에서 반복될 프로퍼티를 정의하고 있다.

변수를 초기화 한다 라고 하듯이 이러한 행위도 초기화 하는 행위에 해당한다.

이러한 방법으로 효율적으로 객체를 생성하고 사용할 수 있다.
*/

