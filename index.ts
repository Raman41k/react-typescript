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

// type Admin = {
//     permissions: string[]
// }
//
// type AppUser = {
//     username: string,
// }
//
// type AppAdmin = AppUser & Admin;

// let admin: AppAdmin = {
//     username: 'Roman',
//     permissions: ['admin']
// }

interface Admin {
    permissions: string[]
}

interface AppUser {
    username: string,
}

interface AppAdmin extends AppUser, Admin {
    surname: string
}

let admin: AppAdmin = {
    username: 'Roman',
    permissions: ['admin'],
    surname: 'Smith'
}

type Role = 'admin' | 'user' | 'editor';

let role: Role; // 'admin', 'user' or 'editor'

// role = 'admin';
// role = 'user';
// role = 'editor';
// role = 'test'; <- will be error because variable role can be only 'admin', 'user' or 'editor'

function performAction(action: string, role: Role) {
    if (role === "admin") {
         console.log('admin');
    }
    if (role === "user") {
        console.log('user');
    }
    if (role === "editor") {
        console.log('editor');
    }
    console.log(action);
}

let roles: Array<Role>;

roles = ['admin', 'user', 'editor'];

console.log(roles);

type DataStorage<T> = {
    storage: Array<T>;
    add: (item: T) => void;
}

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
};

const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {
        this.storage.push(user);
    }
}

userStorage.add({
    name: 'Roman',
    age: 22,
    isAdmin: true,
    id: '123'
});

console.log(userStorage);

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    }
}

const user3 = merge<{ name: string }, { age: number }>({name: 'Roman'}, {age: 22});