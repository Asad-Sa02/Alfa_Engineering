import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,item)=>{
            state.items.push(item.payload)
            console.log('pushed to cart',state.items);
        }


    }
})

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;