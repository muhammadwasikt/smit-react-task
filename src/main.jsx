import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider, useParams,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Detail from './components/common/detail/Detail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
