let promise = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve("Oke"), 2000)
    setTimeout(() => reject("Error"), 2000)
})
//Cách 1
promise.then(
    (resp) => {
        console.log(resp)
    },
    (err) => {
        console.log(err)
    }
)

//Cách 2
promise.then(
    (resp) => {
        console.log(resp)
        return resp
    }
).catch(
    (err) => {
        console.log(err)
        throw err
    }
).then(
    (data) => {
        console.log("Data " + data)
        
    }
).catch(
    (e) => {
        console.log("Error " + e)
})