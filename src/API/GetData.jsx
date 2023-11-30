import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { UserRole } from "./UserAPI";


const UserRoledata = () => {
    const { user } = useAuth();
    const { data: role, isLoading } = useQuery({
        queryKey: ["userRole"],
        queryFn: async () => {
          const data = await UserRole(user?.email);
          console.log(data);
          return data;
        },
      });
    return {role,isLoading}
};

export default UserRoledata;