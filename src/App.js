import style from "./App.module.css";
import { WindowContainer } from "./WindowContainer";
import { useCallback, useState } from "react";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addNewQuoteHandler = useCallback(async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) {
        throw new Error("Что-то пошло не так");
      }
      const data = await response.json();
      setQuote(data);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    addNewQuoteHandler();
  }, [addNewQuoteHandler]);

  return (
    <div className={style.wrap}>
      <h1 className={style.title}>Quotes</h1>
      <WindowContainer
        isLoading={isLoading}
        error={error}
        quote={quote}
        onAddNewQuote={addNewQuoteHandler}
      />
    </div>
  );
}

export default App;
