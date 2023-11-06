import "./nav.styles.css";
import { ReactComponent as LogoSM } from "../../assets/icons/logo-sm.svg";
import { ReactComponent as LogoLG } from "../../assets/icons/logo-lg.svg";
import { ReactComponent as SearchIconSM } from "../../assets/icons/search-icon-sm.svg";
import { ReactComponent as SearchIconLG } from "../../assets/icons/search-icon-lg.svg";
import { ReactComponent as CartIconSM } from "../../assets/icons/cart-icon-sm.svg";
import { ReactComponent as CartIconLG } from "../../assets/icons/cart-icon-lg.svg";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";

const Nav = () => {
  return (
    <nav className="header-nav">
      <div className="nav-items-container">
        <a href="/" className="logo-sm nav-icon-sm">
          <LogoSM />
        </a>
        <a href="/" className="logo-lg nav-icon-lg">
          <LogoLG />
        </a>
        <div className="nav-items">
          <a href="/">Store</a>
          <a href="/">Mac</a>
          <a href="/">iPad</a>
          <a href="/">iPhone</a>
          <a href="/">Watch</a>
          <a href="/">Vision</a>
          <a href="/">AirPods</a>
          <a href="/">TV & Home</a>
          <a href="/">Entertainment</a>
          <a href="/">Accessories</a>
          <a href="/">Support</a>
        </div>
        <div className="nav-icons">
          <a href="/" className="nav-icon-sm">
            <SearchIconSM />
          </a>
          <a href="/" className="nav-icon-lg">
            <SearchIconLG />
          </a>
          <a href="/" className="nav-icon-sm">
            <CartIconSM />
          </a>
          <a href="/" className="nav-icon-lg">
            <CartIconLG />
          </a>
          <a href="/" className="menu-icon">
            <MenuIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
