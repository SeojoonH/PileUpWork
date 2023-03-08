// arr.find() / arr.findIndex()
// 첫 번째 true 값만 반환하고 끝
// 만약에 없으면 undefined를 반환

let arr = [1,3,4,5,6];

const result = arr.find ((item) => {
    return item % 2 === 0;
});

console.log(result);