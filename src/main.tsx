// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Products from './pages/Products.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import Cart from './pages/Cart.tsx'
import Checkout from './pages/Checkout.tsx'
import Wishlist from './pages/Wishlist.tsx'
import Contact from './pages/Contact.tsx'
import Error from './pages/Error.tsx'
import Category from './pages/Category.tsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "category",
        element: <Category/>
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <RouterProvider router={appRouter} />
  // </StrictMode>,
)
