import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import FoodList from './components/FoodList.jsx';
import OrderList from './components/OrderList.jsx';
import AddFood from './components/AddFood.jsx';
import AddOrder from './components/AddOrder.jsx';
import './App.css';

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element:<FoodList/> ,
        },
        {path:"/foods/new",
         element:<AddFood/>},
         {path:"/orders",
         element:<OrderList />},
         {path:"/orders/new",
         element:<AddOrder/>},
         
      ]);
        
    return (
        <div><RouterProvider router={router} /></div>
    );
}

export default App;
