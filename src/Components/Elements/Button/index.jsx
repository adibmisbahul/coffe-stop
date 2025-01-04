const Button = (props) => {
  const { classname, onClick, children } = props;
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
