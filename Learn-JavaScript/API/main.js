const postAPI = "https://jsonplaceholder.typicode.com/todos?_limit=5"
// ?_limit=5 lấy ra 5 phần tử đầu
fetch(postAPI)
    //Cách 1
    .then(async function (res) {
      const data = await res.json()
      console.log(data)
    })
    //Cách 2
    .then(async (res) => {
        const data = await res.json();
        console.log(data)
    })
    // Cách 3
    .then((res) => {
        return data = res.json()
    })
    .then((data) => {
        console.log(data)
    })
    //Show error
    .catch((error) => {
      console.log(error)
  })
