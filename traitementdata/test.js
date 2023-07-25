const fs = require ('fs')

// fetch("traitementdata/data_curiosity/daysSol2015.json")
// .then(response => {
//     response.json()
// })



fs.readFile('traitementdata/data_curiosity/daysSol2015.json', function read(err, data) {
    if (err) {
        throw err
    }
    content = JSON.parse(data)
    console.log(content.months[0])
});
