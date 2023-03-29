import style from "./Nav.module.scss";
import logo from "../img/Anima_Logo.png";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ results, setResults }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  //////////
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  //////////
  const [isVisibleProfile, setIsVisibleProfile] = useState(false);
  //////////
  // const [results, setResults] = useState([]);
  //////////
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  ////////////
  const navigate = useNavigate();
  const profileRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsVisibleProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

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

      <img
        className={style.nav__logo}
        src={logo}
        alt="anima logo"
        onClick={() => navigate("/")}
      />

      <div className={style.right}>
        <Link to="/search">
          <SearchBar setResults={setResults} results={results} />{" "}
        </Link>

        <img
          onClick={onProfileClick}
          className={style.nav__avatar}
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="user avatar"
        />
        {isVisibleProfile && <Profile fRef={profileRef} />}
      </div>
    </div>
  );
};

export default Nav;
