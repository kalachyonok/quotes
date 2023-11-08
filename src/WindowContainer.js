import style from "./WindowContainer.module.css";

export const WindowContainer = (props) => {
  const { quote, onAddNewQuote } = props;

  return (
    <div className={style.window}>
      <button className={style.btn} type="button" onClick={onAddNewQuote}>
        New Quote
      </button>
      <div className={style.qoute}>
        <div className={style.text}>{quote?.quote}</div>
        <div className={style.author}>{quote?.author}</div>
      </div>
    </div>
  );
};
