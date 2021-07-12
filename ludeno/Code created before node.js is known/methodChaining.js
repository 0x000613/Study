let array = [8, 9, 3, 6, 12, 225, 371]
/*
let arrEx = array.filter(function(value){
	return value > 100
})

array.forEach(function(value, index, array){
	console.log(`${index}번째 요소 : ${value}`)
})

array = array.map(function(value, index, array){
	return value * value
})

array.forEach(console.log)

console.log(arrEx)
*/
// 위의 코드를을 화살표 함수로 간단하게 표현
/*
let arrEx = array.filter((value) => value > 100)

array.forEach((value) => {
	console.log(value)
})

array = array.map((value) => value * value)

console.log(array)
console.log(arrEx)
*/
//메소드 체이닝 사용하기

array
	.filter((value) => value > 100)
	.map((value) => value / 100)
	.forEach((value) => {
	console.log(value)
})
