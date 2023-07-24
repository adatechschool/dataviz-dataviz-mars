const fs = require ('fs')

fetch("daysSol.json")
.then(response => {
    response.json()
})



// fs.readFile('traitementdata/daysSol.json', function read(err, data) {
//     if (err) {
//         throw err
//     }
//     content = data
//     console.log(data)
// });
