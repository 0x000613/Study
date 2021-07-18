// const name = "crong";
// const age = 33;

// const obj = {
//     name: name,
//     age: age
// }

// console.log(obj)


function getObj() {
    const name = "crong";
    
    const getName = function () {
        return name;
    }

    const setName = function (newname) {
        name = newname;
    }

    const printName = function () {
        console.log(name)
    }

    // return {
    //     getName: getName,
    //     setName: setName
    // }
    // 위 코드구문을 조금 더 간소화
    return {getName, setName}
}

var obj = getObj();
console.log(obj.getName());


// 간단한 object literal 선언 방법
// const data = {
//     name,
//     getName() {

//     },
//     age
// }