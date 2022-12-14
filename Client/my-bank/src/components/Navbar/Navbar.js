import {React} from 'react';
import {Link} from "react-router-dom"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm">
			  <div className="container">
				<Link to={'/'} className="nav-link" style={{color:"white"}} >MyBank</Link>
				<button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<Link to={'#'} className="nav-link" style={{color:"white"}}>Register</Link>
						</li>
						<li className="nav-item">
							<Link to={'#'} className="nav-link" style={{color:"white"}}>Login</Link>
						</li>
					</ul>
				</div>
		  </div>
		</nav>
		
	)
}

export default Navbar