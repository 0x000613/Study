// spreadOperator를 이용한 배열 삽입
var pre = [100, 200, "hello", null];
var newData = [0, 1, 2, 3, ...pre, 4];

console.log(newData);

// spreadOperator를 이용한 배열 삽입 2
function sum(a, b, c) {
    return a+b+c
}

var pre = [100, 200, 300]

// 기존의 방식 (sum.apply를 이용)
console.log(sum.apply(null, pre));

// spreadOperator를 이용한 방식
console.log(sum(...pre))