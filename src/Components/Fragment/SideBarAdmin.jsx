import Avatar from "../../assets/image/Avatar.png";
import TeamsIcon from "../../assets/image/TeamsIcon.svg";

const SideBarAdmin = () => {
  return (
    <div className="flex flex-col  items-center ">
      <div className="flex items-center gap-3">
        <img src={Avatar} alt="" className="w-14" />
        <div className="">
          <h1 className="font-semibold">Adib Misbahul Ulum</h1>
          <p>Owner</p>
        </div>
      </div>
      <div className="">
        <div className="flex gap-3">
          <img src={TeamsIcon} alt="" />
          <h1>Teams</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
