// Initial state
const initialState = {
  cartItems: []
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
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

// Reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case REMOVE_FROM_CART:
      return {// Reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) type: REMOVE_FROM_CART,
  payload: itemId
});

// Reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_TO_CART:
      return {return {// Reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) type: REMOVE_FROM_CART,
  payload: itemIdREMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';    cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };  case REMOVE_FROM_CART:
      return {
        ...state,payload: itemId
action.payload)
      };  case REMOVE_FROM_CART:
      return {
        ...state,
    default:
      return state;
// Action creators
const addToCart = (item) 
});
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };return state;
  }const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemIdcartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };  case REMOVE_FROM_CART:
      return {
        ...state,payload: itemId
action.payload)
      };  case REMOVE_FROM_CART:
      return {
        ...state,
    default:
      return state;
  }const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});
};return state;action.payload]
      };const cartReducer = (state = initialState, action) => {
  }const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
action.payload)
    case REMOVE_FROM_CART:
      return {// Reducer function Example usageaction.payload]
      };return state;
const store =console.log(store.getState()); // Output: { cartItems: [{ id: 1, name: 'Product 1', price: 10 }, { id: 2, name: 'Product 2', price: 20 }] }
const removeFromCart = (itemId) => ({
const cartReducer = (state = initialState, action) => {
  }const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
action.payload)
      };  case REMOVE_FROM_CART:
      return {
        ...state,
// Example usageaction.payload]
      };return state;
const store =console.log(store.getState()); // Output: { cartItems: [{ id: 1, name: 'Product 1', price: 10 }, { id: 2, name: 'Product 2', price: 20 }] }
const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART, Redux.createStore(cartReducer);

// Dispatching actions
store.dispatch(addToCart({ id: 1, name: 'Product 1', price: 10 }));
store.dispatch(addToCart({ id: 2, name: 'Product 2', price: 20 }));
console.log(store.getState()); // Output: { cartItems: [{ id: 1, name: 'Product 1', price: 10 }, { id: 2, name: 'Product 2', price: 20 }] }
const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
action.payload)
store.dispatch(removeFromCart(1));
console.log(store.getState()); // Output: { cartItems: [{ id: 2, name: 'Product 2', price: 20 }] }
