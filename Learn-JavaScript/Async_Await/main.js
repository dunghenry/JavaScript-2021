function Hello() {
    return new Promise(resolve => {
        resolve("Hello")
    })
}

Hello().then(resp => console.log(resp))

async function Hello1() {
    // return "Oke"
    throw "error"
}

// console.log(Hello1())

Hello1()
.then(resp => console.log(resp))
.catch(error => console.log(error))

function await() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Success") }, 2000)
    })
    promise.then(resp => console.log(resp)).catch(error => console.log(error))
    console.log("Oke")
}

// await()

async function wait() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Success") }, 1000);
        // setTimeout(() => { reject("Error") }, 1000);
    })

    // let respon = await promise
    // console.log(respon)
    // console.log("OK")

    try {
        let resp = await promise
        console.log(resp)  
        return resp
    } catch (error) {
        console.log(error)
    }
    console.log("OKE")
}

// wait()

async function run() {
    let data = await wait();
    console.log(data)
}
run()
