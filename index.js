var fs = require('fs');

fs.stat('./cat.jpeg', function(err, stats) {
    console.log(stats);
});