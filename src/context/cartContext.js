import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const initial = {
    cartList: [],
    total: 0
}

const cartContext = createContext(initial);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initial);

    function add(products) {
        const res = state.cartList.concat(products);
        const total = state.total + products.price;
        dispatch({
            type: "Add_to_cart",
            payload: {
                res: res,
                total:total
            }
        })
    }

    function del(products) {
        const res = state.cartList.filter((item) => (item.id !== products.id));
        const total = state.total - products.price;
        dispatch({
            type: "Remove_from_cart",
            payload: {
                res: res,
                total:total
            }
        })
    }
    
    function clearCart(){
        dispatch({
            type:"Clear_cart",
            payload:{
                res: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        add,
        del,
        clearCart,
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext);
