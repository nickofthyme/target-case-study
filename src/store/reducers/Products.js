import * as types from '../constants';

const initialState = {
  products: [],
};

export default function (state = initialState, {
  type,
  payload,
  error,
}) {
  if (error) {
    console.error(error); // eslint-disable-line
  }

  switch (type) {
    case types.PRODUCTS_ADD_PRODUCT: {
      const { product } = payload;

      const products = [
        ...state.products,
        product,
      ];

      return {
        ...state,
        products,
      };
    }

    case types.PRODUCTS_SET_PRODUCTS: {
      const { products } = payload;

      return {
        ...state,
        products,
      };
    }

    default: {
      return state;
    }
  }
}
