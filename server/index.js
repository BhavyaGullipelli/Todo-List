const express=require('express');
const app=express();
const cors=require('cors')
app.use(express.json());
app.use(cors());
const userModel=require("./models/userModel");
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://satyajavvadi:kundana_059@cluster0.saho8oy.mongodb.net/todo").then(()=>console.log("connection successful"));
app.post('/todo',async(req,res)=>{
    try{
   const item=req.body;
   const newItem= userModel(item);
   const newItem1=await newItem.save();
   res.json(newItem1.item);
    }
    catch(err)
    {
        res.json(err);
    }
});
app.get('/todo', async (req,res)=>{
    try{
        const items=await userModel.find({});
        res.json(items);
    }
    catch(err)
    {
        res.json(err);
    }
   
} );
app.delete('/todo/', async(req,res)=>{
    try{
        const task=req.body;
        const item1=await userModel.findOneAndDelete({item:task.item});
        res.json(item1);
}
catch(err)
{
    res.json(err);
}
})
app.listen(7000,()=>{
    console.log("port is running");
});
