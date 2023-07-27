urlArray = []

let bg = undefined
let yearOfBg = undefined
const daySols = document.querySelectorAll('.f3')

daySols.forEach(item => {

fetch(`traitementdata/data_curiosity/${item.id}.json`)

  .then(response => response.json())


  .then(data => {
    content = data
    item.innerHTML = "Nombre de photos: " + content.totalPhotos
  })

  .catch(err => {
    throw err
  })

});


const tlItems = document.querySelectorAll('.tl-item');

  tlItems.forEach((item, index) => {
    const tlbgg = document.querySelectorAll('.tl-bg')

    item.addEventListener('click', () => {
      timeline.innerHTML = `<div class='tl-item'>
      <div id='janvier' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>janvier</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='fevrier' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>fevrier</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>
  
  <div class='tl-item'>
      <div id='mars' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>mars</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='avril' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>avril</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='mai' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>mai</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='juin' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>juin</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>
  <div class='tl-item'>
      <div id='juillet' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>juillet</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='aout' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>aout</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='septembre' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>septembre</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='octobre' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>octobre</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='novembre' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>novembre</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>

  <div class='tl-item'>
      <div id='decembre' class='tl-bg'></div>
      <div class='tl-year'>
          <button class='invisible-button'><p class='f2 heading--sanSerif'>decembre</p></button>
      </div>
      <div class='tl-content'>
          <h1 class='f3 text--accent ttu'>exemple</h1>
          <p>exemple</p>
      </div>
  </div>`
    })
  
    
    item.addEventListener('mouseenter', () => {
      bg = index
      yearOfBg = tlbgg[bg].id
      if (urlArray[tlbgg[index].id].url != undefined){
        float.innerHTML = `<div class='box'><img class='img-float' src = ${urlArray[tlbgg[index].id].url}></div>`
        informations.innerHTML = `<div class = 'info'>Earth day : ${urlArray[tlbgg[index].id].earthDay} <br> Sol : ${urlArray[tlbgg[index].id].sol} <br> Camera name : ${urlArray[tlbgg[index].id].camera} <br> Id photo : ${urlArray[tlbgg[index].id].id}</div>`
      }
      
    // document.addEventListener("keypress",(event) => {
    //   if (event.key === "Enter"){
    //     changeRandomelyPicture(bg)
    //   }
    // })
    
    
    
    for (let i = 0; i < tlItems.length; i++) {
      if (i == index) {
        tlItems[i].style.width = '2000%';
      } else {
        tlItems[i].style.width = '6.9%';
      }
    }
  });

  item.addEventListener('mouseleave', () => {

    bg = undefined
    float.innerHTML = ""
    informations.innerHTML = ""
    tlItems.forEach((item) => {
      item.style.width = '16.6%';
    });
  });
});


function afficherTimeline(timelineId) {
  if (timelineId === 'timeline') {
      document.getElementById('timeline1').style.display = 'block';
      document.getElementById('timeline2').style.display = 'none';
  } else if (timelineId === 'timeline2') {
      document.getElementById('timeline1').style.display = 'none';
      document.getElementById('timeline2').style.display = 'block';
  }
}





//// getpictures

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

let excludedCameras = ["MARDI","MAHLI","MAST"]

const isCameraOkay = (response,yearId,year) => {
  let indexPhoto = Math.floor(Math.random() * response.data.photos.length);
  if (excludedCameras.includes(response.data.photos[indexPhoto].camera.name)) {
    console.log(response.data.photos[indexPhoto].camera.name)
      getRandomPicture(year,yearId)
    } 
    else {
      urlArray[yearId] = new Object()
      urlArray[yearId].id = response.data.photos[indexPhoto].id
      urlArray[yearId].sol = response.data.photos[indexPhoto].sol
      urlArray[yearId].earthDay = response.data.photos[indexPhoto].earth_date
      urlArray[yearId].camera = response.data.photos[indexPhoto].camera.name
        preloadImage(response.data.photos[indexPhoto].img_src)
        .then((url)=> {
          urlArray[yearId].url=url
            document.getElementById(yearId).style.backgroundImage = `url(${url})`
          if (float.innerHTML != "" && year.name==yearOfBg){
            float.innerHTML = `<div class='box'><img class='img-float' src = ${url}></div>`
            informations.innerHTML = `<div class = 'info'>Earth date : ${urlArray[yearId].earthDay} <br> 
            Sol : ${urlArray[yearId].sol} <br> Camera name : ${urlArray[yearId].camera} <br> 
            Id photo : ${urlArray[yearId].id}</div>`
          }

        })
  }
}

const getRandomPicture = (year,yearId) => {
    let randomSol2 = getRandomSol(year)
    // axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });
    axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSol2}&api_key=${key2}`,{withCredentials: false})
    .then((response) => {
        if (response.data.photos.length == 0){
            getRandomPicture(year,yearId)

        }

        isCameraOkay(response,yearId,year)
    })
    .catch(error => {
        console.log(error)
    });
}

const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = reject;
      img.src = url;
    });
  };

//   

const tlBg = document.body.querySelectorAll(".tl-bg")


tlBg.forEach ((item) => {

    for (year in tabYears){
        if (item.id == tabYears[year].name){
            getRandomPicture(tabYears[year],item.id)
        }
    }
        
        
})




const changeRandomelyPicture = () => {
  if (bg == undefined) {
    return
  }
  let itemToChange = bg
  for (year in tabYears){
      if (tlBg[itemToChange].id == tabYears[year].name){
          getRandomPicture(tabYears[year],tlBg[itemToChange].id)
      }
  }
}

setInterval(changeRandomelyPicture, 2000)

const changeRandomelyPicture2 = (bg) => {
    let itemToChange = bg
    for (year in tabYears){
        if (itemToChange.id == tabYears[year].name){

            getRandomPicture(tabYears[year],itemToChange.id)
        }
    }
}







