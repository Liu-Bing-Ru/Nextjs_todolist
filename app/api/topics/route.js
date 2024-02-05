//C:\Users\USER\Desktop\To_DO\todolist\app\api\topics
//route.js
import connectMongoDB from "../../libs/mongoDB";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}
//get method
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
//delet
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

export async function PUT(request) {
  const data = await request.json();
  const id = data.id;
  await connectMongoDB();

  try {
    const topic = await Topic.findById(id);

    if (!topic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    //topic.done = true;
    topic.done = true;
    //console.log("PUT有完成唷!!!!!");
    await topic.save();
    console.log("Topic updated successfully");

    return NextResponse.json(
      { message: "done has been refresh" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
