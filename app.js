

const imgmod = require('./imgmodule.js');

const express = require('express')
const app = express()
const port = 3000

var mapAddress = "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/static/25.01939,60.22021,13.1,0,0/800x800?access_token=pk.eyJ1IjoibWlra29hdGEiLCJhIjoiY2l5Y3V5czBjMDA4ZzJ3cXBibXZhaDkzciJ9.F-rRrrNLnB0MfKtcosgmxA";
var routeName = "Marathon des Sables";
var routeDate = "01/01/2019 15:30";
imgmod.generateImage(mapAddress, routeName, routeDate);

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Kuva Generoitu'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
