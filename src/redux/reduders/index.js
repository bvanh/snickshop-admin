import { FETCH_PRODUCTS } from "../action-type/index";

const initialState = {
  allproducts: []
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        allproducts: action.payload
      };

    default:
      return state;
  }
};
export default Reducer;
