const bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const express = require('express');
const AlpacaSkelton = require("./models/Alpaca");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded())
app.use(express.json());
app.use(express.static('build'));

// -------------DB Connection----------------- //
mongoose.connect('mongodb+srv://admin:admin@codehouse.qo5qv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
    console.log(err || connection);
});

// -------------Server Routes----------------- //

// allAlpaca
app.get('/data', urlencodedParser, async (req, res) => {
    try {
        let allAlpaca = await AlpacaSkelton.find({});
        await res.send(allAlpaca);
    } catch (error) {
        res.send({ message: error.message });
    }
})


// newAlpaca
app.post('/addentry', urlencodedParser, async (req, res) => {
    try {
        const newSellerMaker = new AlpacaSkelton({
            alpacaName: req.body.alpacaName,
            alpacaWeight: req.body.alpacaWeight,
            alpacaColor: req.body.alpacaColor,
            alpacaCost: req.body.alpacaCost,
            alpacaFarm: req.body.alpacaFarm,
        });
        const data = await new AlpacaSkelton(newSellerMaker)
        await data.save();
        await res.send({ success: true, message: 'Registered Successfully' });
    } catch (error) {
        await res.send({ success: false, message: error });
    }
})


// ------------------Server Start PRODUCTION------------------- //
if (process.env.NODE_ENV == "production") {
    app.use(express.static("build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}
// app.listen(8080 || process.env.PORT)
app.listen(process.env.PORT || 8080, () => { console.log('server is running'); })