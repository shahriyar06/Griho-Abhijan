import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Sociallogin = () => {
    const { googlelogin, githublogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handlesociallogin = socialProvider =>{
        socialProvider()
        .then(result => {
            if(result.user){
                navigate(from)
            }
        })
    }

    return (
        <div>
            <div >
                <button onClick={() => handlesociallogin(googlelogin)} className="btn bg-transparent w-full text-lg"><FcGoogle className="text-xl" /> Continue with Google</button>
                <button onClick={() => handlesociallogin(githublogin)} className="btn bg-transparent w-full text-lg my-3"><ImGithub className="text-xl" /> Continue with GitHub</button>
                <button className="btn bg-transparent w-full text-lg"><FaFacebook className="text-xl text-[#2563eb]" /> Continue with Facebook</button>
            </div>
        </div>
    );
};

export default Sociallogin;