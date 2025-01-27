import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.tsx'
import ProductDetail from "./components/DetailProduct.tsx";
import About from './pages/about/About.tsx'
import Contact from './pages/contact/Contact.tsx'
import Signin from './pages/signIn/Signin.tsx'
import Products from './pages/products/Products.tsx'
import Signup from './pages/signUp/Signup.tsx'
import LandingPage from './pages/landing/LandingPage.tsx'
// import NotFound from "../components/not-found/not-found.tsx";

const route = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: '',
        element: <LandingPage/>
      },
      {
        path:":id",
        element:<ProductDetail/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"signin",
        element:<Signin/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"signup",
        element:<Signup/>
      },
     
      // {
      //   path: '*',
      //   element:<NotFound/>
      // }
     
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={route} />
  </StrictMode>,
)