// Destructuring

let person = {
    name: "Seojoon",
    age: 37
}

// let name = person.name
// let age = person['age']

let {name,age} = person


console.log(name,age)


//  배열에도 적용할 수 있음
let array = [1,2,3,4];
let [a,b,...rest] = array

console.log(a,b,...rest);
// console.log(rest);  -> 3, 4
// ...rest 나머지 값을 출력할 때 사용
