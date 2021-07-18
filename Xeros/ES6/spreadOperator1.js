// spread operator , 펼침연산자.

let pre = ["apple", "orange", 100];
// 펼침연산자를 이용해 pre 배열의 값을 펼쳐 ndwData 변수에 배열로 할당
let newData = [...pre];
console.log(newData);

console.log(pre === newData);