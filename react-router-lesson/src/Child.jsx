import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const Child = memo((props) => {
  const { display, onClickClose } = props;
  console.log("再レンダリングされた");

  const datas = [...Array(2000).keys()];
  datas.map((data) => {
    console.log(data);
  });
  return display ? (
    <div style={style}>
      <p>子コンポーネント</p>
      <button onClick={onClickClose}>閉じる</button>
    </div>
  ) : null;
});
