import {getUserId} from "@/helpers/getUserId";

import {NextResponse } from "next/server";
import User from "@/models/userModel";
import  dbConnect  from "@/lib/db";

dbConnect();

export async function GET(request){

    try {
        const userId = await getUserId(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}
