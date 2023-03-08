let userList = [
    { name: 'seojoon', age: 37 },
    { name: 'jiyoon', age: 31 },
    { name: 'junhyung', age: 28 },
];

const result = userList.findIndex((user) => {
    if (user.age > 19) {
        return true;
    }
    return false;
});

console.log(result);