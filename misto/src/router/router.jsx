import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import CatalogLayout from '../components/CatalogLayout'

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            { index: true, element: <CatalogLayout /> },
            { path: 'catalog', element: <CatalogLayout /> },
        ],
    }
])

export function AppRouter() {
    return <RouterProvider router={router} />
}
