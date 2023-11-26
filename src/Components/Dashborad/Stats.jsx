import AdminStats from "./Stats/AdminStats";
import CreatorInfo from "./Stats/CreatorInfo";
import UserStats from "./Stats/UserStats";

export const Role = 'creator'
const Stats = () => {
    return (
        <div>
            {Role == 'admin'&& <AdminStats/>}
            {Role == 'user' && <UserStats/>}
            {Role == 'creator'&& <CreatorInfo/>}
            
        </div>
    );
};

export default Stats;