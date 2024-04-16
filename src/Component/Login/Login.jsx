import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import Sociallogin from "../Sociallogin/Sociallogin";


const Login = () => {
    const { signin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const onSubmit = (data) => {

        signin(data.email, data.password)
            .then(result => {
                if(result.user){
                    navigate(from)
                }
            })
            .catch((error) => {
                console.error(error)
            });

    }

    return (
        <div className="mb-10">
            <div className="hero min-h-screen ">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="text-center mb-3">
                            <h1 className="text-3xl font-medium">Log in to your account</h1>
                            <p className="text-sm">Or, <span className="text-[#2563eb]"><Link to='/register'>create an account</Link> </span></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-[#60a5fa]">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg">Login</button>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                <div className="w-1/5 text-center"><h1 >Or</h1></div>
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                            </div>
                        </div>
                    </form>
                    <div className="mx-8 mb-5">
                        <Sociallogin></Sociallogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;