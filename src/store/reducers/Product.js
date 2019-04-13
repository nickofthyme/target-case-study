import * as types from '../constants';

const initialState = {
  product: null,
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
    case types.PRODUCT_SET_PRODUCT: {
      const { product } = payload;

      return {
        ...state,
        product,
      };
    }

    default: {
      return state;
    }
  }
}
