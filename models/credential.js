const mongoose = require("mongoose")

const credentialSchema = new mongoose.Schema({
    serial: Number,
    pin: String,
});


module.exports = mongoose.model("credential", credentialSchema);