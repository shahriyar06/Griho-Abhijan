import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";

const Register = () => {

    const { signup } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        signup(data.email, data.password)
            .then(result => {
                console.log(result)
            });
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="text-center mb-3">
                            <h1 className="text-3xl font-medium">Create an account</h1>
                            <p className="text-sm">Or, <span className="text-[#2563eb]"><Link to='/login'>log in to your account</Link> </span></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                        </div><div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="Url" name="photourl" placeholder="Choose Photo" className="input input-bordered" {...register("photo")} />
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered"  {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
                            <div className="text-sm ml-6 mt-2 text-[#00000096]">
                                <p>At least 6 characters</p>
                                <p>At least 1 lowercase letter and 1 uppercase letter</p>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg">Register</button>
                            <p className="text-sm mt-2 text-center">By registering, I accept Griho Abhijan's <span className="label-text-alt link link-hover text-[#60a5fa]">terms of use</span>.</p>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center">
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                                <div className="w-1/5 text-center"><h1 >Or</h1></div>
                                <div className="h-3 w-2/5 content-evenly"><hr /></div>
                            </div>
                            <div className="mt-4">
                                <button className="btn bg-transparent w-full text-lg"><FcGoogle className="text-xl" /> Continue with Google</button>
                                <button className="btn bg-transparent w-full text-lg my-3"><ImGithub className="text-xl" /> Continue with GitHub</button>
                                <button className="btn bg-transparent w-full text-lg"><FaFacebook className="text-xl text-[#2563eb]" /> Continue with Facebook</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;