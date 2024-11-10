const CardProduct = (props) => {
  const { image, title, price } = props;

  return (
    <div className="">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h1>{price}</h1>
    </div>
  );
};

export default CardProduct;
