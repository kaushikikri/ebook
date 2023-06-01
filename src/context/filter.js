import { createContext, useContext, useReducer } from "react";
import { filterReduce } from "../reducers";

const initial = {
    productList: [],
    inStock: false,
    bestSeller: false,
    sortPrice: null,
    sortRating: null,
}

const FilterContext = createContext(initial);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReduce, initial);

    function initialize(products) {
        dispatch({
            type: "Product_List",
            payload: {
                products: products,
            }
        })
    }

    function Seller(products) {
        return state.bestSeller ? products.filter((item) => item.best_seller === true) : products;
    }

    function Stock(products) {
        return state.inStock ? products.filter((item) => item.in_stock === true) : products;
    }

    function Sorting(products) {
        if (state.sortPrice === "lowtohigh") {
            return (products.sort((a, b) => Number(a.price) - Number(b.price)))
        }
        if (state.sortPrice === "hightolow") {
            return (products.sort((a, b) => Number(b.price) - Number(a.price)))
        }
        return products;
    }

    function Rating(products) {
        if (state.sortRating === "4 star & above") {
            return (products.filter((item) => (item.rating >= 4)))
        }
        if (state.sortRating === "3 star & above") {
            return (products.filter((item) => (item.rating >= 3)))
        }
        if (state.sortRating === "2 star & above") {
            return (products.filter((item) => (item.rating >= 2)))
        }
        if (state.sortRating === "1 star & above") {
            return (products.filter((item) => (item.rating >= 1)))
        }
        return products;
    }

    const filtered = Rating(Sorting(Stock(Seller(state.productList))));

    const value = {
        state,
        dispatch,
        productList: filtered,
        initialize,
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);

