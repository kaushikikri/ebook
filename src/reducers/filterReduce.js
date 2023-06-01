export const filterReduce = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "Product_List":
            return { ...state, productList: payload.products };
        case "Sort_By":
            return { ...state, sortPrice: payload.sortPrice };
        case "Ratings":
            return { ...state, sortRating: payload.sortRating };
        case "In_stock":
            return { ...state, inStock: payload.inStock };
        case "Best_seller":
            return { ...state, bestSeller: payload.bestSeller };
        case "Clear_All":
            return {
                ...state,
                inStock: false,
                bestSeller: false,
                sortRating: null,
                sortPrice: null
            };

        default:
            throw new Error("Not Valid");
    }
}
