/*
마찬가지로 JSON에서도 가능하다.
*/
let jsonVar = [
	{
		"title" : "ludeno",
		"lecturedBy" : "https://www.inflearn.com/",
		"StudyContents": [
			"let으로 변수 선언법",
			"전개 연산자",
			"객체 생성법",
			"함수 생성법",
			"new를 이용해 함수로 객체 만드는 방법"
		]
	},
	{
		"title" : "1111",
		"lecturedBy" : "asdfasdfsadfas",
		"StudyContents" : [
			"오늘 ㅈㄵㅎ때",
			"ㄷㅈㅅㄱ한테",
			"머리 긴거 보여서",
			"강제로 깎임 당했다.."
		]
	}
];

let [Study,tlqkf] = jsonVar;// 대신 JSON은 변수 순서에 따라 JSON 파일에서 추출되는 값이 다르기 때문에 JSON 파일에서 가져올 값의 위치에 맞게 변수를 선언해줘야 한다. 
console.log(Study, tlqkf);
/*
또한 JSON에서 특정한 값 만을 가져오고 싶을때는 아래 코드처럼
사용하면 된다.
*/
let [, {title, lecturedBy}] = jsonVar;
console.log(title, lecturedBy);


