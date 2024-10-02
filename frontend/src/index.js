import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, RouterProvider } 
from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// import ProductScreen from './screens/ProductScreen';
import ProjectDetailsScreen from './screens/ProjectDetailsScreen';
import CartScreen from './screens/ProductScreen';
import ProjectScreen from './screens/ProductScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/' element={<ProjectScreen />} />
      <Route path='/project/:id' element={<ProjectDetailsScreen />} />
      <Route path='/cart' element={<CartScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
