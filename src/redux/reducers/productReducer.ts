import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

// Define product type
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Define the initial state
const initialState: Product[] = [];

// Define action types
export const GET_PRODUCTS = 'GET_PRODUCTS';

interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  payload: Product[];
}

// Combine the action types
export type ProductActionTypes = GetProductsAction;

// Define the reducer
export function productReducer(
  state = initialState,
  action: ProductActionTypes
): Product[] {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

// Define async actions
export const getProducts = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
  // Here you would usually make an API call to get the products, but for simplicity we will just return a static list
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  dispatch({
    type: GET_PRODUCTS,
    payload: products,
  });
};
