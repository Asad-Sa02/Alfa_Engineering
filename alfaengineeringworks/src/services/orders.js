import axios from "axios";
import { createError, createURL } from "./utils";

export async function getAllOrders(){
try{
        const url = createURL('owner/order-details')
        const headers = {
            headers:{
                token:sessionStorage['token']
            }
        }
        const response = await axios.get(url,headers)
        // console.log(response)
        return response.data;

}
catch(ex){
    return createError(ex);
}

}