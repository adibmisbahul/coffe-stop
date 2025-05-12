import Avatar from "../../assets/image/Avatar.png";
import TeamsIcon from "../../assets/image/TeamsIcon.svg";
import TransactionIcon from "../../assets/image/transaction.svg";
import ProductIcon from "../../assets/image/product.svg";
import dashboardIcon from "../../assets/image/dashboard.svg";

const navigasi = [
  { icon: dashboardIcon, text: "Dashboard", nav: "" },
  { icon: TeamsIcon, text: "Sell report", nav: "" },
  { icon: TransactionIcon, text: "Transaction", nav: "/transaction" },
  { icon: ProductIcon, text: "Product", nav: "" },
  { icon: ProductIcon, text: "my team", nav: "" },
];

const SideBarAdmin = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-white justify-evenly">
      <div className="">
        {navigasi.map((a, b) => {
          return (
            <div className="flex gap-3 mt-[8vh] font-semibold">
              <img src={a.icon} alt="" />
              <a href={a.nav}>{a.text}</a>
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
