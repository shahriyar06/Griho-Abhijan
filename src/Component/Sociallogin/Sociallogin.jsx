import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";

const Sociallogin = () => {
    const { googlelogin, githublogin } = useContext(AuthContext);
    return (
        <div>
            <div >
                <button onClick={() => googlelogin()} className="btn bg-transparent w-full text-lg"><FcGoogle className="text-xl" /> Continue with Google</button>
                <button onClick={() => githublogin()} className="btn bg-transparent w-full text-lg my-3"><ImGithub className="text-xl" /> Continue with GitHub</button>
                <button className="btn bg-transparent w-full text-lg"><FaFacebook className="text-xl text-[#2563eb]" /> Continue with Facebook</button>
            </div>
        </div>
    );
};

export default Sociallogin;