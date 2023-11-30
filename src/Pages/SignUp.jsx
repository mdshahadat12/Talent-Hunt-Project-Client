import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImageUpload } from "../API/ImageUplod";
import SocialLogin from "../Components/Login/SocialLogin";
import useAuth from "../Hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { SaveUser, getToken } from "../API/UserAPI";
// import axiosSecure from "../API/useAxiosSecure";
const auth = getAuth();

const SignUp = () => {
  const { signupWithEmail } = useAuth();
  const [profileImg, setProfileImg] = useState(null);
  const navigate = useNavigate();

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setProfileImg(URL.createObjectURL(file));
  };

  const {register,handleSubmit,reset,formState: { errors }} = useForm();

  const onSubmit = async (data) => {
    // Upload Img
    const { data: res } = await ImageUpload(data?.image[0]);
    // SignIn
    signupWithEmail(data.email, data.password).then(() => {
      // Profile Update
      updateProfile(auth.currentUser, {
        displayName: data?.name,
        photoURL: res.display_url,
      })
        .then(() => {
          // Profile updated!
          navigate(location.state?location.state:"/");
          toast.success("Successfully LogIn");
          reset();
        })
        // Token
        getToken(data?.email)
        .then(res=>console.log(res))
        // Save User to Database
        SaveUser(data?.email,data?.name)
        .then(res=>console.log('save',res))
    });
  };
  // console.log(errors);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-100text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            {errors.name && (
              <span className="text-red-500 w-fit">Name is required!</span>
            )}
            <div className="flex relative">
              <div className="bg-white w-full  m-auto rounded-lg">
                <div className="px-5 py-1 relative border border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        {...register("image", { required: true })}
                        type="file"
                        onChange={handleImage}
                        className="text-sm cursor-pointer w-36"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
              </div>
              {errors.image && (
                <span className="text-red-500 w-fit">Image is required!</span>
              )}
              <div className="absolute top-0 -right-20">
                {profileImg && (
                  <img
                    className="w-14 h-14 border border-black rounded-full"
                    src={profileImg}
                  />
                )}
              </div>
            </div>
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-100text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            {errors.email?.type == "required" && (
              <span className="text-red-500 w-fit">E-mail is required!</span>
            )}
            <div>
              <input
                {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  minLength: 8,
                })}
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-100text-gray-900"
              />
            </div>
            {errors.password?.type == "required" && (
              <span className="text-red-500 w-fit">Password is required!</span>
            )}
            {errors.password?.type == "pattern" && (
              <span className="text-red-500 ">
                Password must be one Upercase, <br /> Lowercase, Number and{" "}
                <br /> Speial Charecter!
              </span>
            )}
            {errors.password?.type == "minLength" && (
              <span className="text-red-500 w-fit">
                Password must be 8 Charecter!
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-green-500 w-full rounded-md py-2 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <SocialLogin />
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-green-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
