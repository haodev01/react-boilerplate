import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout, AuthLayout } from '@/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: 'dashboard',
        lazy: async () => {
          const Home = await import('@/pages/home');
          return { Component: Home.default };
        }
      },
      {
        path: 'orders',
        lazy: async () => {
          const Orders = await import('@/pages/orders');
          return { Component: Orders.default };
        }
      },
      {
        path: 'inventory',
        lazy: async () => {
          const Inventory = await import('@/pages/inventory');
          return { Component: Inventory.default };
        }
      },
      {
        path: 'suppliers',
        lazy: async () => {
          const Suppliers = await import('@/pages/suppliers');
          return { Component: Suppliers.default };
        }
      },
      {
        path: 'stores',
        lazy: async () => {
          const Stores = await import('@/pages/stores');
          return { Component: Stores.default };
        }
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'signin',
        lazy: async () => {
          const Signin = await import('@/pages/signin');
          return { Component: Signin.default };
        }
      },
      {
        path: 'signup',
        lazy: async () => {
          const Signup = await import('@/pages/signup');
          return { Component: Signup.default };
        }
      }
    ]
  }
]);
