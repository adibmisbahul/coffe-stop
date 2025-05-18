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
    <div className="flex flex-col items-center justify-center w-full h-full bg-white border border-gray-400 rounded-xl">
      <div className="">
        {navigasi.map((a, b) => {
          return (
            <div className="flex gap-3 mt-[8vh] font-semibold">
              <a href={a.nav}>
                <img src={a.icon} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarAdmin;
