import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // 移除頭尾空白
      minlength: 1, // 最小長度為1
      maxlength: 10, // 最大長度為10
    },
    description: { type: String },
    //description: { String },
    done: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
