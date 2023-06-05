import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {  lazy } from 'react';

const ProductPage = lazy(() => import('./pages/ProductPage'));
const AddProductPage = lazy(() => import('./pages/AddProductPage'));
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Navigate to={'/products'} />} />
              <Route path='/products' element={<ProductPage />} />
              <Route path='/add-product' element={<AddProductPage />} />
            </Route>
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
