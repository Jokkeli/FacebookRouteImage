var Jimp = require('jimp');
var fs = require('fs');
var text2png = require('text2png');

exports.generateImage = function (mapAddress, routeName, routeDate) {
    fs.writeFileSync('./public/routeName.png', text2png(routeName, {
        color: '#03abc7',
        font: '32px OpenSans',
        localFontPath: 'OpenSans-ExtraBoldItalic.ttf',
        localFontName: 'OpenSans',
        padding: 20
    }));

    fs.writeFileSync('./public/routeDate.png', text2png(routeDate, {
        color: '#383838',
        font: '16px Open Sans',
        padding: 20
    }));

    var p1 = Jimp.read(mapAddress);
    var p2 = Jimp.read("./public/overlay.png");
    var p3 = Jimp.read("./public/routeName.png");
    var p4 = Jimp.read("./public/routeDate.png");

Promise.all([p1, p2, p3, p4]).then(images => {
    images[0].composite(images[1], 0, 0).composite(images[2], 85, 0).composite(images[3], 90, 37).write("./public/kartta.png");
});

}