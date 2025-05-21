import { createContext, useContext, useState } from "react";

const Context = createContext() 

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    return <Context.Provider value={{cartList, setCartList}}>
        {children}
    </Context.Provider>
}

export const useCart = () => useContext(Context)