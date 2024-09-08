import { useAppSelector } from '@/store/hook'
import { Navigate, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  const user = useAppSelector((state) => state.auth.user)
  if (!user.id) return <Navigate to='/signin' replace={true} />
  return (
    <>
      <h1>Header Dashboard</h1>
      <Outlet />
      <h1>Footer Dashboard</h1>
    </>
  )
}
