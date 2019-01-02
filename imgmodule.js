var Jimp = require('jimp');
var fs = require('fs');
var text2png = require('text2png');

exports.generateImage = function (mapAddress, routeName, routeDate) {
    var nameLength = routeName.length;
    var nameSize = 53;
    if (nameLength > 18) {
        nameSize = nameSize * ( 1 - (nameLength - 18)*0.05)
    }

    fs.writeFileSync('./public/routeName.png', text2png(routeName.toUpperCase(), {
        color: '#ffffff',
        font: nameSize + 'px OpenSans',
        localFontPath: 'OpenSans-ExtraBoldItalic.ttf',
        localFontName: 'OpenSans',
        paddingRight: 5
    }));

    fs.writeFileSync('./public/routeDate.png', text2png(routeDate, {
        color: '#ffffff',
        font: '30px Open Sans'
    }));

    var p1 = Jimp.read(mapAddress);
    var p2 = Jimp.read("./public/overlay.png");
    var p3 = Jimp.read("./public/routeName.png");
    var p4 = Jimp.read("./public/routeDate.png");

Promise.all([p1, p2, p3, p4]).then(images => {
    images[0].composite(images[1], 0, 0).composite(images[2], 155, 725-nameSize).composite(images[3], 157, 725).write("./public/kartta.png");
});

}