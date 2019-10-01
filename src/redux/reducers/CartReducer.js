
import { addItemtoCart } from '../../utils/cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemtoCart(state.cartItems, action.payload)
      };
    default:
      return state;
  };

};

export default CartReducer;
