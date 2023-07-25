key1 = 'N8YGybjUTaarxp1VS3B72PuwfAojnLybkoJB9WLv'
key2 = 'AcAQgeDMAvaG1BKWrpyVj1IicTRRbZRwjt14Ks1D'
demo = 'DEMO_KEY'


const year2012 = {
    startSol: 0,
    endSol: 144
}

const year2013 = {
    startSol: 145,
    endSol: 499
}

const year2014 = {
    startSol: 500,
    endSol: 854
}

const getRandomSol = (year) => {
    let yearRange = year.endSol - year.startSol;
    let randomSol = (Math.floor(Math.random() * yearRange) + year.startSol)
    return randomSol
}

getRandomSol(year2014)

const axios = require("axios");

const isCameraOkay = (response) => {
  let indexPhoto = Math.floor(Math.random() * response.data.photos.length);
  
  if (response.data.photos[indexPhoto].camera.name == "MARDI") {
    isCameraOkay(response)
  } 
  else {
    console.log(response.data.photos[indexPhoto].camera.name)
    console.log(response.data.photos[indexPhoto].img_src)
  }

}

const getRandomPicture = (year) => {
    let randomSol2 = getRandomSol(year)
   
    axios

    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol2}&api_key=${key1}`)
    .then((response) => {
        console.log("Nombre de photos : " + response.data.photos.length)
        console.log("sol : " + randomSol2)
        isCameraOkay(response)

    })
    .catch(error => {
        console.log('error')
    });

}

getRandomPicture(year2014)

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