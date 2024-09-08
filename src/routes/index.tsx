import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import { DashboardLayout, AuthLayout } from '@/layouts'
import { Signin, Signup } from '@/features'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'signin',
        element: <Signin />
      }
    ]
  }
])
