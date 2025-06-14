// let arr=[1,2,3,4,5]

// Output :[1,3,6,10,15]

// Make this output time complexity O(1) OR O(n)👆


// Flat the array without using flat method 👇
// const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];


// Flat the object👇

// const obj = {
//   newObj: {
//     obj2: {
//       obj5: {
//         one: 1,
//       },
//     },
//   },
//   obj3: {
//     obj4: {
//       two: 2,
//     },
//   },
// };

// console.log(Object.entries(obj));


//  output should be👇like this
// {
//     'newObj.obj2.obj5.one': 1,
//     'obj3.obj4.two': 2,
// }



// Predict the output👇

// let b;
// console.log(b);
// function B() {
//     let b;
//     console.log(b);
//     function E() {
//         b = 6;
//         console.log(b);
//     }
//     b = 2;
//     E();
//     console.log(b);
// }

// b = 3;

// B();



// In this change name of thanos to our name using call or bind👇

// const thanos = {
//   name: 'THANOS',
//   snap: function () {
//     return `${this.name} snapped the finger and half of the universe ${
//       this.name === 'THANOS' ? 'disappeared' : 'came back'
//     }`;
//   },
// };



// Currying👇
// func1(1)(1)(1)(0)

// Mongo db👇
// [
//   { "_id": 101, "userId": 1, "amount": 250, "status": "delivered", "items": ["pen", "notebook"] },
//   { "_id": 102, "userId": 1, "amount": 120, "status": "pending", "items": ["stapler"] },
//   { "_id": 103, "userId": 2, "amount": 550, "status": "cancelled", "items": ["mouse", "keyboard"] },
//   { "_id": 104, "userId": 3, "amount": 90, "status": "delivered", "items": ["eraser"] }
// ]



// [
//   { "_id": 1, "totalOrders": 2 },
//   { "_id": 2, "totalOrders": 1 },
//   { "_id": 3, "totalOrders": 1 }
// ]



// Using map and filter show email of persons whose age is less than 30 and isActive : true👇

// [
//   { "_id": 1, "name": "Alice", "age": 28, "email": "alice@example.com", "isActive": false },
//   { "_id": 2, "name": "Bob", "age": 34, "email": "bob@example.com", "isActive": true },
//   { "_id": 3, "name": "Charlie", "age": 22, "email": "charlie@example.com", "isActive": true },
//   { "_id": 4, "name": "Daisy", "age": 45, "email": "daisy@example.com", "isActive": false },
//   { "_id": 5, "name": "Ram", "age": 24, "email": "ram@example.com", "isActive": true },

// ]

// Predict the output👇

// Promise.resolve(1)
//     .finally((data) => {
//         console.log(data);
//         return Promise.reject('error');
//     })
//     .catch((error) => {
//         console.log(error);
//         throw 'error2';
//     })
//     .finally((data) => {
//         console.log(data);
//         return Promise.resolve(2).then(console.log);
//     })
//     .then(console.log)
//     .catch(console.log);



// // Predict output👇

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.reject(4);

// const promiseAll = async () => {
//     const group1 = await Promise.all([promise1, promise2]);
//     const group2 = await Promise.all([promise3, promise4]);
//     return [group1, group2];
// };

// promiseAll().then(console.log).catch(console.log);