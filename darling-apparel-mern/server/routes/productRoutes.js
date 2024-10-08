import express from 'express';
const router = express.Router();

router.get('/', (req,res)=>{
  res.send('Get all items');
});

router.post('/',(req,res)=>{
  res.send('Create new item');
})

router.patch('/',(req,res)=>{
  res.send('Put new item');
})

router.delete('/',(req,res)=>{
  res.send('Delete an item');
})

export default router;