import { Link } from "react-router-dom"
import './Admin.css'

function Admin() {
    return (
        <>
            <div className="container">
                <div className="profile">
                    <div className="right-div">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Name : Hrithik</li>
                                <li className="list-group-item">Email : hrithikrnz@gmail.com</li>
                                <li className="list-group-item">Phone : 9048110054</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="adminBtnDiv">
                    <div>
                        <Link to="/admin/loanApprove"> 
                        <button type="submit" className="adminBtn">Loan Approval</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/admin/accountApprove">
                        <button type="submit" className="adminBtn">Account Approval</button>
                        </Link>    
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin
