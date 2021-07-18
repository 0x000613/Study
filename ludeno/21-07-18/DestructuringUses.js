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
// 함수로 응용
// 함수에서도 Destructuring을 사용 가능하다.
function getLecturedBy([,{lecturedBy}]) {
	console.log(lecturedBy);
}

getLecturedBy(jsonVar);