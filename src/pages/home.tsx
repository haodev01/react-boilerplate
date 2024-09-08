import { getUser } from '@/features'
import http from '@/lib/http'
import { useAppSelector } from '@/store/hook'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const user = useAppSelector(getUser)
  const navigate = useNavigate()
  const fetchData = async () => {
    await http.get('/dashboards/access')
  }
  const onLogout = async () => {
    await http.delete('/users/logout')
    localStorage.removeItem('user')
    navigate('/signin')
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>{user.email}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
