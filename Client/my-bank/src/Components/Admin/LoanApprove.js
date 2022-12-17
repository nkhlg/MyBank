import { Link } from "react-router-dom";
import './Loanapprove.css';

function Loanapprove() {
    return (
        <>
        <div className="container">
        <div className="table-container">
        <table className="table table-striped">
            <tr>
                <th>Name</th>
                <th>ACCOUNT ID</th>
                <th>LOAN ID</th>
                <th>AMOUNT</th>
                <th></th>
            </tr>
            <tr>
                <td>Hrithik</td>
                <td>123</td>
                <td>1234</td>
                <td>5000</td>
                <td><button type="submit" className="btn btn-warning">Accpet</button>
                <button type="submit" className="btn btn-warning">Reject</button></td>
            </tr>   
            <tr>
                <td>Amal sojan</td>
                <td>345</td>
                <td>3434</td>
                <td>90000</td>
                <td><button type="submit" className="btn btn-warning">Accpet</button>
                <button type="submit" className="btn btn-warning">Reject</button></td>
            </tr>   
            <tr>
                <td>Anoop</td>
                <td>678</td>
                <td>6789</td>
                <td>25000</td>
                <td><button type="submit" className="btn btn-warning">Accpet</button>
                <button type="submit" className="btn btn-warning">Reject</button></td>
            </tr>        
        </table>
        </div>
        </div> 
        </>
    );
}
export default Loanapprove;