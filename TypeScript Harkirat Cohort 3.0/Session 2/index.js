// Created a complex object but now we have to define types for this object
var user = {
    name: "Sambhav",
    age: 20,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
};
function isLegal(user) {
    return user.age > 18;
}
var ans = isLegal(user);
if (ans)
    console.log("I am legal");
else
    console.log("I am Illegal");
