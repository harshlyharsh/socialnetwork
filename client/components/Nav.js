import {useContext} from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Nav = () => {
  const [state, setState]= useContext(UserContext);

  const router = useRouter();

  const logout=()=>{
    window.localStorage.removeItem('auth');
    setState(null);
router.push("/login");
  };

    return (
       <nav className="nav d-flex justify-content-between" style={{backgroundColor:"blue"}}>
  
  <Link href="/" className="nav-link text-light logo">
socialnetwork
  </Link>

  {state !==null ? (
    <>
    <Link href="/user/dashboard" className="nav-link text-light">
    {state && state.user && state.user.name}
  </Link>

    <Link onClick={logout} className="nav-link text-light">
Logout
  </Link>
    </>
  ) : (<>
  <Link href="/login" className="nav-link text-light">
Login
  </Link>
 
  
  <Link href="/register" className="nav-link text-light">
Register
  </Link>
  </>)}
 
  
  

  
 
</nav>


    );
};
export default Nav;