const { default: mongoose } = require("mongoose");

const mymodel = new mongoose.Schema({
    Heading: String,
    Message: String,
    Head: String,
    Decription: String

})

export const DataModel = mongoose.models.appcollections || mongoose.model("appcollections", mymodel)