import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserHome from './Components/User/UserHome';
import User from './Components/User/User'
import Loan from './Components/User/Loan';
import PersonalLoan from './Components/User/LoanDetails/PersonalLoan';
import HomeLoan from './Components/User/LoanDetails/HomeLoan';
import GoldLoan from './Components/User/LoanDetails/Goldloan';
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
    path: "/userDashboard",
    element: <UserHome/>, children:[{
      path : "/userDashboard",
      element : <User/>
    },
    {
      path : "/userDashboard/loan",
      element : <Loan/>, children:[{
        path : "/userDashboard/loan/personalLoan",
        element : <PersonalLoan/>
      },
      {
        path : "/userDashboard/loan/homeLoan",
        element : <HomeLoan/>
      },
      {
        path : "/userDashboard/loan/goldLoan",
        element : <GoldLoan/>
      }

      
    ]
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
