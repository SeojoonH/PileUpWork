// arr.filter(fn)
// 만족하는 모든 요소를 배열로 반환
// * find/findIndex는 첫 번째 요소만 반환 후 끝

const arr = [1,2,3,4,5,6,7,8,9,10];

const result = arr.filter((item) => {
    return item % 2 === 0;
});

console.log(result);