const CardAdmin = (props) => {
  const {
    title,
    data,
    style = "p-5 border-slate-800 rounded-lg  bg-white",
  } = props;
  return (
    <div className={style}>
      <h1 className="font-bold">{title}</h1>
      <h1 className="text-center">{data}</h1>
    </div>
  );
};

export default CardAdmin;
