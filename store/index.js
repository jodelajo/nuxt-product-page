export const state = () => ({
  shoppingcart: [],
  products: [],
});

export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.ProductID == id);
  },
  totalPrice: (state) => {
    let total = 0;
    for (const product of state.shoppingcart) {
      total = total + product.quantity * product.ProductPrices[0].Price;
    }
    return total;
  },
  totalProductsCount: (state) => {
    let count = 0;
    for (const product of state.shoppingcart) {
        count = count + product.quantity
    }
    return count;
  }
};

export const mutations = {
  init(state, products) {
    state.products = products;
  },
  addItem(state, id) {
    let item = state.shoppingcart.find((product) => product.ProductID == id);
    if (item) {
      item.quantity = item.quantity + 1;
    } else {
      let item = state.products.find((product) => product.ProductID == id);
      state.shoppingcart.push({ ...item, quantity: 1 });
    }
  },

  deleteItem(state, id) {
    let item = state.shoppingcart.find((product) => product.ProductID == id);
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
    } else {
      state.shoppingcart.splice(item, 1);
    }
  },

  deleteProduct(state, id) {
    let item = state.shoppingcart.find((product) => product.ProductID == id);
    state.shoppingcart.splice(item, 1);
    state.counter = state.counter - item.quantity;
  },
};

export const actions = {};
