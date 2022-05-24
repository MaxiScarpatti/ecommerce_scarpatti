import { createContext, useState } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;

export const CustomProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === item.id) {
          element.quantity = element.quantity + quantity;
        }
      }
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          item: item,
          quantity: quantity,
        },
      ]);
    }
  };

  const isInCart = (id) => {
    return cart.find((e) => e.item.id === id);
  };

  const removeItem = (id) => {
    const newCart = [...cart].map((element) => element.item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };
 
  const getQuantity = () => {

    let cantidad = 0

    cart.forEach((element) => cantidad = cantidad + element.quantity)

    return cantidad

}

 const getTotal = () => {

    let total = 0
    
    cart.forEach((element) => {
    
    total = total + (element.quantity * element.item.precio)
    
    })
    return total
  }

  return (
    <cartContext.Provider
      value={{ getTotal, cart, isInCart, addItem, clearCart, removeItem, getQuantity }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;
