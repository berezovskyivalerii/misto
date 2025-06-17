import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import CatalogLayout from '../components/CatalogLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Product from '../components/Product'
import { PageNotFound } from '../pages/PageNotFound'
import ShoppingCart from '../components/ShoppingCart'
import Category from '../components/Category'

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            { index: true, element: <CatalogLayout /> },
            { path: 'catalog', element: <CatalogLayout /> },
            { path: 'product', element: <Product />},
            { path: 'shopping-cart', element: <ShoppingCart /> },
            { path: 'category', element: <Category /> }

        ],
    },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/notfound', element: <PageNotFound />}
])

export function AppRouter() {
    return <RouterProvider router={router} />
}
