import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignIn } from "@fortawesome/free-solid-svg-icons";
import logosite from "../../assets/logo/logo6.png";
import "../navbar/navbar.css";
import NavItem from "./navitem";
import SearchBar from "./searchbar";
import { cartContext } from "../../context/shopcontext";
import { User } from "../../context/usercontext";

const Navb = () => {
  const { user, logout } = User();
  const { cart } = useContext(cartContext);
  const cartCount = cart.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg ">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {user ? (
            <>
              <h6 className="nav-link mx-3 my-2">welcome {user.userName}!</h6>
              <button onClick={logout} className="button my-1">logout</button>
            </>
          ) : (
            <NavItem to="/login">
              Login/Signup
              <FontAwesomeIcon icon={faSignIn} className="icon" />
            </NavItem>
          )}
        </ul>
        <SearchBar />
        <Link className="navbar-brand" to="/">
          <img src={logosite} alt="logo" className="logo-site" />
        </Link>
      </nav>

      {/* secend nav */}
      <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <div className="mx-auto">
            <ul className="nav justify-content-center">
              <NavItem to="./cart">
                Cart
                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                {cartCount > 0 && (
                  <span className="cart-items-count">{cartCount}</span>
                )}
              </NavItem>
              <NavItem to="./ring">Ring</NavItem>
              <NavItem to="./necklace">Necklace</NavItem>
              <NavItem to="./earring">Earring</NavItem>
              <NavItem to="./bracelet">Bracelet</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navb;
