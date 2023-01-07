import React, {createContext,useContext,useState,useEffect} from 'react'
import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({children}) => {
  
  const [showCart,setShowCart] = useState(false);
  const [cartItems,setCartItems]= useState([]);
  const [totalPrice,setTotalPrice]=useState(0);
  const [totalQuantities,setTotalQuantities]=useState(0);
  const [qty,setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product,quantity)=>{
    const checkProductInCart = cartItems.find((item)=> item._id ===product._id);
    
    setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity)
    
    if(checkProductInCart){

      const updatedCartItems = cartItems.map((cartProduct)=>{
        if(cartProduct._id === product._id) return{
          ...cartProduct,
          quantity: cartProduct.quantity+quantity
        }
      })
      setCartItems(updatedCartItems);
    }else{
      product.quantity = quantity;
      
      setCartItems([...cartItems,{ ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);

  }
  
  const toggleCartItemQuantity = (id,value) =>{
    foundProduct = cartItems.find((item)=>item._id === id)
    index = cartItems.findIndex((product)=> product._id === id)

    if(value === "inc"){
      let newCartItems = [...cartItems, { ...product,
      quantity: product.quantity + 1 }];
      
      setCartItems(newCartItems) 
      
    } else if (value === "dec"){

    }

  }

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
      setShowCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      onAdd,
    }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);