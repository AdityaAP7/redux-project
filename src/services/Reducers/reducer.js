// Initial state
const initialState = {
  cartItems: []
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action creators
const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});
  </Picker>
        </View>
// Reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }        cartItems: state.cartItems.filter(item => item.id !== action.payload)
};
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
// Example usage with Redux
const store = Redux.createStore(cartReducer);
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
// Dispatching actions
store.dispatch(addToCart({ id: 1, name: 'Product 1', price: 10 }));
store.dispatch(addToCart({ id: 2, name: 'Product 2', price: 20 }));
store.dispatch(addToCart({ id: 1, name: 'Product 3', price: 30 }));
console.log(store.getState());
// Output: { cartItems: [{ id: 1, name: 'Product 1', price: 10 }, { id: 2, name: 'Product 2', price: 20 }] }

store.dispatch(removeFromCart(1));
console.log(store.getState());
// Output: { cartItems: [{ id: 2, name: 'Product 2', price: 20 }] }
