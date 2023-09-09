import LoginPage from '@/pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from '@/pages/contact'
import BookPage from '@/pages/book'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import RegisterPage from '@/pages/register'
import styles from '@/styles/app.module.scss'
import { fetchAccount } from '@/redux/slices/authSlice.ts'
import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hook.ts'

const Layout = () => (
  <>
    <div className='layout-app'>
      <Header />
      <div className={styles['content-app']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  </>
)

export default function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // if (
    //     window.location.pathname === '/login'
    //     || window.location.pathname === '/register'
    // )
    //     return;
    dispatch(fetchAccount())
  }, [dispatch])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>404 not found </div>,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'contacts',
          element: <ContactPage />
        },
        {
          path: 'book',
          element: <BookPage />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
