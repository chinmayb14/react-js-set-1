const GiveButton = ({
  backgroundColor,
  color,
  borderRadius,
  padding,
  text,
}) => {
  return (
    <div>
      <button
        style={{
          backgroundColor,
          color,
          borderRadius,
          padding,
        }}
      >
        {text}
      </button>
    </div>
  );
};
export default GiveButton;
