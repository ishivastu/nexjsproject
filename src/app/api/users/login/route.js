import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import User from "@/models/userModel"
import { generateToken } from "@/lib/generateToken";

dbConnect();

export const POST=async(request)=>{
  try {

    const reqBody=await request.json();

    const {email,password}=reqBody;

    const user=await User.findOne({email});

    if(!user) return NextResponse.json({message:"no user found"});

    const isPasswordCorrect=await bcrypt.compare(password,user.password);

    if(!isPasswordCorrect) return NextResponse.json({ message: "password wrong" });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

    generateToken(user._id,response);

    return response;

  } catch (error) {

    console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });


  }
}
