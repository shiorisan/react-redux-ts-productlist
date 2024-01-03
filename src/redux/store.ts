import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';

export type RootState = ReturnType<typeof productReducer>

const store = createStore(productReducer, applyMiddleware(thunk));
export default store;

