// arr.map(fn)
// 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

let userList = [
    { name: 'seojoon', age: 37 },
    { name: 'jiyoon', age: 31 },
    { name: 'junhyung', age: 28 },
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        isAdult: user.age > 10,
    });
});

console.log(newUserList);