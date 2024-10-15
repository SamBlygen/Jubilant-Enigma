import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './server/routes/productRoutes.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(()=> console.log('MongoDB connected'))
  .catch((err)=> console.log(err))

app.use('/api/products', productRoutes);



app.get('/', (req,res)=>{
  res.send('Welcome to Darling Apparel Boutique');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))


