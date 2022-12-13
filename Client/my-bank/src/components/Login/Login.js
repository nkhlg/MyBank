import { React } from 'react';
import { Link } from 'react-router-dom';
import './login.css';


function Login() {

  return (

    <div className='container'>
      <form >
        <div>
          <h1 className='text-center' >Login</h1>
        </div>
        <div>
          <h4>To sign-in you should already have a account in our bank</h4>
        </div>
        <div>
          <label htmlFor="email">UserName</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className='forget'>
          <Link to={'#'} className="nav-link" >Forget Password?</Link>
        </div>
        <div className='d-grid mt-2'>
          <button type="submit" className="btn btn-primary"><Link to={'#'} className="nav-link" >LOG IN</Link></button>
        </div>
        <div>
          <h4>if it's your first time,Sign-up first</h4>
        </div>
        <div className='d-grid mt-2'>
          <button type="submit" className="btn btn-secondary"><Link to={'#'} className="nav-link" >Register</Link></button>
        </div>
      </form>

    </div>
  )

}
export default Login