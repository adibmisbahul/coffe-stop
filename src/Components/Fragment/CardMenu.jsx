const CardMenu = (props) => {
  const { image, title, price, click = () => {}, key, color } = props;
  return (
    <div className="flex flex-col gap-3 p-5 bg-white rounded shadow" key={key}>
      <img src={image} alt="" className="w-[10vw] h-[28vh] rounded bg-cover" />
      <h1 className="font-semibold">{title}</h1>
      <h2>{price}</h2>
      <button
        onClick={() => click()}
        className="w-6 text-white bg-blue-700 rounded-full"
      >
        +
      </button>
    </div>
  );
};

export default CardMenu;
