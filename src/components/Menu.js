import style from "./Menu.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import icon from "../img/Anima_Icon.png";
import { Link, Outlet } from "react-router-dom";
import { useRef, useEffect } from "react";

const Menu = ({ onHideMenu }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "rgba(231, 231, 231, 0.81)",
    fontFamily: "Nunito Sans",
  };
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onHideMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className={style.menu}>
        <ul className={style.menu__content} ref={menuRef}>
          <CloseIcon onClick={onHideMenu} className={style.closeIcon} />

          <Link to="/" onClick={onHideMenu} style={linkStyle}>
            <li>Home </li>
          </Link>

          <Link to="/movies" onClick={onHideMenu} style={linkStyle}>
            <li>Movies</li>
          </Link>

          <Link to="/series" onClick={onHideMenu} style={linkStyle}>
            <li>Series</li>
          </Link>
        </ul>
        <p className={style.anima_text}>ANIMA</p>
        <img src={icon} alt="anima icon" />
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
