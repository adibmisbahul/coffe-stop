import { useState } from "react";
import AccountIcon from "../../assets/image/account.png";
import FormLogin from "./FormLogin";

const SideBar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleLogin = () => {
    setShowModal(true);
  };

  const Modal = () => {
    return (
      <div className="flex flex-col absolute left-[35%] top-[20%] bg-white rounded xl shadow">
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-5 top-3"
        >
          X
        </button>
        <FormLogin />
      </div>
    );
  };

  return (
    <div className="w-[90px] h-[96vh] bg-gray-50 rounded-xl shadow flex-col flex items-center ">
      <img
        src={AccountIcon}
        alt=""
        width={30}
        height={30}
        className="mt-6 cursor-pointer hover:scale-105"
        onClick={handleLogin}
      />
      {showModal && <Modal />}
    </div>
  );
};
export default SideBar;
