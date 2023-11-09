import style from "./WindowContainer.module.css";

export const WindowContainer = (props) => {
  const { quote, onAddNewQuote, isLoading, error } = props;

  let content = (
    <div className={style.qoute}>
      <div className={style.text}>{quote?.quote}</div>
      <div className={style.author}>{quote?.author}</div>
    </div>
  );

  if (isLoading) {
    content = <p>Идет загрузка...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <div className={style.window}>
      <button className={style.btn} type="button" onClick={onAddNewQuote}>
        New Quote
      </button>
      {content}
    </div>
  );
};
