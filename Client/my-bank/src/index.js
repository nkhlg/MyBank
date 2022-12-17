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
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
