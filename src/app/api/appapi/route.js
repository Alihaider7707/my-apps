import { Dbconne } from "@/app/lib/DBconnection";
import { DataModel } from "@/app/lib/model/datamodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async() => {
    await mongoose.connect(Dbconne);

    const data = await DataModel.find();

    return NextResponse.json(data);
};

export const POST = async(request) => {
    await mongoose.connect(Dbconne);

    const payload = await request.json();

    const data = new DataModel(payload);

    const mydata = data.save();

    return NextResponse.json(mydata);
};