export const Child = (props) => {
  const { display } = props;
  return display ? (
    <div>
      <p>子コンポーネント</p>
    </div>
  ) : null;
};
