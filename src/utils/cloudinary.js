import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.API_SECRET 
});


const uploadoncloud = async (filepath)=>{
  try {
    if(!filepath) return null
    //uploca on cloud
    const res = await cloudinary.uploader.upload(filepath,{
      resource_type:'auto'
    })
    console.log('file uploaded done',res.url);
    return res;


  } catch (error) {
    fs.unlink(filepath);
    return null;
  }
}



