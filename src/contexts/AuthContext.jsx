import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../services/api.js'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = useCallback(async () => {
    try {
      const response = await api.get('/auth/me/')
      setUser(response.data)
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  const login = useCallback(async (credentials) => {
    try {
      const response = await api.post('/auth/login/', credentials)
      await checkAuth() 
      const { from } = location.state || { from: { pathname: '/' } }
      navigate(from.pathname, { replace: true })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.error || 'Login failed' }
    }
  }, [navigate, location.state])

  const logout = useCallback(async () => {
    try {
      await api.post('/auth/logout/')
    } catch (error) {
      console.log(error)
    } finally {
      setUser(null)
      navigate('/', { replace: true })
    }
  }, [navigate])

  
  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 && !error.config._retry) {
          error.config._retry = true
          try {
            await api.post('/auth/refresh/')
            return api(error.config) 
          } catch (refreshError) {
            await logout()
            return Promise.reject(refreshError)
          }
        }
        return Promise.reject(error)
      }
    )

    return () => api.interceptors.response.eject(interceptor)
  }, [logout])

  const value = {
    user,
    login,
    logout,
    loading,
    checkAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}