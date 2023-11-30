import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { AllContestDataHome, DeleteContest, UpdateContest } from "../../../API/Contest";
import Spiner from "../../Shared/Spiner";

const SeeAllContest = () => {
  const { user } = useAuth();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllContest"],
    queryFn: async () => {
      const data = await AllContestDataHome(user?.email);
      console.log(data);
      return data;
    },
  });
  console.log(data);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteContest(id).then((res) => {
          console.log(res);
          if (res.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleApprove = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "This will Show Home Page!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        UpdateContest(id).then((res) => {
          console.log(res);
          if (res.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Approved!",
              text: "It Now in home page",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div>
          <h1 className="text-center font-bold text-4xl my-5">All Contest</h1>
                <hr />
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>S:</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Who Submit</th>
                  <th>Delete</th>
                  <th>Confirm</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((data, idx) => (
                  <tr key={data._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="font-bold">{data.name}</div>
                    </td>
                    <td>{data.status}</td>
                    <td>{data.email}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="btn btn-xs"
                      >
                        Delete
                      </button>
                    </td>
                    <th>
                      {data.status == "pending" ? (
                        <button onClick={() => handleApprove(data._id)} className="btn btn-xs">Approve</button>
                      ) : (
                        <button disabled className="btn btn-xs">
                          Approved
                        </button>
                      )}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default SeeAllContest;
