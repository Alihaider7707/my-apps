const { default: mongoose } = require("mongoose");




const mymodel = new mongoose.Schema({

    Newspheading: String,
    Newspdecription: String

}, { timestamps: true });


export const NewspModel = mongoose.models.newspcollections || mongoose.model("newspcollections", mymodel)