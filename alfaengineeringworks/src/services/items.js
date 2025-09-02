import axios from "axios";
import { createError, createURL } from "./utils";

export  async function getItems() {
try{

    const url = createURL('item/items');
    const headers ={
        headers:{
            token : sessionStorage.token
        }
    }
    debugger
    const response = await  axios.get(url,headers)
    return response.data;
}
catch (err){
    return createError(err)
}
}