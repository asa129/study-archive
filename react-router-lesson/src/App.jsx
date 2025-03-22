import { useState } from "react";
import "./App.css";
import { Child } from "./Child";

function App() {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);

  const onChangeValue = (e) => {
    setText(e.target.value);
  };
  const onClickDisplay = () => {
    setDisplay(!display);
  };
  return (
    <>
      <input type="text" onChange={onChangeValue} />
      {text}
      <br />
      <br />
      <button onClick={onClickDisplay}>子コンポーネント表示</button>
      <Child display={display} />
    </>
  );
}

export default App;
