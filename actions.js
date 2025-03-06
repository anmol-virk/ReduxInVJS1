export const ADD_TO_CART = "product/added"
export const REMOVE_FROM_CART = "product/removed"
export const CALCULATE_TOTAL = "total"

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
})

export const calculateTotal = () => ({
    type: CALCULATE_TOTAL,
})