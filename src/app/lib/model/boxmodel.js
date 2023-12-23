const { default: mongoose } = require("mongoose");

const mymodel = new mongoose.Schema({
    Head: String,
    Decription: String

})

export const boxModel = mongoose.models.boxcollections || mongoose.model("boxcollections", mymodel)