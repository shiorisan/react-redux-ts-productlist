import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../redux/store';
import { GET_PRODUCTS } from '../redux/reducers/productReducer';


interface Product {
  id: number;
  name: string;
  price: number;
}

// interface ProductListProps {
//   products: Product[];
// }
// Define async actions
export const getProducts = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
  // Here you would usually make an API call to get the products, but for simplicity we will just return a static list
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 100},
    { id: 2, name: 'Product 2', price: 200},
    { id: 3, name: 'Product 3', price: 300},
  ];

  dispatch({
    type: GET_PRODUCTS,
    payload: products,
  });
};
