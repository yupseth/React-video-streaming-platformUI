import style from "./Nav.module.scss";
import logo from "../img/Anima_Logo.png";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "./Menu";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  //////////
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  //////////

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const showMenu = () => {
    console.log("ia uite meniul");
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <div className={`${style.nav} ${isScrolled && style.nav__black}`}>
      <MenuIcon className={style.menu_icon} onClick={showMenu} />
      {isVisibleMenu && <Menu onHideMenu={showMenu} />}

      <img className={style.nav__logo} src={logo} alt="anima logo" />

      <div className={style.right}>
        <SearchIcon className={style.search_icon} />
        <img
          className={style.nav__avatar}
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
