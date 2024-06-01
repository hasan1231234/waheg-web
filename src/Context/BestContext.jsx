import React from 'react'
import { createContext , useState } from 'react'
export const BestProvider = createContext()
export default function BestContext({children}) {
    const [best , setBest] = useState([])
    const addToBest = (item) => {
        const addedBest = {...item}

        const find = best.find((e) => {
            return e.id === item.id
        })

        if(find){
            console.log('already find');
        }else{
            setBest([...best , addedBest])
        }
    }
    // console.log(best);
  return (
    <BestProvider.Provider value={{best , addToBest}}>{children}</BestProvider.Provider>
  )
}
