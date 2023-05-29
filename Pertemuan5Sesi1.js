// console.log("Hello World!")

// function tambah(param1, param2) {
//     return param1 + param2;
// }

// function kurang(param1, param2) {
//     return param1 - param2;
// }

// function kombinasi(param1, param2, param3) {
//     return param1 + param2 - param3;
// }

// function hitung(param1, param2, action) {
//     let result = 0;

//     if (action == 'tambah') {
//         result = param1 + param2;
//     }

//     if (action == 'kurang') {
//         result = param1 - param2;
//     }
//     return result;
// }

// console.log(hitung(1, 2, 'tambah'));
// console.log(hitung(1, 2, 'kurang'));


// function hitung2(param1, param2, param3, action) {
//     let result = 0;
//     result = action(param1, param2, param3);
//     return result;
// }

// console.log(hitung2(1, 2, 4, tambah));
// console.log(hitung2(1, 2, 4, kurang));
// console.log(hitung2(1, 2, 4, kombinasi));


// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hitung = 5 + 9;
//         reject(hitung);
//     }, 1000);
// })

// prom.then(
//     // resolve
//     (res) => {
//     return res;
//     }, 
//     // rejected
//     (err) => {
//         console.log(err);
//     }
// )

// async function hitung() {
//     const prom = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const hitung = 5 + 9;
//             resolve(hitung);
//         }, 1000);
//     });
//     console.log(prom)
// }

// hitung()



const users = [{
    id: 1,
    username: "John",
    address: "Jl. A"
  },
  {
    id: 2,
    username: "Jane",
    address: "Jl. B"
  },
];
const transaction = [{
    user_id: 1,
    transaction: [{
        id: 1,
        status: "OTW"
      },
      {
        id: 2,
        status: "done"
      },
    ],
  },
  {
    user_id: 2,
    transaction: [{
        id: 1,
        status: "done"
      },
      {
        id: 2,
        status: "canceled"
      },
    ],
  },
];

const detailTransaction = [{
    id: 1,
    productName: "Indomie",
    qty: 3,
    totalAmount: 3000
  },
  {
    id: 2,
    productName: "MieSedap",
    qty: 3,
    totalAmount: 2000
  },
];

function auth(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.filter((item) => item.username === username));
    }, 500);
  });
}

function getTransaction(user_id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        transaction.filter((item) => item.user_id === user_id)[0].transaction
      );
    }, 500);
  });
}

function getDetailsData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(detailTransaction.filter((item) => item.id === id)[0]);
    }, 500);
  });
}

async function getData(username) {
  const user = await auth(username);
  const transaction = await getTransaction(users[0].id);
  const detailTransaction = await getDetailsData(transaction[0].id);
  console.log(detailTransaction);
}

getData("Jane");