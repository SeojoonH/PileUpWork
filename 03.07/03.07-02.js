// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "seojoon",
    age: 37,
};

// 내가 작업
const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보이는 이미지
for (let key in user) {
    console.log(`customer's ${key} is ${user[key]}.`);
}