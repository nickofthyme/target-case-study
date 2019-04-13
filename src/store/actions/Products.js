import axois from 'axios';

import * as types from '../constants';

export const loadProducts = () => async (dispatch) => {
  try {
    const {
      data: {
        CatalogEntryView: products,
      },
    } = await axois('/static/item-data.json');

    dispatch({
      type: types.PRODUCTS_SET_PRODUCTS,
      payload: { products },
    });
  } catch (error) {
    // handle error better
    throw new Error('Unable to load products\n\n', error);
  }
};
