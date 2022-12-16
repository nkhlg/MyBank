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
                                <li className="list-group-item">iD : 2</li>
                                <li className="list-group-item">Name : Hrithik</li>
                                <li className="list-group-item">Email : hrithikrnz@gmail.com</li>
                                <li className="list-group-item">phone : 9048110054</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="adminBtnDiv">
                    <div>
                        <button type="submit" className="adminBtn">Loan Approval</button>
                    </div>
                    <div>
                    <button type="submit" className="adminBtn">Account Approval</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin
