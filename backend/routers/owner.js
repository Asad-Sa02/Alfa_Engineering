const express = require('express');
const utils = require('../utils.js');
const db = require('../db');
const router = express.Router();

//make pending orders not this this is for admin
router.get('/users',async(req,res)=>{
    try{
    const statement = `
    select USER_ID,USERNAME from user`
    const [result] =await db.execute(statement);
    res.send(utils.createSuccess(result))
    
}catch(ex){
    res.send(utils.createError(ex));
}
})

// combine with above
router.get('/orders', async(req,res)=>{
    try{
        const statement= `
        select * from orders`
    const [result] = await db.execute(statement);
    res.send(utils.createSuccess(result));
    }
    catch(ex){
        res.send(utils
            .createError(ex));
    }
})


//see all orders of the users 
router.get('/order-details', async(req,res)=>{
    const statement= `
    SELECT 
    ORDERS.ORDER_ID,ITEM,PRICE,QUANTITY,USER.USER_ID,USERNAME 
    FROM 
        ORDER_ITEMS,
            ITEMS,
                ORDERS,
                    USER 
        WHERE 
         ORDER_ITEMS.ITEM_ID=ITEMS.ITEM_ID
        AND
         ORDERS.ORDER_ID=ORDER_ITEMS.ORDER_ID 
        AND
         USER.USER_ID=ORDERS.USER_ID ;

    `
    try {
        
        result= await db.execute(statement);
    } catch (error) {
    res.send(utils.createError(error))
    }
})
module.exports = router;
