

const imgmod = require('./imgmodule.js');

const express = require('express')
const app = express()
const port = 3000

var mapAddress = "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/static/25.02372,60.22122,13.2,0,0/500x500?access_token=pk.eyJ1IjoibWlra29hdGEiLCJhIjoiY2l5Y3V5czBjMDA4ZzJ3cXBibXZhaDkzciJ9.F-rRrrNLnB0MfKtcosgmxA";
var routeName = "Viikin 10k";
var routeDate = "01/01/2019 15:30";
imgmod.generateImage(mapAddress, routeName, routeDate);

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Kuva Generoitu'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
