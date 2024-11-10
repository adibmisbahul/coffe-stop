import { Children } from "react";

const CardMenu = (props) => {
  const { image, title, price, click = () => {}, key } = props;
  return (
    <div className="p-5 bg-white rounded shadow" key={key}>
      <img src={image} alt="" />
      <h1 className="font-semibold">{title}</h1>
      <h2>{price}</h2>
      <button
        onClick={() => click()}
        className="p-1 text-white bg-blue-700 rounded-full"
      >
        +
      </button>
    </div>
  );
};

export default CardMenu;
