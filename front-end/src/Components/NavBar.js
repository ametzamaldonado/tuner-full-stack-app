import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
       <Link to="/songs"><h1><span>Tuner</span></h1></Link>
    </nav>
  )
}

export default NavBar;