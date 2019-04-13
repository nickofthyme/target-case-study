import { combineReducers } from 'redux';

import ProductsReducer from './Products';
import ProductReducer from './Product';

const rootReducer = combineReducers({
  products: ProductsReducer,
  product: ProductReducer,
});

export default rootReducer;
