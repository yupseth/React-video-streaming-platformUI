import style from "./Menu.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import icon from "../img/Anima_Icon.png";
import { Link, Outlet } from "react-router-dom";

const Menu = ({ onHideMenu }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "rgba(231, 231, 231, 0.81)",
    fontFamily: "Nunito Sans",
  };

  return (
    <>
      <div className={style.menu}>
        <ul className={style.menu__content}>
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
      <div className={style.outsideClickArea} onClick={onHideMenu} />
    </>
  );
};

export default Menu;
