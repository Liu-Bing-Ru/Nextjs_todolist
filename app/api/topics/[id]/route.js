import connectMongoDB from "../../../libs/mongoDB";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title: title, description: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
//有request 就是可以動態調整使用者端發送的訊息
//此params就是使用者輸入網址上的id
export async function GET(request, { params }) {
  //const { id } = request.params;
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
