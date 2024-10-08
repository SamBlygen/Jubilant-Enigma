import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name:{
type: String,
required:true,
  },
  price:{
    type: Number,
    required: true,
    min:0,
  },
  description:{
    type: String,
    required: true,
  },
  category:{
type: String,
required: true, 
  },
stock:{
  type: Number,
default: 0,
min: 0,
},
images:[{
  type: String,
},
],
createdAt:{
  type: Date,
  default: Date.now,
},
});

const Product = mongoose.model('Product', productSchema);

export default Product;