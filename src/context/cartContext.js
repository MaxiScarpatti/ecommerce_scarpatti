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

const removeItem = ( id ) => {
    const newCart = [...cart].map(element => element.id !== id)
    setCart(newCart);
}

const clearCart = () => {
    setCart([]);
}

  return <Provider value={{ cart, addItem, clearCart, removeItem }}>{children}</Provider>;
};

export default cartContext;
