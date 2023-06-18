import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx';
import ProductPage from './pages/ProductPage.tsx';

import { HelmetProvider} from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { StoreProvider } from './Store.tsx'
import store from './app/store.ts';
import { Provider } from 'react-redux';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>  
    <Route index={true} element={<Home/>} />
    <Route path='product/:slug' element={<ProductPage />} />
    </Route>
  )
);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <StoreProvider> */}
    <Provider store ={store}>
    <HelmetProvider>
     <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
    </HelmetProvider>
    </Provider>
    
    {/* </StoreProvider> */}
  </React.StrictMode>,
)
