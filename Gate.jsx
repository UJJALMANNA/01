import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

// ---------- Queries / Contact form ----------
export const submitQuery = (data) => api.post('/api/queries', data)

// ---------- News ----------
export const getLiveNews = (refresh = false) =>
  api.get(`/api/news/live${refresh ? '?refresh=true' : ''}`)

export const getNewsPosts = (category) =>
  api.get(`/api/news/posts${category ? `?category=${category}` : ''}`)

// ---------- GATE Guidance ----------
export const getGateOverview = () => api.get('/api/gate/overview')

export default api
