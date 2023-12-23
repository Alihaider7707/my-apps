import { Dbconne } from "@/app/lib/DBconnection";
import { NewsparaModel1 } from "@/app/lib/model/newsparamodel1";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async() => {
    await mongoose.connect(Dbconne);

    const data = await NewsparaModel1.find();

    return NextResponse.json(data);
};

export const POST = async(request) => {
    await mongoose.connect(Dbconne);

    const payload = await request.json();

    const data = new NewsparaModel1(payload);

    const mydata = data.save();

    return NextResponse.json(mydata);
};