import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/Login/SocialLogin";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
// import { createJWT } from "../API/UserAPI";

const Login = () => {
  const navigate = useNavigate()
  const {signInWithEmail} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.email,data.password);
    signInWithEmail(data.email,data.password)
    .then( async res=>{
      console.log(res)
      toast.success("Successfully LogIn")
      // const token = await createJWT(data?.email)
      // console.log(token);
      navigate(location.state?location.state:"/");
    })
    .catch((error) => {
      console.log(error);
    })

  };

  //   console.log(watch("email"))
  // console.log(errors);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          {/* <p className="text-sm text-gray-400">Welcome to StayVista</p> */}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
          <div>
              <input
              {...register("email",{ required: true})}
                type="email"
                name="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-100text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            {errors.email?.type == 'required' && <span className="text-red-500 w-fit">E-mail is required!</span>}
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
              Login
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
          {"Don't have an account? "}
          <Link
            to="/signup"
            className="hover:underline hover:text-green-500 text-gray-600"
          >
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
