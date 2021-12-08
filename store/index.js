
export const state = () => ({
    shoppingcart: [],
    products: [],
    counter: 0,
})

export const getters = {
    getProductById: (state) => (id) => {
        return state.products.find(product => product.ProductID == id)
    } 
}

export const mutations = {
    init(state, products) {
        console.log('4. mutations');
        console.log('5. mutate');
        state.products = products
    },
    addItem(state, id){
        let item = state.products.find(product => product.ProductID == id)
        state.shoppingcart.push(item)
    },
    deleteItem(state, id){
        let item = state.products.find(product => product.ProductID == id)
        state.shoppingcart.splice(item, 1)
    },
    increment(state) {
        state.counter++
      },
    decrement(state) {
        state.counter--
    }
}


