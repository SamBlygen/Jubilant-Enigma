import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios'
import productRoutes from './server/routes/productRoutes.js';
import userRoutes from './server/routes/userRoutes.js';
import orderRoutes from './server/routes/orderRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(()=> console.log('MongoDB connected'))
  .catch((err)=> console.log(err))

app.use('/api/products', productRoutes);
app.use('api/users', userRoutes);
app.use('/api/orders', orderRoutes);


app.get('/', (req,res)=>{
  res.send('Welcome to Darling Apparel Boutique');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))


