key1 = 'N8YGybjUTaarxp1VS3B72PuwfAojnLybkoJB9WLv'
key2 = 'AcAQgeDMAvaG1BKWrpyVj1IicTRRbZRwjt14Ks1D'
demo = 'DEMO_KEY'

// A jour : 2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022

let setYear = {
  year : 2022
}

const changeYear = () => {
  switch (setYear.year) {
    case "test" :
      setYear.startSol = 1
      setYear.endSol = 5
      break
    case 2012 :
      setYear.startSol = 0
      setYear.endSol = 144
      break
    case 2013 :
      setYear.startSol = 145
      setYear.endSol = 499
      break
    case 2014 : 
      setYear.startSol = 500
      setYear.endSol = 854
      break
    case 2015 : 
      setYear.startSol = 855
      setYear.endSol = 1209
      break
    case 2016 : 
      setYear.startSol = 1210
      setYear.endSol = 1565
      break
    case 2017 : 
      setYear.startSol = 1566
      setYear.endSol = 1921
      break
    case 2018 : 
      setYear.startSol = 1922
      setYear.endSol = 2276
      break
    case 2019 :
      setYear.startSol = 2277
      setYear.endSol = 2631
      break
    case 2020 : 
      setYear.startSol = 2632
      setYear.endSol = 2987
      break
    case 2021 : 
      setYear.startSol = 2988
      setYear.endSol = 3343
      break
    case 2022 :
      setYear.startSol = 3344
      setYear.endSol = 3698
      break
    case 2023 :
      setYear.startSol = 3699
      setYear.endSol = 3897

  }
}

changeYear()

class Month {
  constructor(startSol,endSol,totalPhotos,days) {
    // this.startSol = setYear.startSol
    // this.endSol = setYear.endSol
    this.totalPhotos = 0
    this.days = []
  }
}

class Year {
  constructor(months,year,totalPhotos) {
    this.year = setYear.year
    this.startSol = setYear.startSol
    this.endSol = setYear.endSol
    this.totalPhotos = 0
    this.months = months
  }
}

let monthArray = [new Month(),new Month(),new Month(),new Month(),new Month(),new Month(),new Month(),new Month(),new Month(),new Month(),new Month(),new Month()]
let year = new Year(monthArray)
let allPromises = []
const axios = require("axios");
const fs = require('fs')
const axiosRetry = require('axios-retry')


const requestSolDays = () => {

for(let i = setYear.startSol ; i < setYear.endSol ; i++){

  axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
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

        year.months[date.getMonth()].days[date.getDate()]=jasonDay
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

        year.months[date.getMonth()].days[date.getDate()]=jasonDay
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

const countPhotosInMonth = () => {
  for (let i=0;i<12;i++){
    let count = 0
    for (day in year.months[i].days){
      count += year.months[i].days[day].taille
    }
    year.months[i].totalPhotos = count
  }
}

const countPhotosInYear = () => {
  let count = 0
  for (month in year.months) {
      count += year.months[month].totalPhotos
  }
  year.totalPhotos = count
}

requestSolDays()



const writeData = () => {

  Promise.all(allPromises).then(() => { 

    countPhotosInMonth()
    countPhotosInYear()

    data = JSON.stringify(year)
    
    fs.writeFile(`traitementdata/data_curiosity/daysSol${setYear.year}.json`, data, (err) => {
        if (err) throw err;
    })

  })

}

writeData()


// Commencer par une lecture pour ne modifier que ce qui est nécessaire et compléter au fur et à mesure
// Gérer comme un objet pour ajouter des données comme le total de photos sur la journée


// Sur itération de 100 : Qq erreurs parce que requête vide. Géré avec un message d'erreur dans le tableau
// Sur itération de 400 : Sur AxiosError: Request failed with status code 503. Pas sur les mêmes éléments
//    Possible limite de l'API. Retry ou moins de requête.
// Sur itération de 3891 (max_sol) : Trop de requêtes, annule tout.




