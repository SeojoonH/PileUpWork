// spread

let person = {
    name: "seojoon",
    age: 37
}

let person2 = {...person, address:"Seoul", name: "jiyoon"}
// ... 후에 입력하면 값을 그대로 갖고 옴
// 객체를 하나 더 생성하는 것
// 기존 값에 추가/변경도 가능

let person3 = person
// 기존 person의 주소 값만 복사
// 객체는 하나, 그 객체를 참조하는 변수는 두 개

console.log(person2);
console.log(person3);

console.log(person === person3);


let a = [1,2];
let b = [...a,3];
console.log(b);

let c = [...a,...b];
console.log(c);