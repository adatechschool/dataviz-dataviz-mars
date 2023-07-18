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
