export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "Add_to_cart":
            return { ...state, cartList: payload.res, total: payload.total };
        case "Remove_from_cart":
            return { ...state, cartList: payload.res, total: payload.total };
        case "Clear_cart":
            return { ...state, cartList: payload.res, total: payload.total };
        default:
            throw new Error("No match");
    }
}
