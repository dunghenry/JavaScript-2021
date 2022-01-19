let promise = new Promise((resolve, reject) => {
    reject("Error")
    resolve("Oke")
})
promise.then(
    (resp) => {
        console.log(resp);
    },
    (err) => {
        console.log(err);
    }
);
promise
  .then((resp) => {
    console.log(resp);
    return resp;
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .then((data) => {
    console.log("Data " + data);
  })
  .catch((e) => {
    console.log("Error " + e);
  });