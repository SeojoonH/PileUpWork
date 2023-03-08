// Array.isArray()
// 인자가 Array인지 판별

let user = {
    name: "Seojoon",
    age: 37,
};

let userList = ["Seojoon", "Jiyoon", "Junhyung"];

console.log(typeof user);
// object 반환
console.log(typeof userList);
// object 반환

console.log(Array.isArray(user));
// user는 배열이 아니므로 false를 반환
console.log(Array.isArray(userList));
// userList는 배열이므로 true를 반환