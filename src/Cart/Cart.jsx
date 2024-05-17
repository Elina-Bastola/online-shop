import React, { createContext, useReducer } from 'react'
let cartReducer=(state, action)=>{
    switch(action.type)
    {
        case 'addtocart': return{...state, cartItems: [...state.cartItems, action.payload]}
        case 'removefromcart': return{...state, cartItems: state.cartItems.filter((item)=> item)}
    }
}
 export let Cart=createContext()
let  CartProvider=({children})=>{
let [state, dispatch]=useReducer(cartReducer, {cartItems:[]})
return(
    <>
    <Cart.Provider value={{state, dispatch}}>
    {children}
    </Cart.Provider>
   
    </>
)
}
export default CartProvider
