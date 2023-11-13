import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './Components/signin/Signin.jsx';
import SignUp from './Components/signup/SignUp.jsx';
import ContextProvider from './contextProvider/ContextProvider.jsx';
import HomeBar from './Components/Home/HomeBar.jsx';
import Private from './PrivateRoute/Private.jsx';
import PrivateContent from './PrivateRoute/PrivateContent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/signin",
        element:<Signin/>
      },
      {
        path:"/",
        element:<HomeBar/>
      },
      {
        path:"/private",
        element:<Private><PrivateContent/></Private>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
         <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
