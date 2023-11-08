import style from "./WindowContainer.module.css";

export const WindowContainer = () => {
  return (
    <div className={style.window}>
      <button className={style.btn} type="bytton">
        New Quote
      </button>
      <div className={style.qoute}>
        <div className={style.text}>Text</div>
        <div className={style.author}>Author</div>
      </div>
    </div>
  );
};
