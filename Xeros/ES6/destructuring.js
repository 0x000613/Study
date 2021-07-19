// Destructuring
// Array
let data = ["crong", "honux", "jk", "jinny"];
// let jisu = data[0];
// let jung = data[2];
let [jisu, , jung] = data;

console.log(jisu, jung);

// Object
let obj = {
    name: "crong",
    address: "Korea",
    age:10
}

// 아래 코드는 obj에서 선언된 변수명 그 자체를 변경하지 않고 바로 사용 할 경우
// let { name, age } = obj;
// console.log(name, age);

// 아래 코드는 obj에서 선언된 변수명 대신 새로운 변수명을 선언한 뒤 값을 할당 ( {오브젝트 내 선언된 변수명:새로 선언될 변수명} )
let { name: myName, age: myAge } = obj;
console.log(myName, myAge);


// Json 형태의 데이터 파싱
var news = [
    {
        "title": "sbs",
        "imgurl": "https://sbs.com",
        "newslist": [
            "sbs1",
            "sbs2",
            "sbs3"
        ]
    },
    {
        "title": "mbc",
        "imgurl": "https://mbc.com",
        "newslist": [
            "mbc1",
            "mbc2",
            "mbc3"
        ]
    }
];

// let [, mbc] = news;
// let { title, imgurl } = mbc;
// console.log(title, imgurl)

// // 위 코드를 조금 더 간소화하는 방법
let [, { title, imgurl }] = news;
console.log(title, imgurl)

// _Event객체 전달
function getNewsList([{ newslist }]) {
    console.log(newslist);
}

getNewsList(news);