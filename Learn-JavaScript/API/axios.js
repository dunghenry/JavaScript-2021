
const postAPI = "https://jsonplaceholder.typicode.com/todos?_limit=5";
axios.get(postAPI)
        .then(res =>{
            console.log(res.data);
        })

fetch(postAPI)
        .then(async(res)=>{
            const data = await res.json();
            console.log(data);
        })
        

//API covid toàn cầu đầy đủ nhất

const API_GLOBAL = "https://corona.lmao.ninja/v2/countries/"
        axios.get(API_GLOBAL)
        .then(res =>{
            console.log(res.data);
        })

const API_VN = "https://corona.lmao.ninja/v2/countries/vn"
        axios.get(API_VN)
        .then(res =>{
            console.log(res.data);
        })

const APP_ID = 'a57c68afe09e9e5fbf2cf9544e375750';
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"New york"}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(res =>{
            console.log(res);
        })

// Api covid19

const options = {
  method: 'GET',
  url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
  headers: {
    'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
    'x-rapidapi-key': '16b8ed8869mshb4a0811c0e1e08ep15e845jsn0a80c714b845'
  }
};
const opt = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
axios.request(options).then(function (response) {
	console.log(response.data[38]);
})