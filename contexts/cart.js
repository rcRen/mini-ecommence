import { createContext, useContext, useState } from 'react';
import currency from 'currency.js';
import storage from '../helper/storage';
import {
  calcSubTotal,
  calcTotalTax,
  addToCart,
  removeFromCart,
} from '../helper/lib';

const Props = {
  products: [],
  subTotal: 0,
  tax: 0,
  total: 0,
  AddToCart: () => {},
  RemoveFromCart: () => {},
};

export const CartContext = createContext(Props);

export const CartProvider = (props) => {
  
  const [products, setProducts] = useState(storage.get('cart'));

  const subTotal = currency(calcSubTotal(products)).value;

  const tax = currency(calcTotalTax(products)).value;

  const total = currency(currency(subTotal).value + currency(tax).value).value;

  const AddToCart = (item) => {
    addToCart(item);

    setProducts(storage.get('cart'));
  };

  const RemoveFromCart = (item) => {
    removeFromCart(item);

    setProducts(storage.get('cart'));
  };

  return (
    <CartContext.Provider value={{ products, subTotal, tax, total, AddToCart, RemoveFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
