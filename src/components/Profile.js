import style from "./Profile.module.scss";

const Profile = ({ fRef }) => {
  return (
    <div className={style.profile}>
      <ul className={style.profile__content}>
        <li>My Stuff</li>
        <li>Switch Profile</li>
        <li>Settings</li>
      </ul>
      <button className={style.logout} ref={fRef}>
        Log out
      </button>
    </div>
  );
};

export default Profile;
