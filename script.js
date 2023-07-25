let timeline = 2023
console.log("https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2023-07-${i}&api_key=DEMO_KEY")

for (let i=0;i<=31;i++){

    let adress = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2023-07-${i}&api_key=DEMO_KEY'


const axios = require("axios");
axios
  .get(adress)
  .then((response) => {
  console.log(response.data.photos.length)
  })
  .catch(error => {
    console.log(error); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
  });
}

const tlItems = document.querySelectorAll('tl-item');

tlItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    for (let i = 0; i < tlItems.length; i++) {
      if (i <= index) {
        tlItems[i].style.width = '30%';
      } else {
        tlItems[i].style.width = '15%';
      }
    }
  });

  item.addEventListener('mouseleave', () => {
    tlItems.forEach((item) => {
      item.style.width = '25%';
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