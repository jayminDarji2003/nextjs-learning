import { NextResponse } from "next/server";
import dbConnect from "../../../../config/database";
import Topic from "../../../../models/topic";

// create topic handler
export async function POST(request) {
    // fetch data
    const { title, description } = await request.json();

    // connect to database
    await dbConnect();

    // add data to database
    await Topic.create({
        title,
        description
    })

    // return response 
    return NextResponse.json(
        {
            message: "topic created successfully"
        },
        {
            status: 201,
        }
    )
}