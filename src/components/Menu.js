import style from "./Menu.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import icon from "../img/Anima_Icon.png";
import { Link, Outlet } from "react-router-dom";

const Menu = ({ onHideMenu }) => {
  return (
    <>
      <div className={style.menu}>
        <ul className={style.menu__content}>
          <CloseIcon onClick={onHideMenu} className={style.closeIcon} />
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
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
