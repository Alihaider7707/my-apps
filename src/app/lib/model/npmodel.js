const { default: mongoose } = require("mongoose");




const mymodel = new mongoose.Schema({

    NpHead: String,
    NpDecription: String

}, { timestamps: true });


export const NpModel = mongoose.models.npcollections || mongoose.model("npcollections", mymodel)