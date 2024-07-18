import { connect } from "@/lib/dbConnect";
import Question from "@/models/Question";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    const url = request.url;
    const index = url.lastIndexOf("/");
    const Id = url.slice(index + 1);


    if (Id) {
      const data = await Question.findByIdAndDelete(Id);
      console.log(data);
      return NextResponse.json({
        message: "Data Deleted sucessfully",
        data: data,
        success: true,
      });
    } else {
     console.error('No data for this id')
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
