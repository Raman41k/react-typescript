let userName: string | number;
userName = 13;
console.log(userName);


let user: {
    name: string,
    age: number,
    isAdmin: boolean,
    id: number | string
};

user = {
    name: 'Roman',
    age: 22,
    isAdmin: true,
    id: '123'
};

let numbers: Array<number>;

numbers = [1, 2, 3, 4, 5];

function add(a: number, b: number): number {
    return a + b;
}

type addFn = (a: number, b: number) => number;

function calculate(a: number, b: number, callback: addFn): number {
    return callback(a, b);
}

const result = calculate(1, 2, (a,b) => a + b);
console.log(result);

interface User {
    name: string,
    age: number,
    isAdmin: boolean,
    id: number | string
}

let user2: User = {
    name: 'Roman',
    age: 22,
    isAdmin: true,
    id: '123'
}
console.log('user2', user2);

type Admin = {
    permissions: string[]
}

type AppUser = {
    username: string,
}

type AppAdmin = AppUser & Admin;

let admin: AppAdmin = {
    username: 'Roman',
    permissions: ['admin']
}