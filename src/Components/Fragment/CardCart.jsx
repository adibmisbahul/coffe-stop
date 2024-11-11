const CardCart = (props) => {
  const { key, title, price, image, click = () => {} } = props;
  return (
    <div
      className="flex items-center w-[20vw] gap-5 p-2 mt-10 border rounded shadow"
      key={key}
    >
      <button
        onClick={click}
        className="text-white bg-blue-600 rounded-full w-[2vw]"
      >
        -
      </button>
      <img
        src={image}
        alt=""
        width={200}
        height={200}
        className="bg-cover rounded-full w-[4vw] h-[8vh]"
      />
      <div className="flex flex-col">
        <h1 className="font-bold ">{title}</h1>
        <h1>
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(price)}
        </h1>
      </div>
    </div>
  );
};

export default CardCart;
