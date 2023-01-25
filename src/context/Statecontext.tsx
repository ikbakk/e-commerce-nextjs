import { toNamespacedPath } from 'node:path/win32';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { toast } from 'react-hot-toast';
import { IContextType, IProduct } from 'typing';

interface IProps {
  children: JSX.Element;
}

const Context = createContext<IContextType>(null!);

const defaultCartItems = {
  quantities: 0,
  _id: 'id',
  name: 'name',
  price: 0,
  details: 'details'
};

const Statecontext = ({ children }: IProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [quantities, setQuantities] = useState(1);
  const increaseQuantity = () => {
    setQuantities((prevQuantities) => prevQuantities + 1);
  };

  const decreaseQuantity = () => {
    setQuantities((prevQuantities) => {
      const result = prevQuantities - 1 < 1 ? 1 : prevQuantities - 1;
      return result;
    });
  };

  const onAdd = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((item: any) => {
        if (item._id === product._id) {
          return { ...item, quantities: item.quantities + quantities };
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantities = quantities;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${quantity} ${product.name} added to the cart`);
  };

  let foundProduct: IProduct;
  let index;

  const cartItemQuantity = (id: string, value: 'increase' | 'decrease') => {
    foundProduct = cartItems.find((item: IProduct) => item._id === id);
    index = cartItems.findIndex((product: IProduct) => product._id === id);
    const newCartItems = cartItems.filter((item: IProduct) => item._id !== id);

    if (value === 'increase') {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantities: foundProduct.quantities + 1 }
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
    } else if (value === 'decrease')
      if (foundProduct.quantities > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantities: foundProduct.quantities - 1 }
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
      }
  };

  const removeCartItem = (product: IProduct) => {
    foundProduct = cartItems.find((item: IProduct) => item._id === product._id);
    const newCartItems = cartItems.filter(
      (item: IProduct) => item._id !== product._id
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantities
    );
    setTotalQuantity(
      (prevTotalQuantity) => prevTotalQuantity - foundProduct.quantities
    );
    setCartItems(newCartItems);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        totalQuantity,
        quantities,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        cartItemQuantity,
        removeCartItem
      }}>
      {children}
    </Context.Provider>
  );
};

export default Statecontext;

export const useStateContext = () => useContext(Context);
