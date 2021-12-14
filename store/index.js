export const state = () => ({
  shoppingcart: [],
  products: [],
  offerProducts: [],
});

export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.ProductID == id);
  },
  totalPrice: (state) => {
    let total = 0;
    for (const product of state.shoppingcart) {
      // todo: check if offer
      if (product.ProductOffers.length > 0) {
        total = total + product.quantity * product.ProductOffers[0].OfferPrice;
      } else {
        total = total + product.quantity * product.ProductPrices[0].Price;
      }
    }
    return total.toFixed(2);
  },
  totalProductsCount: (state) => {
    let count = 0;
    for (const product of state.shoppingcart) {
      count = count + product.quantity;
    }
    return count;
  },
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
      state.shoppingcart = state.shoppingcart.filter(
        (item) => item.ProductID !== id
      );
    }
  },

  deleteProduct(state, id) {
    state.shoppingcart = state.shoppingcart.filter(
      (item) => item.ProductID !== id
    );
  },
};

export const actions = {};
