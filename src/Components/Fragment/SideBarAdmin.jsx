import Avatar from "../../assets/image/Avatar.png";
import TeamsIcon from "../../assets/image/TeamsIcon.svg";
import TransactionIcon from "../../assets/image/transaction.svg";
import ProductIcon from "../../assets/image/product.svg";
import dashboardIcon from "../../assets/image/dashboard.svg";

const navigasi = [
  { icon: dashboardIcon, text: "Dashboard", nav: "" },
  { icon: TeamsIcon, text: "Teams", nav: "" },
  { icon: TransactionIcon, text: "Transaction", nav: "" },
  { icon: ProductIcon, text: "Product", nav: "" },
];

const SideBarAdmin = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-white ">
      <div className="mt-20">
        {navigasi.map((a, b) => {
          return (
            <div className="flex gap-3 mt-5 font-semibold">
              <img src={a.icon} alt="" />
              <h1>{a.text}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-3 p-5 mt-3">
        <img src={Avatar} alt="" className="w-14" />
        <div className="">
          <h1 className="font-semibold">Adib Misbahul </h1>
          <p className="text-sm">Owner</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
