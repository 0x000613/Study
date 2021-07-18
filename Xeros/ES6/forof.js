console.log("for in")
var datas = [1, 2, undefined, NaN, null];

Array.prototype.getIndex = function () { };

// for in을 사용한 반복 예제
for (let idx in datas) {
    console.log(datas[idx]);
}
// 순회 마지막 출력 결과에서 [Function (anonymous)]이 출력된다.
// 되도록이면 for of를 사용하는것이 낫다.
// 이 문제는 JavaScript의 Prototype chain과 관련이 있는 문제이다.

/* 공식문서에서 발췌
왜 for...in을 사용합니까?
for...in이 객체의 반복을 위해 만들어졌지만, 배열의 반복을 위해서는 추천되지 않고,  Array.prototype.forEach(), for...of가 이미 존재합니다. 그러면 for...in은 어떻게 사용하는 것이 좋을까요?

이것은 쉽게 객체의 속성을 확인(콘솔이나 다른 방법으로 출력)할 수 있기 때문에 실질적으로 디버깅을 위해 사용될 수 있습니다.
배열이 데이터의 저장에 있어서는 더 실용적이지만, 키-값 쌍이 선호되는 데이터의 경우(속성이 "key"의 역할을 함) 특정 값을 가진 키가 있는지 확인하려는 경우에 for...in을 사용할 수 있습니다.
*/

// for of를 사용한 반복 예제
console.log("for of")
for (let value of datas) {
    console.log(value);
}

// 번회 forEach
console.log("forEach")
datas.forEach(function(data) {
    console.log(data);
});