import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SaveUser, getToken } from "../../API/UserAPI";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const handleGoogle = () => {
    console.log("cliked");
    signInWithGoogle().then((res) => {
      console.log(res);
      toast.success("Successfully LogIn");
      navigate(location.state ? location.state : "/");
      // Token
      getToken(res?.user.email).then((res) => console.log(res));
      // Save User to Database
      SaveUser(res?.user.email,res?.user.displayName).then((res) => console.log("save", res));
    });
  };

  return (
    <div>
      <div
        onClick={handleGoogle}
        className="flex justify-center items-center space-x-2 border my-3 p-1 border-gray-300 border-rounded cursor-pointer"
      >
        <FcGoogle size={32} />
        <p>Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
