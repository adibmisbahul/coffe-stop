const Input = (props) => {
  const {
    type = "text",
    placeholder = "default",
    onChange = () => {},
    className = "w-full px-3 py-2 text-sm text-black placeholder-gray-600 bg-transparent border border-gray-300 rounded-md dark:border-gray-700 invalid:border-red-500 dark:placeholder-gray-300",
  } = props;
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
