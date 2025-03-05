function greet2(user: { name: string; age: number }) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greet2({
    name: "Bharat",
    age: 22,
});

let userObj = {
    name: "Deepak",
    age: 19,
};

greet2(userObj);