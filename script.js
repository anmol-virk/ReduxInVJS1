import { createStore } from "redux";
import cartReducer from "./cartReducer";
import { addToCart, removeFromCart, calculateTotal } from "./actions";

const store = createStore(cartReducer)

store.subscribe(() => {
updateCart()
})

const productList = document.querySelector("#productList")

const products = [
    { id: 1, name: "Product A", price: 10 },  
    { id: 2, name: "Product B", price: 20 },  
    { id: 3, name: "Product C", price: 15 } 
    ];    
 
    window.addToCartHandler = (productId) => {
        const product = products.find(p => p.id === productId);
        store.dispatch(addToCart(product))
       store.dispatch(calculateTotal())
    }

    const renderProducts = () => {
       const productItems =  products.map((product) => `
            <div>
            <li>${product.name} - Rs.${product.price} <button onClick="addToCartHandler(${product.id})">Add to Cart</button></li>
            </div>
        `).join("")
        productList.innerHTML = productItems
        
    }
    const cartList = document.querySelector("#cartList");
    const totalPrice = document.querySelector("#totalPrice")

    window.removeHandler = (productId) => {
        store.dispatch(removeFromCart(productId))
        store.dispatch(calculateTotal())
        updateCart()
    }

    const updateCart = () => {
        const state = store.getState()

        const cartItems = state.cart.map((item) => `
        <li>${item.name} - Rs.${item.price} - ${item.quantity} <button onClick="removeHandler(${item.id})">Remove</button></li> 
    `).join("")
    cartList.innerHTML = cartItems
    totalPrice.innerHTML = `Total: Rs.${state.total}`
    }
    renderProducts()

    updateCart()