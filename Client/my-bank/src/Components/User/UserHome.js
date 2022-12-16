import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar"



function UserHome() {
  return (
    <>

      <header>
        <UserNavbar></UserNavbar>
      </header>


      <main>
        <Outlet></Outlet>

      </main>




    </>
  );
}

export default UserHome;