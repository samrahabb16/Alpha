const mongoose = require("mongoose");

const alpacaSchema = mongoose.Schema({
    alpacaName: {
        type: String,
        required: true,
    },
    alpacaWeight: {
        type: Number,
        required: true,
    },
    alpacaColor: {
        type: String,
        required: true,
    },
    alpacaCost: {
        type: Number,
        required: true,
    },
    alpacaFarm: {
        type: String,
        required: true,
    },
});


const AlpacaSkelton = mongoose.model("Alpaca", alpacaSchema);
module.exports = AlpacaSkelton;
