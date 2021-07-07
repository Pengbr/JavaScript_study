const fs = require('fs');
exports.getFileMine = function (extname) {
    fs.readFile('./index.json', (err, data) => {
        if (err) console.log(err);
        console.log(JSON.parse(data.toString(extname)));
    })
}

