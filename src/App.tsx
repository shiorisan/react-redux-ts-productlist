import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './actions/productActions';
import ProductList from './components/ProductList';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const products = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
      </header>
      <ProductList products={products} />
    </div>
  );
};

export default App;
