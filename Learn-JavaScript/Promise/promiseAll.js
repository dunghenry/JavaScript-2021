let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Oke1"), 1000);
  setTimeout(() => reject("Error1"), 1000);
});
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Oke2"), 2000);
  setTimeout(() => reject("Error2"), 2000);
});
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Oke3"), 3000);
  setTimeout(() => reject("Error3"), 3000);
});

Promise.all([promise1, promise2, promise3]).then(
    (res) => {
        console.log(res)
    }
).catch(
    (err) => {
        console.log(err)
    }
)