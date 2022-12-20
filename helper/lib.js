import storage from './storage';

export const calcSubTotal = (products) => {
  // console.log('prod',products);
  let subtotal = 0;

  if (!products) {
    return subtotal;
  } else {
    for (const product of products) {
      subtotal += product['price'] * product['quantity'];
    }

    return subtotal.toFixed(2);
  }
};

export const calcGst = (products) => {
  const subtotal = parseFloat(calcSubTotal(products));
  const gstRate = 0.05;
  return (subtotal * gstRate).toFixed(2);
};

export const calcQst = (products) => {
  const subtotal = parseFloat(calcSubTotal(products));
  const qstRate = 0.09975;
  return (subtotal * qstRate).toFixed(2);
};

export const calcTotalTax = (products) => {
  const gst = parseFloat(calcGst(products));
  const qst = parseFloat(calcQst(products));
  return (gst + qst).toFixed(2);
};

export const calcTotalPrice = (products) => {
  const subtotal = parseFloat(calcSubTotal(products));
  const taxes = parseFloat(calcTotalTax(products));
  return (subtotal + taxes).toFixed(2);
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
    cart.push({ ...item, quantity: quantity + 1 });
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
