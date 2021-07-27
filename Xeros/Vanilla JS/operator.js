/*
let x = 1;
x = -x;
console.log(x) // -1, 단항 마이너스 연산자는 부호를 뒤집습니다.
*/

/*
let x = 1, y = 3;
console.log( y - x ); // 2, 이항 마이너스 연산자는 뺄셈을 해줍니다.

console.log(4 ** (1 / 2)); // 2
console.log(8 ** (1 / 3)); // 2
*/

// 숫자에는 아무런 영향을 미치지 않습니다.
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
console.log( +true ); // 1
console.log(+"");   // 0

// 

let apples = "2";
let oranges = "3";

// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
console.log( +apples + +oranges ); // 5

// `Number(...)`를 사용해서 같은 동작을 하는 코드를 작성할 수 있지만, 더 기네요.
// console.log( Number(apples) + Number(oranges) ); // 5