import LoginPage from '@/pages/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactPage from '@/pages/contact';
import BookPage from '@/pages/book';
import { Outlet } from 'react-router-dom';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import Home from '@/components/client/Home';
import RegisterPage from '@/pages/register';
import styles from '@/styles/app.module.scss';
import { fetchAccount } from '@/redux/slices/accountSlice.ts';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook.ts';
import Loading from '@/components/share/Loading';
import NotFoundPage from '@/components/share/NotFound';
import AdminPage from '@/pages/admin';
import ProtectedRoute from '@/components/share/ProtectedRoute';

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
);

const LayoutAdmin = () => {
  return (
    <>
      <div className='layout-app'>
        {/*<Header />*/}
        <div className={styles['content-app']}>
          <Outlet />
        </div>
        {/*<Footer />*/}
      </div>
    </>
  );
};

export default function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.account.isLoading);

  useEffect(() => {
    if (
      window.location.pathname === '/login' ||
      window.location.pathname === '/register' ||
      window.location.pathname === '/'
    )
      return;
    dispatch(fetchAccount());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'contacts',
          element: <ContactPage />,
        },
        {
          path: 'book',
          element: <BookPage />,
        },
      ],
    },
    {
      path: '/admin',
      element: <LayoutAdmin />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'user',
          element: <ContactPage />,
        },
        {
          path: 'book',
          element: <BookPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]);

  return (
    <>
      {!isLoading ||
      window.location.pathname === '/login' ||
      window.location.pathname === '/register' ||
      window.location.pathname === '/' ? (
        <RouterProvider router={router} />
      ) : (
        <Loading />
      )}
    </>
  );
}
