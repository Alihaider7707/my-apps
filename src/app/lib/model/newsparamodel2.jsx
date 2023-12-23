const { default: mongoose } = require("mongoose");




const mymodel = new mongoose.Schema({

    Newsheading2: String,
    Newsdecription2: String

}, { timestamps: true });


export const NewsparaModel2 = mongoose.models.newscollection2s || mongoose.model("newscollection2s", mymodel)