import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <Link to="/"><img src="https://res.cloudinary.com/dejpg4ert/image/upload/v1687455167/pngwing.com_16_dhnxxv.png" alt="libro" /></Link>

        <ul className="NavBarUl">
          <li className="NavBarLi"><Link to="/category/ficcion" className="NavBarA">Ficcion</Link></li>
          <li className="NavBarLi"><Link to="/category/religion" className="NavBarA">Religion</Link></li>
          <li className="NavBarLi"><Link to="/category/comic" className="NavBarA">Comic</Link></li>
          
          
          
        </ul>

        <CartWidget />
      </div>
     <Outlet />
    </div>
  );
};



export default Navbar;
