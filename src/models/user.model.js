import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverimage: {
      type: String,
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      require: true,
    },
    refreshtokens: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save",async function(next){
  if (!this.isModified("password")) return next();

  this.password=await bcrypt.hash(this.password,10)
  next()
})

userSchema.methods.ispasscorrect=async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.genrateAcessTokens=function(){}
userSchema.methods.genrateRefreshTokens=function(){}

export const User = mongoose.model("User", userSchema);
