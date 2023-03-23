import style from "./Nav.module.scss";
import logo from "../img/Anima_Logo.png";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  //////////
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  //////////
  const [isVisibleProfile, setIsVisibleProfile] = useState(false);
  //////////
  const [results, setResults] = useState([]);
  //////////
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);

  const toggleVisibility = () => {
    setIsVisibleSearch(!isVisibleSearch);
  };

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
    setIsVisibleMenu(!isVisibleMenu);
    setIsVisibleProfile(false);
  };

  const onProfileClick = () => {
    setIsVisibleProfile(!isVisibleProfile);
    setIsVisibleMenu(false);
  };

  return (
    <div className={`${style.nav} ${isScrolled && style.nav__black}`}>
      <MenuIcon className={style.menu_icon} onClick={showMenu} />
      {isVisibleMenu && <Menu onHideMenu={showMenu} />}

      <img className={style.nav__logo} src={logo} alt="anima logo" />

      <div className={style.right}>
        <SearchBar
          isVisible={isVisibleSearch}
          toggleVisibility={toggleVisibility}
          setResults={setResults}
        />
        {results.length > 0 && <SearchResultsList results={results} />}

        <img
          onClick={onProfileClick}
          className={style.nav__avatar}
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="user avatar"
        />
        {isVisibleProfile && <Profile />}
      </div>
    </div>
  );
};

export default Nav;
