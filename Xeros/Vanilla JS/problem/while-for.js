// for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) console.log(i);
}

// for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보세요. 출력 결과도 동일해야 합니다.
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

// 사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요. 사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.

// 사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.

// 사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다. 숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다.

num = 0;
inpNum = 5
while (num > 100) {
    num = inpNum;
    if (!num) break;
    console.log(num > 100)
}

console.log("소수 구하기")
// n번째까지의 소수 구하기

function isPrime(num) {
    for (let i=2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let n = 10;
let primeArray = [];
for (let i = 2; i <= n; i++) {
    console.log(i)
    if (isPrime(i)) primeArray.push(i);
}
console.log(primeArray);