import "./nav.styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";

const Nav = () => {
  return (
    <nav>
      <div className="nav-items-container">
        <a href="/">
          <Logo />
        </a>
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
        <a href="/">
          <SearchIcon />
        </a>
        <a href="/">
          <CartIcon />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
