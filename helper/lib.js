import storage from './storage';

export const calcSubTotal = (products) => {
  // console.log('prod',products);
  let subtotal = 0;
  if (!products) {
    return null;
  } else {
    for (const product of products) {
      subtotal += product['price'] * product['quantity'];
    }
    // console.log('sub',subtotal)
    return subtotal;
  }
};

export const getQuantityOfProduct = (item) => {
  const cart = storage.get('cart');
  const quantity = 0;
  if (!cart) {
    return [-1, [], quantity];
  } else {
    const index = cart.findIndex((_item) => _item.id == item.id);

    if (index < 0) {
      return [index, cart, quantity];
    }
    return [index, cart, cart[index]['quantity']];
  }
};

export const addToCart = (item) => {
  const [index, cart, quantity] = getQuantityOfProduct(item);

  if (quantity) {
    cart[index]['quantity'] += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  storage.set('cart', cart);
};

export const removeFromCart = (item) => {
  let [index, cart, quantity] = getQuantityOfProduct(item);
  if (quantity < 2) {
    cart = cart.filter((_item) => _item.id != item.id);
  } else {
    cart[index]['quantity'] -= 1;
  }

  storage.set('cart', cart);
};

export const getAllItemsInCart = () => {
  const cart = storage.get('cart');
  if (!cart) {
    return [];
  }
  return cart;
};
