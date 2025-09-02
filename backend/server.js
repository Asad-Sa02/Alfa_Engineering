//1
const express = require('express');
const cors = require("cors");
const port = 4000;
const app = express();
const jwt = require('jsonwebtoken');
const config = require('./config.js');
const utils = require('./utils.js');
// const jwtSecret=require('dotenv').config();
// 2
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// console.log(jwtSecret.parsed.JWT_SECRET)
//middleware 
app.use((req,res,next)=>{
    const skipPaths = ['/user/register', '/user/login'];
    if(skipPaths.findIndex(path=>path==req.path)!=-1)
    {
        next();
    }
    else{
        const token = req.headers['token'];
        if(!token)
        {
            return res.send(utils.createError("No token provided"));
        }
        else{
            try{
                const payload = jwt.verify(token,config.secret);
                req.data = payload;
                next();
            }
            catch(ex){
                console.log(ex)
                res.send(utils.createError("Invalid token"));
            }
        }
    }
})



// add the routes 
//3
const userRouter = require('./routers/users');
const ownerRouter = require('./routers/owner');
const itemRouter = require('./routers/items');
// 4

app.use('/user', userRouter);
app.use('/owner', ownerRouter);
app.use('/item', itemRouter);


app.listen(port,'0.0.0.0',()=>{
    console.log(`server is running on ${port}`)
})
