import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Adminhome from './Components/Admin/Adminhome';
import Admin from  './Components/Admin/Admin';
import Loanapprovehome from './Components/Admin/Loanapprovehome';
import Loanapprove from './Components/Admin/LoanApprove';
import Accountapprovehome from './Components/Admin/Accountapprovehome'
import Accountapprove from './Components/Admin/Accountapprove';

import reportWebVitals from './reportWebVitals';
import Login from "./components/Login/Login";
import UserHome from './Components/User/UserHome';
import User from './Components/User/User'
import Loan from './Components/User/Loan';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {path: "login", element: <Login/>},
     
    ]
  },
  {
    path: "/admin",
    element: <Adminhome/>,children:[
      {path:'/admin',element: <Admin/>}
    ]
  },

  {
    path: "/admin/loanApprove",
    element : <Loanapprovehome/>,children:[
      {path: '/admin/loanApprove',element :<Loanapprove/>}
    ]
  },
  {
    path: "/admin/accountApprove",
    element : <Accountapprovehome/>,children:[
      {path: '/admin/accountApprove',element: <Accountapprove/>}
    ]


  },
  {
    path: "/userDashboard",
    element: <UserHome/>, children:[{
      path : "/userDashboard",
      element : <User/>
    },
    {
      path : "/userDashboard/loan",
      element : <Loan/>
    }
  ]

  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
