let timeline = 2023

console.log("a")
// console.log("https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2023-07-${i}&api_key=DEMO_KEY")

// for (let i=0;i<=31;i++){

//     let adress = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2023-07-${i}&api_key=DEMO_KEY'


// const axios = require("axios");
// axios
//   .get(adress)
//   .then((response) => {
//   console.log(response.data.photos.length)
//   })
//   .catch(error => {
//     console.log(error); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
//   });
// }

const tlItems = document.querySelectorAll('.tl-item');

tlItems.forEach((item, index) => {
  console.log("COUCOU")
  item.addEventListener('mouseenter', () => {
    for (let i = 0; i < tlItems.length; i++) {
      if (i == index) {
        tlItems[i].style.width = '1000%';
      } else {
        tlItems[i].style.width = '10%';
      }
    }
  });

  item.addEventListener('mouseleave', () => {
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