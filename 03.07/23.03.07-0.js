const user = {
    name: "seojoon",
    age: 37,
};


const user2 = Object.assign({}, user);
user2.name = "Jiyoon";

console.log(user);
console.log(user2);
