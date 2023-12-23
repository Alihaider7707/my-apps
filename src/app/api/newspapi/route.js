import { Dbconne } from "@/app/lib/DBconnection";
import { NpModel } from "@/app/lib/model/npmodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async() => {
    await mongoose.connect(Dbconne);

    const data = await NpModel.find();

    return NextResponse.json(data);
};

export const POST = async(request) => {
    await mongoose.connect(Dbconne);

    const payload = await request.json();

    const data = new NpModel(payload);

    const mydata = data.save();

    return NextResponse.json(mydata);
};