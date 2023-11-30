import AdminStats from "./Stats/AdminStats";
import CreatorInfo from "./Stats/CreatorInfo";
import UserStats from "./Stats/UserStats";
import Spiner from "../Shared/Spiner";
import UserRoledata from "../../API/GetData";

const Stats = () => {
  const { role, isLoading } = UserRoledata();
  console.log(role);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div>
          {role == "admin" && <AdminStats />}
          {role == "user" && <UserStats />}
          {role == "creator" && <CreatorInfo />}
        </div>
      )}
    </>
  );
};

export default Stats;
