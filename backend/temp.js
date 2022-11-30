const express= require('express');
require('./db/config');
const cors=require('cors');
const user= require('./db/User');
const app=express();
app.use(cors());
app.use(express.json());
app.post('/register',async(req, res)=>{
    const User=await new user(req.body).save();
    res.send(User);
})
app.listen(4500);