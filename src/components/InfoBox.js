import style from "./InfoBox.module.scss";

const InfoBox = ({ text }) => {
  console.log(text);
  return (
    <div className={style.info_container}>
      <p>{text}</p>
    </div>
  );
};

export default InfoBox;
