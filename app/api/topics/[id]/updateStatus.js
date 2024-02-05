// app/api/topics/[id]/updateStatus.js
import nextConnect from "next-connect";
import Topic from "../../../../models/topic";
import connectMongoDB from "../../../libs/mongoDB";

const handler = nextConnect();

handler.use(connectMongoDB);

handler.put(async (req, res) => {
  const { id } = req.query;

  try {
    const topic = await Topic.findById(id);

    if (!topic) {
      return res.status(404).json({ success: false, error: "Topic not found" });
    }

    topic.done = req.body.done; // 假設 done 是在請求體中傳遞的
    console.log("UpdateStaus 是正常的", topic.done);
    await topic.save();

    return res.status(200).json({ success: true, data: topic });
  } catch (error) {
    console.error("Error updating status:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
});

export default handler;
