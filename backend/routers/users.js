//1
const express = require('express');
const router = express.Router();
const db = require('../db');
const utils = require('../utils.js');
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const config = require('../config.js');


router.post('/register', async (req, res) => {
 const { username, password } = req.body;
 try{
encryptedPassword = String(cryptoJs.SHA256(password));
const statement = ` 
                    insert into user (username,password) values (?,?)`
const result = await db.execute(statement, [username,encryptedPassword]);
console.log(result)
res.send(utils.createSuccess(result))
}

 catch(ex){
 res.send(utils.createError(ex));
 }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try{
        // console.log("object")
      const   encryptedPassword = String(cryptoJs.SHA256(password));

        const statement = ` 
                        select * from user where username = ? and password = ? `
            
        const [users] = await db.execute(statement, [username, encryptedPassword]);
        // console.log(user,username,password,encryptedPassword)
        if (users.length === 0) {
            return res.send(utils.createError("Invalid username or password"));
        }
        // Generate JWT token
        const user = users[0];
        // console.log(user) 
        const token =jwt.sign({
            id: user['USER_ID'],
            username: user['USERNAME']
        },config.secret
    
    )
    // console.log({token,id:user['USER_ID'],username:user['USERNAME']})
     res.send(utils.createSuccess({
        token,
        id:user['USER_ID'], 
        username:user['USERNAME']}
     ));
    }
    catch(ex){
        res.send(utils.createError(ex));
    }
    });

    //add order by customer
    router.post('/place-order',async (req,res)=>{
        // const {userId , username,itemId}
        try{}
        catch(ex){
            res.send(utils.createError(ex));
        }
    })

    module.exports = router;
