import React from 'react'
import ReactDOM from 'react-dom/client'
import {    RouterProvider,} from "react-router-dom";
import {router} from './Routes/root'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    

     <RouterProvider router={router} />
    


  </React.StrictMode>,
)
