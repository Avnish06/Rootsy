import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contactus from './components/Contactus.jsx'
import { Route } from 'react-router-dom'
import About from './components/About.jsx'
import Product from "./components/Product"
import Home from "./components/Home.jsx"

  const router = createBrowserRouter(
createRoutesFromElements(
<Route path="/" element= {<Layout /> }>
<Route path="/Home" element = {<Home />} />
<Route path="/About" element = {<About />} />
<Route path="/Contactus" element ={<Contactus />} />
<Route path="/Product" element = {<Product />} />
</Route>
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={router} />
  </React.StrictMode>,
)
