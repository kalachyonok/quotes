import style from "./App.module.css";
import { WindowContainer } from "./WindowContainer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  console.log("App  quote:", quote);

  async function addNewQuoteHandler() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    console.log(data);
    setQuote(data);
  }

  return (
    <div className={style.wrap}>
      <h1 className={style.title}>Quotes</h1>
      <WindowContainer quote={quote} onAddNewQuote={addNewQuoteHandler} />
    </div>
  );
}

export default App;
