import React, { useEffect, useState } from 'react'
import { getItems } from '../services/items'
import { toast } from 'react-toastify'

export default function GetItems() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    const  loadItems = async ()=>{
    const result = await getItems();
    // debugger
        if(result.status=='success'){
        //  debugger

            setItems(result.data);
 
        }
        else{
            toast.error(result.error);
        }
    }
    loadItems();
  },[])
    return (
    <div>
      <p>item display</p>
      {items.map((item)=>(
        <p>{item.ITEM}</p>
      ))}
    </div>
  )
}
