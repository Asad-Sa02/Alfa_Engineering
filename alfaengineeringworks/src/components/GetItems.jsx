import React, { useEffect, useState } from 'react'
import { getItems } from '../services/items'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice'

export default function GetItems() {
  const [items, setItems] = useState([])

  function ItemRow ({item}){
  const dispatch = useDispatch();
    const addItemtocart = () => {
    console.log(item)
    dispatch(addItem(item))
  } 
    return (
   <tr>
      <td>{item.ITEM_ID}</td>
      <td>{item.ITEM}</td>
      <td>₹{item.PRICE}</td>
      <td>{item.size}</td>
     
      <td><button onClick={addItemtocart}>
  add to cart
</button></td>

    </tr>
  )}
  
  useEffect(()=>{
    const  loadItems = async ()=>{
    const result = await getItems();
    // debugger
        if(result.status=='success'){
        //  debugger

            setItems(result.data);
 
        }
    }
    loadItems();
  },[])
    return (<>
      {items.map((item)=>(
      <>
        
          <ItemRow item={item}
          key={item.ITEM_ID}
          />
            
        </>
      ))}
  </>  )
}
