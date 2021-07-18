/*
보통 배열안에 있는 요소을 다른 변수에 저장하려면 
변수 = 배열변수[인덱스]
와 같이 했어야 했다.

그 방식은 아래 코드와 같다.
let array = ['HTML', 'CSS', 'Javascript'];

let LSH = array[0];
let ludeno = array[2];
let Xeros = array[2];

console.log(LSH, ludeno, Xeros);

하지만 저렇게 일일히 변수 하나 선언하고 배열 요소 하나 집어
넣고 하는 불편한 단순 반복을 밑에 코드로 해결 가능하다.
*/

let array = ['HTML', 'CSS', 'Javascript'];
let [LSH,,ludeno] = array;
console.log(LSH, ludeno)
/*
근데 같은 요소를 넣고 싶을때는 어떻게 해야하는지 모르겠다.
나중에 알아보기
*/
