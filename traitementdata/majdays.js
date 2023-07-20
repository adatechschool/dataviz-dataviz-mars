let days = []
const axios = require("axios");
let allPromises = []



for(let i=0;i<10;i++){
 
allPromises[i] = new Promise((resolve) => {

  axios
  .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${i}&api_key=N8YGybjUTaarxp1VS3B72PuwfAojnLybkoJB9WLv`)
  .then((response) => {
    resolve()
    let jasonDay = new Object
    if(response.data.photos.length>0){
      jasonDay.sol = i
      jasonDay.earthDate = response.data.photos[0].earth_date
      jasonDay.taille = response.data.photos.length
      days[i]=jasonDay 
      // console.log(jasonDay)
    }
    else{
      jasonDay.sol = i
      jasonDay.taille = "Pas de données ce jour ci"
      days[i]=jasonDay
    }
  })
  .catch(error => {
    resolve()
    console.log(error,i);
  });

})

}


const fs = require('fs')

Promise.all(allPromises).then(() => { 

// let content;
// fs.readFile('daysSol.json', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;
// });

  data = JSON.stringify(days)
  
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


