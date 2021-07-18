// Destructuring
// Array
let data = ["crong", "honux", "jk", "jinny"];
// let jisu = data[0];
// let jung = data[2];
let [jisu, , jung] = data;

console.log(jisu, jung);

// Object
let obj = {
    name: "crong",
    address: "Korea",
    age:10
}

// let { name, age } = obj;
// console.log(name, age);

let { name: myName, age: myAge } = obj;
console.log(myName, myAge);