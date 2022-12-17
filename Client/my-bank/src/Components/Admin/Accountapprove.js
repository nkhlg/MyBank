import { Link } from "react-router-dom";
import './Loanapprove.css';

function Accountapprove() {
    return (
        <>
        <div className="container">
        <div className="table-container">
        <table className="table table-striped">
            <tr>
                <th>Name</th>
                <th>ACCOUNT NO</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th></th>
            </tr>
            <tr>
                <td>Hrithik</td>
                <td>113</td>
                <td>9048110054</td>
                <td>hrithik@gmail.com</td>
                <td><button type="submit" className="btn btn-warning">Accpet</button>
                <button type="submit" className="btn btn-warning">Reject</button></td>
            </tr>   
            <tr>
                <td>Amal sojan</td>
                <td>345</td>
                <td>9778487549</td>
                <td>amal@gmail.com</td>
                <td><button type="submit" className="btn btn-warning">Accpet</button>
                <button type="submit" className="btn btn-warning">Reject</button></td>
            </tr>   
            <tr>
                <td>Anoop</td>
                <td>678</td>
                <td>9946116190</td>
                <td>anoop@gmail.com</td>
                <td><button type="submit" className="btn btn-warning">Accpet</button>
                <button type="submit" className="btn btn-warning">Reject</button></td>
            </tr>        
        </table>
        </div>
        </div> 
        </>
    );
}
export default Accountapprove;