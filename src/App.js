import style from "./App.module.css";
import { WindowContainer } from "./WindowContainer";

function App() {
  return (
    <div className={style.wrap}>
      <h1 className={style.title}>Quotes</h1>
      <WindowContainer />
    </div>
  );
}

export default App;
