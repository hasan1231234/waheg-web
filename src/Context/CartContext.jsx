import React, { useState } from 'react'
import { createContext } from 'react'

export const CartProvider = createContext('my name is mustafa')
export default function CartContext({children}) {
    const [cors , setCors] = useState([])
    const addToCart = (item) => {
        const addedCorse = {...item}

        const find = cors.find((e) => {
            return e.id === item.id
        })

        if(find){
            console.log('already find');
        }else{
            setCors([...cors , addedCorse])
        }
        
    } 

    const deleteFromCart = (item) => {
        const addedCorse = {...item}

        const find = cors.find((e) => {
            return e.id === item.id
        })
        if(find){
            const index = item.index
            cors.splice(index , 1)
            setCors([...cors])
        }
    }
  return (
    <CartProvider.Provider value={{addToCart , cors , deleteFromCart}}>{children}</CartProvider.Provider>
  )
}
