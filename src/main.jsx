import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Authprovidder';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <HelmetProvider>
   <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
 
  </StrictMode>,
)
