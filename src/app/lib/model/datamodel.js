const { default: mongoose } = require("mongoose");

const mymodel = new mongoose.Schema({
    Heading: String,
    Message: String

})

export const DataModel = mongoose.models.appcollections || mongoose.model("appcollections", mymodel)