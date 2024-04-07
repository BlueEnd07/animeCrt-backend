import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadoncloud} from "../utils/cloudinary.js"

const registeruser = asynchandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;

  if (
    [fullname, username, email, password].some((field) => field?.trim() == "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const existeduser = User.findOne({ $or: [{ username }, { email }] });
  
  if(existeduser){
    throw new ApiError(409,'user alrady exist')
  }

  const localavatar = req.files?.avatar[0]?.path
  const localcoverimage = req.file?.cover[1]?.path

  if(!localavatar){
    throw new ApiError(400,'give me fucking avatar')
  }

  const avatar=await uploadoncloud(localavatar)

  const cover=await uploadoncloud(localcoverimage)

  if(!avatar){
    throw new ApiError(400,'cant upload this file')
  }

  User.create({
    username,
    avatar:avatar.url,
    cover:cover?.url||'',
    email,
    username:username.toLowerCase(),
    password
  })


});

export { registeruser };
