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
        console.log("got all orders")
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
        ORDER_ITEMS.ORDER_ITEM_ID,
        ORDERS.ORDER_ID,TOTAL,PAYMENT,DELIVERED,TIMEST,
            ITEM,PRICE,QUANTITY,SIZE,
                USER.USER_ID,USERNAME 
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
        
        [result]= await db.execute(statement);
        res.send(utils.createSuccess(result));
        // console.log("object")
    } catch (error) {
    res.send(utils.createError(error))
    }
})

router.get('/order-detailsby/:username', async(req,res)=>{
    console.log("detailsby api")
    const {username} = req.params;
    console.log(username)
    try {
 const statement= `
    SELECT 
        ORDER_ITEMS.ORDER_ITEM_ID,
        ORDERS.ORDER_ID,TOTAL,PAYMENT,DELIVERED,TIMEST,
            ITEM,PRICE,QUANTITY,SIZE,
                USER.USER_ID,USERNAME 
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
         USER.USER_ID=ORDERS.USER_ID 
        AND 
         username=?;

    `
        const [result]= await db.execute(statement,[username])
        console.log(result)
        console.log(username)
        res.send(utils.createSuccess(result));
    } catch (error) {
        res.send(utils.createError(error)); 
    }
})
//a lot of issues with this api becuase of multiple statements so instead of using this api use next api
// router.post('/addOrder',async(req, res)=>{
//     const {total,payment, delivered, userId,
//             orderId,itemId,qyt
//             } = req.body; 
//     try {
//             const statement = `
//             INSERT INTO ORDERS(TOTAL, PAYMENT, DELIVERED, USER_ID ) 
//             values (?,?,?,?);
//             INSERT INTO ORDER_ITEMS(ORDER_ID, ITEM_ID, QUANTITY) 
//             values (?,?,?);
            
//             `
//         const result = await db
//                             .execute(statement, 
//                                 [total,
//                                  payment,   
//                                      delivered,
//                                       userId,
//                                         orderId,
//                                          itemId,
//                                           qyt])

//         res.send(utils.createSuccess(result))
//     } catch (error) {
//         res.send(utils.createError(error))
//     }
// })



router.get('/dummy' , async (req, res)=>{
    try{
        res.send(utils.createSuccess("dummy api"));
    console.log('dummy api ')
    }
    catch(ex){
        res.send(utils.createError(ex));
    }
})
module.exports = router;
