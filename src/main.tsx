import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import './App.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
