import React from 'react'
import ReactDOM from 'react-dom/client'
import {    RouterProvider,} from "react-router-dom";
import {router} from './Routes/root'
import store from './store'
import { Provider } from 'react-redux'
import Chat from './Chat/Chat';
import { ProductionQuantityLimits } from '@mui/icons-material';
import Product from './pages/Product';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    
 <Provider store={store}>

     <RouterProvider router={router} />
     <Chat/>
    </Provider>


  </React.StrictMode>,
)
