const express = require('express');
const router = express.Router();
const utils = require('../utils.js');
const db = require('../db');

router.get('/items',async (req,res)=>{
    try{
        const statement = `select * from items`;
        const [result] = await db.execute(statement);
        res.send(utils.createSuccess(result));
    }
    catch(ex){
        console.log(ex)
        res.send(utils.createError(ex));
    }
})

module.exports = router; //this is imp because yooull forget this small step