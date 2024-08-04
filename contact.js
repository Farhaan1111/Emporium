const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    ptype:{
        type: String
    },
    textname:{
        type: String
    },
})

const User = mongoose.model("User", userData)

module.exports = User