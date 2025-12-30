import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading</div>
  return user ? children : <Navigate to="/login" replace />
}

export const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading</div>
  return user ? <Navigate to="/" replace /> : children
}