import style from "./Footer.module.scss";
import icon from "../img/Anima_Icon.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img className={style.anima_icon} src={icon} alt="anima logo" />

      <div className={style.credits}>
        Powered by
        <a href="https://www.themoviedb.org/" target="blank">
          TMDB
        </a>
      </div>

      <div className={style.bottomHalf}>
        <div className={style.copyright}>
          <p>Anima. Copyright ©Cristina Șuică {new Date().getFullYear()}</p>
        </div>
        <div className={style.bottom}>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
