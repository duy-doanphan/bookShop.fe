import LoginPage from "./pages/login";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const Layout = () => (
    <>
        main page
    </>
);

export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            errorElement: <div>404 not found </div>,
        },
        {
            path: "/login",
            element: <LoginPage/>,
        },
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

