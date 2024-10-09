import mongoose from 'mongoose';

const orderItemSchema = mongoose.Schema(
  {
    name: {type: String, required: true},
    qty: {type: Number, required: true},
    price:{type: Number, required: true},
    product:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // link to the Product Model
      required: true,
    },
  },
  {
    _id:false, //prevent mongodb unique _id for each item
  }
)

const orderSchema = mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    orderItems :[orderItemSchema], //my product array
    shippingAddress:{
      address: {type:String, required: true},
      city: {type: String, required: true},
      postalCode:{ type:String, required: true},
      country: {type: String, required: true},
    },
    paymentMethod: {
      type:String,
      required: true,
    },
    paymentResult: {
      id: {type: String},
      status: {type : String},
      email_address:{ type: String},
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
  },
},
);

const Order = mongoose.model('Order', orderSchema);

export default Order;