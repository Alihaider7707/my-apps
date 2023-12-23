import { Dbconne } from "@/app/lib/DBconnection";
import { NewsparaModel } from "@/app/lib/model/newsparamodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async() => {
    await mongoose.connect(Dbconne);

    const data = await NewsparaModel.find();

    return NextResponse.json(data);
};

export const POST = async(request) => {
    await mongoose.connect(Dbconne);

    const payload = await request.json();

    const data = new NewsparaModel(payload);

    const mydata = data.save();

    return NextResponse.json(mydata);
};