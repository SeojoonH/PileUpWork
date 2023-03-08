let list = [
    "01장, 들어가며",
    "02장, js의 역사",
    "03장, js 자료형",
    "04장, js 함수",
    "05장, js 배열",
];

let  newList = [];

for (let i = 0; i < list.length; i++) { 
    newList.push(list[i].slice(4));
}

console.log(newList);