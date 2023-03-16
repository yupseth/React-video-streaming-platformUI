import style from "./Nav.module.scss";
import logo from "../img/Anima_Logo.png";
import icon from "../img/Anima_Icon.png";

const Nav = () => {
  return (
    <div className={style.nav}>
      <img className={style.nav__logo} src={logo} alt="anima logo" />
    </div>
  );
};

export default Nav;
