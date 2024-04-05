import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    tital: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    views: {
      default: 0,
      type: Number,
      required: true,
    },
    ispublished: {
      type: Boolean,
      require: true,
      default: false,
    },
    ownder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);



export const Video = mongoose.model("Video", videoSchema);
