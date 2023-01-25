import React, { useEffect, useState, createContext, useContext } from 'react';
import { Toast } from 'react-hot-toast';

interface IProps {
  children: JSX.Element;
}

interface IContextType {
  showCart: boolean;
  cartItems: number;
  totalPrice: number;
  totalQuantity: number;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const Context = createContext<IContextType | undefined>(undefined);

const Statecontext = ({ children }: IProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const result = prevQuantity - 1 < 1 ? 1 : prevQuantity - 1;
      return result;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        quantity,
        increaseQuantity,
        decreaseQuantity
      }}>
      {children}
    </Context.Provider>
  );
};

export default Statecontext;
