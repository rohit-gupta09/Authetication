const express=require('express');
const app=express();
const cors=require('cors')
const mongoose=require('mongoose');
const User=require('./models/user_model')
const jwt=require('jsonwebtoken')

app.use(cors());
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/Auth')
app.post('/api', async (req,res)=>{
    console.log(req.body)
    try{
            await User.create({
            name:req.body.username,
            email:req.body.mail,
            password:req.body.pass,
        });
        res.json({status:'ok'})
    }
    catch(err){
        res.json({status:'error',error:'Duplicate email'})
    }
})

app.post('/login', async (req,res)=>{
    console.log(req.body)
        const user=await User.findOne({
            email:req.body.mail,
            password:req.body.pass
        });
        if(user){

            const token=jwt.sign(
                {
                    name:user.name,
                    email:user.email
                },
                'secret123'
            )
            console.log(token)
            return res.json({status:'ok',user:token})
           
        }
        else{
            return res.json({status:'error',user:false})
        }
})

app.post('/quote', async (req,res)=>{

    const token=req.headers['x-access-token']
    try{
    const decoded=jwt.verify(token,'secret123')
    const email=decoded.email
    await User.updateOne({email:email},{$set:{quote:req.body.quote}})

    return res.json({status:'ok'})
    }
    catch(error)
    {
         console.log(error)
         res.json({status:'error',error:'invalid token'})
    }
})

app.get('/quote', async (req,res)=>{

    const token=req.headers['x-access-token']
    try{
    const decoded=jwt.verify(token,'secret123')
    const email=decoded.email
    const user=await User.findOne({email:email})

    return res.json({status:'ok',quote:user.quote})
    }
    catch(error)
    {

        console.log(error)
        res.json({status:'error',error:'invalid token'})
    }
})

app.get("/hello",(req,res)=>{
    res.send("Hello world")
})

app.listen(1234,()=>{
    console.log("Server is running on port number 1234")
})