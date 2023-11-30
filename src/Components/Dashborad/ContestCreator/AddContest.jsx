import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { ImageUpload } from "../../../API/ImageUplod";
import axiosSecure from "../../../API/useAxiosSecure";
import { toast } from "react-toastify";
import { FaAtom } from "react-icons/fa6";
import { useState } from "react";

const AddContest = () => {
    const [loading,setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit= async (data)=>{
    setLoading(true)
    // console.log(data);
    const { data: res } = await ImageUpload(data?.image[0]);
    const contest = {
        name:data.name,
        image:res.display_url,
        email:data.email,
        deadline:data.date,
        price:data.price,
        prizemoney:data.prizemoney,
        type:data.type,
        instruction:data.instruction,
        description:data.description,
        participator:'0',
        status:'pending'
    }
    const {data:result} = await axiosSecure.post('/api/v1/allcontest',{contest})
    console.log(result);
    if(result.insertedId){
        setLoading(false)
        reset()
        toast.success('added')
    }
    // console.log(contest);
  }
  return (
    <div className="bg-gray-300 p-5 rounded-lg">
      <h1 className="text-center font-bold text-3xl mb-5">Add a Contest</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5">
          <div>
            <input
              {...register("name")}
              type="text"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="Contest Name"
              name="name"
            />
            <input
            {...register("price")}
              type="number"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Contest Price"
              name="price"
            />
            <input
            {...register("prizemoney")}
              type="number"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Prize money"
              name="prizemoney"
            />
            <level>Contest Image
            <input
            {...register("image")}
              type="file"
              className="p-2 rounded-lg bg-white border-2 mt-2 focus:border-black border-white w-full"
              name="image"
            />
            </level>
          </div>
          <div>
            <input
            {...register("email")}
              type="text"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="You"
              name="email"
              readOnly
              defaultValue={user?.email}
            />
            <input
            {...register("instruction")}
              type="text"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Instruction"
              name="instruction"
            />
            <select
            {...register("type")}
              defaultValue={"DEFAULT"}
              className="p-3 rounded-lg mb-5 w-full"
            >
              <option disabled value="DEFAULT">
                Select Contest Type
              </option>
              <option>Business Contest</option>
              <option>Medical Contest</option>
              <option>Article Writing</option>
              <option>Gaming</option>
            </select>

            <level>Contest Deadline
            <input
            {...register("date")}
              type="date"
              className="p-3 mt-2 rounded-lg w-full"
              name="date"
            />
            </level>
          </div>
        </div>
        <textarea
        {...register("description")}
          name="description"
          className="p-3 rounded-lg w-full mt-5"
          placeholder="Write Contest Description..."
          rows="4"
        ></textarea>
        <div className="w-full flex justify-center mt-5">
          <button
            className="text-white py-2 px-4 bg-green-500 rounded-md w-1/2 cursor-pointer font-bold"
            type="submit"
          >
            {
                loading?
                <p className="flex justify-center animate-spin w-full">  <FaAtom className="h-6" /></p>
                :<p>Add a Contest</p>
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContest;
