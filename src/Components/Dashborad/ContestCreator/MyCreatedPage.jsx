import { useQuery } from "@tanstack/react-query";
import { AllContestData, DeleteContest } from "../../../API/Contest";
import Spiner from "../../Shared/Spiner";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyCreatedPage = () => {
  const { user } = useAuth();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Contest", user?.email],
    queryFn: async () => {
      const data = await AllContestData(user?.email);
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
  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div>
          <h1 className="text-center font-bold text-4xl my-5">My Contest</h1>
                <hr />
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>S:</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>See Submision</th>
                  <th>Update</th>
                  <th>Delete</th>
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
                    <td>
                      <button className="btn btn-xs">See!</button>
                    </td>
                    {data.status == "pending" ? (
                      <td>
                        <button className="btn btn-xs">Update</button>
                      </td>
                    ) : (
                      <td>
                        <button disabled className="btn btn-xs">
                          Update
                        </button>
                      </td>
                    )}
                    <th>
                      {data.status == "pending" ? (
                        <button
                          onClick={() => handleDelete(data._id)}
                          className="btn btn-xs"
                        >
                          Delete!
                        </button>
                      ) : (
                        <button disabled className="btn btn-xs">
                          Delete!
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

export default MyCreatedPage;
