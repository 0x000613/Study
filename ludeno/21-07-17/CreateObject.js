function getObj() {
	let name = "ludeno";
	
	let getName = function() {
		return name;
	}
	
	let setName = function(newName) {
		name = newName;
	}
	
	let printName = function() {
		console.log("Hello! My Name is"+name);
	}
	
	return {getName,setName,printName} 
/* 함수 반환값으로 중괄호을 열고 프로퍼티를 넣으면 함수에 대한 반환값으로 객체가 생성된다. 원래는 일반 객체 생성하는것 처럼
키 : 값 이런식으로 반환값을 줘야 하지만,
키와 값의 이름이 같으면 위와 같이 이름만 적어도 
키와 값의 이름이 같은 객체를 반환하게 된다.
*/
}

let Person = getObj();

console.log(Person.getName());
Person.setName("Fuck");
Person.printName();