let Carl = {
	name: "Carl",
	age: 25,
}
let John = {
	name: "John",
	age: 30,
}

function Greeting(){
	console.log(`${this.name} said, Hello Everyone`);
}

Carl.Greeting = Greeting;
John.Greeting = Greeting;

Greeting(); // 'undefined said, Hello Everyone'
Carl.Greeting(); // 'Carl said, Hello Everyone'
John.Greeting(); // 'John said, Hello Everyone'