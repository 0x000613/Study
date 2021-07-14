const sentence = "JS STUDY";
//sentence = "Change Study"; 
/*
const는 상수를 선언할 떄 사용함. 
위에 코드와 같이 변수를 재 할당 하려고 하면
TypeError: Assignment to constant variable.
에러가 나오게 된다.

그러나 상수라고 값을 무조건 바꿀 수 없는것은 아니다.
*/

const array = ["HTML", "CSS", "Javascript"];
array.push("Python");
console.log(array)
 /*
 위와 같은 경우에서는 변경이 가능하다.
 하지만 위와 같은 경우에는 상수인데 값을 변경해 버린 경우이고
 또 원본은 남기면서 새로운 값을 만들어 내는 방법이 있다.
 */

const arr = [1,2];
const arr2 = [3,4];
arr.concat(arr2); // concat 메소드는 문자열을 합칠때 사용하거나, 배열을 합칠 때 사용함
console.log(arr);
arr.push(arr2)
console.log(arr);
 /*
 위와 같이 새로운 변수에 결과값을 할당하면 된다.
 str, str2는 온전히 남아있으면서 두개의 값을 합친 새로운 str3을 만들어내게 되는것이다.
 https://velog.io/@mnmm/js-immutable
 위의 링크를 참고해보면
 concat 메소드는 반환값이 불변하다.
 */
