import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/:id",
        element:<MovieDetail/>
      }
    ]
  }
])
function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

