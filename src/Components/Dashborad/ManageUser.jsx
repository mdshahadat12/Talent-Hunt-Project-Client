import { useState } from "react";
import { AllUser } from "../../API/UserAPI";
import RoleUpdateModal from "./RoleUpdateModal";
import { useQuery } from "@tanstack/react-query";
import Spiner from "../Shared/Spiner";

const ManageUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {setIsOpen(false);}
  function openModal() {setIsOpen(true);}
  const [email , setEmail] = useState(null)
  const {data=[],isLoading,refetch} = useQuery({
    queryKey:['User'],
    queryFn: async()=>{
      const data = await AllUser()
      console.log('manage user',data);
      return data
    }
  })
  console.log(data);
  return (
    <>
    {
      isLoading? <Spiner/>
      :
      <div>
      <h1 className="text-center font-bold text-4xl my-5">Manage User</h1>
                <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>S:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Confirm</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, idx) => (
              <tr key={data._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="font-bold">{data.name}</div>
                </td>
                <td>{data.email}</td>
                <td>{data.role}</td>
                <td>{data.confirm ? "Yes" : "No"}</td>
                <th>
                  <button onClick={()=>{openModal();setEmail(data.email)}} className="btn btn-xs">
                    Change Role
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RoleUpdateModal refetch={refetch} email={email} closeModal={closeModal} isOpen={isOpen} />
    </div>
    }
    </>
  );
};

export default ManageUser;
