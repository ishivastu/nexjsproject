import { NextResponse } from "next/server";

export const POST=async(request)=>{

  try {
    const response=NextResponse.json({
      message:"Logout Succesfull",
      success:true,
    })

    response.cookies.set("jwt", "", { maxAge: 0 });

    return response;
    
  } catch (error) {

    console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });

  }

}
