import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from "./actions"

const initialState = { cart: [], total: 0 }

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const alreadxExist = state.cart.find(product => product.id === action.payload.id)
            if(alreadxExist) {
                return {...state, cart: state.cart.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product)}
            }
            else{
                return {
                    ...state, cart: [...state.cart, {...action.payload, quantity: 1}]

                }
            }
            case REMOVE_FROM_CART: 
            return {...state, cart: state.cart.filter(product => product.id !== action.payload)}
            case CALCULATE_TOTAL:
                const total = state.cart.reduce((acc, curr) => acc + curr.price * curr.quantity , 0) 
                return {...state, total: total}
                default:
                    return state
    }
} 

export default cartReducer