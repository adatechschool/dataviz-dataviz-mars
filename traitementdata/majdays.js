key1 = 'N8YGybjUTaarxp1VS3B72PuwfAojnLybkoJB9WLv'
key2 = ''

let months = []
let days = []
let allPromises = []
const axios = require("axios");


const maxDaysinMonths = (date) => {
 let daysMax = [31,28,31,30,31,30,31,31,30,31,30,31]
 let bissextiles = [2004,2008,2012,2016,2020,2024]
 if (date.getMonth() == 1 && bissextiles.includes(date.getFullYear())){
  return joursMax = 29
 }
  return joursMax = daysMax[date.getMonth()]
}


const requestMonths = (start_sol) => {
let joursMax = 0

promiseMonths = new Promise((resolve) => {
  axios
  .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${start_sol}&api_key=DEMO_KEY`)
  .then((response) => {
    resolve()
    let date = new Date(response.data.photos[0].earth_date)
    console.log(maxDaysinMonths(date))
    let jasonMonth = new Object 
    jasonMonth.earthYear = date.getFullYear()
    jasonMonth.month = date.getMonth()
    jasonMonth.startSol = start_sol
    jasonMonth.startDay = date.getDate()
    console.log("oo")
  
  })
  .catch(error => {
    console.log(start_sol)
  });

  promiseMonths.then(console.log("coucou"))
  // requestSolDays(start_sol,date,jasonMonth.month)

})
}

// requestMonths(972)
let month = 0
let lastAdded = new Date("2012-08-06")
let day = lastAdded.getDate()

date = new Date ("2012-08-06")
console.log(date)
date.setDate(date.getDate()+1)
console.log(date)

const requestSolDays = (iStart,iterations) => {

for(let i = 0 ; i < iterations ; i++){

 
  allPromises[i] = new Promise((resolve) => {

    axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${i}&api_key=${key1}`)
    .then((response) => {
      resolve()
      let jasonDay = new Object
      if(response.data.photos.length>0){
        date = new Date(response.data.photos[0].earth_date)
        month = date.getMonth()
        day = date.getDate()
        lastAdded = date
        jasonDay.sol = i
        jasonDay.earthDate = response.data.photos[0].earth_date
        jasonDay.taille = response.data.photos.length
        months[month][day]=jasonDay
        console.log(jasonDay)
      }
      else{
        jasonDay.lastAdded = lastAdded
        jasonDay.lastAddedtoToday = lastAddedtoToday
        lastAddedtoToday = lastAdded.setDate(lastAdded.getDate()+1)
        month = lastAddedtoToday.getMonth()
        day = lastAddedtoToday.getDate()
        lastAdded = lastAddedtoToday
        jasonDay.sol = i
        jasonDay.earthDate = lastAddedtoToday
        jasonDay.taille = "Pas de données ce jour ci"
        months[month][day]=jasonDay
        console.log(jasonDay)
      }
    })
    .catch(error => {
      resolve()
      console.log("error",i);
    });

  })
}

}

requestSolDays(0,10)

const fs = require('fs')


Promise.all(allPromises).then(() => { 
console.log(months)
// let content;
// fs.readFile('daysSol.json', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;
// });

  data = JSON.stringify(months)
  console.log(data)
  
  fs.writeFile('traitementdata/daysSol.json', data, (err) => {
      if (err) throw err;
  })

})

// Sur itération de 100 : Qq erreurs parce que requête vide. Géré avec un message d'erreur dans le tableau
// Sur itération de 400 : Sur AxiosError: Request failed with status code 503. Pas sur les mêmes éléments
//    Possible limite de l'API. Retry ou moins de requête.
// Sur itération de 3891 (max_sol) : Trop de requêtes, annule tout.

// Idées :
// Faires les requêtes sur un mois à chaque fois pour éviter les 3891 itérations.
// Permettra d'ajouter une dimension de mois (/année ?)
// Quand pas de données, quand même préciser sol et earth date


