import toast from "react-hot-toast";
import { github, google } from "../assets";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user._id,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log out succesfully");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img src={google} alt="" className="w-8" />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>

      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img src={github} alt="" className="w-8" />
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Login;
