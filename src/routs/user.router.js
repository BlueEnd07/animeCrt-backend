import { Router } from "express";
import { registeruser } from "../controllers/user.controller.js";
import {upload} from '../middlewares/multer.middleware.js';


const router = Router()

router.route('/register').post(
  upload.fields([
    {
      name:"avatar",
      maxCount:1
    },
    {
      name:'cover',
      maxCount:3
    }
  ]),
  registeruser)



export default router
