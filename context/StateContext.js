import React, {createContext,useContext,useState,useEffect} from 'react'
import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({children}) => {
  
  const [showCart,setShowCart] = useState(false);
  const [cartItems,setCartItems]= useState();
  const [totalPrice,setTotalPrice]=useState();
  const [totalQuantities,setTotalQuantities]=useState();
  const [qty,setQty] = useState(1);

  const incQty=()=>{
    setQty((prevValue)=>prevValue+1);
  }
  const decQty=()=>{
    setQty((prevValue)=>{
      if(prevValue-1<1) return 1
      
      return prevValue-1
    });
  }

  return (
    <Context.Provider
    value={{
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
    }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);