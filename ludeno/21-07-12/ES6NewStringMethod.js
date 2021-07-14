let sentence = "This is our Study";
let startWord = "This";
let endWord = "Study";

console.log(sentence.startsWith(startWord), sentence.endsWith(endWord));
/*
startsWith 메소드는 시작하는 문자열이 인자값과 일치여부를 확인해서 불값으로 반환한다.
비슷하게 endsWith는 끝나는 문자열이 인자값과 일치여부를 확인해서 불값으로 반환한다.
*/
console.log(sentence.includes("our"));
/*
includes 메소드는 문자열에 인자값이 포함되어있는지의 여부를 확인해서 불값으로 반환한다.
*/