import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import style from './App.module.css';
import { WindowContainer } from './WindowContainer';

function App() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addNewQuoteHandler = useCallback(async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');

      setQuote(response.data);
    } catch (e) {
      setError(e.response.data.message || e.message);
    }
    setIsLoading(false);
  }, []);

  // const addNewQuoteHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(false);

  //   try {
  //     const response = await fetch("https://dummyjson.com/quotes/rando");
  //     if (!response.ok) {
  //       const data = await response.json();
  //       throw new Error(data.message || "Что-то пошло не так");
  //     }
  //     const data = await response.json();
  //     setQuote(data);
  //   } catch (e) {
  //     setError(e.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    addNewQuoteHandler();
  }, [addNewQuoteHandler]);

  return (
    <div className={style.wrap}>
      <h1 className={style.title}>Quote of the day</h1>
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
