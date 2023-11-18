import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ProductList from './product'
import BabyCare from './Pages/BabyCare'
import Cosmetics from './Pages/Cosmetics'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout';
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<ProductList />} />
        <Route path='BabyCare' element={<BabyCare />} />
        <Route path='Cosmetics' element={<Cosmetics />} />
      </Route>
    )
  )
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
  