const { default: mongoose } = require("mongoose");




const mymodel = new mongoose.Schema({

    Newsheading1: String,
    Newsdecription1: String

}, { timestamps: { createdAt: true, updatedAt: false }  });


export const NewsparaModel1 = mongoose.models.newscollection1s || mongoose.model("newscollection1s", mymodel)