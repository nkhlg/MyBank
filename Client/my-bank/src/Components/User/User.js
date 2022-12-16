
import { Outlet, Link } from "react-router-dom";
// import UserNavbar from "./UserNavbar"
import './User.css'

import { Button } from "bootstrap";

function User() {
  return (
    <div className="mainbody">


      <div >
        <div className="container">
          <div className="profile">
            <div className="card ">
              <ul className="list-group list-group-flush ">
                <li className="list-group-item hello">Account Number : 834452444432</li>
                <li className="list-group-item">Name : Nikhil</li>
                <li className="list-group-item">Email : nikhilrnz@gmail.com</li>
                <li className="list-group-item">Phone : 9048110054</li>
              </ul>
            </div>


          </div>

          <div className="sub-body">
            <div>
              <Link to="/userDashboard/deposite">
                <button type="submit" className="adminBtn">Deposite</button>
              </Link>

            </div>
            <div>
              <Link to="/userDashboard/withdraw">
                <button type="submit" className="adminBtn">Withdraw</button>
              </Link>

            </div>

            <div>
              <Link to="/userDashboard/loan">
                <button type="submit" className="adminBtn">Apply for loan</button>
              </Link>

            </div>

          </div>
        </div>
      </div>






    </div>
  );
}

export default User;