//1
const express = require('express');
const router = express.Router();
const db = require('../db');
const utils = require('../utils.js');
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const jwtSecret = config.secret
;
// console.log(jwtSecret)



router.post('/register', async (req, res) => { 
 const { username, password,contact } = req.body;
 try{
encryptedPassword = String(cryptoJs.SHA256(password));
const statement = ` 
                    insert into user (username,password,contact) values (?,?,?)`
const result = await db.execute(statement, [username,encryptedPassword,contact]);
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
        // console.log([users])
        // Generate JWT token
        const user = users[0];
        // console.log(user) 
        const token =jwt.sign({
            id: user['USER_ID'],
            username: user['USERNAME'],
            role:user['role']
        },jwtSecret
    
    )
    // console.log(token)
    // console.log(jwtSecret)
    // console.log({token,id:user['USER_ID'],username:user['USERNAME']})
     res.send(utils.createSuccess({
        token,
        id:user['USER_ID'], 
        username:user['USERNAME'],
        role:user['role']}
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
    

    //here user will not explicitly add his user id it should get it from the logged in info
router.post('/add-order', async(req,res)=>{
    const {total, userId,
             itemId, qyt} = req.body;
    const connection = await db.getConnection();

   try {
    await connection.beginTransaction();
   ;
    const [orderResult] = await connection.execute(
         `
        INSERT INTO ORDERS(TOTAL, PAYMENT_STATUS,STATUS , USER_ID) 
        VALUES (?, 'UNPAID', 'PENDING', ?);
    `,
        [total,userId]
    ) 
    // console.log([total, payment, delivered, userId])
    const generatedOrderId = orderResult.insertId;
    // res.send(utils.createSuccess({
    //     orderResult})); //
    await connection.execute(
     `
        INSERT INTO ORDER_ITEMS(ORDER_ID, ITEM_ID, QUANTITY) 
        VALUES (?, ?, ?);
    `,
        [generatedOrderId, itemId, qyt]
    );
    await connection.commit();
    connection.release();

    res.send(utils.createSuccess({
        orderId: generatedOrderId,
        message: "Order placed successfully"
    }));
   } catch (error) {
    await connection.rollback();
    connection.release();
    res.send(utils.createError(error));
    
   }
})

router.patch('/cancel-order/:orderId', async(req, res)=>{
    const {orderId} = req.params;
    try{
    const statement = `
        UPDATE ORDERS SET STATUS = 'CANCELLED' WHERE ORDER_ID = ? AND STATUS = 'PENDING';
    `
    const [result] = await db.execute(statement, [orderId]);
    if (result.affectedRows === 0) 
        return res.send(utils.createError("Order not found or cannot be cancelled"));

        res.send(utils.createSuccess({message: "Order cancelled successfully"}));
    }
    catch(ex){
        res.send(utils.createError(ex));
    }
})
    module.exports = router;