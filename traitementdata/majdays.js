key1 = 'N8YGybjUTaarxp1VS3B72PuwfAojnLybkoJB9WLv'
key2 = 'AcAQgeDMAvaG1BKWrpyVj1IicTRRbZRwjt14Ks1D'
demo = 'DEMO_KEY'

let year = [[],[],[],[],[],[],[],[],[],[],[],[]]
let allPromises = []
const axios = require("axios");
const fs = require('fs')


const requestSolDays = (iterations) => {

for(let i = 0 ; i < iterations ; i++){

 
  allPromises[i] = new Promise((resolve) => {

    axios

    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${i}&api_key=${key1}`)
    .then((response) => {
      resolve()
      if(response.data.photos.length>0){

        date = new Date(response.data.photos[0].earth_date)

        let jasonDay = {
          sol : i,
          earthDate : response.data.photos[0].earth_date,
          taille : response.data.photos.length
        }

        year[date.getMonth()][date.getDate()]=jasonDay
        console.log(jasonDay)
      }
    
      else{

        let datetoSol = new Date ("2012-08-06")
        let solToDate = datetoSol.setDate(datetoSol.getDate()+i)
        date = new Date (solToDate)

        let jasonDay = {
          sol : i,
          earthDate : date,
          taille : 0
        }

        year[date.getMonth()][date.getDate()]=jasonDay
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

requestSolDays(40)




Promise.all(allPromises).then(() => { 
// let content;
// fs.readFile('daysSol.json', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;
// });

  data = JSON.stringify(year)
  console.log(data)
  
  fs.writeFile('traitementdata/daysSol.json', data, (err) => {
      if (err) throw err;
  })

})

// Sur itération de 100 : Qq erreurs parce que requête vide. Géré avec un message d'erreur dans le tableau
// Sur itération de 400 : Sur AxiosError: Request failed with status code 503. Pas sur les mêmes éléments
//    Possible limite de l'API. Retry ou moins de requête.
// Sur itération de 3891 (max_sol) : Trop de requêtes, annule tout.




