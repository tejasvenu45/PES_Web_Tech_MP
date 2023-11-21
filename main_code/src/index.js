import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ProductList from './product'
import BabyCare from './Pages/BabyCare'
import Cosmetics from './Pages/Cosmetics'
import CommonCold from './Pages/CommonCold'
import Dental from './Pages/Dental'
import Diabetes from './Pages/Diabetes'
import EyeDrops from './Pages/EyeDrops'
import Heart from './Pages/Heart'
import PersonelHygiene from './Pages/PersonelHygiene'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout';
import About from './About';
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<ProductList />} />
        <Route path='BabyCare' element={<BabyCare />} />
        <Route path='Cosmetics' element={<Cosmetics />} />
        <Route path='CommonCold' element={<CommonCold />} />
        <Route path='Dental' element={<Dental />} />
        <Route path='Diabetes' element={<Diabetes />} />
        <Route path='EyeDrops' element={<EyeDrops />} />
        <Route path='Heart' element={<Heart />} />
        <Route path='About' element={<About />} />

        <Route path='PersonelHygiene' element={<PersonelHygiene />} />
      </Route>
    )
  )
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )