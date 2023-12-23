const { default: mongoose } = require("mongoose");




const mymodel = new mongoose.Schema({

    Newsheading: String,
    Newsdecription: String

}, { timestamps: true });


export const NewsparaModel = mongoose.models.newscollections || mongoose.model("newscollections", mymodel)