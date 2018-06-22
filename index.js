var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Zawartość katalogu'.blue);
    console.log(files);
    fs.writeFile('./content.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano zawartość folderu!'.blue);
        fs.readFile('./message.txt', 'utf-8', function(err, data) {
            console.log('Zawartość pliku content.txt'.blue);
            console.log(files);
        });
    });
});