import { useState, useCallback, useMemo } from "react";
import "./App.css";
import { Child } from "./Child";

function App() {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickDisplay = () => {
    setDisplay(!display);
  };
  const onClickClose = useCallback(() => setDisplay(!display), [display]);
  useMemo(() => {
    console.log(4 + 1);
  }, []);
  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickDisplay}>子コンポーネント表示</button>
      <Child display={display} onClickClose={onClickClose} />
    </>
  );
}

export default App;
