import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/Products'
import AdminPanel from './pages/admin/AdminPannel'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products/>,
  },
  {
    path: '/admin',
    element: <AdminPanel />,
  },  
])

function App() {


  return (
    <>

<RouterProvider router={router}/>
    </>
  )
}

export default App
