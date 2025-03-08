// Creating a Interface
interface Address {
    city: string,
    state: string,
    country: string,
    zipCode?: string // make zipCode optional using question mark
}

interface User {
    name: string,
    age: number,
    address?: Address
}

interface Office {
    name: string,
    address?: Address
}

// Created a complex object but now we have to define types for this object
let user : User = {
    name: "Sambhav",
    age : 20,
    address : {
        city : "Pune",
        state : "Maharashtra",
        country : "India"
    }
}

// Here we are not getting error because now address field is optional
let user2 : User = {
    name : "Major",
    age : 20
}

function isLegal(user: User) : boolean {
    return user.age > 18;
}

const ans = isLegal(user);

if(ans) console.log(`I am legal`);
else console.log(`I am Illegal`);

// To make a key optional we can use ? question mark symbol so that it will make it optional.

// 1 interface can take another interface as an input