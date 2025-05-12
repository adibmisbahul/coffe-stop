const CardAdmin = (props) => {
  const { title, data, icon, detailText, color = "bg-white" } = props;
  return (
    <div
      className={`w-[18vw] h-[20vh] border-slate-800 rounded-lg ${color} flex flex-col justify-around`}
    >
      <div className="flex gap-2 pl-2">
        <img src={icon} alt="" />
        <h1 className="font-medium">{title}</h1>
      </div>
      <h1 className="text-2xl font-semibold text-center">{data}</h1>
      <h1 className="font-semibold text-center ">{detailText}</h1>
    </div>
  );
};

export default CardAdmin;
