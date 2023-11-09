import style from "./App.module.css";
import { WindowContainer } from "./WindowContainer";
import { useCallback, useState } from "react";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  console.log("App  quote:", quote);

  const addNewQuoteHandler = useCallback(async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    setQuote(data);
  }, []);

  useEffect(() => {
    addNewQuoteHandler();
  }, [addNewQuoteHandler]);

  return (
    <div className={style.wrap}>
      <h1 className={style.title}>Quotes</h1>
      <WindowContainer quote={quote} onAddNewQuote={addNewQuoteHandler} />
    </div>
  );
}

export default App;
