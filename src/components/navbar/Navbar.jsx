import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="section navbar">
      <div className="row">
        <div className="navbar__items">
          <div className="navbar__items__logo">
            <h4>Neauthy</h4>
          </div>

          <div className="navbar__items__links">
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Find us</a>
          </div>

          <div className="navbar__mobile-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#000"
                size={36}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#000"
                size={36}
                onClick={() => setToggleMenu(true)}
              />
            )}

            {toggleMenu && (
              <div className="navbar__mobile-menu__container">
                <div className="navbar__mobile-menu__container__links">
                  <div className="navbar__mobile-menu__container__links__item">
                    <a href="#">Products</a>
                  </div>

                  <div className="navbar__mobile-menu__container__links__item">
                    <a href="#">About</a>
                  </div>

                  <div className="navbar__mobile-menu__container__links__item">
                    <a href="#">Find us</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
