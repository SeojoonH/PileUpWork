let arr = [1,2,3,4,5,1,2,3];
let arr2 = arr.indexOf(3);
// 3을 찾아야 함
let arr3 = arr.indexOf(3,3);
// 3번째 위치에서 시작해 3을 찾아야 함
// 2 위치에 있는 3은 제외하고 찾아야 함
// 배열의 마지막 3까지 거리가 7이라 7을 반환 
let arr4 = arr.lastIndexOf(3);
// indexOf와 반대로 마지막 문자열부터 찾는 문자열을 반환한다.
// 따라서, 배열의 숫자 중 가장 마지막에 있는 3이 선택된다.
// 그래서 배열읠 마지막 3까지 거리가 7이므로, 7을 반환한다.

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);