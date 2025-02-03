import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        addedProducts:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const product = action.payload

            state.addedProducts.push({
                ...product
            })
             
        }
    }
})

export const{addToCart}=cartSlice.actions
export default cartSlice.reducer