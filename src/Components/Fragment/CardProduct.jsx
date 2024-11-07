import Button from "../Elements/Button";

const Header = (props) => {
  const { image } = props;
  return (
    <div className="flex justify-center h-36">
      <img
        src={image}
        alt="kopi"
        className="object-cover aspect-square rounded-2xl"
        width={150}
        height={150}
      ></img>
    </div>
  );
};

const Body = (props) => {
  const { name, price } = props;

  return (
    <div className="text-black">
      <h1 className="text-lg font-bold">{name}</h1>
      <h1 className="text-sm">{price}</h1>
    </div>
  );
};

const Footer = (props) => {
  const { handleAddToCart, id } = props;

  return (
    <Button
      classname={"w-8 h-8 bg-blue-500 rounded-full"}
      onClick={() => handleAddToCart(id)}
    >
      +
    </Button>
  );
};

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="justify-center w-1/4 p-2 border h-max border-slate-400 rounded-2xl">
      {children}
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
