function User(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
    this.showNameAgeAddress = function () {
        console.log(`이름이 ${name}인 고객의 나이는 ${age}세이고, 사는 지역은 ${address}입니다.`);
    }
}

const user1 = new User("seojoon", 37, "seoul");
const user2 = new User("jiyoon", 31, "Seoul");
const user3 = new User("junhyung", 28, "Busan");

console.log(user1, user2, user3);

user3.showNameAgeAddress();