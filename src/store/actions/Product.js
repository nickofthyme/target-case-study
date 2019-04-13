import * as types from '../constants';
import { ProductsActions } from '.';

export const loadProduct = (id) => async (dispatch, getState) => {
  // TODO query product directly with API w/o having to load all.
  await dispatch(ProductsActions.loadProducts());

  const { products } = getState();
  const product = products.products.find(({ itemId }) => itemId === id);

  dispatch({
    type: types.PRODUCT_SET_PRODUCT,
    payload: { product },
  });
};
