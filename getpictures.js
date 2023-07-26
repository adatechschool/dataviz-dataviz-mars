key1 = 'N8YGybjUTaarxp1VS3B72PuwfAojnLybkoJB9WLv'
key2 = 'AcAQgeDMAvaG1BKWrpyVj1IicTRRbZRwjt14Ks1D'
demo = 'DEMO_KEY'


tabYears = []
const year2012 = {
    name: "2012",
    startSol: 0,
    endSol: 144
}
tabYears.push(year2012)
const year2013 = {
    name: "2013",
    startSol: 145,
    endSol: 499
}
tabYears.push(year2013)
const year2014 = {
    name: "2014",
    startSol: 500,
    endSol: 854
}
tabYears.push(year2014)
const year2015 = {
    name: "2015",
    startSol: 855,
    endSol: 1209
}
tabYears.push(year2015)

const year2016 = {
    name: "2016",
    startSol: 1210,
    endSol: 1565
}
tabYears.push(year2016)

const year2017 = {
    name: "2017",
    startSol: 1566,
    endSol: 1921
}
tabYears.push(year2017)

const year2018 = {
    name: "2018",
    startSol: 1922,
    endSol: 2276
}
tabYears.push(year2018)

const year2019 = {
    name: "2019",
    startSol: 2277,
    endSol: 2631
}
tabYears.push(year2019)

const year2020 = {
    name: "2020",
    startSol: 2632,
    endSol: 2987
}
tabYears.push(year2020)

const year2021 = {
    name: "2021",
    startSol: 2988,
    endSol: 3343
}
tabYears.push(year2021)

const year2022 = {
    name: "2022",
    startSol: 3344,
    endSol: 3698
}
tabYears.push(year2022)

const year2023 = {
    name : "2023",
    startSol: 3699,
    endSol: 3897
}
tabYears.push(year2023)


const getRandomSol = (year) => {
    let yearRange = year.endSol - year.startSol;
    let randomSol = (Math.floor(Math.random() * yearRange) + year.startSol)
    return randomSol
}


const isCameraOkay = (response,yearId) => {
  let indexPhoto = Math.floor(Math.random() * response.data.photos.length);
  
  if (response.data.photos[indexPhoto].camera.name == "MARDI" || response.data.photos[indexPhoto].camera.name == "MAST") {
      isCameraOkay(response,yearId)
    } 
    else {
        console.log(response.data.photos[indexPhoto].camera.name)
        console.log(response.data.photos[indexPhoto].img_src)
        console.log(response.data.photos[indexPhoto].earth_date)
        document.getElementById(yearId).style.backgroundImage = `url(${response.data.photos[indexPhoto].img_src})`
  }
}

const getRandomPicture = (year,yearId) => {
    console.log(year)
    let randomSol2 = getRandomSol(year)
    // axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
    axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol2}&api_key=${key1}`,{withCredentials: false})
    .then((response) => {
        console.log("Nombre de photos : " + response.data.photos.length)
        console.log("sol : " + randomSol2)
        isCameraOkay(response,yearId)
    })
    .catch(error => {
        console.log(error)
    });
}

const tlBg = document.body.querySelectorAll(".tl-bg")
console.log(tlBg)


tlBg.forEach ((item) => {

    for (year in tabYears){
        if (item.id == tabYears[year].name){
            getRandomPicture(tabYears[year],item.id)
        }
    }
    
    
})


