import {createContext, useEffect} from "react";
import {useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const currentUserId = 10
    useEffect(() => {
        const fetchedCart = async () =>{
            try{
                const response = await fetch(`https://shoppiest-backend.onrender.com/api/cart/${currentUserId}`);
                const clearData = await response.json();
                setCart(clearData.cart);
            }
            catch(err){
                console.log({err: err.message});
            }
        }
        fetchedCart();
    }, [])


    const addToCart = async (productId, quantity) => {
        try{
            const response = await fetch('https://shoppiest-backend.onrender.com/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quantity: quantity,
                    user_id: currentUserId,
                    product_id: productId,
                })
            });
            const clearData = await response.json();
            if (response.ok){
                alert('Product added successfully: ' + clearData.message);
                const newResponse = await fetch(`https://shoppiest-backend.onrender.com/api/cart/${currentUserId}`)
                const newClearData = await newResponse.json();
                setCart(newClearData.cart);
            }else {
                alert('Error has occurred: ' + clearData.error)
            }
        }catch(err){
            console.log({err: err.message});
        }
    }
    const handleClear = async (cart_id) => {
        try{
            const response = await fetch(`https://shoppiest-backend.onrender.com/api/cart/${cart_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const clearData = await response.json();
            if(response.ok){
                alert('Product deleted successfully: ' + clearData.message)
                setCart(cart.filter(prev => prev.id !== cart_id));
            }
        }catch (err){
            console.log({err: err.message});
        }
    }
    return (
        <CartContext.Provider value={{cart, setCart, addToCart, handleClear}}>
            {children}
        </CartContext.Provider>
    )
}