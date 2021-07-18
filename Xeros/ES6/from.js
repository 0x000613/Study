// From 메서드로 진짜 배열 만들기

function addMark() {
    let newData = [];
    for (let i = 0; i < arguments.length; i++) {
        newData.push(arguments[i]);
    }

    return newData;
}

console.log(addMark(1, 2, 3, 4, 5));

// 위 코드를 map 함수를 이용해서 간소화
function newAddMark() {
    // arguments로부터 배열을 생성한다는 의미
    let newArray = Array.from(arguments);
    let newData = newArray.map(function (value) {
        return value;
    });
    console.log(newData);
}

newAddMark(1, 2, 3, 4, 5)


// 학습한 내용을 기반으로 만들어본 Custom function
function addNum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(addNum(1, 2, 3, 4, 5));