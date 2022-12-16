
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Public/Home";



import {Outlet} from "react-router-dom";


function App() {
  
  return (

    <div className="App" >
      <Navbar></Navbar>
      <Login></Login>
      <Home></Home>
      <Outlet></Outlet>

    </div>
  );
}

export default App