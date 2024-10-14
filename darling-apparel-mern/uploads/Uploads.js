import multer from 'multer';
import path from 'path';

//set storeage engine
const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, './')
  }
})