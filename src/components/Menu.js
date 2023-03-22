import style from "./Menu.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import icon from "../img/Anima_Icon.png";

const Menu = ({ onHideMenu }) => {
  return (
    <div className={style.menu}>
      <ul className={style.menu__content}>
        <CloseIcon onClick={onHideMenu} className={style.closeIcon} />
        <li>Home </li>
        <li>Movies</li>
        <li>Series</li>
      </ul>
      <p className={style.anima_text}>ANIMA</p>
      <img src={icon} alt="anima icon" />
    </div>
  );
};

export default Menu;
