import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { router } from './router/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>,
);