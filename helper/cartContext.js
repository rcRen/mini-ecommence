import { createContext } from 'react';
import { Cart } from './localStorage';

const cartContent = {
  product: {
    id:'',
    name:'',
    category:'',
    unit:'',
    imageSrc:'',
    slug:'',
  },
  amount: 0,
};

export const CartContext = createContext(cartContent);

const cartProvider = (props) => {
  const cartItems = Cart.getCart();
  let data = cartContent;

  if (cartItems) {
    data = {
      ...data,
      product: cartItems,
      amount: cartItems.amount,
    };
  }
};
