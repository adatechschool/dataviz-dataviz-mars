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

const year2015 = {
    startSol: 855,
    endSol: 1209
}

const year2016 = {
    startSol: 1210,
    endSol: 1565
}

const year2017 = {
    startSol: 1566,
    endSol: 1921
}

const year2018 = {
    startSol: 1922,
    endSol: 2276
}

const year2019 = {
    startSol: 2277,
    endSol: 2631
}

const year2020 = {
    startSol: 2632,
    endSol: 2987
}

const year2021 = {
    startSol: 2988,
    endSol: 3343
}

const year2022 = {
    startSol: 3344,
    endSol: 3698
}

const year2023 = {
    startSol: 3699,
    endSol: 3897
}

const getRandomSol = (year) => {
    let yearRange = year.endSol - year.startSol;
    let randomSol = (Math.floor(Math.random() * yearRange) + year.startSol)
    return randomSol
}

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

