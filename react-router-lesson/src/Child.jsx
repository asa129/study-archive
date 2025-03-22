const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const Child = (props) => {
  console.log("再レンダリングされた");
  const { display } = props;
  const keys = [...Array(2000).keys()];
  keys.map((key) => {
    console.log(key);
  });
  return display ? (
    <div style={style}>
      <p>子コンポーネント</p>
    </div>
  ) : null;
};
