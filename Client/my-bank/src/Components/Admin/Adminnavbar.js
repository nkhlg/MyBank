import { Link } from "react-router-dom";
import './Adminnavbar.css'
function Adminnavbar() {
    return (
        <>
            <div className="body">
                <nav className="navbar navbar-expand-sm">
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="/">MyBank</a>
                        </div>

                        <div >
                            <ul class="nav navbar-nav ms-auto" id="account">
                                <li class="nav-item dropdown">
                                    <a href="/admin" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="account">Account</a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="/" class="dropdown-item">Profile</a>

                                        <div class="dropdown-divider"></div>
                                        <a href="/" class="dropdown-item">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Adminnavbar;